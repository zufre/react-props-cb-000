import React from 'react';
import ReactDOM from 'react-dom';


class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img  
          src={this.props.poster} 
          alt={this.props.title} 
        />
        <h2>{this.props.title}</h2>
        <small>Genres: {this.props.genres.join(', ')}</small>
      </div>
    );
  }
}