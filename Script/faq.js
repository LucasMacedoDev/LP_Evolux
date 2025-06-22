document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.faq-item').forEach(item => {
    const toggleBtn = item.querySelector('.toggle');
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      item.classList.toggle('open');
      toggleBtn.textContent = item.classList.contains('open') ? '˄' : '⌄';
    });
  });
});
