function fetchData() {
const main = document.getElementById('main');
const html = '';

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => {
                console.log(todo);
                html += `<div>${todo.title}</div>`;
            });
        })
        main.innerHTML = html;
        }
