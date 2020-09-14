var sayHello, monitor, index, mainPage, profile, profileLink, profileP, gallery, coverPage, covers, cover;
sayHello = document.querySelector('.sayHello');
monitor = document.querySelector('.monitor');
mainPage = document.querySelector('.main-page');
profile = document.querySelector('.profile');
profileImg = document.querySelector('.profile img');
profileLink = document.querySelector('.links');
profileP = document.querySelector('.profile p');
gallery = document.querySelector('.gallery');
coverPage =  document.querySelector('.coverPage');
covers =  Array.from(document.querySelectorAll('.cover'));
cover = document.querySelector('.cover');
p = document.querySelector('.p');

// onload

function onload(){
    setTimeout(() => {
        var a = true;
        var i = 0;
        setInterval(() => {
            if(i < 3){
                if(a) {
                    sayHello.style.display = 'block';
                    i++;
                    a = false;
                } else {
                    sayHello.style.display = 'none';
                    i++;
                    a = true;
                }
            }
        }, 700);
    }, 1000);
};

onload();

// main page
sayHello.addEventListener('click', () => {
    monitor.style.display = 'none';
    sayHello.style.display = 'none';

    mainPage.style.display = 'flex';
    mainPage.style.height = '80vh';
    
    setTimeout(() => {
        profile.style.display = 'block';
        profileImg.style.display = 'block';
        profileLink.style.display = 'flex';
        profileP.style.display = 'block';
        gallery.style.display = 'flex';

        //image cover
        covers.forEach(el => {
            el.addEventListener('mouseover', () => {
                el.style.opacity = '0.4';
            });
            el.addEventListener('mouseout', () => {
                el.style.opacity = '0';
            });
        });

        // cover effect
        var b = true;
        var j = 0;
        setInterval(() => {
            if(j < 4){
                if(b){
                    covers[0].style.opacity = '0.4';
                    b = false;
                    j++;
                } else {
                    covers[0].style.opacity = '0';
                    b = true;
                    j++;
                }
            }
        }, 500);

        covers[0].addEventListener('click', () => {
            p.style.display = 'block';
            p.innerHTML = '평소 이곳 저곳을 여행하는 것을 좋아합니다<br>기회가 된다면 해외에서도 개발자로 활동해 보고 싶습니다<br>최종적으로는 풀스택 개발자를 꿈꾸고 있습니다 👩🏻‍💻'
        });

        covers[1].addEventListener('click', () => {
            p.style.display = 'block';
            p.innerHTML = '2019 경영학과 졸업 🎓<br>4년간의 대학생활을 통해 많은 것을 배웠고<br>마지막 학기에는 "경영정보기술"라는<br>전공 과목을 통해 처음 프로그래밍을 접했습니다'
        });

    }, 1200)
});



