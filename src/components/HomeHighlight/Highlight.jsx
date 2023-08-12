import './Highlight.css'
import shirt from './assets/shirt.svg'
import headphone from './assets/headphone.svg'
import sneakers from './assets/sneakers.svg'
import HighlightItem from './HighlightItem'

const Highlight = ({ discount, text, textButton, img }) => {
    //
    return (
        <div className="highlight-Wrapper container">
            <HighlightItem discount="30" text="Novo drop Supreme" textButton="Comprar" img={shirt} />
            <HighlightItem discount="30" text="Novo Beat Bass" textButton="Comprar" img={headphone} />
            <HighlightItem discount="30" text="Coleção Adidas" textButton="Comprar" img={sneakers} />
        </div>

    )
}
export default Highlight
