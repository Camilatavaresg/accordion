const question = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.answer');

question.forEach(element => {
     element.addEventListener('click', function () {
          this.nextElementSibling.classList.toggle('active');
          this.classList.toggle('bold')
     })
});