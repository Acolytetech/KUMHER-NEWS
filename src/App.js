import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from './pages/Home';
import Post from './component/Post';
import Navbar from './component/navbar';
import Footer from './component/Footer';
import ContactUs from './pages/ContactUs';
import AboutUsPage from './pages/AboutUsPage ';
import SportPost from './component/categorywisenews/Sports';
import Latestnews from './component/categorywisenews/Latestnews';
import Accidentnews from './component/categorywisenews/Accidentnews';
import Technologynews from './component/categorywisenews/Technologynews';
import Healthnews from './component/categorywisenews/Healthnews';
import Businessnews from './component/categorywisenews/bussinessnews';
import Entertainmentnews from './component/categorywisenews/Entertainmentnews';
import Educationnews from './component/categorywisenews/Educationnews';



const App = () => {
  return (
   <>
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/post/:id" element={<Post/>} /> */}
      <Route path="/post/:slug" element={<Post />} />
      <Route path="/latestnews" element={<Latestnews/>} />
      <Route path="/contactus" element={<ContactUs/>} />
      <Route path="/about-us" element={<AboutUsPage/>} />
      <Route path="/sportsnews" element={<SportPost/>} />
      <Route path="/accidentnews" element={<Accidentnews/>} />
      <Route path ='/technologynews' element={<Technologynews/>} />
      <Route path='/healthnews' element={<Healthnews/>} />
      <Route path='/businessnews' element={<Businessnews/>} />
      <Route path='/entertainmentnews' element={<Entertainmentnews/>} />
      <Route path='/educationnews' element={<Educationnews/>} />

      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
    <Footer/>
   </Router>
   </>
  )
}

export default App