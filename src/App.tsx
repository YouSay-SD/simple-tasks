import React, { useState } from 'react';

type FormElement = React.FormEvent<HTMLFormElement>;

function App(): JSX.Element {

  const [ newTask, setNewTask ] = useState('');

  const handleSubmit = ( e: FormElement ) => {
    e.preventDefault();
  }

  const handleSetNewTask = ({ target }: any) => {
    setNewTask( target.value );
  }

  return (
    <>
      <form
        onSubmit={ handleSubmit }
      >
        <input 
          type="text" 
          onChange={ handleSetNewTask }  
        />

        <button>
          Save
        </button>
      </form> 
    </>
  );
}

export default App;
