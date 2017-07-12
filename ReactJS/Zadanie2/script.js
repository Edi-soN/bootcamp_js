var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    src: 'https://actofrage.com/wp-content/uploads/2013/07/harry-potter-and-the-prisoner-of-azkaban-movie-poster.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    src: 'https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-12561-1lz3hha_fbe70d3f.jpeg'
  },
  {
    id: 3,
    title: 'Mordercza opona',
    desc: 'Posiadająca zdolności parapsychologiczne opona samochodowa obsesyjnie podąża za kobietą, pozbawiając życia każdego, kto stanie jej na drodze.',
    src: 'http://gfx.dlastudenta.pl/kultura/plakatyfilm/opona48148c2538cb3f06570945eb63d68fdc.jpg'
  },
  {
    id: 4,
    title: 'Czarna owca',
    desc: 'Zmutowane owce zaczynają atakować ludzi. ',
    src: 'https://i1.fdbimg.pl/ey7tz9/500x375_kd31i5.jpg'
  },
  {
    id: 5,
    title: 'Zombie SS',
    desc: 'Grupka studentów wyjeżdża na kilka dni w góry. Będą musieli się tam zmierzyć z bandą nazistowskich zombie.',
    src: 'http://1.fwcdn.pl/po/69/91/486991/7318527.3.jpg'
  }
];

var MovieList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {},
          this.props.movies.map(function(movie) {
            return React.createElement(Movie, {key: movie.id, movie: movie});
          })
        )
      )
    )
  }
});

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('li', {},
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDescription, {desc: this.props.movie.desc}),
        React.createElement(MoviePoster, {src: this.props.movie.src})
      )
    )
  }
});

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
    )
  }
});

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      React.createElement('p', {}, this.props.desc)
    )
  }
});

var MoviePoster = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
        React.createElement('img', {src: this.props.src, width: 200, height: 300})
    )
  }
});

var moviesList = React.createElement(MovieList, {movies: movies});

ReactDOM.render(moviesList, document.getElementById('app'));

