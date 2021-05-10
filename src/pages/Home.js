import AppCarousel from '../components/Carousel/Carousel'
import SgBanner from '../components/banners/SgBanner'
import SgTourCard from '../components/SgTourCard/SgTourCard'
import Search from '../components/search/index' 
import TrendingDestinations from '../components/TrendingDestinations/TrendingDestination'
import TravelServices from '../components/TravelServices/TravelServices'
import Contact from '../components/Contact/Contact'

const Home = () => {
    return ( 
        <div className="main">
            <AppCarousel/>
            <Search/>
            <SgBanner/>
            <SgTourCard/>
            <TrendingDestinations/>
            <TravelServices/>
            <Contact/>
        </div>
     );
}
 
export default Home;