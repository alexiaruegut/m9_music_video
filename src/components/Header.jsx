import React from 'react';

function Header() {
  return (
    <header className="bg-purple-500 text-white py-3 shadow-md shadow">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">MediaPlayer App</h1>
        <h2>Alexia Rueda</h2>
      </div>
    </header>
  );
}

export default Header;