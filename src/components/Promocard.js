import '../css/promocard.css'
import "bootstrap/dist/css/bootstrap.min.css"

const Promo=(props)=>{
  return(
    <div>
    {props.login===false?
    <div class="row promocard justify-content-center ">
      <div class="col-sm-10 promo">
        <div class="card">
          <div class="card-body">
            <div class="title">
              <h5 class="card-title">Check our promo<br/> today!</h5>
              <p class="card-text">Let's see the deals and pick yours!</p>
            </div>
            <div class="btnpromo">
              <div href="#" class="btn">See Promo</div>
            </div>
          </div>
        </div>
      </div>
    </div>:
    <div class="contCard">
      <div class="row-card">
        <p>Get your member card now!</p>
        <p class="let">Let's join with our member and enjoy the deals.</p>
      </div>
      <div class="btnpromo">
        <button class="btn" href="#">Create Now</button>
      </div>
    </div>}
    </div>
  )
}

export default Promo
