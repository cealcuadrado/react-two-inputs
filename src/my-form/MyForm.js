import { useState } from 'react';
import './MyForm.css';

function MyForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`My name is ${inputs.username}. I'm ${inputs.age} years old`);
    }

    return (
      <div className="my-form">
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label>Username</label>
            <input type="name" class="form-control" name="username" value={inputs.username || ''} onChange={handleChange}/>
          </div>
          <div class="form-group mb-2">
            <label>Age</label>
            <input type="number" class="form-control" name="age" value={inputs.age || ''} onChange={handleChange}/>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">
                Enviar
            </button>
          </div>
        </form>
        <hr />
        <p>Username: {inputs.username}</p>
        <p>Age: {inputs.age}</p>
      </div>
    );
}

export default MyForm;