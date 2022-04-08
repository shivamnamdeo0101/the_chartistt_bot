import React,{useContext,useState,useEffect} from 'react'
import "./comp.css";
import { AuthContext } from "../Auth.js";
import firebase from "../base.js";
import {useHistory} from "react-router-dom";

function Account() {

  const { currentUser } = useContext(AuthContext);
  const [vir_money, setvir_money] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const subscriber = firebase.firestore()
      .collection('users')
      .doc(currentUser.email)
      .onSnapshot(data => {
        setvir_money(parseInt(data.data().virtual_money));
      
        setLoading(false);
      });
  
    return () => subscriber();
  }, [vir_money]); 

  return (
    <div className="account">
        <h3>
            Your Virtual Money
        </h3>

        <p>INR {vir_money}</p>
    </div>
  )
}

export default Account