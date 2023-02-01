export default function scrollTo(){
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      });
    });
}
