let calculation = localStorage.getItem('calculation')||'';
     document.querySelector('.js-calculation').innerHTML=calculation;

      function updateCalculation(value) {
        calculation += value;
      document.querySelector('.js-calculation').innerHTML= calculation;

      localStorage.setItem('calculation',calculation);
      }


      document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    
    calculation = eval(calculation);

    document.querySelector('.js-calculation').innerHTML = calculation;

    localStorage.setItem('calculation', calculation);
  }
});