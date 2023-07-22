import './Destaque.css'
const Destaque = ({desconto,text,textButton,img}) => {
    //
    return(
        <div>
            <span>{desconto}% OFF</span>
            <p>{text}</p>
            <button>{textButton}</button>
            <img src={img}/>
            
        </div>

    )
}
export default Destaque