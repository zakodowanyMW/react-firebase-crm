import React from 'react';
import "./sidebar.scss";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className='logo'>dashboard</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardCustomizeIcon className='icon'/>
            <span>Dashboard</span>
          </li>
          <li>
            <AccountBoxOutlinedIcon className='icon'/>
            <span>Users</span>
          </li>
          <p className="title">LIST</p>
          <li>
            <ProductionQuantityLimitsOutlinedIcon className='icon'/>
            <span>Products</span>
          </li>
          <li>
            <InventoryOutlinedIcon className='icon'/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className='icon'/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL LINKS</p>
          <li>
            <SettingsSuggestOutlinedIcon className='icon'/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <Person3OutlinedIcon className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <p>Select color:</p>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar