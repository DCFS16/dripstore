import { Children } from "react"

const Destaque = ({desconto,text,textButton}) => {
    //
    return(
        <>
            <span>{desconto}% OFF</span>
            <p>{text}</p>
            <button>{textButton}</button>
        </>

    )
}
export default Destaque