import MainFooter from '../../components/MainFooter/MainFooter'
import MainHeader from '../../components/MainHeader/MainHeader'
import Destaque from '../../components/HomeHighlight/Highlight'
import SpecialOffer from '../../components/SpecialOffer/SpecialOffer'

import './HomePage.css'
import { Carrosel } from '../../components/Carrosel/Carrosel'

const HomePage = () => (
    <>
        <Carrosel/>
        <Destaque />
        <SpecialOffer />
    </>

)

export default HomePage
