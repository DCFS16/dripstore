import './Destaque.css'
import shirt from './assets/shirt.svg'
import headphone from './assets/headphone.svg'
import sneakers from './assets/sneakers.svg'
import DestaqueItem from './DestaqueItem'

const Destaque = ({ desconto, text, textButton, img }) => {
    //
    return (
        <div className="destaque-wrapper">
            <DestaqueItem desconto="30" text="Novo drop Supreme" textButton="Comprar" img={shirt} />
            <DestaqueItem desconto="30" text="Novo Beat Bass" textButton="Comprar" img={headphone} />
            <DestaqueItem desconto="30" text="Coleção Adidas" textButton="Comprar" img={sneakers} />
        </div>

    )
}
export default Destaque