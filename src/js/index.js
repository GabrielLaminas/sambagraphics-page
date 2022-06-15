const buttonMenu 
  = document.querySelector('.show--button');

const listShow 
  = document.querySelector('.header__nav');

const search 
  = document.querySelector('.header__search');

const flexContainer 
  = document.querySelector('.container__flex');

buttonMenu.addEventListener('click', function({target}){
  target.classList.toggle('active');
  listShow.classList.toggle('active');

  if(target.getAttribute('class') === 'show--button active'){
    target.style.background 
      = 'url("../../../assets/images/iconx.png")'
  }

  if(target.getAttribute('class') === 'show--button'){
    target.style.background 
      = 'url("../../../assets/images/menu.png")'
  }
})

function resetItems(){
  if(this.innerWidth <= 500){
    listShow.append(search);
  }
  else if(this.innerWidth >= 1280){
    buttonMenu.classList.remove('active');
    buttonMenu.style.background 
      = 'url("../../../assets/images/menu.png")';
    listShow.classList.remove('active');
  } 
  else{
    flexContainer.append(search);
  }
}
resetItems();

window.addEventListener('resize', resetItems);