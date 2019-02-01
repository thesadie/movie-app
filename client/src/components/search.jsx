import React from 'react';

function Search(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input placeholder="Search..." onChange={props.onChange}></input>
      <input type='submit' value='Go!'></input>
    </form>
  )
}

export default Search;