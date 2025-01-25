import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions'; // Импортируем действие

// Пример списка товаров с картинками
const products = [
  { id: 1, name: 'Товар 1', price: 100, image: 'https://img.freepik.com/free-psd/weathered-bare-tree-branch-against-transparent-background_84443-30463.jpg?t=st=1737831085~exp=1737834685~hmac=28101a9e73efe8e7096e996fda7f5977318649925f7f9354bdd33cf40c1341dd&w=826' },
  { id: 2, name: 'Товар 2', price: 200, image: 'https://svgx.ru/svg/2962084.svg' },
  { id: 3, name: 'Товар 3', price: 300, image: 'https://svgx.ru/svg/2885709.svg' },
];

const ProductList = () => {
  const dispatch = useDispatch();

  // Функция для обработки добавления товара в корзину
  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Отправляем действие в Redux store
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>Цена: {product.price}₽</p>
          <button onClick={() => handleAddToCart(product)}>Добавить в корзину</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;