

const parent = document.querySelectorAll('.pril__item');





for (let i = 0; i <= parent.length; i++) {
       parent[i].addEventListener('click', (event) => {
       parent[i] = prompt('Buy', '');
       if (parent[i] === '' || parent[i] == null) {
              parent[i].style.backgroundColor = 'yellow';
          } else if (isNaN(parent[i])) {
              parent[i].style.backgroundColor = 'red';
          }

       });         
}


