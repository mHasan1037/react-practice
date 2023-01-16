import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import style from './expense.module.css'

const Expense = ({expenseData, onTotalExpenseChange}) => {
  const [totalExpense, setTotalExpense] = useState(0)
  const [displayData, setDisplayData] = useState([])

  const deleteExpense = (id) =>{
    const deleteExpense = displayData.find(data => data.id === id)
    const deleteCost = deleteExpense.amount
    setTotalExpense(prevExp => prevExp - deleteCost)
    setDisplayData(prevData => prevData.filter(data => data.id !== id))
    onTotalExpenseChange(deleteCost)
  }

  useEffect(()=>{
    if (!expenseData.amount) return;
    setTotalExpense(totalExpense + expenseData.amount)
    setDisplayData((prevData)=> [...prevData, expenseData])
  }, [expenseData])

  return (
    <div className={style.container}>
       <div className={totalExpense > 0 ? style.main : style.mainBlock}>
           <h1>Total Expense: {totalExpense}</h1>
           <div className={style.expenseContainer}>
                {displayData.map((data, idx)=>{
                    const {total, type, date, amount, category, id} = data
                  return (
                    <div key={id} className={style.expenseBox}>
                        <div className={style.expenseDetail}>
                          <p>{category}</p>
                          <div>
                            <span>{amount}</span>
                            <span>{date}</span>
                          </div>
                        </div>
                        <button onClick={()=> deleteExpense(id)}>
                          <AiFillDelete />
                        </button>
                    </div>
                  )
                })}
           </div>
       </div>
    </div>
  )
}

export default Expense