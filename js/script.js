const kelilingP = document.getElementById("kelilingP");
const luasP = document.getElementById("luasP");
const hitung1 = document.getElementById("hitung1");
const hitung2 = document.getElementById("hitung2");
const hapus1 = document.getElementById("hapus1");
const hapus2 = document.getElementById("hapus2");
const btnKp = document.getElementById("btnPk");
const btnLp = document.getElementById("btnPl");
const luas = document.getElementById("luas");
let inform = document.getElementById("inform");
let inform2 = document.getElementById("inform2");
let content = document.getElementsByClassName("hasil")[0];
let content2 = document.getElementsByClassName("hasil")[1];

function hapus() {
  content.classList.remove("muncul");
  content2.classList.remove("muncul");
  let sisi = (document.getElementById("sisi1").value = "");
  let sisi2 = Number((document.getElementById("sisi2").value = ""));
  const p = (document.getElementsByClassName("baris")[0].value = "");
  const p2 = (document.getElementsByClassName("baris")[1].value = "");
  const p3 = (document.getElementsByClassName("baris")[2].value = "");
  const p4 = (document.getElementsByClassName("baris")[3].value = "");
  const p5 = (document.getElementsByClassName("baris")[4].value = "");
  const p6 = (document.getElementsByClassName("baris")[5].value = "");
  const p7 = (document.getElementsByClassName("baris")[6].value = "");
  const p8 = (document.getElementsByClassName("baris")[7].value = "");
  const p9 = (document.getElementsByClassName("baris")[8].value = "");
  const p10 = (document.getElementsByClassName("baris")[9].value = "");
  return;
}

btnKp.addEventListener("click", function () {
  kelilingP.classList.add("muncul");
  luasP.classList.remove("muncul");
  btnKp.classList.add("active");
  btnLp.classList.remove("active");
  hapus();
});

btnLp.addEventListener("click", function () {
  luasP.classList.add("muncul");
  kelilingP.classList.remove("muncul");
  btnKp.classList.remove("active");
  btnLp.classList.add("active");
  hapus();
});

function keliling(s) {
  return 4 * s;
}
hitung1.addEventListener("click", function () {
  content.classList.add("muncul");
  let sisi1 = Number(document.getElementById("sisi1").value);
  const k = keliling(sisi1);
  if (k === 0) {
    const p = (document.getElementsByClassName("baris")[0].value =
    "Maaf jangan dikosongkan");
    const p2 = (document.getElementsByClassName("baris")[1].value = "");
    const p3 = (document.getElementsByClassName("baris")[2].value = "");
    const p4 = (document.getElementsByClassName("baris")[3].value = "");
    const p5 = (document.getElementsByClassName("baris")[4].value = "");
    inform2.classList.add("eror");
  } else if (isNaN(k) === true) {
    const p = (document.getElementsByClassName("baris")[0].value =
      "Maaf jangan diisi dengan karakter");
    const p2 = (document.getElementsByClassName("baris")[1].value = "");
    const p3 = (document.getElementsByClassName("baris")[2].value = "");
    const p4 = (document.getElementsByClassName("baris")[3].value = "");
    const p5 = (document.getElementsByClassName("baris")[4].value = "");
    inform2.classList.add("eror");
  } else {
    inform2.classList.add("green");
    const p = (document.getElementsByClassName("baris")[0].value =
      "Hasi Perhitungan : ");
    const p2 = (document.getElementsByClassName("baris")[1].value =
      "K = 4 * S ");
    const p3 = (document.getElementsByClassName("baris")[2].value =
      "K = 4 * " + sisi1);
    const p4 = (document.getElementsByClassName("baris")[3].value =
      " K = " + k);
    const p5 = (document.getElementsByClassName("baris")[4].value =
      "Jadi jika sisi sebesar " +
      sisi1 +
      ", maka didapatkan keliling sebesar " +
      k);
  }
});

function luass(s) {
  return s * s;
}

hitung2.addEventListener("click", function () {
  content2.classList.add("muncul");
  let sisi2 = Number(document.getElementById("sisi2").value);
  const l = luass(sisi2);
  if (l === 0) {
    const p6 = (document.getElementsByClassName("baris ")[5].value =
      "Maaf jangan dikosongkan");
    const p7 = (document.getElementsByClassName("baris")[6].value = "");
    const p8 = (document.getElementsByClassName("baris")[7].value = "");
    const p9 = (document.getElementsByClassName("baris")[8].value = "");
    const p10 = (document.getElementsByClassName("baris")[9].value = "");
    inform.classList.add("eror");
  } else if (isNaN(l) === true) {
    inform.classList.add("eror");
    const p6 = (document.getElementsByClassName("baris")[5].value =
      "Maaf Yang Anda Masukan Bukan Angka");
    const p7 = (document.getElementsByClassName("baris")[6].value = "");
    const p8 = (document.getElementsByClassName("baris")[7].value = "");
    const p9 = (document.getElementsByClassName("baris")[8].value = "");
    const p10 = (document.getElementsByClassName("baris")[9].value = "");
  } else {
    inform.classList.add("green");
    const p6 = (document.getElementsByClassName("baris")[5].value =
      "Hasi Perhitungan : ");
    const p7 = (document.getElementsByClassName("baris")[6].value =
      "l = s * S ");
    const p8 = (document.getElementsByClassName("baris")[7].value =
      "l = " + sisi2 + " * " + sisi2);
    const p9 = (document.getElementsByClassName("baris")[8].value = "l = " + l);
    const p10 = (document.getElementsByClassName("baris")[9].value =
      "Jadi jika sisi sebesar " +
      sisi2 +
      ", maka didapatkan luas sebesar " +
      l);
  }
});

hapus1.addEventListener("click", function () {
  hapus();
});

hapus2.addEventListener("click", function () {
  hapus();
});
