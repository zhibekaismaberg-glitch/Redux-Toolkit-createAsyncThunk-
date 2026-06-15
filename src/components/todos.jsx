import { useState } from "react"
import { useSelector } from "react-redux"
import { todoActions } from "../store/todo-slice"
import { useActionCreators } from "../hooks/redux"

export function Todos() {
    const [text, setText] = useState('')

    const todos = useSelector((store) => store.todo.data)

    const actions = useActionCreators(todoActions)

    const onCreate = () => {
        actions.addTodo({ text })
        setText('')
    }


    return (
        <div>
            <div>
                <input type="text" placeholder="Text..." value={text} onChange={e => setText(e.target.value)} />
                <button onClick={onCreate}>Create</button>
            </div>
            <ul>
                {todos.map((item => (
                    <li key={item.id}>
                        <span>{item.text}</span>
                        <input type="checkbox" checked={item.done} onChange={() => actions.toggleTodo({ id: item.id })}  />
                        <button onClick={() => actions.removeTodo({ id: item.id })}>
                            &times;
                        </button>
                    </li>
                )))}
            </ul>
        </div>
    )
}