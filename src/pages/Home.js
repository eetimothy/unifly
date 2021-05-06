import AppCarousel from '../components/Carousel/Carousel'
import SgBanner from '../components/banners/SgBanner'
import Search from '../components/search/Search'

const Home = () => {
    return ( 
        <div className="main">
            <AppCarousel/>
            <Search/>
            <SgBanner/>
        </div>
     );
}
 
export default Home;