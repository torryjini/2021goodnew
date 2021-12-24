const main = document.querySelector("#main");
const menu1 = document.querySelector("#menu1");
const menu2 = document.querySelector("#menu2");
const menu3 = document.querySelector("#menu3");
const menu4 = document.querySelector("#menu4");
const menu5 = document.querySelector("#menu5");
const menu6 = document.querySelector("#menu6");
const menu7 = document.querySelector("#menu7");
const menu8 = document.querySelector("#menu8");
const menu9 = document.querySelector("#menu9");
const menu10 = document.querySelector("#menu10");
const menu11 = document.querySelector("#menu11");

const content = document.querySelector(".content");


function btnHandler(){
    if(main.checked) {
        content.innerHTML = `<iframe src="https://www.youtube.com/embed/ixN3_Zr0b8U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        content.classList.add("youtube")
    } else if(menu1.checked) {
        content.innerHTML = `<iframe src="https://www.youtube.com/embed/th_OC6M6B3c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        content.classList.add("youtube")
    } else if(menu2.checked) {
        content.innerHTML = `<img class="poster" src="img/부키드논.jpg" alt="부키드논목장 포스터">`
        content.classList.remove("youtube")
    } else if(menu3.checked) {
        content.innerHTML = `<img class="poster" src="img/쌀라띠까.png" alt="쌀라띠까목장 포스터">`
        content.classList.remove("youtube")
    } else if(menu4.checked) {
        content.innerHTML = `<iframe src="https://www.youtube.com/embed/vC8KU-7kb0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        content.classList.add("youtube")
    } else if(menu5.checked) {
        content.innerHTML = `<img class="poster" src="img/동고비2.png" alt="동고비목장 포스터"><img class="poster" src="img/동고비1.png" alt="동고비목장 포스터">`
        content.classList.remove("youtube")
    } else if(menu6.checked) {
        content.innerHTML = `<iframe src="https://www.youtube.com/embed/yXBA8xT_ikE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        content.classList.add("youtube")
    } else if(menu7.checked) {
        content.innerHTML = `<iframe src="https://www.youtube.com/embed/wx1O3B35ums" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        content.classList.add("youtube")
    } else if(menu8.checked) {
        content.innerHTML = `<iframe src="https://www.youtube.com/embed/9nO0tTj4G5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        content.classList.add("youtube")
    } else if(menu9.checked) {
        content.innerHTML = `<h1>JG목장 준비 중입니다...</h1>`
        content.classList.remove("youtube")
    } else if(menu10.checked) {
        content.innerHTML = `<iframe src="https://www.youtube.com/embed/Ou1EITKF2tc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        content.classList.add("youtube")
    } else if(menu11.checked) {
        content.innerHTML = `<iframe src="https://www.youtube.com/embed/HyAzW-LyO-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                             <br><br><iframe src="https://www.youtube.com/embed/eZKM0cGttRo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        content.classList.add("youtube")
    }
}

window.addEventListener("change", btnHandler)