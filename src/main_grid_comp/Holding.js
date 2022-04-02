import React from 'react'
import "./comp.css";

function Holding() {
  return (
    <div className='holding'>
       <div className='holding_head'>
            <h3>Holdings</h3>
       </div>

        <div className='holding_list'>

            <div className='holding_comp'>
            {["1","2","3","4"].map((item,index) => (

                <div className='tl_comp' key={index}>
                    <div className='tl_comp_head tl_comp'>
                    {index%2 == 0 ? <i class="fa fa-long-arrow-up green_color green_bg_color" aria-hidden="true"></i>:
                        <i class="fa fa-long-arrow-down red_color red_bg_color" aria-hidden="true"></i>

                      }
                    
                        <div className='tl_head_data'>
                            <h5>SBI</h5>
                            <p>02-04-2022</p>
                        </div>
                    
                    </div>

                    {
                        index%2 == 0?
                        <div className="hold_comp">
                            <p >32% Profit</p>
                            <p >Buying Price : 320</p>
                            <p >Selling Price : 320</p>
                        </div>
                        :
                        <div className="hold_comp">
                          <p className="red_color">32% Loss</p>
                            <p >Buying Price : 320</p>
                            <p >Selling Price : 320</p>
                        </div>
                    }
                    
                    <h5>Sell</h5>

                </div>

                ))}
            </div>

        </div>
    </div>
  )
}

export default Holding