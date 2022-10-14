//location js///
$('.loc').addEventListener('click', () => {
    $('.location').classList.toggle('swipe');
})
$('.bi').addEventListener('click', () => {
    $('.location').classList.add('swipe');
})
///slider ///////





let i = 0
const slider = function () {
    if (i > $$('.slide-item').length - 1) {
        i = 0
    }
    if (i < 0) {
        i = $$('.slide-item').length - 1
    }
    $('.slide-list').style.transform = `translateX(${-i * 950}px)`;
}
setInterval(() => {
    i++
    slider()
}
    , 5000
)
////slider//////
let a = 0
const slide = function () {
    if (a > $$('.popular-food-item').length - 3) {
        a = 0
    }
    if (a < 0) {
        a = $$('.popular-food-item').length - 3
    }
    $('.popular-food').style.transform = `translateX(${-a * 370}px)`;
}
$('.next').addEventListener('click', () => {
    a++
    slide()
})
$('.prevs').addEventListener('click', () => {
    a--
    slide()
})
// ======Dynamic elemntas====//////


let products = [
    {
        img: 'https://telegra.ph/file/7d0d1623d2f42b7ec64fb.png',
        name: '   Филадельфия и лосось сет',
        kg: '1260 грамм, 36 кусочков',
        sum: 1150,
    },
    {
        img: 'https://media.istockphoto.com/photos/fresh-sushi-selection-on-wooden-board-picture-id1298575561?b=1&k=20&m=1298575561&s=170667a&w=0&h=ObPuPuqSbF2zwHVTL-8tO7Qgh7I9u1UEfersyvhWZAs=',
        name: 'Саломон сет',
        kg: '1050 грамм, 36 кусочков',
        sum: 1150,
    },
    {
        img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        name: '   Самая большая Филадельфия',
        kg: '1160 грамм, 12 кусочков',
        sum: 1151,
    },
    {
        img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        name: '   Филадельфия и лосось сет',
        kg: '1560 грамм, 23 кусочков',
        sum: 1650,
    },
    {
        img: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1c2hpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        name: '   Филадельфия и лосось сет',
        kg: '1700 грамм, 10 кусочков',
        sum: 1600,
    },
    {
        img: 'https://images.unsplash.com/photo-1562802378-063ec186a863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHN1c2hpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        name: 'Самая большая Филадельфия  ',
        kg: '2230 грамм, 34 кусочков',
        sum: 150,
    },
    {
        img: 'https://media.istockphoto.com/photos/set-of-sushi-and-maki-picture-id1208806649?k=20&m=1208806649&s=612x612&w=0&h=aPRW4qgHDlHuNzu8IDkD98lLovclLd-UglXKbfi4OC0=',
        name: '   Филадельфия и лосось сет',
        kg: '5260 грамм, 31 кусочков',
        sum: 4150,
    },
    {
        img: 'https://media.istockphoto.com/photos/maki-sushi-food-picture-id1053853732?k=20&m=1053853732&s=612x612&w=0&h=uNAmtghuUwdCQ3ITWKprPG5eVYy0OKuu6uZ6KuymdbU=',
        name: 'Самая большая Филадельфия',
        kg: '1860 грамм, 26 кусочков',
        sum: 1650,
    },
    {
        img: 'https://media.istockphoto.com/photos/healthy-fresh-sushi-roll-set-with-ginger-close-up-japanese-food-picture-id1286622470?k=20&m=1286622470&s=612x612&w=0&h=dKDiNtGS6tqAF3vn6x_H34_1seRJNFEBLFatpgcA-p8=',
        name: '   Филадельфия и лосось сет',
        kg: '560 грамм, 10 кусочков',
        sum: 3150,
    },
    {
        img: 'https://media.istockphoto.com/photos/eating-healthy-kale-sushi-picture-id592689444?k=20&m=592689444&s=612x612&w=0&h=Rurfi5yOfKrdTYPJT932uAPjbdQELGmn_P5dxo37YwY=',
        name: '   Самая большая Филадельфия',
        kg: '1120 грамм, 42 кусочков',
        sum: 3450,
    }
]




let wrapper=$('.wrapper')
products.forEach(e => {
    const div = document.createElement('div')
    div.setAttribute('class', 'popular-food-item ',)
    div.innerHTML =
        `
    <img  src=${e.img} alt='rasm' width='500'height='420' >
    <h2 >${e.name}</h2>
    <p >${e.kg}</p>
    <div class='box'>
    <span >${e.sum}COM</span>
    <a href='#'>Хочу!</a>
    </div>
    `;  
    $('.wrapper').appendChild(div);
});



