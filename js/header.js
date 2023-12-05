'use script';

const mobileMenu=document.querySelector('.mobile_menu');
const mobileMenuCon=document.querySelector('.mobile_con');
const mobileMenuConSub=mobileMenuCon.querySelector('ul.mobile_sub');
// const mobileMenuConSubUlLi=mobileMenuCon.querySelector('ul.mobile_sub>li');
const xBox=mobileMenuCon.querySelector('li.xBox');

mobileMenu.addEventListener('click',()=>{
    // mobileMenuCon.style.visibility="visible";
    // mobileMenuCon.style.opacity="1";
    mobileMenuCon.classList.add('show1');
    mobileMenuConSub.style.right="0";
});

//Xbox 클릭시 모바일메뉴 사라짐
xBox.addEventListener('click',()=>{
    // mobileMenuCon.style.visibility="hidden";
    // mobileMenuCon.style.opacity="0";
    mobileMenuCon.classList.remove('show1');
});


