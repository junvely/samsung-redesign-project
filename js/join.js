'use strict';

const joinOkForm=document.querySelector('#joinOkForm');
const userName=joinOkForm.querySelector('#userName');
const userNumber=joinOkForm.querySelector('#userNumber');
const userId=joinOkForm.querySelector('#userId');
const userPw=joinOkForm.querySelector('#userPw');
const userPwOk=joinOkForm.querySelector('#userPwOk');
const PwOk=joinOkForm.querySelector('span#pwOk');
const agree=joinOkForm.querySelector('#agreement');
const joinOkBtn=joinOkForm.querySelector('#joinOkBtn');

joinOkBtn.addEventListener('click',joinOkFunc);

function joinOkFunc(e){
    // 이름
    if(userName.value=='' || userName.value==null || userName.value<=0){
        alert('이름을 입력해주세요');
        userName.focus();
        return false;
    }
    // 전화번호
    if(userNumber.value=='' || userNumber.value==null || userNumber.value<=0){
        alert('전화번호를 입력해주세요');
        userNumber.focus();
        return false;
    }
    if(userNumber.value.length<10){
        alert('전화번호는 10글자 이상 입력해주세요.');
        userNumber.focus();
        return false;
    }
    // 아이디
    if(userId.value=='' || userId.value==null || userId.value<=0){
        alert('아이디를 입력해주세요');
        userId.focus();
        return false;
    }
    if(userId.value.length<5){
        alert('아이디는 5글자 이상 10글자 미만으로 입력해주세요.');
        userId.focus();
        return false;
    }
    // 비밀번호
    if(userPw.value=='' || userPw.value==null || userPw.value<=0){
        alert('비밀번호를 입력해주세요');
        userPw.focus();
        return false;
    }
    if(userPw.value.length<5){
        alert('비밀번호는 5글자 이상으로 입력해주세요.');
        userPw.focus();
        return false;
    }
    // 비밀번호 확인
    if(userPwOk.value=='' || userPwOk.value==null || userPwOk.value<=0){
        alert('비밀번호 확인란을 입력해주세요.');
        userPwOk.focus();
        return false;
    }
    if(PwOkFunc()==false){
        alert("비밀번호가 일치하지 않습니다. 다시 입력해주세요");
        userPwOk.focus();
        return false;
    }
    // 이용약관 동의
    if(agree.checked==false){
        alert('이용약관에 동의하지 않으면 회원가입을 진행할 수 없습니다.');
        agree.focus();
        return false;
    }
    alert('회원가입을 실행합니다')
    joinOkForm.submit();
}

userPwOk.addEventListener('keyup',PwOkFunc);
function PwOkFunc(e){
    if(userPw.value==userPwOk.value){
        PwOk.innerText="비밀번호가 일치합니다.";
        return true;
    }else{
        PwOk.innerText="비밀번호가 일치하지 않습니다.";
        return false;
    }
}