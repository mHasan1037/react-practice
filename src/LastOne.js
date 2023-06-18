import React from 'react'

const LastOne = ({formData, setFormData}) => {
  return (
    <div>
       <input 
         type="type" 
         placeholder='Other info' 
         value={formData.other}
         onChange={(e)=>{
            setFormData({...formData, other: e.target.value})
         }}
       />
    </div>
  )
}

export default LastOne