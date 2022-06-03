import React from 'react';
import Task from './Task';
import logo from './completed-task.png';
import styles from './Header.module.css';


function Header() {
  return (
    <div>
      <header>
        <button className={`${styles.header__button} ${styles.active}`}>4 Active</button>
        <img src={logo} />
        <button className={`${styles.header__button} ${styles.completed}`}>0 Completed</button>
      </header>
    </div>
  );
}





export default Header;