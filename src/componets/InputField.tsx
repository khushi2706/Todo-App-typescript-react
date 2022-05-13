import React, { useRef } from 'react'
import "./style.css"

// To provide types to argument
interface Props {
    todo: string;
    setTodo : React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) =>void;
}
const Inputfield = ({todo, setTodo , handleAdd} : Props ) => {
  
  const inputRef = useRef<HTMLInputElement>(null);
    return (
    <div>
        <form className='input' onSubmit={ 
            (e) => {handleAdd(e)
            inputRef.current?.blur();
        }
        }        
             action="">
            <input type="text" 
            ref = {inputRef}
            placeholder='Enter a Task' 
            className='input__box'
            value={todo}
            onChange={
            (e)=>setTodo(e.target.value)
            }/>
            <button className='input_submit'>GO</button>
        </form>
    </div>
  )
}

export default Inputfield