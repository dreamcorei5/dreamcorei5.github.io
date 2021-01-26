let modal = document.getElementById("myModal");
let modalImg = document.getElementById("img01");

let corpdevice = document.getElementById("corpdevice");
corpdevice.onclick = function(){
  modal.style.display = "block";
  modalImg.src = 'assets/img/corpdevice.png';
}

let coseller = document.getElementById("coseller");
coseller.onclick = function(){
  modal.style.display = "block";
  modalImg.src = 'assets/img/coseller.png';
}

let kasetworld = document.getElementById("kasetworld");
kasetworld.onclick = function(){
  modal.style.display = "block";
  modalImg.src = 'assets/img/kasetworld.png';
}

let manage_language = document.getElementById("manage_language");
manage_language.onclick = function(){
  modal.style.display = "block";
  modalImg.src = 'assets/img/manage_language.png';
}

let bpskill = document.getElementById("bpskill");
bpskill.onclick = function(){
  modal.style.display = "block";
  modalImg.src = 'assets/img/bpskill.png';
}

let plagiarism = document.getElementById("plagiarism");
plagiarism.onclick = function(){
  modal.style.display = "block";
  modalImg.src = 'assets/img/plagiarism.png';
}

let span = document.getElementsByClassName("close")[0];
span.onclick = () => { 
  modal.style.display = "none";
}