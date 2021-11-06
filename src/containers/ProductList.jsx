import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import '../styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const {products, isLoading} = useGetProducts(API);
	console.log(products);
	return (
		<section className="main-container">
			{
				isLoading ?
				<div>Loading...</div>
				:
				<div className="ProductList">
					{products.map((product) => (
						<ProductItem product={product} key={product.id} />
					))}
				</div>
			}
		</section>
	);
}

export default ProductList;
