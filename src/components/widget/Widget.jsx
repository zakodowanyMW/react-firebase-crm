import React from 'react';
import './widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

function Widget({type}) {

  let data;
  switch(type){
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlinedIcon className='icon' style={{
          backgroundColor: "rgb(216, 55, 87)",
          color: 'white'
          }}/>
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "See all orders",
        icon: <ShoppingCartOutlinedIcon className='icon' style={{
          backgroundColor: "rgb(42, 195, 80)",
          color: 'white'
          }}/>
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: <MonetizationOnOutlinedIcon className='icon' style={{
          backgroundColor: "rgb(237, 188, 13)",
          color: 'white'
          }}/>
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: <AccountBalanceWalletOutlinedIcon className='icon'  style={{
          backgroundColor: "rgb(24, 158, 241)",
          color: 'white'
          }}/>
      };
      break;
    default: 
      break;
  }

  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon/>
                20%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget