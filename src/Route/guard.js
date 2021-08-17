import {Redirect, Route} from 'react-router-dom'
// untuk kondisi jika halaman di refresh maka token di hapus
const refresh = window.onbeforeunload = (e) => {
  if(e){
    localStorage.removeItem('token')
  }
};
const Guard =({component: Component, ...rest})=>{
  const token = localStorage.getItem('token')
  return(
    <Route {...rest} render={
      (props)=>{
        if (token === '1234abc'){
          refresh()
          return <Component {...props}/>
        }else{
          return <Redirect to= "/login"/>
        }
      }
    }
    />
  )
}

export default Guard