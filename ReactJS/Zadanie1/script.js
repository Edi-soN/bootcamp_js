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

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.src, width: 200, height: 300})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));

