import React from 'react';
import ReactDOM from 'react-dom';

import MovieListItem from './movieListItem.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [
        { title: 'Mean Girls' },
        { title: 'Hackers' },
        { title: 'The Grey' },
        { title: 'Sunshine' },
        { title: 'Ex Machina' },
      ]
    }

  }

  render() {
    var movies = this.state.movies;
    var list = movies.map((movie, key) => {
      return <MovieListItem key={key} title={movie.title} />
    })

    return (
      <div>
        <div id='topbar'>Movie List</div>
        <div id='movieList'>
          {list}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
