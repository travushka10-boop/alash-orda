
const toggle=document.querySelector('.theme');
if(toggle){toggle.addEventListener('click',()=>{document.body.classList.toggle('dark');toggle.textContent=document.body.classList.contains('dark')?'☀ Светлая тема':'☾ Тёмная тема';localStorage.setItem('alash-theme',document.body.classList.contains('dark')?'dark':'light')});}
if(localStorage.getItem('alash-theme')==='dark')document.body.classList.add('dark');
const current=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('nav a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});
