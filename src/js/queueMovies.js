import Pagination from 'tui-pagination';

import { refs } from './utilitiesJS/refs';
import { posterСheck } from './utilitiesJS/posterCheck';
import { clearPage } from './utilitiesJS/clearPage';
import { genresArr } from './utilitiesJS/genres';
import { options } from './pagination';


refs.btnQueue.addEventListener('click', onBtnQueueClick);

function onBtnQueueClick() {
  // clearPage();

  const queue = JSON.parse(localStorage.getItem('queue'));
  murkupGalleryOnBtnQueued(queue);

  try {
    const queue = JSON.parse(localStorage.getItem('queue'));
    options.totalItems = queue.length;
    let start = 0;
    let end = 20;

    if (!queue.length) {
      refs.mainList.classList.add('not-films');
      refs.containerLib.insertAdjacentHTML('beforeend', createMessage());
      refs.btnQueue.removeEventListener('click', onBtnQueueClick);
      const item = document.querySelector('.tui-js');
      item.classList.add('visually-hidden');
      return;
    } else {
      const item = document.querySelector('.tui-js');
      item.classList.remove('visually-hidden');
    }

    murkupGalleryOnBtnQueued(queue.slice(start, end));

    const container = document.querySelector('.tui-pagination');

    const pagination = new Pagination(container, options);

    pagination.on('beforeMove', event => {
      const currentPage = event.page;
      start = currentPage * options.itemsPerPage - 20;
      end = currentPage * options.itemsPerPage;
      serverApi.setPage(currentPage);
      serverApi.incrementRequestCount();
      murkupGalleryOnBtnQueued(queue.slice(start, end));
    });
  } catch (error) {
    console.log(error.message);
  }
}

function murkupGalleryOnBtnQueued(movies) {
  const moviesMurkup = movies
    .map(({ original_title, title, poster_path, id, genres, release_date }) => {
      let genresMovie = null;
      let releaseDate = null;

      const genresId = genres.map(genre => genre.id);
      const src = posterСheck(poster_path);

      const genresMovies = genresArr.reduce((acc, genre) => {
        if (genresId.includes(genre.id)) {
          acc.push(genre.name);
        }
        return acc;
      }, []);

      if (genresMovies.length > 3) {
        genresMovie = genresMovies.slice(0, 2);
        genresMovie.splice(2, 1, 'Other');
      } else if (genresMovies.length === 0) {
        genresMovie = [`Genres not found`];
      } else {
        genresMovie = genresMovies;
      }

      if (release_date === '') {
        releaseDate = 'Release data no found';
      } else {
        releaseDate = release_date.slice(0, 4);
      }

      return `
        <li class="film__item" data-id="${id}">
        <img src="${src}" class="film__img" alt="${original_title}" />
        <p class="film__title">${title}</p>
        <p class="film__genre">${genresMovie.join(`, `)} | ${releaseDate}</p>
      </li>`;
    })
    .join(``);

  return (refs.galleryLibrary.innerHTML = moviesMurkup);
}
