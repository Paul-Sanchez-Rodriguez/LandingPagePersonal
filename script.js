function prueba(){
    var enlace = document.createElement('a');
      enlace.href = './CV/CV_RobertSanchez.pdf'; // Reemplaza 'ruta/al/archivo/cv.pdf' con la ruta a tu archivo CV
      enlace.download = 'CV_RobertSanchez.pdf'; // Nombre con el que se descargará el archivo
      document.body.appendChild(enlace);
      enlace.click();
      document.body.removeChild(enlace);
};

document.getElementById("redirectButton").onclick = () =>{
    window.open('https://drive.google.com/file/d/1SJBW2RO9dWoEz6-uT_XWiB17-2vfdhK-/view', '_blank');
};

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

/* document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("redirectButton").onclick = function() {
        window.open('https://drive.google.com/file/d/1SJBW2RO9dWoEz6-uT_XWiB17-2vfdhK-/view', '_blank');
    };
}); */
