// primeiro precisamos criar o evento de abrir o menu 
/*function munuToggle(){
    let menuArea = document.getElementById('menu-area');

     if(menuArea.classList.contains('menu-opened') == true){
         menuArea.classList.remove('menu-opened');
     }else {
         menuArea.classList.add('menu-opened');
     }

}
*/

let menuOppener = document.getElementById('menu-opener')
let menuArea = document.getElementById('menu-area')
menuOppener.addEventListener('click', showmenu)
function showmenu(){
    
    if (menuArea.style.width == '' || menuArea.style.width == '0px') {
        menuArea.style.width = '200px'
       
    }else{
        menuArea.style.width = '0px'
        
    }
}