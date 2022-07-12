const menuButton = document.querySelectorAll('#menuItem'),

      crossButton = document.querySelectorAll('#crossButton'),

      shellHome = document.querySelectorAll('.shell');


  menuButton[0].addEventListener('click',showHome);
  
  menuButton[1].addEventListener('click',showHome);
   
  menuButton[2].addEventListener('click',showHome);
  
  menuButton[3].addEventListener('click',showHome);
  
  menuButton[4].addEventListener('click',showHome);
   




   crossButton[0].addEventListener('click',notShowHome);

   crossButton[1].addEventListener('click',notShowHome);

   crossButton[2].addEventListener('click',notShowHome);

   crossButton[3].addEventListener('click',notShowHome);

   crossButton[4].addEventListener('click',notShowHome);

function showHome(event){

      const homeClick = event.composedPath().includes(menuButton[0]);
      const findClick = event.composedPath().includes(menuButton[1]);
      const appsClick = event.composedPath().includes(menuButton[2]);
      const testClick = event.composedPath().includes(menuButton[3]);
      const aboutUsClick = event.composedPath().includes(menuButton[4]);

      if(homeClick){
            shellHome[0].classList.add('showMenuItems');
            document.body.style.overflow = 'hidden';
      }  else if(findClick){
            shellHome[1].classList.add('showMenuItems');
            document.body.style.overflow = 'hidden';
      }  else if(appsClick){
            shellHome[2].classList.add('showMenuItems');
            document.body.style.overflow = 'hidden';
      }  else if(testClick){
            shellHome[3].classList.add('showMenuItems');
            document.body.style.overflow = 'hidden';
      }  else if(aboutUsClick){
            shellHome[4].classList.add('showMenuItems');
            document.body.style.overflow = 'hidden';
      }

}
function notShowHome(){

   for(let i=0;i<shellHome.length;i++){

      shellHome[i].classList.remove('showMenuItems');

   }
   
   document.body.style.overflow ='visible';

}

const modifiedTwoItemMenu = document.querySelectorAll('.infoHome');

modifiedTwoItemMenu[2].style.margin = '9vw 0 0 0';
