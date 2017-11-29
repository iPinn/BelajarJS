var orang = {
	namaDepan: "Joni",
	namaBelakang: "Jono",
	age: 20;

	jalan(){
		return "Saya sedang berjalan";
	}
}

console.log(orang.namaDepan + " " + orang.namaBelakang);

//memanggil fungsi jalan pada objek orang
console.log(orang.jalan());

console.log(orang['namaDepan']);
