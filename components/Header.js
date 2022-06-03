import React from 'react';
import logo from './ZZZ-completed-task.png';
import styles from './Header.module.css';


function Header(props) {
  const { taskDataList, listSort } = props

  const completePriority = () => {
    listSort(false)
  }
  const activePriority = () => {
    listSort(true)
  }




  let active = 0;
  let complete = 0;
  taskDataList.forEach(element => {
    element.active? active++: complete++
  });

  return (
    <div>
      <header>
        <button 
        className={`${styles.header__button} ${styles.active}`}
        onClick={activePriority}> 
        {active} Active
        </button>
        <img src={logo} />
        <button 
        className={`${styles.header__button} ${styles.completed}`}
        onClick={completePriority}>
        {complete} Completed
        </button>
      </header>
    </div>
  );
}





export default Header;