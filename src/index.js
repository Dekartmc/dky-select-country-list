import React from 'react'
import styles from './styles.module.css'
import Select from 'react-select'
import CountryList from './utils/CountryList.json'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const SelectCountry = ({ props }) => {
  const [selectedOption, setSelectedOption] = React.useState(null);

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={CountryList}
      />
    </div>
  )
}
