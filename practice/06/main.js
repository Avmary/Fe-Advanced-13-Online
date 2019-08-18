// ========= 1-oе решение ========================================================

function createMovieCardElem(
  tag,
  className,
  text = null,
  id = null,
  src = null,
  alt = null,
) {
  const element = document.createElement(tag);
  className.split(' ').map(e => element.classList.add(e));
  if (text) {
    element.textContent = text;
  }
  if (id) {
    element.id = id;
  }
  if (src) {
    element.src = src;
  }
  if (alt) {
    element.alt = alt;
  }
  return element;
}

function createMovieCard({
  imdbID,
  Image,
  Title,
  Description,
  Release,
  Rating,
}) {
  const wrap = createMovieCardElem('div', 'wrap');
  const movie = createMovieCardElem('div', 'movie', null, imdbID);
  const image = createMovieCardElem('img', 'movie__image', null, null, Image, Title);
  const body = createMovieCardElem('div', 'movie__body');
  const title = createMovieCardElem('h2', 'movie__title', Title);
  const description = createMovieCardElem('p', 'movie__description', Description);
  const release = createMovieCardElem('p', 'movie__date', `Released: ${Release}`);
  const rating = createMovieCardElem('p', 'movie__rating', `Rating: ${Rating}`);
  wrap.append(movie);
  movie.append(image, body);
  body.append(title, description, release, rating);
  return wrap;
}

function createMovieCardsList(listRef, movieCards) {
  const cardsList = movieCards.map(item => createMovieCard(item));
  listRef.append(...cardsList);
}

const list = document.querySelector('.wrap');
createMovieCardsList(list, movieCards);

// ========= 2-oе решение (Банальное)========================================================

// function createMovieCard() {
//   const movie = document.createElement('div');
//   movie.classList.add('movie');

//   const img = document.createElement('img');
//   img.classList.add('movie__image');
//   img.src = 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg';
//   img.alt = 'movie image';

//   const body = document.createElement('div');
//   body.classList.add('movie__body');

//   const title = document.createElement('h2');
//   title.classList.add('movie__title');
//   title.textContent = 'The Godfather';

//   const description = document.createElement('p');
//   description.classList.add('movie__description');
//   description.textContent = ' Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.';

//   const date = document.createElement('p');
//   date.classList.add('movie__date');
//   date.textContent = 'Released: 1972-03-14';

//   const rating = document.createElement('p');
//   rating.classList.add('movie__rating');
//   rating.textContent = 'Rating: 8.6';

//   movie.appendChild(img);
//   movie.appendChild(body);
//   body.appendChild(title);
//   body.appendChild(description);
//   body.appendChild(date);
//   body.appendChild(rating);
//   return movie;
// }

// const list = document.querySelector('body');
// const item = createMovieCard();

// list.appendChild(item);
