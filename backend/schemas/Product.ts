import { list } from "@keystone-next/keystone/schema";
import { text, select, integer, relationship } from '@keystone-next/fields'

export const Product = list({
    //access:
    //ui:
    fields: {
        name: text( { isRequired: true } ),

        description: text({ 
            ui: {

                displayMode: "textarea"

            } 
        }),

        photo: relationship({
            ref: 'ProductImage.product',
            ui: {
                displayMode: 'cards',
                cardFields: [ 'image', 'altTest' ],
                inlineCreate: { fields: [ 'image', 'altTest' ] },
                inlineEdit: { fields: [ 'image', 'altTest' ] },
            }
        }),

        status: select({

            options: [
                { label: 'Darft', value: 'DRAFT'},
                { label: 'Available', value: 'AVAILABLE'},
                { label: 'Unavailable', value: 'UNAVAILABLE'}
            ],
            defaultValue: 'DRAFT',
            ui: {
                displayMode: 'segmented-control',
                createView: {fieldMode: "hidden"}
            }

        }),
        
        price: integer(),

    }
});