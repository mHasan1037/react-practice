import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import './App.css'
import ExpenseForm from './Components/ExpenseForm';
import Alert from './Components/Alert';
import ExpenseList from './Components/ExpenseList';
import { v4 as uuid } from 'uuid';

const initialExpenses = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : [];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses)
  const [charge, setCharge] = useState('')
  const [amount, setAmount] = useState('')
  const [alert, setAlert] = useState({show: false})
  const [id, setId] = useState(0)
  const [edit, setEdit] = useState(false)


  const handleCharge = e =>{
    setCharge(e.target.value)
  }

  const handleAmount = e =>{
    setAmount(e.target.value)
  }

  const handleAlert = ({type, text}) =>{
    setAlert({show: true, type, text})
    setTimeout(()=>{
       setAlert({show: false})
    }, 2000)
  }

  const removeAll = () =>{
    setExpenses([])
    handleAlert({text: 'All item is deleted', type: 'danger'})
  }

  const deleteItem = (id) =>{
      setExpenses(expenses.filter(expense => expense.id !== id))
      handleAlert({text: 'One item is deleted', type: 'danger'})
  }

  const editItem = (id) =>{
    const singleItem = expenses.find(expense => expense.id === id)
    setCharge(singleItem.charge)
    setAmount(singleItem.amount)
    setId(id)
    setEdit(true)
  }

  const handleSubmit = e =>{
    e.preventDefault()
    if(charge !== '' && amount > 0){
      if(edit){
        let tempExpenses = expenses.map((item)=>{
           return item.id === id ? {...item, charge, amount} : item
        })
        setExpenses(tempExpenses)
        setEdit(false)
        setId(0)
        handleAlert({type: 'success', text: 'Item is edited'})
      }else{
        const singleExpense = {id: uuid(), charge, amount}
        setExpenses([...expenses, singleExpense])
        handleAlert({text: 'Your expense is successfully added', type: 'success'})
      }
         setCharge('')
         setAmount('')
    }
    else{
         handleAlert({text: 'Please put value in the form', type: 'danger'})
    }
  }

  useEffect(()=>{
      localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>Budget Calculator</h1>
      <main className='App'>
        <ExpenseForm 
           charge={charge} 
           amount={amount} 
           handleAmount={handleAmount} 
           handleCharge={handleCharge}
           handleSubmit={handleSubmit}
           isEditing={edit} 
        />
        <ExpenseList expenses={expenses} removeAll={removeAll} deleteItem={deleteItem} editItem={editItem} />
      </main>
      <h1>
        Total spending: <span className='total'>
          $ {expenses.reduce((acc, curr)=>{
               return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;

