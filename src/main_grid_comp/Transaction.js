import React from 'react'
import "./comp.css";

function Transaction() {
  return (
    <div className='transactions'>

            <div className='transaction_head'>
                <h3>Transactions</h3>
            </div>

            <div className='transactions_list'>

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
                        <p className="green_color">32000.00</p>
                        :
                        <p className="red_color">-32000.00</p>
                    }
                    

                </div>

            ))}

                

            </div>

    </div>
  )
}

export default Transaction