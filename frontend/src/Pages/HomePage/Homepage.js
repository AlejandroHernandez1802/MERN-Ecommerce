import Navbar from "../../Components/Homepage/Navbar";
import Announcement from "../../Components/Homepage/Announcement";
import Slider from "../../Components/Homepage/Slider/Slider";

const Homepage = () => {
    return (
        <>  
            <div className="Homepage">
                <Announcement />
                <Navbar />
                <Slider />
            </div>
        </>
    )
}

export default Homepage;