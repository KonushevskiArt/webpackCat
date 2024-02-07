import React from 'react';
import styles from './Logo.module.scss'

export const Logo = () => {
  return (
    <div className={styles.wrapper}>
       <span className={styles.logo}>
        CAT
      </span>
      <span className={styles.logoText}>
        currencies <br />
        academic <br />
        terms <br />
      </span>
    </div>
  );
};

