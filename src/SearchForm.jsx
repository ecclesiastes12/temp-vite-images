import React from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    //NB e.target.elements will give you a list of element properties available in the form.
    //we can access a specific element using the name attribute of the form.

    //so to get the value of the input field we will use the value of the name attribute which in
    //this case is search
    const searchValue = e.target.elements.search.value;

    if (!searchValue) return;
    //console.log(searchValue);
    setSearchTerm(searchValue);
  };

  return (
    <section>
      <h1 className='title'>Unsplash images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-input search-input'
          name='search'
          placeholder='cat'
        />
        <button type='submit' className='btn'>
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
