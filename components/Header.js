import React from 'react';
import Task from './Task';
import logo from './completed-task.png';


function Header() {
  return (
    <div>
      <header>
        <button className="header__button active">4 Active</button>
        <img src={logo} />
        <button className="header__button completed">0 Completed</button>
      </header>
    </div>
  );
}





export default Header;