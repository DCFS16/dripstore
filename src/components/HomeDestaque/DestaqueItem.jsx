import './DestaqueItem.css'
const Destaque = ({desconto,text,textButton,img}) => {
    //
    return(
        <div className='destaqueItem'>
            <div className='destaqueItemInfos'>
              <span className='destaqueItemDiscount'>{desconto}% OFF</span>
              <h2 className='destaqueItemName'>{text}</h2>
              <button className='destaqueItemButton'>{textButton}</button>
            </div>
            <img className='destaqueItemImage' src={img}/>
        </div>

    )
}
export default Destaque