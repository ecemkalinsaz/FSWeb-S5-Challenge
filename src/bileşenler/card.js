import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const headLineDiv = document.createElement("div");
  headLineDiv.classList.add("headline");
  headLineDiv.textContent = makale.anabaslik;

  const authorDiv = document.createElement("div");
  authorDiv.classList.add("author");

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("img-container");

  const img = document.createElement("img");
  img.src = makale.yazarFoto;

  const span = document.createElement("span");
  span.textContent = makale.yazarAdi + " tarafından";

  cardDiv.appendChild(headLineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgDiv);
  imgDiv.appendChild(img);
  authorDiv.appendChild(span);

  cardDiv.addEventListener("click", () => {
    console.log(makale.anabaslik);
  });

  return cardDiv;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const url = `http://localhost:5001/api/makaleler`;

  axios
    .get(url)
    .then((response) => {
      console.log(response.data);

      const makaleler = response.data.makaleler;

      for (const key in makaleler) {
        const value = makaleler[key];
        for (let i = 0; i < value.length; i++) {
          const element = value[i];
          const card = Card(element);
          document.querySelector(secici).appendChild(card);
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export { Card, cardEkleyici };
