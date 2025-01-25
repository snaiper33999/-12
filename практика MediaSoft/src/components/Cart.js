import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Для получения данных из Redux и отправки действий
import { removeFromCart } from '../redux/actions'; // Импортируем действие

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart); // Получаем данные корзины из Redux

  // Рассчитываем общую сумму корзины
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Функция для удаления товара из корзины
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="cart">
      <h2>Корзина</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} — {item.price}₽ x {item.quantity}
                <button onClick={() => handleRemoveFromCart(item.id)}>Удалить</button>
              </li>
            ))}
          </ul>
          <div className="total-price">
            <strong>Общая сумма: {totalPrice}₽</strong>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;