import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import GradingIcon from '@mui/icons-material/Grading';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MedicationLiquidOutlinedIcon from '@mui/icons-material/MedicationLiquidOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className='sidebar'>
       <div className='top'>
          <span className='logo'>mHasan</span>
       </div>
       <hr />
       <div className='center'>
           <ul>
              <p className='title'>MAIN</p>
              <li>
                 <DashboardIcon className='icon' />
                 <span>Dashboard</span>
              </li>
              <p className='title'>LIST</p>
              <li>
                 <Person3OutlinedIcon className='icon' />
                 <span>Users</span>
              </li>
              <li>
                 <ProductionQuantityLimitsOutlinedIcon className='icon' />
                 <span>Products</span>
              </li>
              <li>
                 <GradingIcon className='icon' />
                 <span>Orders</span>
              </li>
              <li>
                 <LocalShippingIcon className='icon' />
                 <span>Delivery</span>
              </li>
              <p className='title'>USEFUL</p>
              <li>
                 <CorporateFareOutlinedIcon className='icon'/>
                 <span>States</span>
              </li>
              <li>
                 <NotificationsNoneIcon className='icon' />
                 <span>Notifications</span>
              </li>
              <p className='title'>SERVICE</p>
              <li>
                 <MedicationLiquidOutlinedIcon className='icon' />
                 <span>System Health</span>
              </li>
              <li>
                 <PsychologyOutlinedIcon className='icon' />
                 <span>Logs</span>
              </li>
              <li>
                 <SettingsIcon className='icon' />
                 <span>Settings</span>
              </li>
              <p className='title'>USER</p>
              <li>
                 <Person2OutlinedIcon className='icon' />
                 <span>Profile</span>
              </li>
              <li>
                 <LogoutIcon className='icon' />
                 <span>Logout</span>
              </li>
           </ul>
       </div>
       <div className='bottom'>
          <div className='colorOption'></div>
          <div className='colorOption'></div>
       </div>
    </div>
  )
}

export default Sidebar