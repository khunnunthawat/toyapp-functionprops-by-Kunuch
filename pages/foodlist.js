import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { Title } from '../components/Heading';

const foodList = [
  'Bacon',
  'Hamburger',
  'Bacon twist',
  'Sausage',
  'Pasta',
  'Mama',
  'Hamburg',
  'Steak',
  'Hot dog',
];

export default function FoodList() {
  const [showFoodList, setShowFoodList] = useState(foodList);

  const handleSearch = (searchText) => {
    setShowFoodList(foodList.filter((food) => food.includes(searchText)));
  };
  return (
    <div>
      <Title>Food List</Title>
      <SearchBar onSearch={handleSearch} />
      <div>
        <div></div>
        <ul className='list-disc ml-5'>
          {showFoodList.map((food) => (
            <li key={food}>{food}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
