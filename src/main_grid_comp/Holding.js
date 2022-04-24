import React,{useEffect,useState,useContext} from 'react'
import "./comp.css";
import { AuthContext } from "../Auth.js";
import firebase from "../base.js";
import {useHistory} from "react-router-dom";
import moment from "moment";

function Holding() {

  const { currentUser } = useContext(AuthContext);
  const [prev_sbi_hold, setprev_sbi_hold] = useState({});
  const [loading, setLoading] = useState(true);
  const [sbi_stock_price, setsbi_stock_price] = useState(0);
  var [virtual_money, setvirtual_money] = useState(0);
  const [amount, setamount] = useState(0);
  useEffect(() => {

    

    const subscriber = firebase.firestore()
      .collection('users')
      .doc(currentUser.email)
      .onSnapshot(data => {
        setvirtual_money(data.data().virtual_money);
        
        setLoading(false);
      });
  
    return () => subscriber();
  }, [virtual_money,amount]);
 


  Hello


  useEffect(() => {

    const subscriber = firebase.firestore()
      .collection('users')
    .doc(currentUser.email)
    .collection('holdings')
      .doc('sbi')
      .onSnapshot(data => {
        setprev_sbi_hold(data.data());
        setLoading(false);
      });
  
    return () => subscriber();
  }, [prev_sbi_hold]); 

  useEffect(() => {
   fetchData();
    setLoading(false);    
}, [sbi_stock_price])


const fetchData = async () => {
  const data = await fetch('https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=SBI&apikey=3RZH8V2IIUNDXFPX');
  const res = await data.json();
  setsbi_stock_price(res["Global Quote"]["05. price"] * 63.2);
}

  const buy_now = ()=>{
    



    add_holding();
    minus_virtual();
    add_transaction();

		alert("Stock Buy Sucessfully");

	}

  const add_transaction = ()=>{
    firebase.firestore()
		.collection('users')
    .doc(currentUser.email)
    .collection('transactions')
    .doc(Date.now()+"")
		.set({
      timestamp:Date.now(),
      stock_name:'SBI',
      amount:amount,
      how_much:amount/sbi_stock_price,
      sbi_stock_price:sbi_stock_price,
    });
  }



  const minus_virtual = ()=>{
    firebase.firestore()
		.collection('users')
    .doc(currentUser.email)
		.set({
      virtual_money:virtual_money - amount,

    },{merge:true});
  }

  const add_holding = ()=>{

    const pr = prev_sbi_hold.sbi_stock_price!=0 ? (parseFloat(prev_sbi_hold.sbi_stock_price) + (sbi_stock_price))/2.0 : sbi_stock_price;
    const am = parseFloat(prev_sbi_hold.amount) + parseFloat(amount);
    firebase.firestore()
    .collection('users')
    .doc(currentUser.email)
    .collection('holdings')
    .doc('sbi')
		.set({
      timestamp:Date.now(),
      stock_name:'SBI',
      amount:am,
      how_much:prev_sbi_hold.how_much +( amount/sbi_stock_price),
      sbi_stock_price:pr

    },{merge:true});

  }


  const sell_holding = ()=>{
    add_in_virtual();
    add_in_transaction();
    swipe_holding();


    window.alert("Stocks Sold Successfully");
  }

  const add_in_virtual = ()=>{

    
    const profit = prev_sbi_hold.how_much * (parseFloat(sbi_stock_price));
    firebase.firestore()
		.collection('users')
    .doc(currentUser.email)
		.set({
      virtual_money:virtual_money +profit,

    },{merge:true});
  }
  const add_in_transaction = ()=>{
    firebase.firestore()
		.collection('users')
    .doc(currentUser.email)
    .collection('transactions')
    .doc(Date.now()+"")
		.set({
      timestamp:Date.now(),
      stock_name:'SBI',
      amount:prev_sbi_hold.amount,
      how_much:prev_sbi_hold.how_much,
      sbi_stock_price:prev_sbi_hold.sbi_stock_price,
    });
  }
  const swipe_holding = ()=>{
    firebase.firestore()
    .collection('users')
    .doc(currentUser.email)
    .collection('holdings')
    .doc('sbi')
		.set({
      timestamp:Date.now(),
      stock_name:'SBI',
      amount:0,
      how_much:0,
      sbi_stock_price:0

    },{merge:true});
  }

  return (
    <div className='holding'>
       <div className='holding_head'>
            <h3>Holdings</h3>
       </div>

        <div className='holding_list'>

            <div className='holding_comp'>
          

                <div className='tl_comp'>
                    <div className='tl_comp_head tl_comp'>
                    {(prev_sbi_hold.how_much * (parseFloat(sbi_stock_price)) > prev_sbi_hold.how_much * (parseFloat(prev_sbi_hold.sbi_stock_price))) ? <i className="fa fa-long-arrow-up green_color green_bg_color" aria-hidden="true"></i>:
                        <i className="fa fa-long-arrow-down red_color red_bg_color" aria-hidden="true"></i>

                      }
                    
                        <div className='tl_head_data'>
                            <h5>SBI</h5>
                            <p>Last Buy : { moment(prev_sbi_hold.timestamp).format("LLL")}</p>
                        </div>
                    
                    </div>

                   
                    

                </div>
                <div className='tl_comp_head'>
               
                 
                        <div className="hold_comp">
                            
                            <p >Amount  : {prev_sbi_hold.amount}</p>
                            <p>Current Amount : {prev_sbi_hold.how_much * (parseFloat(sbi_stock_price))}</p>
                            <p >Total Stocks  : {prev_sbi_hold.how_much}</p>
                            <p >Buying Price : {prev_sbi_hold.sbi_stock_price}</p>
                            <p >Current Price : {sbi_stock_price}</p>
                        </div>
                 
                </div>
                
                    
                <h5 className="sell_button" onClick={()=>sell_holding()}>Sell</h5>
                
                <div className="buy_now"> 
                  <input type ="number" value={amount} onChange={(e)=>setamount(e.target.value)}/>

                  <div className="buy_now_button" onClick={()=>buy_now()}>
                    
                      <p>Buy Now</p>
                  </div>
                </div>
               
            </div>

        </div>
    </div>
  )
}

export default Holding