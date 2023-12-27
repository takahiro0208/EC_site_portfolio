'use strict';


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