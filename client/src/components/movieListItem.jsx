import React from 'react';
import ReactDOM from 'react-dom'

function MovieListItem(props) {
  return (
    <div className='titleBox'>{props.title}</div>
  )
}

export default MovieListItem;