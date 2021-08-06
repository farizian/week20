import React from 'react'

class Text extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        username: this.props.username,
    }
  }
  render(){
    const ubahProps =()=>{
        // console.log("ubah")
        this.setState({username: "jerry"})
      }
    return(
      <div className="Text">
          Never gonna give you up {this.state.username}
          <br/>
        <button onClick={ubahProps}>rick</button>
        <br/>
        {
          this.props.data.map((data)=>{
            return(
              <div>{data}</div>
            )
          })
        }
        <button
          onClick={
            ()=> this.props.actionRick("we known eachother")
            }>
              Never gonna make you cry
        </button>
      </div>
    )
  }
}

export default Text;