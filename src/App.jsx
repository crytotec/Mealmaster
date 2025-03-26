import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Home/Index";
import Mealplanner from "./Meal/Mealplanner";
import Recipelibrary from "./Meal/Recipelibrary";
import Grocery from "./Meal/Grocery";
import About from './About/About';
import Contact from "./Contact/Contact";
import Nav from './Navbar';
import Footer from './Footer';
import './style.css';
import { useState, useEffect } from 'react';

function App() {
    const [add, setAdd] = useState(() => {
        const savedMeals = localStorage.getItem("meals");
        return savedMeals ? JSON.parse(savedMeals) : [];
    });

    
    useEffect(() => {
        if (add.length > 0) {
            localStorage.setItem("meals", JSON.stringify(add));
        }
    }, [add]);

    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route element={<Index />} path="/" />
                <Route element={<Mealplanner setAdd={setAdd} add={add} />} path="/mealplanner" />
                <Route element={<Recipelibrary setAdd={setAdd} add={add} />} path="/Recipe-Library" />
                <Route element={<Grocery />} path="/Grocery" />
                <Route element={<About />} path="/About" />
                <Route element={<Contact />} path="/Contact" />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
