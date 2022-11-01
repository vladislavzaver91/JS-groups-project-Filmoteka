import Pagination from 'tui-pagination';
import { refs } from './utilitiesJS/refs';
import { options } from './pagination';
import { createMessage } from './utilitiesJS/createEmptyLibMessage';
import { murkupGalleryOnBtn } from './watchedMovies';

refs.btnQueue.addEventListener('click', onBtnQueueClick);

export function onBtnQueueClick() {
  try {
    const queue = JSON.parse(localStorage.getItem('queue'));

    options.totalItems = queue.length;
    let start = 0;
    let end = 20;

    const handleSlice = currentPage => {
      start = currentPage * options.itemsPerPage - 20;
      end = currentPage * options.itemsPerPage;
    };

    if (!queue.length) {
      refs.containerLib.insertAdjacentHTML('beforeend', createMessage());
      refs.btnQueue.removeEventListener('click', onBtnQueueClick);
      refs.tuiContainer.classList.add('visually-hidden');
      return;
    } else {
      refs.tuiContainer.classList.remove('visually-hidden');
    }
    murkupGalleryOnBtn(queue.slice(start, end));

    const pagination = new Pagination(refs.tuiContainer, options);

    pagination.on('beforeMove', event => {
      const currentPage = event.page;
      handleSlice(currentPage);
      murkupGalleryOnBtn(queue.slice(start, end));
    });
  } catch (error) {
    console.log(error.message);
  }
}
