{
  const aboutBtn = document.querySelector('.profile_aboutBtn');
  const about = document.querySelector('.profile_about');
  const aboutBtnHandler = () => about.classList.toggle('hide');
  aboutBtn.addEventListener('click', aboutBtnHandler);
}