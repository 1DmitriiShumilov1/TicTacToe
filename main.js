if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', pageLoaded);
} else {
    pageLoaded();
}

function pageLoaded(){
    const mainMenu = document.getElementsByClassName('main')
    for (i = 0; i < mainMenu.length; i++){
        mainMenu[i].style.opacity = '1';
    }
}