const inputVal=document.getElementById('hex');
const colorElement=document.getElementById('box')

inputVal.addEventListener('keypress',(e)=>{
    colorElement.style.backgroundColor=e.target.value;
});