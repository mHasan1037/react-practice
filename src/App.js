import React, { useState } from 'react'
import PersonalInfo from './PersonalInfo'
import Crediantial from './Crediantial'
import LastOne from './LastOne'

const App = () => {
  const [page, setPage] = useState(0)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    other: ''
  })
  const titles = ['personal info', 'crediantial', 'last one']

  const displayPage = () =>{
     if(page === 0){
       return <PersonalInfo formData={formData} setFormData={setFormData} />
     }else if(page === 1){
       return <Crediantial formData={formData} setFormData={setFormData} />
     }else{
       return <LastOne formData={formData} setFormData={setFormData} />
     }
  }

  return (
    <div>
        <div>
          <h1>{titles[page]}</h1>
        </div>
        <div>{displayPage()}</div>
        <div>
          <button
             disabled = {page === 0}
             onClick={()=>{
               setPage(cur => cur - 1)
             }}
          >
            Prev
          </button>
          <button
             onClick={()=>{
                if(page === titles.length - 1){
                   alert('form submitted')
                   setPage(0)
                   setFormData({
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    other: ''
                   })
                   console.log(formData)
                }else{
                  setPage(cur => cur + 1)
                }     
             }}
          >
            {page === titles.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
    </div>
  )
}

export default App






