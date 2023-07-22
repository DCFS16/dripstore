import './Destaque.css'
import shirt from './assets/shirt.jpeg'
import hearphone from './assets/hearphone.jpeg'
import sneakers from './assets/sneakers.jpeg'
import DestaqueItem from './DestaqueItem'

const Destaque = ({ desconto, text, textButton, img }) => {
    //
    return (
        <div className="destaque-wrapper">
            <DestaqueItem desconto="30" text="aquiii" textButton="Comprar" img={shirt} />
            <DestaqueItem desconto="30" text="aquiii" textButton="Comprar" img={hearphone} />
            <DestaqueItem desconto="30" text="aquiii" textButton="Comprar" img={sneakers} />
        </div>

    )
}
export default Destaque