import React from 'react'

import { SelectCountry } from 'dky-select-country-list'
import 'dky-select-country-list/dist/index.css'

const App = () => {
  const [country, setCountry] = React.useState(null)
  console.log("Country: ", country)

  return <SelectCountry GetCountry={e => setCountry(e)} />
}

export default App
