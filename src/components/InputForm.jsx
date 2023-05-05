import React from 'react';

const InputForm = () => (
  <form className="form-control">
    <input type="text" placeholder="Add book title..." />
    <input type="text" placeholder="Add book author..." />
    <button type="submit" className="btn btn-block">Add Book</button>
  </form>
);

export default InputForm;
