
 /*

1) "npm -v" diyerek node.js’in yüklü olup olmadığına bakalım. 

2) Yüklü değilse: https://nodejs.org adresinden indirip kuralım.

3) JSONServer için bir proje klasörü açıp VS Code Terminal'i çağıralım.

4) Terminal > "npm init" komutu ile package.json ayar dosyasını oluşturalım.

5) Terminal > "npm install --save json-server" komutu ile json-server ayarlarımızı kaydedelim.

6) package.json içerisinde "test" kısmı yerine "json:server" isimli bir key alanı oluşturup value kısmına "json-server --watch db.json" yazalım.

7) "db.json" isimli kendi json dosyamızı açıp içine gerekli key ve value alanlarını oluşturalım.

8) Örnek db.json dosya içeriği:
{
  "mesajlar": [
    {
      "id": "1",
      "mesajGonderen": "Fatih Çelik",
      "mesajIcerik": "Merhaba"
    }
  ]
}

9) Terminal > "npm run json:server" yazarak lokal sunucu üzerinde json-serverı çalıştıralım.(http://localhost:3000)

10) http://localhost:3000/mesajlar adresi üzerinden json veri kaynağımıza ulaşabiliriz.

*/   
    
    const formIletisim=document.getElementById("iletisim");
    const txtAdSoyad=document.getElementById("txtAdSoyad");
    const txtMesaj=document.getElementById("txtMesaj");

  //İkinci yöntem,asenkron fonksiyon
  
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


//Birinci yöntem
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