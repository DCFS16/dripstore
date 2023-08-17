import './Highlight.css'
import shirt from './assets/shirt.svg'
// import headphone from './assets/headphone.svg'
// import sneakers from './assets/sneakers.svg'
import HighlightItem from './HighlightItem'
import { useHighlights } from '../../hooks/useHighlights'
import { HighlightItemLoader } from './HighlightItemLoader'

const Highlight = () => {
    const { highlights, loading } = useHighlights(3)

    if (loading) {
        return (
            <div className="highlight-Wrapper container">
                <HighlightItemLoader />
                <HighlightItemLoader />
                <HighlightItemLoader />
            </div>

        )
    }

    return (
        <div className="highlight-Wrapper container">
            {highlights.map(({ id, discount, text, textButton, image }) =>
                <HighlightItem 
                    key={id}
                    discount={discount}
                    text={text}
                    textButton={textButton}
                    img={image}
                />
            )}
        </div>

    )
}
export default Highlight
