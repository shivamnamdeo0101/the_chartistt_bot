import React,{useEffect,useState} from 'react'

function StockComp({stock}) {

    const [stock_val, setstock_val] = useState(stock);
    const [stk_d, setstk_d] = useState({
        
        "Global Quote": {
        "02. open": "",
        "03. high": "",
        "04. low": "",
        "05. price": "",
        "09. change": "0.1900",
    }});
    useEffect(() => {
    const fetchData = async () => {
    const response = await fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+`${stock_val}`+"&apikey=3RZH8V2IIUNDXFPX");
    const json =  await response.json();

    setstk_d(json);
    console.log(json);
  }
    fetchData()
    .catch(console.error);
    
        
    }, [])

    
  return (
    <div className='stock_comp stk_child'>
        <h5 className='st_comp_item'>{stock}</h5>
        <p className='st_comp_item'>{stk_d["Global Quote"]["02. open"]}</p>
        <p className='st_comp_item'>{stk_d["Global Quote"]["03. high"]}</p>
        <p className='st_comp_item'>{stk_d["Global Quote"]["04. low"]}</p>
        <p className='st_comp_item'  > {stk_d["Global Quote"]["05. price"]}</p>
        <p className={stk_d["Global Quote"]["09. change"].charAt(0) == '-' ? 'st_comp_item red_color' : 'st_comp_item green_color'}>{stk_d["Global Quote"]["09. change"]}</p>
    </div>
  )
}

export default StockComp