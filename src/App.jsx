// import React from 'react'
// import Layout from './layout/Layout'


// const App = () => {
//   return (
//     <Layout />
//   )
// }

// export default App

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Nav from './components/nav/Nav'
import Layout from './layout/Layout'
import Details from './components/details/Details'


const App = () => {
  return (

    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Layout />} />
          <Route path='/products/:category' element={<Layout />} />
          <Route path='/products/:category/:item' element={<Details />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App