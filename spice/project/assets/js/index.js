var caseDom = document.querySelector('.index-case');

hideCase();
window.addEventListener('resize', hideCase);

function hideCase() {
  if (window.innerHeight < 900) {
    caseDom.style.display = 'none';
  } else {
    caseDom.style.display = 'block';
  }
}