import React from 'react';
import './style.scss';

function TopMenu() {
  return (
    <header id="top-menu">
      <div>A+ Studio</div>
      <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click me
      </button>
    </header>
  );
}

export default TopMenu;
