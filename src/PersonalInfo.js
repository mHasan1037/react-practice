import React from 'react'

const PersonalInfo = ({formData, setFormData}) => {
  return (
    <div>
        <input 
          type="text" 
          placeholder='First Name' 
          value={formData.firstName}
          onChange={(e)=>{
            setFormData({...formData, firstName: e.target.value})
          }}
        />
        <input 
          type="text" 
          placeholder='Last Name' 
          value={formData.lastName}
          onChange={(e)=>{
            setFormData({...formData, lastName: e.target.value})
          }}
        />
    </div>
  )
}

export default PersonalInfo