'use script';

// const mobileMenu=document.querySelector('.mobile_menu');
// const mobileMenuCon=document.querySelector('.mobile_con');
// const mobileMenuConSub=mobileMenuCon.querySelector('ul.mobile_sub');
// // const mobileMenuConSubUlLi=mobileMenuCon.querySelector('ul.mobile_sub>li');
// const xBox=mobileMenuCon.querySelector('li.xBox');

// mobileMenu.addEventListener('click',()=>{
//     // mobileMenuCon.style.visibility="visible";
//     // mobileMenuCon.style.opacity="1";
//     mobileMenuCon.classList.add('show1');
//     mobileMenuConSub.style.right="0";
// });

// //Xbox 클릭시 모바일메뉴 사라짐
// xBox.addEventListener('click',()=>{
//     // mobileMenuCon.style.visibility="hidden";
//     // mobileMenuCon.style.opacity="0";
//     mobileMenuCon.classList.remove('show1');
// });



// let dropBtn = document.querySelector('li.drop_button');
// let dropAnswer = document.querySelector('.drop_answer');

// dropBtn.addEventListener('click',()=>{
//     dropAnswer.classList.toggle('active');
//     // dropAnswer.style.display="block";
// });

// let dropBox = document.querySelector('.list>ul>li:last-child');
// let dropBtn = dropBox.querySelector('.drop_button');
// let dropAnswer = dropBox.querySelector('.drop_answer');

// dropBox.addEventListener('click',()=>{
//     dropAnswer.classList.add('active');
// });

// document.querySelector('#toggle-button').addEventListener('click', function() {
//     document.querySelector('.section.collapsible').classList.toggle('collapsed');
//   });

// let toggle = document.querySelector('#toggle-button');
// let collapsed = document.querySelector('.section.collapsible');
// toggle.addEventListener('click',()=>{
//     collapsed.classList.toggle('collapsed');
// }); 


let listCon = document.querySelector('.list_con>ul>li');
let listQuestion = document.querySelector('.list_q');
let listAnswer = document.querySelector('.list_a');

// listQuestion.addEventListener('click',()=>{
//     // listAnswer.style.height="60px";
//     // listAnswer.style.visibility="visible";
//     listAnswer.classList.toggle('active');
// });

for(let i = 0; i < listQuestion.length; i++){
    listQuestion[i].addEventListener('click',function(ev){
        for(let j = 0; j < listCon.length; j++){
            listCon[j].classList.remove('active');
            ev.target.classList.add('active');
        }
    });
}