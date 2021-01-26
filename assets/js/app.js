let modal = document.getElementById("myModal");
let modalImg = document.getElementById("img01");

let corpdevice = document.getElementById("corpdevice");
corpdevice.onclick = function(){
  modal.style.display = "block";
  modalImg.src = 'assets/img/corpdevice.png';
}

let bpskill = document.getElementById("bpskill");
bpskill.onclick = function(){
  modal.style.display = "block";
  modalImg.src = 'assets/img/bpskill.png';
}

let span = document.getElementsByClassName("close")[0];
span.onclick = () => { 
  modal.style.display = "none";
}