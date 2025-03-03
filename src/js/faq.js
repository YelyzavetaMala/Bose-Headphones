export function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      faqItem.classList.toggle('active');
    });

    button.addEventListener('keypress', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        button.click();
      }
    });
  });
}
