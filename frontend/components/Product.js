/** @format */

import Link from 'next/link';
import Item from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
// import DeleteProduct from './DeleteProduct';
// import AddToCart from './AddToCart';

const Product = ({ product }) => (
  <Item>
    <img src={product?.photo?.image?.publicUrlTransformed} alt={product.name} />
    <Title>
      <Link href={`/product/${product.id}`}>{product.name}</Link>
    </Title>
    <PriceTag>{formatMoney(product.price)}</PriceTag>
    <p>{product.description}</p>
    <div className="buttonList">
      <Link
        href={{
          pathname: '/update',
          query: {
            id: product.id,
          },
        }}
      >
        Edit
      </Link>
    </div>
  </Item>
);

export default Product;
