import './App.css'
import { Topo } from './pgs/Topo'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Home } from './pgs/Home'
import { Test } from './pgs/Test'
import { Servicos } from './pgs/Servicos'
import { Footer } from './pgs/Footer'
import { Comida } from './pgs/Comida'

function App() {
  return (
    <div className="container">
      <Router>
        <Topo/>
        
          <Route path="/" exact component={Home}></Route>
          <Route path="/comidas" exact component={Test}></Route>
          <Route path="/servico" exact component={Servicos}></Route>
          <Route path="/come" exact component={Comida}></Route>
        <Footer/>
      </Router>
        

    </div>
  )
}
export default App
