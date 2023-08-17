import MainHeader from '../../components/MainHeader/MainHeader'
import Destaque from '../../components/HomeHighlight/Highlight'
import './HomePage.css'
import { HomeProducts } from '../../components/HomeProducts/HomeProducts'


const HomePage = () => (
    <>
        <MainHeader />
        <h1 className="title">Home Page</h1>
        <Destaque />
        <HomeProducts/>
    </>
)


export default HomePage
