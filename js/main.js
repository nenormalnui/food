document.addEventListener('DOMContentLoaded', () => {
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const navLinkList = document.querySelectorAll('.nav-link');

navLinkList.forEach(navLink => {
  navLink.addEventListener('click', () => {
    navLinkList.forEach(item => item.classList.remove('active'));
    navLink.classList.add('active')
  });
});

});