import './App.css';
import ImageGallery from "react-image-gallery";
import data from './data.json';
import { useState } from 'react';

function App() {
  const collections = data.collections;
  const [searchValue, setSearchValue] = useState('');
  const [categoryId, setCategoryId] = useState(0);

  // Используем категории из data.json и добавляем "Все" как первую категорию
  const cats = [
    { id: 0, name: "Все" },
    ...data.categories.map((cat, index) => ({
      id: index + 1,
      name: cat.name
    }))
  ];

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>

      <div className='top'>
        <ul className='tags'>
          {
            cats.map((obj) => (
              <li
                key={obj.id}
                onClick={() => setCategoryId(obj.id)}
                className={categoryId === obj.id ? 'active' : ''}
              >{obj.name}
              </li>
            ))
          }
        </ul>
      </div>

      <div className='search'>
        <input 
          type="text" 
          className='search-input' 
          placeholder='Поиск по названию'
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)} 
        />
      </div>

      <div className="image-gallery-wrapper">
        {
          collections
            .filter(obj => {
              const matchesSearch = obj.name.toLowerCase().includes(searchValue.toLowerCase());
              const matchesCategory = categoryId === 0 || obj.category === categoryId;
              return matchesSearch && matchesCategory;
            })
            .map((obj, index) => (
              <div className="collection" key={index}>
                <h2>{obj.name}</h2>
                <ImageGallery items={obj.photos} />
              </div>
            ))
        }
      </div>
    </div>
  );
}

export default App;