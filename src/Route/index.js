import { Switch, Route } from 'react-router-dom'
import Landing from '../pages/landingpage'
import Product from '../pages/product'
import Login from '../pages/login'
import Signup from '../pages/signup'
import Detailprd from '../pages/detailprd'
import Guard from './guard'

const Router =()=>{
 
    return(
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/login" exact render={(props)=>(<Login  {...props}/>)}/>
        <Route path="/signup" exact render={(props)=>(<Signup  {...props}/>)}/>
        <Guard path="/product" exact component={Product}/>
        <Guard path="/detailprd/:id" exact component={Detailprd}/>
        <Route>
          404 NOT FOUND
        </Route>
      </Switch>
    )
}

export default Router