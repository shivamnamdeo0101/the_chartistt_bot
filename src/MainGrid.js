import React from 'react'
import SideNav from "./main_grid_comp/SideNav";
import TradeComp from './main_grid_comp/TradeComp';
import "./main_grid_comp/comp.css";
import RightNav from "./main_grid_comp/RightNav";

function MainGrid() {
  return (
    <div className='main_grid'>
        <SideNav />
        <TradeComp />
        <RightNav />
    </div>
  )
}

export default MainGrid