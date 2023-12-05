'use strict';

const sec1=document.querySelector('.section.sec1')
const mainBn=sec1.querySelector('.main_banner');
const mainBnLi=mainBn.querySelectorAll('ul>li');
const sec1ArrowBtn=sec1.querySelector('.sec1_arrowBtn');
const sec1Arrow=sec1ArrowBtn.querySelectorAll('span.sec1_arrow');
const bcon=sec1.querySelector('.bcon');
const items=bcon.querySelector('.items');
const itemsUl=items.querySelector('ul');
const itemsUlLi=itemsUl.querySelectorAll('li');

//배경이미지
const arrBn1=[];
for(let i=0;i<mainBnLi.length;i++){
    arrBn1.push('url(img/sec1_bn0'+i+'.jpg) no-repeat 50% /cover');
    mainBnLi[i].style.background=arrBn1[i];
}

//sec1 메인배너 Left 이동
const galleryGoLeftFunc=key=>{
    let gab=mainBnLi[1].offsetLeft-mainBnLi[0].offsetLeft;
    let goto=(-gab*key)+'px';
    mainBn.style.left=goto;
    mainBn.style.transition="all .5s"
};

//sec1 on클래스
const addOnClassFunc=key=>{ 
    itemsUlLi.forEach((el,idx)=>{ 
        if(key==idx){
            el.classList.add('on1');
        }else{
            el.classList.remove('on1');
        }
    });
};

//sec1 메인배너 오토갤러리
let i=-1
function autoGallery(){
    if(i>=mainBnLi.length-1) i=-1
    i++;
    galleryGoLeftFunc(i);
    addOnClassFunc(i)
    if(i>=mainBnLi.length-1) i=-1;
}
let setIn=setInterval(autoGallery,4000);

//마우스 오버시 멈춤
const overOut=sec1.querySelectorAll('.overOut');
overOut.forEach(el=>{
    el.addEventListener('mouseover',()=>clearInterval(setIn));
    el.addEventListener('mouseout',()=>setIn=setInterval(autoGallery,4000));
});

//sec1 하단메뉴 클릭시 해당 배너나타남
itemsUl.addEventListener('click',()=>{
    let _target=event.target;
    itemsUlLi.forEach((el,idx)=>{
        if(el==_target){
            el.classList.add('on1');
            galleryGoLeftFunc(idx);
            i=idx;
        }else{
            el.classList.remove('on1');
        }
    });
});

//sec1 arrow버튼 클릭시 이동
sec1ArrowBtn.addEventListener('click',()=>{
    let _target=event.target;
    sec1Arrow.forEach((el,idx)=>{
        if(el==_target){
            if(el.classList.contains('arrowLeft')){
                i--;
                if(i<0)i=itemsUlLi.length-1;
                galleryGoLeftFunc(i);
                addOnClassFunc(i);
            }else{
                i++;
                if(i>itemsUlLi.length-1) i=0;
                galleryGoLeftFunc(i);
                addOnClassFunc(i);
            }
        }
    });
});

(()=>autoGallery())();


