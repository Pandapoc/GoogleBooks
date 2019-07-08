import React, { useState, useRef } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Save from './pages/Save'

const App = _ => {
  const search = useRef()
  const [bookState, setBookState] = useState({
    title: '',
    authors: [],
    description: '',
    link: '',
    image: '',
    ref: { search }
  })

  bookState.getSaved = _ => {

  }

  bookState.handleSearch = _ => {

  }

  return (
    <>
      <h3>Hello World!</h3>
    </>
  )
}

export default App
