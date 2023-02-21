var button = document.getElementById('show-more');

button.addEventListener('click', ()=>{
    event.preventDefault();
    var portfolio = document.querySelector('#portfolio.row')
    portfolio.classList.toggle('active')

    if(portfolio.classList.contains('active')){
        return button.textContent = 'Mostrar menos'
    }

    button.textContent = 'Ver mais'

})
