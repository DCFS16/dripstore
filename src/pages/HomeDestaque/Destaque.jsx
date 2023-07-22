

const Destaque = ({desconto,text,textButton,img}) => {
    //
    return(
        <>
            <span>{desconto}% OFF</span>
            <p>{text}</p>
            <button>{textButton}</button>
            <img src={img}/>
            
        </>

    )
}
export default Destaque