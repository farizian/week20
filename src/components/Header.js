import React from 'react'
import Text from './Text';

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: "rick",
      email: "bambang@gmail.com",
      arr: ["apel","anggur", "mangga"]
    }
  }
  render(){
    const ubahState =()=>{
      // console.log("ubah")
      this.setState({username: "Rick Astley"})
    }
    const astley=(e)=>{
      console.log(e)
    }
    return(
      <div className="Header">
        Never gonna give you up {this.state.username}
        <br/>
        <button onClick={ubahState}>rick</button>
        <p>{this.props.alamat}</p>
        {/* <button onClick={()=>ubahState()}>rick</button> *cara kedua */}
        {
          this.state.arr.map((e,i)=>{
            return(
              <div>{e}</div>
            )
          })
        }
        <button
          onClick={
            ()=> this.props.actionTangkap("never gonna round around ",2)
            }>
              and hurt you
        </button>
        <Text
          data={this.props.data}
          username= "rick Astley"
          email= "bambang@gmail.com"
          arr= {["apel","anggur", "mangga"]}
          actionRick={astley}
        />
      </div>
    )
  }
}

export default Header;