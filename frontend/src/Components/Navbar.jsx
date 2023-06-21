import React from 'react';

function Navbar() {
  return (
    <div className="fixed bottom-0 inset-x-0 bg-gray-800 h-16 flex items-center justify-around">
      <a href="#link1" className="text-white">Link 1</a>
      <a href="#link2" className="text-white">Link 2</a>
      <a href="#link3" className="text-white">Link 3</a>
    </div>
  );
}

export default Navbar;
