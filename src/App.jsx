import HomePage from './pages/HomePage/HomePage'
import Destaque from './pages/HomeDestaque/Destaque'
import shirt from './assets/img/shirt.jpeg'
import hearphone from './assets/img/hearphone.jpeg'
import sneakers from './assets/img/sneakers.jpeg'

const App = () => {

  return (
    <> 
      
      <Destaque desconto="30" text="aquiii" textButton="Comprar" img={shirt}/> 
      <Destaque desconto="30" text="aquiii" textButton="Comprar" img={hearphone}/> 
      <Destaque desconto="30" text="aquiii" textButton="Comprar" img={sneakers}/> 


    </>
    
  )
}

export default App
