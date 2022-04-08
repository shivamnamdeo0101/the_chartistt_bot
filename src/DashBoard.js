import React from 'react';
import app from "./base.js";
import FeedComp from "./routes/comp/FeedComp";
import Account from "./routes/comp/Account";
import "./App.css";
import MainGrid from "./MainGrid";
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import firebase from "./base.js";

function DashBoard() {
	return (
		<div className="dashboard">
			
			<div className='dashboard_head dash_row'>
				<h4>The Chartistt Bot</h4>

				<div className='dashbord_head_icon dash_row'>
					<i className="fa fa-search" aria-hidden="true"></i>
					<i className="fa fa-bell" aria-hidden="true"></i>

					<i className="fa fa-cog" aria-hidden="true"></i>

					<IconButton onClick={()=>firebase.auth().signOut()}>
						<LogoutIcon color="error" />
					</IconButton>
					<img src="https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg" alt=""/>

				</div>
			</div>
			
			<MainGrid />

		

			
		</div>
	)
}

export default DashBoard