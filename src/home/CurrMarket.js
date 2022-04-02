import React,{useEffect,useState} from 'react'
import "./home.css";
import StockComp from "./StockComp";



function CurrMarket() {

    const [stock_list, setstock_list] = useState(['IBM','SBI']);

    // useEffect(() => {
    //     fetch(
    //         "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=SBI&apikey=3RZH8V2IIUNDXFPX")
    //                     .then((res) => res.json())
    //                     .then((json) => {
    //                         console.log(json["Global Quote"]["01. symbol"]);
    //                     })

        
    // }, [])

  
    
  return (
    <div>
        <div className="curr_market">
                <div className="mkt_head">
                    <h1>Current <mark className="color_blue">Market</mark></h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took 
                    a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="mkt_grid_section">
                    <div className="mkt_grid_head">
                        
                        <h3>Current Currency Rate As Of 9:00AM GMT London</h3>
                    </div>

                    <div className='mk_grid'>
                    <div className='stock_comp_head'>
                        <h5>SYMBOL</h5>
                        <p>OPEN</p>
                        <p>HIGH</p>
                        <p>LOW</p>
                        <p>CURRENT PRICE</p>
                        <p>CHNAGE</p>
                    </div>
                    {stock_list.map((item,index) => (

                            <div className="stock_comp" key={item}>
                                <StockComp stock={item}/>
                            </div>

                            ))}

                    </div>
                </div>
            </div>
    </div>
  )
}

export default CurrMarket