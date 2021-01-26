let modal = document.getElementById("myModal");
let modalImg = document.getElementById("img01");

let corpdevice = document.getElementById("corpdevice");
corpdevice.onclick = () => {
  modal.style.display = "block";
  modalImg.src = 'assets/img/corpdevice.png';
}

let coseller = document.getElementById("coseller");
coseller.onclick = () => {
  modal.style.display = "block";
  modalImg.src = 'assets/img/coseller.png';
}

let kasetworld = document.getElementById("kasetworld");
kasetworld.onclick = () => {
  modal.style.display = "block";
  modalImg.src = 'assets/img/kasetworld.png';
}

let manage_language = document.getElementById("manage_language");
manage_language.onclick = () => {
  modal.style.display = "block";
  modalImg.src = 'assets/img/manage_language.png';
}

let bpskill = document.getElementById("bpskill");
bpskill.onclick = () => {
  modal.style.display = "block";
  modalImg.src = 'assets/img/bpskill.png';
}

let manage_web = document.getElementById("manage_web");
manage_web.onclick = () => {
  modal.style.display = "block";
  modalImg.src = 'assets/img/manage_web.png';
}

let plagiarism = document.getElementById("plagiarism");
plagiarism.onclick = () => {
  modal.style.display = "block";
  modalImg.src = 'assets/img/plagiarism.png';
}

let span = document.getElementsByClassName("close")[0];
span.onclick = () => { 
  modal.style.display = "none";
}