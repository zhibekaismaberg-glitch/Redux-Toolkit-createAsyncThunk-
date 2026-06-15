import { useState } from "react"
import { useSelector } from "react-redux"
import { todoActions } from "../store/todo-slice"
import { useActionCreators } from "../hooks/redux"
import { Input, Button, Card } from "antd"
import { CustomCheckbox } from "../ui/checkbox/checkbox"

export function Todos() {
    const [text, setText] = useState('')

    const todos = useSelector((store) => store.todo.data)

    const actions = useActionCreators(todoActions)

    const onCreate = () => {
        if (!text.trim()) 
            return actions.addTodo({ text }) 
        setText('')
    }

    return (
        <Card>
            <div>
                <Input 
                placeholder="Text..." 
                value={text} 
                onChange={e => setText(e.target.value)} />

                <Button type="primary" onClick={onCreate}>Create</Button>
            </div>
            <ul>
                {todos.map((item) => (
                    <li key={item.id}>
                        <span>{item.text}</span>
                        <CustomCheckbox checked={item.done} onChange={() => actions.toggleTodo({ id: item.id })}  />
                        <button onClick={() => actions.removeTodo({ id: item.id })}>
                            &times;
                        </button>
                    </li>
                ))}
            </ul>
        </Card>
    )
}