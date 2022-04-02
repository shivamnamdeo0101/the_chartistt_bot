import React from 'react'
import "./comp.css" ;

function SideNav() {
  return (
    <div className="side_nav">
        
        <div className='side_nav_icon side_col'>
            <i class="fa fa-home" aria-hidden="true"></i>
            <i class="fa fa-slack" aria-hidden="true"></i>


            <i class="fa fa-list-alt" aria-hidden="true"></i>
            

        </div>

        <div className="buy_now">
            <p>Buy Now</p>
        </div>


    </div>
  )
}

export default SideNav