const images = document.querySelector('.images');
images.addEventListener('click', getImgSrc);
function getImgSrc({ target }) {
  const { src } = target;
  alert(src);
}
