import React, { useState } from 'react';
import PantryForm from '../components/PantryForm';
import PantryList from '../components/PantryList';

const Home = () => {
  const [item, setItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h1>Pantry Tracker</h1>
      <PantryForm item={item} setItem={setItem} isEditing={isEditing} setIsEditing={setIsEditing} />
      <PantryList setItem={setItem} setIsEditing={setIsEditing} />
    </div>
  );
};

export default Home;
