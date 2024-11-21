import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import Header from "./common/Header";
import Footer from "./common/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Agents from "./components/Agents";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Property from "./components/Property";
import PropertySingle from "./components/PropertySingle";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";

//User Dashboard
import Dashboard from './components/User/Dashboard';
import AddProperty from './components/User/AddProperty';
import EditProperty from './components/User/EditProperty';
import MyProperty from './components/User/MyProperty';
import PropertyEnq from './components/User/PropertyEnq';
//User Dashboard

// Context
import Authstat from "./context/AuthState";
// Context

function App() {
  return (
    <>
      <Authstat>
        <BrowserRouter>

          <Header/>

          <Routes>
            <Route exact path="/" element={<Home key="/"/>} />
            <Route exact path="/index" element={<Home key="/index"/>} />
            <Route exact path="/about" element={<About key="/about"/>} />
            <Route exact path="/agents" element={<Agents key="/agents"/>} />
            <Route exact path="/blog" element={<Blogs key="/blog"/>} />
            <Route exact path="/contact" element={<Contact key="/contact"/>} />
            <Route exact path="/property/:id" element={<Property key="/property/:id"/>} />
            <Route exact path="/login" element={<Login key="/login"/>} />
            <Route exact path="/register" element={<Register key="/register"/>} />
            <Route exact path="/logout" element={<Logout key="/logout"/>} />
            <Route exact path="/dashboard" element={<Dashboard key="/dashboard"/>} />
            <Route exact path="/add-property" element={<AddProperty key="/add-property"/>} />
            <Route exact path="/my-property" element={<MyProperty key="/my-property"/>} />
            <Route exact path="/edit-property/:id" element={<EditProperty key="/edit-property/:id"/>} />
            <Route exact path="/property-single/:id" element={<PropertySingle key="/property-single/:id"/>} />
            <Route exact path="/view-enq/:id" element={<PropertyEnq key="/view-enq/:id"/>} />
            
            {/* <Route exact path="/cart" element={<Cart carts={cart} removeItm={removeItm} decreaseqty={decreaseqty} addItem={addItem} subtotal={subtotal} subqty={subqty} />} /> */}
          </Routes>

          <Footer />
        </BrowserRouter>
      </Authstat>
    </>
  );
}

export default App;
