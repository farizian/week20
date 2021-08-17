import '../css/footer.css'
import "bootstrap/dist/css/bootstrap.min.css"
const Footer =()=>{
  return(
    <div>
      <footer>
        <div className="part1">
            <div className ="logo2">
                <img src="https://raw.githubusercontent.com/farizian/week5/master/img/coffee%201.png" alt=""/>
                <h1>Coffee Shop</h1>
            </div>
            <p>Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans</p>
            <div className="social">
                <img src="https://raw.githubusercontent.com/farizian/week5/master/img/Facebook.png" alt=""/>
                <img src="https://raw.githubusercontent.com/farizian/week5/master/img/Twitter.png" alt=""/>
                <img src="https://raw.githubusercontent.com/farizian/week5/master/img/Instagram.png" alt=""/>
            </div>
            <p className="credit">©2020CoffeeStore</p>
        </div>
        <div className="part2">
            <ol>
                <b>Product</b>
                <li>Download</li>
                <li>Pricing</li>
                <li>Location</li>
                <li>Countries</li>
                <li>Blog</li>
            </ol>
        </div>
        <div className="part3">
            <ol>
                <b>Engage</b>
                <li>Coffe Shop ?</li>
                <li>FAQ</li>
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
            </ol>
        </div>
      </footer>
    </div>
  )
}

export default Footer