import './DestaqueItem.css'
const Destaque = ({discount,text,textButton,img}) => {
    //
    return(
        <div className='destaqueItem'>
            <div className='destaqueItemInfos'>
              <span className='destaqueItemDiscount'>{discount}% OFF</span>
              <h2 className='destaqueItemName'>{text}</h2>
              <button className='destaqueItemButton'>{textButton}</button>
            </div>
            <img className='destaqueItemImage' src={img}/>
        </div>

    )
}
export default Destaque