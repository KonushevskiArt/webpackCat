import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss'
import InfoBlock from './components/InfoBlock/InfoBlock';
import { Logo } from './components/logo/Logo';
import { CustomSelect } from './components/customSelect/CustomSelect';
import { useGetCurrenciesQuery } from 'app/services/api';
import { Currency } from 'app/shared/types';


const Home = () => {
  const {
    data,
    isLoading,
    isSuccess,
    isError,
  } = useGetCurrenciesQuery()

  const [currentValue, setCurrentValue] = useState<Currency>(null)

  useEffect(() => {
    setCurrentValue(data?.data[0])
  }, [ isSuccess])

  return (
    <div className={styles.home}>
      <div className={styles.topPageWrapper}>
        <Logo />
        <CustomSelect 
          isLoading={isLoading} 
          currentValue={currentValue?.id} 
          itemsArray={data?.data} 
          handleChange={setCurrentValue} 
        />
      </div>
      {isError && 'The is a problem with Internet, try you chance next time.'}
      <InfoBlock isLoading={isLoading} infoText={currentValue?.name}/>
    </div>
  );
};

export default Home;