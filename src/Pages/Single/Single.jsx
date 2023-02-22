import React from 'react'
import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/Chart/Chart'
import List from '../../components/Table/Table'

const Single = () => {
  return (
    <div className='single'>
        <Sidebar />
        <div className='singleContainer'>
           <Navbar />
           <div className='top'>
              <div className='left'>
                 <div className='editButton'>Edit</div>
                 <div className='title'>Information</div>
                 <div className='item'>
                    <img 
                       src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" 
                       alt="" 
                       className="itemImg" 
                    />
                    <div className="details">
                       <h1 className="itemTitle">Jane Doe</h1>
                       <div className="detailItem">
                          <span className='itemKey'>Email:</span>
                          <span className='itemValue'>janedoe@gmail.com</span>
                       </div>
                       <div className="detailItem">
                          <span className='itemKey'>Phone:</span>
                          <span className='itemValue'>+0 5482 8598 12</span>
                       </div>
                       <div className="detailItem">
                          <span className='itemKey'>Address:</span>
                          <span className='itemValue'>Jane Doe st. 254 add drive</span>
                       </div>
                       <div className="detailItem">
                          <span className='itemKey'>Country:</span>
                          <span className='itemValue'>USA</span>
                       </div>
                    </div>
                 </div>
              </div>
              <div className='right'>
                 <Chart aspect={ 3 / 1} title="User Spending ( Last 6 Months )" />
              </div>
           </div>
           <div className='bottom'>
              <h1 className='title'>Last Transactions</h1>
              <List />
           </div>
        </div>
    </div>
  )
}

export default Single