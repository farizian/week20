import { Switch, Route } from 'react-router-dom'
import Landing from '../pages/landingpage'
import Product from '../pages/product'
import Login from '../pages/login'
import Signup from '../pages/signup'
import Detailprd from '../pages/detailprd'
import Guard from './guard'
import Payment from '../pages/payment'
import Profile from '../pages/userProfile'
import History from '../pages/history'
import Detailhistory from '../pages/detailHistory'

const Router =()=>{
 
    return(
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/login" exact render={(props)=>(<Login  {...props}/>)}/>
        <Route path="/signup" exact render={(props)=>(<Signup  {...props}/>)}/>
        <Guard path="/product" exact component={Product}/>
        <Guard path="/profile" exact component={Profile}/>
        <Guard path="/history" exact component={History}/>
        <Guard path="/detailhistory" exact component={Detailhistory}/>
        <Guard path="/detailprd/:id" exact component={Detailprd}/>
        <Guard path="/payment" exact component={Payment}/>
        <Route>
          404 NOT FOUND
        </Route>
      </Switch>
    )
}

export default Router