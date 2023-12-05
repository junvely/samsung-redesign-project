'use strict';
// const gnbLi=$('.gnb>ul>li');
// $('.gnb>ul>li').on('mouseover',()=>{
//     console.log($(event.currentTarget));
//     console.log($(event.target));
//     let _cTarget=$(event.currentTarget);

//     // _cTarget.find('.gnb_sub').addClass('on');
//     // _cTarget.$(".gnb_sub").slideDown().find('.gnb_sub').removeClass('on');
//     if(key==0){
//         $('.gnb_sub').slideDown(50);
//     }
// });
// $('.gnb_sub').on('mouseover',()=>{

// });
// $('.gnb_sub').on('mouseout',()=>{
//     let _cTarget=$(evnet.currentTarget);
//     _cTarget.slideUp(100);
// });

const gnb=document.querySelector('.gnb');
const gnbLi=gnb.querySelectorAll('ul>li');
const subGnb=document.querySelector('.gnb_sub');

gnbLi.forEach((el)=>{
    el.addEventListener('click',()=>{
        subGnb.style.visibility="visible";
        subGnb.style.opacity="1";
    });
});
