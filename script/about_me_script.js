window.onload = function() {
    document.body.classList.add('fade-in');
};

let index = 0

let controladorIzq = document.querySelector(".left_controler");
controladorIzq.addEventListener("click", pasarIzquierda)
let controladorDer = document.querySelector(".right_controler");
controladorDer.addEventListener("click", pasarDerecha)

function pasarIzquierda(event) {
    let carrousel = document.querySelector(".slider");
    let totalImg = document.querySelectorAll(".slide").length;

    index = (index - 1 + totalImg) % totalImg;
    console.log(index)
    if (index == 3) {
        index = 1
    }
    desplazamiento = -index * 440;
    carrousel.style.transform = `translateX(${desplazamiento}px)`;
}


function pasarDerecha(event) {
    let carrousel = document.querySelector(".slider");
    let totalImg = document.querySelectorAll(".slide").length;
    index = (index + 1 + totalImg) % totalImg;

    if (index > 1) {
        index = 0
    }
    desplazamiento = -index * 440;
    carrousel.style.transform = `translateX(${desplazamiento}px)`;
}

function changeLanguage() {
    const isChecked = document.getElementById('language_checkbox').checked;

    if (isChecked) {
      document.querySelector('.language_switch label').textContent = 'Cambiar a Español';
      document.querySelector('.me_name .name').textContent = 'ANTONIO CACERES';
      document.querySelector('.about_me h2').textContent = 'About Me';
      document.querySelector('.about_intro p').innerHTML = `
        Hello! I am <strong>Antonio Cáceres</strong>, a web developer recently graduated in <strong>Web Application Development (WAD)</strong>.
        Eager to apply everything I have learned over these years of training and continue expanding my knowledge.
      `;
      document.querySelector('.about_skills h3').textContent = 'Technologies and Skills';
      const skillsList = document.querySelectorAll('.about_skills ul li');
      skillsList[0].innerHTML = '<strong>Frontend:</strong> HTML, CSS, JavaScript';
      skillsList[1].innerHTML = '<strong>Backend:</strong> Java, Python';
      skillsList[2].innerHTML = '<strong>Databases:</strong> MySQL';
      skillsList[3].innerHTML = '<strong>Tools:</strong> Git, Docker';
      document.querySelector('.education_experience h2').textContent = 'My Studies and Work Experience';
  
      const slides = document.querySelectorAll('.slide');
      slides[0].querySelector('.slide_text h4').textContent = 'Intermediate Degree in Microcomputer Systems and Networks (Completed)';
      slides[1].querySelector('.slide_text h4').textContent = 'IT Technician (Ayuntamiento Dos Hermanas)';
      slides[2].querySelector('.slide_text h4').textContent = 'Higher Degree in Web Application Development (WAD)';
      slides[3].querySelector('.slide_text h4').textContent = 'Web Application Development (Guadaltech)';
  
      document.querySelector('.footer_content p').innerHTML = '&copy; 2025 Antonio Cáceres. All rights reserved.';
      const socialLinks = document.querySelector('.social_links');
      socialLinks.innerHTML = `
        <a href="#" target="_blank">LinkedIn</a> |
        <a href="#" target="_blank">GitHub</a> |
        <a href="#" target="_blank">Twitter</a>
      `;
    } else {
      // Cambiar los textos de vuelta a español si el checkbox no está activado
      document.querySelector('.language_switch label').textContent = 'Change to English';
      document.querySelector('.me_name .name').textContent = 'ANTONIO CACERES';
      document.querySelector('.about_me h2').textContent = 'Sobre Mí';
      document.querySelector('.about_intro p').innerHTML = `
        ¡Hola! Soy <strong>Antonio Cáceres</strong>, un desarrollador web recién graduado en <strong>Desarrollo de Aplicaciones Web (DAW)</strong>.
        Con ganas de poner en práctica todo lo aprendido en estos años de formación y de seguir ampliando mis conocimientos.
      `;
      document.querySelector('.about_skills h3').textContent = 'Tecnologías y Habilidades';
      const skillsListBack = document.querySelectorAll('.about_skills ul li');
      skillsListBack[0].innerHTML = '<strong>Frontend:</strong> HTML, CSS, JavaScript';
      skillsListBack[1].innerHTML = '<strong>Backend:</strong> Java, Python';
      skillsListBack[2].innerHTML = '<strong>Bases de Datos:</strong> MySQL';
      skillsListBack[3].innerHTML = '<strong>Herramientas:</strong> Git, Docker';
      document.querySelector('.education_experience h2').textContent = 'Mis estudios y experiencia laboral';
  
      const slidesBack = document.querySelectorAll('.slide');
      slidesBack[0].querySelector('.slide_text h4').textContent = 'Grado Medio Sistemas microinformáticos y redes (Finalizado)';
      slidesBack[1].querySelector('.slide_text h4').textContent = 'Técnico informático (Ayuntamiento Dos Hermanas)';
      slidesBack[2].querySelector('.slide_text h4').textContent = 'Grado Superior Desarrollo De Aplicaciones Web (DAW)';
      slidesBack[3].querySelector('.slide_text h4').textContent = 'Desarrollo de aplicaciones web (Guadaltech)';
  
      document.querySelector('.footer_content p').innerHTML = '&copy; 2025 Antonio Cáceres. Todos los derechos reservados.';
      const socialLinksBack = document.querySelector('.social_links');
      socialLinksBack.innerHTML = `
        <a href="#" target="_blank">LinkedIn</a> |
        <a href="#" target="_blank">GitHub</a> |
        <a href="#" target="_blank">Twitter</a>
      `;
    }
  }