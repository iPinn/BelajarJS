//method string manipulation

//length
var txt1 = "arifin";
document.getElementById('name').innerHTML = txt1.length;

//indexOf
var txt2 = "Saya sedang belajar JS";
document.getElementById('name').innerHTML = txt2.indexOf('belajar');

//substr
var txt3 = "Apple, Microsoft, Linux";
document.getElementById('name').innerHTML = txt3.substr(0, 5); //jadinya Apple karena index dimulai dari ke-0 sampai 5

//replace
var txt4 = "Universitas Muhammadiyah Jakarta";
document.getElementById('name').innerHTML = txt4.replace("Jakarta","Jogja"); // kutip pertama string yg mau diganti, kutip kedua ganti jadi apa

//toUpperCase
var txt5 = "Teknik Informatika";
document.getElementById('name').innerHTML = txt5.toUpperCase();

//toLowerCase
var txt6 = "Teknik Informatika";
document.getElementById('name').innerHTML = txt5.toLowerCase();

//charAt
var txt7 = "Teknik Informatika";
document.getElementById('name').innerHTML = txt7.charAt(2); //yg tercetak adalah K (index ke-2)


//split
var txt8 = "a,b,c,d";
document.getElementById('name').innerHTML = txt8.split(","); //split by apa, letakan didalam kurung