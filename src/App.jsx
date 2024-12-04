import { BrowserRouter, Route, Routes } from "react-router-dom" 
import Home from "./pages/Home/Home"
import LivrosDoados from "./pages/LivrosDoados/LivrosDoados"
import QueroDoar from "./pages/QueroDoar/QueroDoar"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/LivrosDoados" element={<LivrosDoados/>}/>
          <Route path="/QueroDoar" element={<QueroDoar/>}/>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
