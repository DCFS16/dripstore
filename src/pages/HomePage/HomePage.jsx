import MainFooter from '../../components/MainFooter/MainFooter'
import MainHeader from '../../components/MainHeader/MainHeader'
import Destaque from '../../components/HomeHighlight/Highlight'
import SpecialOffer from '../../components/SpecialOffer/SpecialOffer'
import ProductList from '../../components/ProductList/productlist'

import './HomePage.css'

const HomePage = () => (
    <>
        <MainHeader />
        <Destaque />
        <ProductList />
        <SpecialOffer />
        <MainFooter />
    </>
)

export default HomePage
