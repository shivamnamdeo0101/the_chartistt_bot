import React,{useEffect,useState,useContext} from 'react'
import "./comp.css";
import firebase from "../base.js";
import { AuthContext } from "../Auth.js";
import Loading from "../Loading";
import moment from "moment";

function Transaction() {

  const [transaction, settransaction] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    const subscriber = firebase.firestore()
      .collection('users')
      .doc(currentUser.email)
      .collection('transactions')
      .orderBy('timestamp','desc')
      .onSnapshot(querySnapshot => {
        
        const t_list_ = [];
  
        querySnapshot.forEach(doc => {

          
             t_list_.push({
                ...doc.data(),
                 key: doc.id
            });
         
           
                  
        
        });
    
        settransaction(t_list_);
        setLoading(false);
      });
  
    
    return () => subscriber();
  }, []); 



  if(loading){
    return(
      <div>
        <Loading />
      </div>
    )
  }
  return (
    <div className='transactions'>

            <div className='transaction_head'>
                <h3>Transactions</h3>
            </div>

            <div className='transactions_list'>

            {transaction.map((item,index) => (

                <div className='tl_comp' key={index}>
                    <div className='tl_comp_head tl_comp'>
                         <i className="fa fa-check-circle green_color green_bg_color" aria-hidden="true"></i>

                
                        <div className='tl_head_data'>
                            <h5>{item.stock_name}</h5>
                            <p>{moment(item.timestamp).format("LLL")}</p>
                            <p>{item.sbi_stock_price}</p>
                        </div>
                       
                    </div>

                  
                        <p >Amount : {item.amount}.00<br></br>Stocks : {item.how_much}</p>
                       
                        
                    

                </div>

            ))}

                

            </div>

    </div>
  )
}

export default Transaction