import Destaque from '../../components/HomeHighlight/Highlight'
import SpecialOffer from '../../components/SpecialOffer/SpecialOffer'
import './HomePage.css'
import { Carrosel } from '../../components/Carrosel/Carrosel'
import ProductList from '../../components/ProductList/ProductList'

const HomePage = () => (
    <>
        <Carrosel/>
        <Destaque />
        <ProductList />
        <SpecialOffer />
    </>

)

export default HomePage
