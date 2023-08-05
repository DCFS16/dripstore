import './HighlightItem.css'
const Highlight = ({discount,text,textButton,img}) => {
    //
    return(
        <div className='highlight-Item'>
            <div className='highlight-Item-Infos'>
              <span className='highlight-Item-Discount'>{discount}% OFF</span>
              <h2 className='highlight-Item-Name'>{text}</h2>
              <button className='highlight-Item-Button'>{textButton}</button>
            </div>
            <img className='highlight-Item-Image' src={img}/>
        </div>

    )
}
export default Highlight