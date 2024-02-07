import React, { FC, useState } from 'react';
import styles from './CustomSelect.module.scss'
import UpArrow from './up.svg';
import classNames from 'classnames';
import { Currency } from 'app/shared/types';

type Props = {
  handleChange: React.Dispatch<React.SetStateAction<Currency>>
  itemsArray: Currency[]
  currentValue: string
  isLoading: boolean
}

export const CustomSelect: FC<Props> = ({handleChange, itemsArray, currentValue, isLoading}) => {
  const [isOpenMenu, setOpenMenu] = useState(false)

  const onSelectClick = () => {
    setOpenMenu(prevValue => !prevValue)
  }

  const onElemClick = (value: Currency) => {
    handleChange(value)
    setOpenMenu(prevValue => !prevValue)
  }

  return (
    <div className={styles.wrapper}>

      <button className={styles.customSelect} onClick={onSelectClick}>
        {isLoading ? 'Loading...' : currentValue}
        <UpArrow className={classNames(styles.arrowIcon, { [styles.active]: isOpenMenu })} />
      </button>
      
      
        <ul className={classNames(styles.dropDownMenu, { [styles.activeMenu]: isOpenMenu })}>
          {itemsArray && itemsArray.map(item => {
            return (
              <li 
                className={classNames(styles.dropDownItem, { [styles.activeDropDownItem]: item.id === currentValue }) }
                key={item.id} 
                onClick={() => onElemClick(item)}>
                  {item.id}
              </li>
              )
            }
          )}
        </ul>
      
    </div>
  );
};
