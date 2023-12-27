'use strict';

// メインヴィジュアルの画像の切り替え

let mainImg = new Array("./image/main-visual/main-img1.jpg", "./image/main-visual/main-img2.jpg", "./image/main-visual/main-img3.jpg", "./image/main-visual/main-img4.jpg");
let num = -1;

slideshow();

function slideshow() {
  if (num == 3) {
    num = 0;
  } else {
    num ++;
  }
  document.getElementById('main-img').src = mainImg[num];
  setTimeout('slideshow()', 7000);
}

// オールアイテムの表示・非表示の切り替え

const itemBtn = document.getElementById('item-btn');
itemBtn.addEventListener('click', function() {
  let itemFlex = document.querySelectorAll('.item-item');
  itemFlex.forEach(function(element) {
    element.classList.toggle('open');
    if (element.classList.contains('open')) {
      itemBtn.innerHTML = 'Fold';
    } else {
      itemBtn.innerHTML = 'More';
    }
  });
});


// ナビゲーションボタンの動作

const navBtn = document.getElementById('nav-btn');
const navBg = document.getElementById('nav-bg');
const navArea = document.querySelector('.nav-area');
navBtn.addEventListener('click', function() {
  navBtn.classList.toggle('open');
  navBg.classList.toggle('open');
  navArea.classList.toggle('open');
});

// ナビゲーションの背景をクリックした時の動作

navBg.addEventListener('click', function() {
  if (navBg.classList.contains('open')) {
    navBtn.classList.remove('open');
    navBg.classList.remove('open');
    navArea.classList.remove('open');
  }
});