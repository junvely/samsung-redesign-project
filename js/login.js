'use strict';

const loginOkForm=document.querySelector('#loginOkForm');
const userId=loginOkForm.querySelector('#userId');
const userPw=loginOkForm.querySelector('#userPw');
const saveId=loginOkForm.querySelector('#saveId');
const loginOkBtn=loginOkForm.querySelector('#loginOkBtn');

loginOkBtn.addEventListener('click',loginOkFunc);

function loginOkFunc(e){
    if(userId.value=='' || userId.value==null || userId.value<=0){
        alert('아이디를 입력해주세요');
        userId.focus();
        return false;
    }
    if(userPw.value=='' || userPw.value==null || userPw.value<=0){
        alert('비밀번호를 입력해주세요');
        userPw.focus();
        return false;
    }
    if(saveId.checked==true){
        alert('아이디를 저장하시겠습니까?');
        saveId.focus();
    }
    alert('로그인을 실행합니다')
    loginOkForm.submit();
}