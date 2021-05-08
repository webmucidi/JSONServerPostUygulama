
    const formIletisim=document.getElementById("iletisim");
    const txtAdSoyad=document.getElementById("txtAdSoyad");
    const txtMesaj=document.getElementById("txtMesaj");

  //İkinci yöntem,asenkron çalışma
  
  formIletisim.addEventListener("submit",verileriKaydet);

  async function verileriKaydet(e){
    e.preventDefault();
    let mesajiGonderen=txtAdSoyad.value;
    let mesajinIcerigi=txtMesaj.value;

    const sunucuYaniti=await fetch('http://localhost:3000/mesajlar',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        mesajGonderen:mesajiGonderen,
        mesajIcerik:mesajinIcerigi
      })
    
    });
  
    let veriler=await sunucuYaniti.json();
    console.log(veriler);
    
  }


//Birinci yöntem,senkon çalışma
/*
formIletisim.addEventListener('submit', veriKaydet);

function veriKaydet(e){
e.preventDefault();

  let mesajGonderen=document.getElementById("txtAdSoyad").value;
  let mesajIcerik=document.getElementById("txtMesaj").value;

fetch('http://localhost:3000/mesajlar', {
  method: 'POST',
  body: JSON.stringify({
    mesajGonderen: mesajGonderen,
    mesajIcerik: mesajIcerik
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((veriler) => console.log(veriler));
}
*/