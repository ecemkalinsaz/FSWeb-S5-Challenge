const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //

  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  const tarihSpan = document.createElement("span");
  tarihSpan.classList.add("date");
  tarihSpan.textContent = tarih;

  const h1 = document.createElement("h1");
  h1.textContent = baslik;

  const yaziSpan = document.createElement("span");
  yaziSpan.classList.add("temp");
  yaziSpan.textContent = yazi;

  headerDiv.appendChild(tarihSpan);
  headerDiv.appendChild(h1);
  headerDiv.appendChild(yaziSpan);

  return headerDiv;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))

  const header = Header(
    "Teknoloji Zamanı",
    new Date(Date.now()).toLocaleString(),
    "Hoşgeldiniz!"
  );
  document.querySelector(secici).appendChild(header);
};

export { Header, headerEkleyici };
