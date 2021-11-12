import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';



function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </div>
    
  );
}

export default Header;
