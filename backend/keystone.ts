import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth'
import { User } from './schemas/User'
import { Product } from './schemas/Product'
import { ProductImage } from './schemas/ProductImage'
import { withItemData, statelessSessions } from "@keystone-next/keystone/session"
import 'dotenv/config';
import { insertSeedData } from './seed-data';

const dataBaseURL = process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits'

const sessionConfig = {
    maxAge: 60 * 60 * 24 * 360,
    secret: process.env.COOKIE_SECRET
}

const { withAuth } = createAuth({
    listKey: "User",
    identityField: "email",
    secretField: "password",
    initFirstItem: {
        fields: ["name", "email", "password"],
        //TODO add in initial role
    }
})

export default withAuth( 
    config ( {

        server: {
            cors: {
                origin: [ process.env.FRONTEND_URL],
                credentials: true
            }
        },
        db: {
            adapter: "mongoose",
            url: dataBaseURL,
            async onConnect(keystone) {
                console.log("connected to the databse")
                if (process.argv.includes("--seed-data")) {
                    await insertSeedData(keystone)
                }
            }  
        },
        lists: createSchema({
            //Schema
            User,
            Product,
            ProductImage
        }),
        ui: {
            //show the ui only for people that pass this test
            isAccessAllowed: ( { session } ) => {
                
                return !!session?.data;

            }
        },
        session: withItemData( statelessSessions( sessionConfig ), {
            User: 'id name email'
        })
    })
)

