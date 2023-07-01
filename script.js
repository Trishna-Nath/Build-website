document.getElementById("downloadBtn").addEventListener("click", function() {
    // Show success notification
    showNotification("Clicked here for download resume");
  });
  
  function showNotification(message) {
    // Replace this with your own notification implementation
    alert(message);
  }

  // contact section starting

  
    // If form validation passes, display success message
    // document.getElementById('contactForm').reset();
    // document.getElementById('successMessage').textContent = 'Message sent successfully!';
    // document.getElementById('successMessage').style.display = 'block';
  
    // var btn = document.getElementById('btn');
    // btn.addEventListener('click',function(e){
    //   e.preventDefault()
    //  console.log('hi');
    // });
  

  // ending contact section
  


 

let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menu-bar');

menuBtn.onClick = () =>{
  menuBtn.classList.toggle('bx-x');
  menuBar.classList.toggle('active');


}


window.onscroll = () =>{
  menuBtn.classList.remove('bx-x');
  menuBar.classList.remove('active')
}

// scrool reveal section
ScrollReveal({
  reset: true,
  ditance: '100px',
  duration: 2000,
  delay:200,
});

ScrollReveal().reveal('.home-bio h1, .about-resume', {origin: 'left'});
ScrollReveal().reveal('.home-bio, p', {origin: 'right'});
ScrollReveal().reveal('.home-bio, heading', {origin: 'top'});
ScrollReveal().reveal('.profile-pic, .about-items, .skills-items, .projects-items, .form', {origin: 'bottom'});

// animation section

const animText = new Typed('.animated-text', {
  strings: ['Hello','My Name','Trishna Nath'],
  backSpeed: 100,
  typeSpeed: 100,
  backDelay: 600,
  loop: true
});

document.getElementById("github").href = "https://github.com/";
document.getElementById("sherbet-live").href = "https://spectacular-sherbet-75f298.netlify.app/";
document.getElementById("sherbet-server").href = "https://github.com/Porgramming-Hero-web-course/b7a9-career-hub-Trishna-Nath";
document.getElementById("chef-live").href = "https://chef-e7cb2.web.app/";
document.getElementById("chef-server").href = " https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-server-side-Trishna-Nath ";
document.getElementById("toy-server").href = "https://github.com/programming-hero-web-course-4/b7a11-toy-marketplace-server-side-Trishna-Nath";
document.getElementById("toy-live").href = "https://toy-marketplace-client-10c15.web.app/";
document.getElementById("summer-live").href = "https://language-tutor.netlify.app/";
document.getElementById("summer-server").href = "https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-Trishna-Nath";
document.getElementById("facebook").href = "https://www.facebook.com/trishna.nath.142";
document.getElementById("linkedin").href = "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Ftrishna-nath-0bb58b272%3Ftrk%3Dcontact-info%26fbclid%3DIwAR0aZYBCohN61pnmAp22vCa0XlehBj0s-fSpGS45u9bBn7V3_UOFC8wp2gk&h=AT1TrtlNJu0GYAyS07FgUILAlLoZNX_5w0VxVTtTjY3FduEjP0ai1WUJIOAncPrvbjX47hOZJ-Vhb_LRjScRdn5ZDX4dNQZfqSV4lcMZaZJj1EXv5re2xhwrx5-ZVD_SbHNnt0FIQsHn1lw";