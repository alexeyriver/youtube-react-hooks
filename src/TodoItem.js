import React, { useState, useContext } from 'react'
import { Context } from './context'
import TodoList from './TodoList'


export default function TodoItem({ title, id, complited }) {


  // const [checked, setChecket] = useState(completed)
  const { toggledTodo, removeTodo, setTodos } = useContext(Context)

  const cls = ['todo']
  const [showEdit, setShowEdit] = useState(false)

  if (complited) {
    cls.push('completed')
  }

  const handleEdit = e => {
    e.preventDefault()
    let { teext } = e.target
    console.log(teext.value);
    setTodos((prev) => {
      let j = prev.findIndex(element => (element.id === id)
      );
      prev[j].title = teext.value

      return [...prev]
    })
    setShowEdit(false)
  }


  return (
    <li className={cls.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked={complited}
          onChange={() => toggledTodo(id)}
        />
        <span >{title}</span>
        {showEdit && <form onSubmit={(e) => {
          handleEdit(e)
        }} > <input name="teext" defaultValue={title} type="text" id={id}

          />
          <button type="submit"
          >Submit Changes</button>
        </form>}

        <button
          onClick={() => setShowEdit(true)}
        >EDIT</button>
        <i
          className="material-icons red-text"
          onClick={() => removeTodo(id)}
        >
          delete
        </i>
      </label>
    </li>
  )
}
