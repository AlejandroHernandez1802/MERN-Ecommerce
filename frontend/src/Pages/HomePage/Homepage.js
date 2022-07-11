import Navbar from "../../Components/Homepage/Navbar";
import Announcement from "../../Components/Homepage/Announcement";
import Slider from "../../Components/Homepage/Slider/Slider";
import Categories from "../../Components/Homepage/Categories/Categories";
import Products from "../../Components/Homepage/Products/Products";
import Newsletter from "../../Components/Homepage/Newsletter/Newsletter";
import Footer from "../../Components/Homepage/Footer/Footer";

const Homepage = () => {
    return (
        <>  
            <div className="Homepage">
                <Announcement />
                <Navbar />
                <Slider />
                <Categories />
                <Products />
                <Newsletter />
                <Footer />
            </div>
        </>
    )
}

export default Homepage;