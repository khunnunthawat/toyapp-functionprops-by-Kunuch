import { useState } from 'react';
import { Title } from '../components/Heading';
import SearchBar from '../components/SearchBar';

const userList = [
  {
    username: 'TheBook',
    fullname: 'Kunuch Chutmongkolporn',
    gender: 'male',
    favoriteColor: 'black',
  },
  {
    username: 'SusanZa007',
    fullname: 'Susan Robert',
    gender: 'female',
    favoriteColor: 'red',
  },
];

export default function UserInfo() {
  const [showUserList, setShowUserList] = useState(userList);

  const handleSearch = (searchText) => {
    setShowUserList(userList.filter((user) => user.username.includes(searchText)));
  };

  return (
    <div>
      <Title>User Info</Title>
      <SearchBar onSearch={handleSearch} placeholder='Search username' />

      {showUserList.map((user) => (
        <div className='mb-5'>
          <h2 className='text-lg font-bold'>{user.username}</h2>
          <table>
            <tr>
              <td className='font-semibold pr-3'>Full Name</td>
              <td>{user.fullname}</td>
            </tr>
            <tr>
              <td className='font-semibold pr-3'>Gender</td>
              <td>{user.gender}</td>
            </tr>
            <tr>
              <td className='font-semibold pr-3'>Favorite color</td>
              <td>{user.favoriteColor}</td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
}
