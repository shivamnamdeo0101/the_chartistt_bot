import React from 'react'
import Transaction from "./Transaction";
import TradingViewWidget from 'react-tradingview-widget';
import "../App.css";
function TradeComp() {
  return (
    <div className="trade_grid">
			
            <div className='trade_grid_comp'>
                    <TradingViewWidget
                    symbol="BSE:SBIN"
                    locale="fr"
                    height="350"
                    width="auto"
                    timezone= "Etc/UTC"
                />
    
            </div>
			<div className='trade_grid_comp'>
                 <Transaction />
    
            </div>
			
            
	
		</div>

  )
}

export default TradeComp


