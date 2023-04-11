import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from './components/Navbar';
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import SinglePost from "./components/SinglePost/singlePost";
import About from "./components/about/about";
import Shop from "./components/shop/shop";
import Denticity from "./components/Denticity/Denticity";
import Education from "./components/Education/Education";
import FAQ from "./components/FAQ/faq";
import AppContext from "./utils/context";
import HealthCare from "./components/HealthCare/HealthCare";
import Business from "./components/Business/Business";
import Hospitality from "./components/Hospitality/Hospitality";
import GymAndFitnessStudio from "./components/GymAndFitnessStudio/GymAndFitnessStudio";
import Contact from "./components/contact/contact";
import Blog from "./components/Blog/Blog";






function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/post/:id" element={<SinglePost />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/faqs" element={<FAQ />} />
                    <Route path="/denticity" element={<Denticity />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/health-care" element={<HealthCare />} />
                    <Route path="/business" element={<Business />} />
                    <Route path="/hospitality" element={<Hospitality />} />
                    <Route path="/gym-and-fitness-studio" element={<GymAndFitnessStudio />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />

                </Routes>
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
