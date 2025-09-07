import Header from "./Components/Header"
import "./App.css"
import { Route, Routes, Navigate, useLocation } from "react-router-dom"
import RestaurantsPage from "./Components/RestaurantsPage"
import Northindian from "./Components/Northindian"
import Search from "./Components/Search"
import CartPage from "./Components/Cartpage"
import SupportPage from "./Components/SupportPage"
import Faq from "./Components/Faq"
import Filtered_res_page from "./Pages/Filtered_res_page"
import Homepage from "./Pages/Homepage"


function App() {

  const location = useLocation();

  const hideNavbar = location.pathname === '/';
  
  return (
    <>
    {!hideNavbar && <Header/>}
    
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/restaurants-page" element={<RestaurantsPage/>}/>
    <Route path="/restaurants-page/:category" element={<Filtered_res_page/>} />
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
