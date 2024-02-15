let faiz  = 0.2;

let istenilenMebleg = prompt("Istediyiniz mebleg:");
istenilenMebleg = Number(istenilenMebleg);
let aylar = Number(prompt("Aylarin sayi:"));

let totalMebleg = istenilenMebleg + istenilenMebleg * faiz;

let ayliqOdenis = totalMebleg / aylar;

alert(`Total odenis: ${totalMebleg}, Ayliq odenis: ${ayliqOdenis}`);

//---------------------

let maas = Number(prompt("Ayliq geliriniz:"));

if (maas > ayliqOdenis * 2) {
  alert("Siz kredit ala bilersiniz.");
} else {
  alert("Siz kredit ala bilmersiniz!");
}