console.log(111111);
console.log(222222);
setTimeout(() => console.log('aaaaaaa'), 5000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
console.log(333333);
console.log(444444);
console.log(77777);
