const ponsel =[
    {
        "nama":"Oppo",
        "harga":"2juta",
        "ram":"2GB",
        "storage":"64.0GB",
    },
    {
        "nama":"Vivo",
        "harga":"3juta",
        "ram":"3GB",
        "storage":"14.83GB",
    },
    {
         
        "nama":"Xiomi",
        "harga":"2juta",
        "ram":"3GB",
        "storage":"128GB",
    },
    {
        "nama":"Asus",
        "harga":"1,8juta",
        "ram":"2GB",
        "storage":"11,48GB",
    },
    {
        "nama":"Advan",
        "harga":"1,7juta",
        "ram":"2GB",
        "storage":"64GB",
    },
    {
        "nama":"Lenovo",
        "harga":"3juta",
        "ram":"3GB",
        "storage":"64GB",
    },
    {
        "nama":"Iphone",
        "harga":"25juta",
        "ram":"64GB",
        "storage":"248GB",
    },
    {
        "nama":"Samsung",
        "harga":"4juta",
        "ram":"4GB",
        "storage":"148GB",

    },
    {
        "nama":"Nokia",
        "harga":"1,4juta",
        "ram":"2GB",
        "storage":"64GB",
    },
    {
        "nama":"Honor",
        "harga":"5juta",
        "ram":"4GB",
        "storage":"148GB",
    },

];

let x;

for(x in ponsel){
    let namaPonsel = ponsel[x].nama
    let hargaPonsel = ponsel[x].harga
    let ramPonsel = ponsel[x].ram
    let storagePonsel = ponsel[x].storage
    let divider = "<div><span class='nama-ponsel'>"+namaPonsel+"</span><span class='harga-ponsel'>"+hargaPonsel+"</span><span class='ram-ponsel'>"+ramPonsel+"</span><span class='storage-ponsel'>"+storagePonsel+"</span></div>";
document.getElementById('ponsel').innerHTML += divider
}