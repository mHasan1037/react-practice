import React from 'react'

const Crediantial = ({formData, setFormData}) => {
  return (
    <div>
       <input 
          type="number" 
          placeholder='Phone'
          value={formData.phone}
          onChange={(e)=>{
            setFormData({...formData, phone: e.target.value})
          }}
        />
       <input 
          type="email" 
          placeholder='Email'
          value={formData.email}
          onChange={(e)=>{
            setFormData({...formData, email: e.target.value})
          }}
        />
    </div>
  )
}

export default Crediantial