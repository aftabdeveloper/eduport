import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import "font-awesome/css/font-awesome.min.css"
import Homepage from "./components/homepage"
import Product from "./components/product"
import Faculty from "./components/faculty"
import Login from "./components/login"
import NotFound from "./components/not-found"

const App = ()=>{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/faculty" element={<Faculty />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="**" element={<NotFound />}></Route>
      </Routes>
    </Router>
  )
}

export default App