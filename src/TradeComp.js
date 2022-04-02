import React from 'react'
import TradingViewWidget from 'react-tradingview-widget';
import "./App.css";

function TradeComp() {
	return (
		<div className="trade_grid">
			
			<TradingViewWidget
		    symbol="NASDAQ:AAPL"
		    locale="fr"
		    height="450"
		    width="auto"

		  />
		 
	
		</div>
	)
}

export default TradeComp