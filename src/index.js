/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React, { useState } from 'react'
import Select from 'react-select'
import styles from './styles.module.css'
import CountryList from './utils/CountryList.json'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const SelectCountry = ( props ) => {
  const [selectedOption, setSelectedOption] = useState(null)
  console.log('Selected Option: ', selectedOption)

  const onChangeCountry = (value) => {
    setSelectedOption(value);
    props.GetCountry(value);
  }

  return (
    <Select
      defaultValue={selectedOption}
      onChange={e => onChangeCountry(e)}
      options={CountryList}
    />
  )
}
