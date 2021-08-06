import react from 'react'
import Navbar from '../components/Navbar'

class About extends react.Component{
  constructor(props){
    super(props)
    this.state={
      data: [
        {
          name: "sate"
        },
        {
          name: "jagung"
        },
        {
          name: "ngeleg"
        },
        {
          name: "hiyahiya"
        },
        {
          name: "hiyah"
        },
      ],
      hasilSearch: []
    }
  }
  componentDidMount(){
    const query = new URLSearchParams(this.props.location.search)
    const hasil = this.state.data.filter((e)=>{
      if (e.name === query.get('search')){
        return e
      }
    })
    this.setState({
      hasilSearch: hasil
    })

  }
  render(){
    
    return(
      <div>
        <Navbar/>
        About - {this.state.search}
        <hr/>
        Data: 
        {
          this.state.data.map((e)=>{
            <div>{e.name}</div>
          })
        }
        <hr/>
        hasilSearch:
        {
          this.state.hasilSearch.map((e)=>{
            <div>{e.name}</div>
          })
        }
      </div>
    )
  }
}

export default About