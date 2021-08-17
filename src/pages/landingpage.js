import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../css/landingpage/section.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Promo from '../components/Promocard'

const Landing=()=>{

  return(
    <div>
      <Navbar logsign={false} product={false}/>
        <div className="jumbotron">
          <aside className="left">
            <div className="searchbar">
              <div className="searchbtn">
                <img className="src" src="https://raw.githubusercontent.com/farizian/week5/master/img/searchlogo.png" alt="" srcSet=""/>
                <input type="text" placeholder="Search" name="" value=""></input>
              </div>
            </div>
            <h1 className="display-4">Start Your Day with Coffee and Good Meals</h1>
            <p className="lead">We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</p>
            <div className="btn">
              <button className="get">Get Started</button>
            </div>
          </aside>
          <aside className="right">
            <div className="searchbtn">
            <img className="src" src="https://raw.githubusercontent.com/farizian/week5/master/img/searchlogo.png" alt="" srcSet=""/>
            <input type="text" placeholder="Search" name="" value=""></input>
            </div>
          </aside>
        </div>
        <div className="con-info">
          <div className="card">
            <div className="info">
              <img src="https://raw.githubusercontent.com/farizian/week5/master/img/Vector.png" alt=""/>
              <div className="text">
              <h4>90+</h4>
              <p>Staff</p>
              </div>
            </div>
            <div className="info">
              <img src="https://raw.githubusercontent.com/farizian/week5/master/img/location.png" alt="" />
              <div className="text">
              <h4>30+</h4>
              <p>Stores</p>
              </div>
            </div>
            <div className="info2">
              <img src="https://raw.githubusercontent.com/farizian/week5/master/img/love.png" alt="" />
              <div className="text">
              <h4>800+</h4>
              <p>Customers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11 infocard">
            <div className="row">
              <div className="info">
                <img src="https://raw.githubusercontent.com/farizian/week5/master/img/Vector.png" alt="" />
                <div className="text">
                <h4>90+</h4>
                <p>Staff</p>
                </div>
              </div>
              <div className="info">
                <img src="https://raw.githubusercontent.com/farizian/week5/master/img/location.png" alt="" />
                <div className="text">
                <h4>30+</h4>
                <p>Stores</p>
                </div>
              </div>
              <div className="info2">
                <img src="https://raw.githubusercontent.com/farizian/week5/master/img/love.png" alt="" />
                <div className="text">
                <h4>800+</h4>
                <p>Customers</p>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className="part2">
            <aside>
              <img src="https://raw.githubusercontent.com/farizian/week5/master/img/teamwork.png" alt=""/>
            </aside>
            <section>
              <div className="text">
              <h2>We Provide Good Coffee and Healthy Meals</h2>
              <p>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
              </div>
              <div className="image">
                <ul>
                  <img className="induk" src="https://raw.githubusercontent.com/farizian/week5/master/img/check.png" alt=""/>
                  <img src="https://raw.githubusercontent.com/farizian/week5/master/img/check.png" alt=""/>
                  <img src="https://raw.githubusercontent.com/farizian/week5/master/img/check.png" alt=""/>
                  <img src="https://raw.githubusercontent.com/farizian/week5/master/img/check.png" alt=""/>
                </ul>
                <ul>
                  <li>High quality beans</li>
                  <li>Healthy meals, you can request the ingredients</li>
                  <li>Chat with our staff to get better experience for ordering</li>
                  <li>Free member card with a minimum purchase of IDR 200.000.</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div className="favorite">
          <div className="text">
          <h1>Here is People’s Favorite</h1>
          <p>Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
          </div>
          <div className="row">
            <div className="card">
              <img className="food" src="https://raw.githubusercontent.com/farizian/week5/master/img/hazelnut.png" alt=""/>
              <p >Hazelnut Latte</p>
              <div className="list">
                <ul>
                  <img className="induk" src="https://raw.githubusercontent.com/farizian/week5/master/img/ceklis.png" alt=""/>
                  <img src="https://raw.githubusercontent.com/farizian/week5/master/img/ceklis.png" alt=""/>
                  <img src="https://raw.githubusercontent.com/farizian/week5/master/img/ceklis.png" alt=""/>
                  <img src="https://raw.githubusercontent.com/farizian/week5/master/img/ceklis.png" alt=""/>
                </ul>
                <ul>
                  <li>HazelnutSyrup</li>
                  <li>Wanilla Whipped Cream</li>
                  <li>Ice / Hot</li>
                  <li>Sliced Banana on Top</li>
                </ul>
              </div>
              <p className="harga">IDR 25.000</p>
              <div href="" className="order">Order Now</div>
            </div>
            <div className="card">
              <img className="food" src="https://raw.githubusercontent.com/farizian/week5/master/img/pinky.png" alt=""/>
              <p >Pinky Promise</p>
              <div className="list">
                <ul>
                  <img className="induk" src="https://raw.githubusercontent.com/farizian/week5/master/img/ceklis.png" alt=""/>
                  <img src="https://raw.githubusercontent.com/farizian/week5/master/img/ceklis.png" alt=""/>
                  <img src="https://raw.githubusercontent.com/farizian/week5/master/img/ceklis.png" alt=""/>
                  <img src="https://raw.githubusercontent.com/farizian/week5/master/img/ceklis.png" alt=""/>
                  <img src="https://raw.githubusercontent.com/farizian/week5/master/img/ceklis.png" alt=""/>
                </ul>
                <ul>
                  <li>1 Shot of Coffee</li>
                  <li>Vanilla Whipped Cream</li>
                  <li>Chocolate Biscuits</li>
                  <li>Strawberry Syrup</li>
                  <li>Sliced strawberry on Top</li>
                </ul>
              </div>
              <p className="harga2">IDR 30.000</p>
              <div href="" className="order">Order Now</div>
            </div>
            <div className="card">
              <img className="food" src="https://raw.githubusercontent.com/farizian/week5/master/img/chicken.png" alt=""/>
              <p >Hazelnut Latte</p>
              <div className="list">
                <ul>
                  <img className="induk" src="https://raw.githubusercontent.com/farizian/week5/master/img/ceklis.png" alt=""/>
                  <img src="https://raw.githubusercontent.com/farizian/week5/master/img/ceklis.png" alt=""/>
                  <img src="https://raw.githubusercontent.com/farizian/week5/master/img/ceklis.png" alt=""/>
                  <img src="https://raw.githubusercontent.com/farizian/week5/master/img/ceklis.png" alt=""/>
                  <img src="https://raw.githubusercontent.com/farizian/week5/master/img/ceklis.png" alt=""/>
                  <img src="https://raw.githubusercontent.com/farizian/week5/master/img/ceklis.png" alt=""/>
                </ul>
                <ul>
                  <li>Wings</li>
                  <li>Drum Sticks</li>
                  <li>Mayonaise and Lemon</li>
                  <li>Hot Fried</li>
                  <li>Secret Recipe</li>
                  <li>Buy 1 Get 1 only for Dine in</li>
                </ul>
              </div>
              <p className="harga3">IDR 40.000</p>
              <div href="" className="order">Order Now</div>
            </div>
          </div>
        </div>
        <div className="map">
          <div className="text">
          <h1>Visit Our Store in the Spot on the<br/> Map Below</h1>
          <p>See our store in every city on the spot and spen your good day there. See<br/> you soon!</p>
          </div>
          <img src="https://raw.githubusercontent.com/farizian/week5/master/img/Huge%20Global.png" alt=""/>
        </div>
        <div className="partner">
          <h1>Our Partner</h1>
          <ul className="image">
              <img onclick="window.location.href='https://www.netflix.com/id/'" className="netflix" src="https://raw.githubusercontent.com/farizian/week5/master/img/netflix.png" alt=""/>
              <img onclick="window.location.href='https://www.reddit.com'" className="reddit" src="https://raw.githubusercontent.com/farizian/week5/master/img/reddit.png" alt=""/>
              <img onclick="window.location.href='https://www.reddit.com'" className="amazon" src="https://raw.githubusercontent.com/farizian/week5/master/img/amazon.png" alt=""/>
              <img onclick="window.location.href='https://discord.com'" className="discord" src="https://raw.githubusercontent.com/farizian/week5/master/img/discord.png" alt=""/>
              <img onclick="window.location.href='https://www.spotify.com'" className="spotify" src="https://raw.githubusercontent.com/farizian/week5/master/img/spotify.png" alt=""/>
          </ul>
        </div>
        <div className="review">
          <div className="text">
            <h1>Loved by Thousands of<br/>Happy Customer</h1>
            <p>These are the stories of our customers who have visited us with great<br/>pleasure.</p>
            </div>
          <div className="row">
            <div className="card">
              <div className="row1">
                <img className="profile" src="https://raw.githubusercontent.com/farizian/week5/master/img/profilereview1.png" alt=""/>
                <div className="header">
                  <h1>Viezh Robert</h1>
                  <p>Warsaw, Poland</p>
                </div>
                <div className="rating">
                  <p>4.5</p>
                  <img src="https://raw.githubusercontent.com/farizian/week5/master/img/star.png" alt=""/>
                </div>
              </div>
              <p className="text">“Wow... I am very happy to spend my whole<br/>day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
            </div>
            <div className="card">
              <div className="row1">
                <img className="profile" src="https://raw.githubusercontent.com/farizian/week5/master/img/profilereview2.png" alt=""/>
                <div className="header">
                  <h1>Yessica Christy</h1>
                  <p>Shanxi, China</p>
                </div>
                <div className="rating">
                  <p>4.5</p>
                  <img src="https://raw.githubusercontent.com/farizian/week5/master/img/star.png" alt=""/>
                </div>
              </div>
              <p className="text">“I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte</p>
            </div>
            <div className="card">
              <div className="row1">
                <img className="profile" src="https://raw.githubusercontent.com/farizian/week5/master/img/profilereview3.png" alt=""/>
                <div className="header">
                  <h1>Kim Young Jou</h1>
                  <p>Seoul, South Korea</p>
                </div>
                <div className="rating">
                  <p>4.5</p>
                  <img src="https://raw.githubusercontent.com/farizian/week5/master/img/star.png" alt=""/>
                </div>
              </div>
              <p className="text2">“This is very unusual for my taste, I haven’t<br/>liked coffee before but their coffee is the<br/>best! and yup, you have to order the chicken wings, the best in town!</p>
            </div>
            <div className="card">
              <div className="row1">
                <img className="profile" src="https://raw.githubusercontent.com/farizian/week5/master/img/profilereview1.png" alt=""/>
                <div className="header">
                  <h1>Viezh Robert</h1>
                  <p>Warsaw, Poland</p>
                </div>
                <div className="rating">
                  <p>4.5</p>
                  <img src="https://raw.githubusercontent.com/farizian/week5/master/img/star.png" alt=""/>
                </div>
              </div>
              <p className="text">“Wow... I am very happy to spend my whole<br/>day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
            </div>
            <div className="card">
              <div className="row1">
                <img className="profile" src="https://raw.githubusercontent.com/farizian/week5/master/img/profilereview1.png" alt=""/>
                <div className="header">
                  <h1>Viezh Robert</h1>
                  <p>Warsaw, Poland</p>
                </div>
                <div className="rating">
                  <p>4.5</p>
                  <img src="https://raw.githubusercontent.com/farizian/week5/master/img/star.png" alt=""/>
                </div>
              </div>
              <p className="text">“Wow... I am very happy to spend my whole<br/>day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
            </div>
          </div>
        </div>
        <Promo login={false}/>
      <Footer/>
    </div>
  )
}

export default Landing