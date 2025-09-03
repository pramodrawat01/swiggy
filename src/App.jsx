import Header from "./Components/Header"
import "./App.css"
import { Route, Routes, Navigate } from "react-router-dom"
import Home from "./Components/Home"
import Northindian from "./Components/Northindian"
import Search from "./Components/Search"
import CartPage from "./Components/Cartpage"
import SupportPage from "./Components/SupportPage"
import Faq from "./Components/Faq"


function App() {
  
  return (
    <>
    <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/north-indian" element={<Northindian/>}/>
    <Route path="/search" element={<Search/>}/>
    <Route path="/Cart" element={<CartPage/>}/>

    <Route path="/support" element={<SupportPage/>}>
      <Route index element={<Navigate to="partner_onboarding" replace />} />
      <Route path=":category" element={<Faq/>} />
    </Route>
   </Routes>
    </>
  )
}

export default App
