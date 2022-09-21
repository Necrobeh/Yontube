const videoSlide = document.getElementById('videoSlide');
const inputScroll = document.getElementById('autocompletion');
const videos = [
    { img: 'img0', title: 'Une maison trop chou!', views: 200000, likes: 50, link: 'https://www.youtube.com/watch?v=pHnwN2Ro3vE&ab_channel=Prunelledumonde' },
    { img: 'img1', title: 'Promenade au lac d\' Unn', views: 300000, likes: 32000, link: 'https://www.youtube.com/watch?v=W6snmZMmJuk&t=65s&ab_channel=TheEmbracedOne' },
    { img: 'img2', title: 'Mérité.', views: 12, likes: 16, link: 'https://www.youtube.com/watch?v=IRyxeW1tNzc&ab_channel=FILMGRATIS' },
    { img: 'img3', title: 'Mythologies à St-Paul des Arts', views: 500, likes: 5000, link: 'https://www.youtube.com/watch?v=DvTAOI6vEHU&ab_channel=imineo' },
    { img: 'img4', title: 'Chris Christodoulou - Coalescence', views: 200000, likes: 40, link: 'https://www.youtube.com/watch?v=ysPtBjY8o_A&ab_channel=ChrisChristodoulou' },
    { img: 'img5', title: 'Danger - 22:41', views: 16000, likes: 0, link: 'https://www.youtube.com/watch?v=dpwer4u6e1c&ab_channel=Danger' },
    { img: 'img6', title: 'C\'est comme à la maison!', views: 4, likes: 100, link: 'https://www.youtube.com/watch?v=7rTKxHoU_Rc&ab_channel=AstronoGeek' },
    { img: 'img7', title: 'Ne posez pas de questions...', views: 1, likes: 10, link: 'https://www.youtube.com/watch?v=RBrNsKlttrA&ab_channel=JShayTranslations' }
]

function displayAllVideos() {
    for (let i = 0; i < videos.length; i++) {
        videoSlide.innerHTML +=
            `<div class="videos-container"><a href=${videos[i].link}>
        <div class="picture"><img src ="resources/${videos[i].img}.jpg"/></div>
        <div class="title">${videos[i].title}</div>
        <div class="views">${videos[i].views}</div>
        <div class="likes">${videos[i].likes}</div>
        </a></div>`;
    }
}

function videoFilter(input) {
    let filteredVideos = videos.filter(arr => arr.title.toLowerCase().includes(input));
    return filteredVideos;
}

displayAllVideos();

function search() {
    let getValue = document.getElementById('search').value;
    getValue = getValue.toLowerCase();
    const filteredVideos = videoFilter(getValue);
    videoSlide.innerHTML = '';
    if (getValue !== '') {
        for (let i = 0; i < filteredVideos.length; i++) {
            videoSlide.innerHTML +=
            `<div class="videos-container"><a href=${filteredVideos[i].link}>
            <div class="picture"><img src ="resources/${filteredVideos[i].img}.jpg"/></div>
            <div class="title">${filteredVideos[i].title}</div>
            <div class="views">${filteredVideos[i].views}</div>
            <div class="likes">${filteredVideos[i].likes}</div>
            </a></div>`;
            
        }
        inputScroll.innerHTML = '';
        for (let j = 0 ; j < filteredVideos.length ; j++){
            inputScroll.innerHTML += `<div><p>${filteredVideos[j].title}</p></div>`;
        }
    }
    else {
        videoSlide.innerHTML = '';
        inputScroll.innerHTML = '';
        displayAllVideos();
    }
}

