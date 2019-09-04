const images = document.querySelector('.images');
images.addEventListener('click', getImgSrc);
function getImgSrc({ target }) {
  event.preventDefault();
  const { src } = target;
  alert(src);
}
