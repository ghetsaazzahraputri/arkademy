//Unlink FS = Hapus data/file

//panggil library FS
const fs = require('fs');

/*Baca file terserah.txt apakah ada filenya?
menggunakan fs.readFile */
fs.readFile('terserah.txt', async(err, data)=>{
    if(err) return console.log("Data tidak di temukan!");

    await console.log("Data ditemukan!")

    /*Baca file terserah.txt apakah ada filenya?
    menggunakan fs.readFile*/
    fs.unlink('terserah.txt', (err)=>{
        //jika gagal delete
        if(err) return console.log("Gagal hapus data!");

        //jika berhasil delete
        console.log("Hapus data berhasil!");
    })
})
