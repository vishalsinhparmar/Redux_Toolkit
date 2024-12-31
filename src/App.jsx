import {Provider} from 'react-redux'
import store from './store/store'
import Cart from './componets/Cart'
import UseCallbackcomponents from './componets/UseCallbackcomponents'
import FetchData from './componets/FetchData.'
  function App() {
    return (
      <Provider store={store}>
             <h1>shopping Cart:</h1>
             <Cart/>
             <UseCallbackcomponents/>
             <FetchData/>
      </Provider>
    )
  }
  
  export default App

