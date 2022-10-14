let name = $('#name');
let email = $('#email');
let kod = $('#kod');
let ind=$('#indicator');



name.addEventListener('focus', (e) => {
    e.target.setAttribute('style', 'border:2px solid green');
    e.target.setAttribute('placeholder', 'Введите ваши фамилию');
})
name.addEventListener('blur', (e) => {
    if (e.target.value.trim().length === 0) {
        e.target.setAttribute('style', 'border:2px solid red');
        e.target.setAttribute('placeholder', 'please fill......');
        e.target.value = ''
    } else {
        e.target.setAttribute('placeholder', 'Введите ваши фамилию');
    }
})



email.addEventListener('focus', (e) => {
    e.target.setAttribute('style', 'border:2px solid green');
    e.target.setAttribute('placeholder', 'Введите ваши фамилию');
})
email.addEventListener('blur', (e) => {
    if (e.target.value.trim().length === 0) {
        e.target.setAttribute('style', 'border:2px solid red');
        e.target.setAttribute('placeholder', 'please fill......');
        e.target.value = ''
    } else {
        e.target.setAttribute('placeholder', 'Введите ваши фамилию');
    }
})
kod.addEventListener('focus', (e) => {
    if (e.target.value.trim().length === 0) {
        e.target.setAttribute('style', 'border:2px solid green');
        e.target.setAttribute('placeholder', 'Введите ваши фамилию');
        $('#close').setAttribute('class', 'eye d-block');
    } else {
        e.target.setAttribute('placeholder', 'Введите ваши фамилию');
    }
})
kod.addEventListener('blur', (e) => {   
    if (e.target.value.trim().length === 0) {
        e.target.setAttribute('style', 'border:2px solid red');
        e.target.setAttribute('placeholder', 'please fill......');
        e.target.value = ''
        $('#close').setAttribute('class', 'eye d-none');
    } else {
        e.target.setAttribute('placeholder', 'Введите ваши фамилию');
    }
})
$('#close').addEventListener('click',()=>{
    if($('#kod').getAttribute('type').toLowerCase()==='password'){
        $('#kod').setAttribute('type','text');
        $('#close').innerHTML='<i class="bi bi-eye-slash-fill"></i>'
    }else{
        $('#kod').setAttribute('type','password');
        $('#close').innerHTML='<i class="bi bi-eye-fill  " ></i>'
    }
    
})



////======= modal======/////
$('#modal-btn').addEventListener('click',()=>{
    if(kod.value.trim().length>0&&name.value.trim().length>0&&email.value.trim().length>0){
        $('#modal').setAttribute('class','modal-wrapper d-flex');
        setTimeout(function(){
        $('#modal').setAttribute('class','modal-wrapper slide');
        },3000)
    }
})