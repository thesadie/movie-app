import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import MovieListItem from './movieListItem.jsx';
import Search from './search.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      searchTerm: 'a'
    }

  }

  componentDidMount() {
    $.get(`/movies/${this.state.searchTerm}`, (data) => {
      this.setState({ movies: JSON.parse(data) })
    })
  }

  searchSubmit() {
    $.get(`/movies/${this.state.searchTerm}`, (data) => {
      this.setState({ movies: JSON.parse(data) })
    })
  }

  searchOnChange(query) {
    this.setState({searchTerm: query});
  }

  componentDidUpdate() {
    $.get(`/movies/${this.state.searchTerm}`, (data) => {
      this.setState({ movies: JSON.parse(data) })
    })
  }

  render() {
    var movies = this.state.movies;
    var list = movies.map((movie, key) => {
      return <MovieListItem key={key} title={movie.title} />
    })

    return (
      <div>
        <div id='topbar'>Movie List</div>
        <div id='searchbar'>
          <Search onSubmit={this.searchSubmit.bind(this)} onChange={this.searchOnChange.bind(this)}/>
        </div>
        <div id='movieList'>
          {list}
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
