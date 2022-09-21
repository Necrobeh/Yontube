const videoSlide = document.getElementById('videoSlide');
const videos = [
    { img: 'img0', title: 'Une maison trop chou!', views: 200000, likes: 50, link: 'https://www.youtube.com/watch?v=pHnwN2Ro3vE&ab_channel=Prunelledumonde'},
    { img: 'img1', title: 'Promenade au lac d\' Unn', views: 300000, likes: 32000, link: 'https://www.youtube.com/watch?v=W6snmZMmJuk&t=65s&ab_channel=TheEmbracedOne'},
    { img: 'img2', title: 'Mérité.', views: 12, likes: 16, link: 'https://www.youtube.com/watch?v=IRyxeW1tNzc&ab_channel=FILMGRATIS'},
    { img: 'img3', title: 'Mythologies à St-Paul des Arts', views: 500, likes: 5000, link: 'https://www.youtube.com/watch?v=DvTAOI6vEHU&ab_channel=imineo'},
    { img: 'img4', title: 'Chris Christodoulou - Coalescence', views: 200000, likes: 40, link: 'https://www.youtube.com/watch?v=ysPtBjY8o_A&ab_channel=ChrisChristodoulou'},
    { img: 'img5', title: 'Danger - 22:41', views: 16000, likes: 0, link: 'https://www.youtube.com/watch?v=dpwer4u6e1c&ab_channel=Danger'},
    { img: 'img6', title: 'C\'est comme à la maison!', views: 4, likes: 100, link: 'https://www.youtube.com/watch?v=7rTKxHoU_Rc&ab_channel=AstronoGeek'},
    { img: 'img7', title: 'Ne posez pas de questions...', views: 1, likes: 10, link: 'https://www.youtube.com/watch?v=RBrNsKlttrA&ab_channel=JShayTranslations'}
]

function displayAllVideos(){
    for (let i = 0; i < videos.length; i++) {
        videoSlide.innerHTML += 
        `<div class="videos-container"><a href=${videos[i].link}>
        <div class="picture"><img src ="resources/${videos[i].img}.jpg"/></div>
        <div class="title">${videos[i].title}</div>
        <div class="views">${videos[i].views}</div>
        <div class="likes">${videos[i].likes}</div>
        </a></div>`
    }
}

displayAllVideos();

function search(){
    let getValue = document.getElementById('search').value;
    getValue = getValue.toLowerCase();
    let displayVids = videos.filter(object => object.title.toLowerCase().includes(getValue));
    videoSlide.innerHTML = '';
    if(getValue !== ''){
    for (let i = 0 ; i < displayVids.length ; i++) {
        videoSlide.innerHTML +=
        `<div class="videos-container"><a href=${displayVids[i].link}>
    <div class="picture"><img src ="resources/${displayVids[i].img}.jpg"/></div>
    <div class="title">${displayVids[i].title}</div>
    <div class="views">${displayVids[i].views}</div>
    <div class="likes">${displayVids[i].likes}</div>
    </a></div>`
    }}
    else{
        videoSlide.innerHTML = '';
        displayAllVideos();
    }
}



