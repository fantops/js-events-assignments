const inputText=document.getElementById('input-text');
const v=document.getElementById('counter');

inputText.addEventListener('keypress', (e)=>{
    const count = e.target.value.length;
    v.innerText=`This above text has ${count} characters.`;
});