import react from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/body.css"


class Side extends react.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return(
      <div className="sidebar" id="sb">
        <img className="fork" src="https://raw.githubusercontent.com/farizian/week10/master/tugas1/img/fork.png" alt="" srcset=""/>
        <img className="clip" src="https://raw.githubusercontent.com/farizian/week10/master/tugas1/img/clipboard.png" alt="" srcset=""/>
        <img className="clip" src="https://raw.githubusercontent.com/farizian/week10/master/tugas1/img/add.png" alt="" srcset=""/>
      </div>
    )
  }
}

export default Side