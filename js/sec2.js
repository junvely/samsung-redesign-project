'use strict';

const sec2=document.querySelector('.section.sec2')
const bestBn=sec2.querySelector('.best_banner');
const bestBnLi=bestBn.querySelectorAll('.best_banner>ul>li');
const sec2ArrowBtn=sec2.querySelector('.sec2_arrowBtn');
const sec2Arrow=sec2ArrowBtn.querySelectorAll('span.sec2_arrow');
const sec2List=sec2.querySelector('.sec2_list');
const list=sec2List.querySelector('.list');
const listUl=list.querySelector('ul');
const listUlLi=listUl.querySelectorAll('li');

//sec2 메인배너 Left 이동
const bestGoLeftFunc=key=>{
    let gab=bestBnLi[1].offsetLeft-bestBnLi[0].offsetLeft;
    let goto=(-gab*key)+'px';
    bestBn.style.left=goto;
    bestBn.style.transition="all .5s"
};

//sec2 on2클래스
const addOn2ClassFunc=key=>{
    listUlLi.forEach((el,idx)=>{ 
        if(key==idx){
            el.classList.add('on2');
        }else{
            el.classList.remove('on2');
        }
    });
};

//sec2 베스트배너 갤러리
let a=-1
function bestGallery(){
    if(a>=bestBnLi.length-1) a=-1
    a++;
    bestGoLeftFunc(a);
    addOn2ClassFunc(a)
    if(a>=bestBnLi.length-1) a=-1;
}

//sec2 하단메뉴 클릭시 해당 배너나타남
listUl.addEventListener('click',()=>{
    let _target=event.target;
    listUlLi.forEach((el,idx)=>{
        if(el==_target){
            el.classList.add('on2');
            bestGoLeftFunc(idx);
            a=idx;
        }else{
            el.classList.remove('on2');
        }
    });
});

//sec2 arrow버튼 클릭시 이동
sec2ArrowBtn.addEventListener('click',()=>{
    let _target=event.target;
    console.log(_target);
    sec2Arrow.forEach((el,idx)=>{
        if(el==_target){
            if(el.classList.contains('arrowLeft')){
                a--;
                if(a<0)a=listUlLi.length-1;
                bestGoLeftFunc(a);
                addOn2ClassFunc(a);
            }else{
                a++;
                if(a>listUlLi.length-1) a=0;
                bestGoLeftFunc(a);
                addOn2ClassFunc(a);
            }
        }
    });
});




