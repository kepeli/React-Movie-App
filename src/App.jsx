import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from './Component/Index/NavBar';
import Login from './Component/Login_page/Login';
// import Cards from './Component/Index/Cards';
import Carousel from './Component/Index/Carousel';
import "./index.css"
import { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import Details from './Component/Move_page/movie_Details';
// import SignUp from './Component/Login_page/SignUp';
// import server from "./server"



export default function App() {

  const [data, setData] = useState(null);
  const [search, setSearch] = useState("")

  


  return (
    <>
      <NavBar search={search} setSearch={setSearch} />
      {/* <Routes>
      </Routes> */}
      <Routes>
        <Route path='/login'element={<Login />} />
        {/* <Route path="/SignUp"element={<SignUp />}/> */}
        <Route path='/' element={<Carousel data={data} setData={setData} search={search} setSearch={setSearch} />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
      {/* <Cards data={data} setData={setData} search={search} setSearch={setSearch} /> */}


    </>


  )
}

