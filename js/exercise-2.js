const incrementCounter= document.getElementById('btn-increment');
const decrementCounter=document.getElementById('btn-decrement');

incrementCounter.addEventListener('click', () => {
    var value = parseInt(document.getElementById('input-text').value, 10);
    value++;
    document.getElementById('input-text').value=value;
});

decrementCounter.addEventListener('click', () =>{
    var value = parseInt(document.getElementById('input-text').value, 10);
    value--;
    document.getElementById('input-text').value=value;
});