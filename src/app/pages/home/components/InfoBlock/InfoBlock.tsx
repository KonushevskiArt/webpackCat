import React, { FC } from 'react';
import styles from './InfoBlock.module.scss'

type Props = {
  infoText: string
  isLoading: boolean
}

const InfoBlock: FC<Props> = ({ infoText = 'something goes wrong', isLoading }) => {
  return (
    <div className={styles.infoBlock}>
      <p className={styles.infoText}>{isLoading ? 'Loading...' : infoText}</p>
    </div>
  );
};

export default InfoBlock;