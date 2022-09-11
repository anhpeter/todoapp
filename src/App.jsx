import React from 'react';
import FieldLevelValidationForm from './components/FieldLevelValidationForm';
import SubmitValidationForm from './components/SubmitValidationForm';
import UserForm from './components/users/UserForm';
import UserSection from './components/users/UserSection';

function App() {
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <UserSection />
      <UserForm onSubmit={onSubmit} />
      <SubmitValidationForm />
      <FieldLevelValidationForm />
    </div>
  );
}

export default App;
