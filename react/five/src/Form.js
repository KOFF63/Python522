import { useState } from "react";

function Form(props) {
  const [value, setValue] = useState('');
  const { addTask } = props;

  const sendSubmit = e => {
    e.preventDefault(); 
    addTask(value);
    setValue(''); 
  }

  return (
    <div>
      <form onSubmit={sendSubmit}>  
        <input 
          type="text" 
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)} 
        />
      </form>
    </div>
  )
}

export default Form;