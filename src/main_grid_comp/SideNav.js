import React,{useContext,useState,useEffect} from 'react'
import "./comp.css" ;
import { AuthContext } from "../Auth.js";
import firebase from "../base.js";
import {useHistory} from "react-router-dom";


function SideNav() {

  const { currentUser } = useContext(AuthContext);
  const [curr_stock_price, setcurr_stock_price] = useState(100);
  const [curr_hold_sbi, setcurr_hold_sbi] = useState(0);
  const history = useHistory();
  var [virtual_money, setvirtual_money] = useState(0);
  const [how_much, sethow_much] = useState(0);
  const [loading, setLoading] = useState(true);


  const [sbi_stock_price, setsbi_stock_price] = useState(0);
  const [amount, setamount] = useState(0);
  const [prev_sbi_hold, setprev_sbi_hold] = useState({});



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
  }, []); 
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




  return (
    <div className="side_nav">
        
        <div className='side_nav_icon side_col'>
            <i className="fa fa-home" aria-hidden="true"></i>
            <i className="fa fa-slack" aria-hidden="true"></i>


            <i className="fa fa-list-alt" aria-hidden="true"></i>
            

        </div>


       
        


    </div>
  )
}

export default SideNav