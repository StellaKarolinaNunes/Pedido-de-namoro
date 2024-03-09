const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const simBtn = document.querySelector('.sim-btn');
const naoBtn = document.querySelector('.nao-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const naoBtnRect = naoBtn.getBoundingClientRect();

simBtn.addEventListener('click', () => {
  window.location.href = 'teamo.html'; 
});

naoBtn.addEventListener('mouseover', () => {
  const i = Math.floor(Math.random() * (wrapperRect.width - naoBtnRect.width)) + 1;
  const j = Math.floor(Math.random() * (wrapperRect.height - naoBtnRect.height)) + 1;
  naoBtn.style.left = i + 'px';
  naoBtn.style.top = j + 'px';
});
