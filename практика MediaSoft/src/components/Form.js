import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveSelection } from '../redux/actions';

const Form = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveSelection(input)); // Сохраняем выбор в Redux Store
    setInput(''); // очищаем форму
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Введите данные:
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default Form;