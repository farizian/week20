import react from 'react'
import Navbar from '../components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import Body from "../components/Body"

class History extends react.Component{
  constructor(props){
    super(props)
    this.state = {
      id: this.props.match.params.id
    }
  }
  render(){
    return(
      <div>
        <Navbar col={false} cart={false} search={false}/>
        <Body/>
      </div>
    )
  }
}

export default History