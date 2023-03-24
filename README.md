# Uygulamalı JavaScript Sprint Mücadelesi

**Bu talimatları dikkatlice okuyun. Bu Sprint Mücadelesine başlamadan önce tam olarak ne beklendiğini anlayın.**

Bu mücadele, geçmiş sprint boyunca öğrenilen kavramları ve teknikleri uygulamanıza ve bunları somut bir projede kullanmanıza olanak tanır. Bu sprint sayesinde **Uygulamalı JavaScript** 'i keşfettiniz. Bu sprint boyunca **DOM ve bileşenler**'i öğrendiniz. Bu mücadelede, **çevrimiçi bir Teknoloji Gazetesi** oluşturarak bu becerilerdeki ustalığınızı göstereceksiniz.

Bu projeyi, herkesin kendisinin yapması beklenmektedir. Tüm iş size ait olmalıdır. Mücadele puanınız, bu sprint boyunca işlenen materyali kullanarak bağımsız çalışma yeteneğinizin bir ölçüsüdür. Önceki Sprint'te tanıtılan ve uygulanan kavram ve hedeflerde yeterlilik göstermeniz gerekir.

Bu sprint mücadelesi sırasında işbirliği yapmanıza izin verilmez.

### Proje Kurulumu

- [ ] Bu projenyi forklayarak bir kopyasını oluşturun.
- [ ] Reponun kendi versiyonunuzu klonlayın.
- [ ] Commitinizi pushlayın: `git push origin main`.

## Proje Açıklaması

### Giriş

Bir teknoloji gazetesi oluşturacaksınız. İşiniz, gazetenin ana sayfasını oluşturan bileşenleri oluşturmak olacak..

Aşağıda listelenen minimum uygulanabilir ürün (MVP) spesifikasyonlarını karşılayan projeniz, aşağıda bağlantısı verilen görüntüye benzer görünmelidir.:

[Teknoloji Zamanı](/tasarım.png)

### Detaylar

- [ ] Komut satırınızla projenin kök dizinine gidin.
- [ ] `package.json` dosyasında listelenen bağımlılıkları indirmek için `npm install` komutunu çalıştırın.
- [ ] Projeyi derlemek ve sunmak için `npm start` komutunu çalıştırın.
- [ ] Chrome'da `http://localhost:3000` konumuna gidin
- [ ] Testleri çalıştırmak için ayrı bir terminalde `npm test` komutunu yazın.

**MVP için adımlar:**

- [ ] Adım 1 ve 2 `src/bileşenler/header.js` dosyasında açıklandı.
- [ ] Adım 3 ve 4 `src/bileşenler/tabs.js` dosyasında açıklandı.
- [ ] Adım 5 ve 6 `src/bileşenler/card.js` dosyasında açıklandı.

**Önemli Notlar:**

- Lütfen **dosyaları ya da klasörleri taşımayın ve isimlerini değiştirmeyin** .
- Geliştirme sunucunuz "otomatik yeniden yüklemeyi" durdurursa, `CTRL+C` ile manuel olarak sonlandırın ve yeniden başlatın.
- `package.json` 'ı değiştirmeyin, sadece NPM ile dosyaları indirin (Axios _halihazırda_ `package.json` 'a eklendi).
- Çözümünüzde en iyi uygulamaları izlemeniz, temiz ve profesyonel sonuçlar üretmeniz önemlidir.
- Yazım denetimi ve dilbilgisi denetimi de dahil olmak üzere çalışmanızı gözden geçirmek, iyileştirmek için zaman planlayın.
- MVP'yi karşılayan bir meydan okuma göndermek, çok fazla detayla uğraşılıp da çalışmayan bir kod göndermekten daha iyidir.

## Ek Sorular

Aşağıdaki soruları yanıtlayarak bu sprint'in kavramlarını anladığınızı gösterin. Her sorudan sonra yanıtlarınızı eklemek için bu belgeyi düzenleyin.

1. DOM nedir?
2. Bir event nedir?
3. Bir event dinleyici(listener) nedir?
4. Neden bir NodeList'i Array'e dönüştürelim??
5. Bileşen nedir?

## Cevaplar

1. `DOM`, Document Object Model'ün kısaltmasıdır ve web sayfalarında HTML gibi dokümanların yapısını ve özelliklerini temsil eden bir programlama arayüzüdür. DOM, web sayfalarındaki öğeleri (elementler, metin, resimler vb.) ve bunların birbirleriyle olan ilişkilerini ağaç benzeri bir yapıda tutar. Bu yapı, programlama dilleri tarafından kullanılarak web sayfaları dinamik hale getirilir. Bu ağaç yapısını kullanarak, JavaScript kodu bir öğenin alt öğelerini, özelliklerini, metnini vb. okuyabilir ve değiştirebilir.

2. `event`, kullanıcının bir web sayfasındaki bir öğeye tıklaması, bir tuşa basması, bir fare imlecini bir öğenin üzerine getirmesi gibi kullanıcının bir sayfa ile etkileşimde bulunmasına neden olan herhangi bir eylemdir. Ayrıca, sayfanın kendisi yüklendiğinde, bir dosya yüklemesi tamamlandığında vb. otomatik olarak gerçekleşen olaylar da olabilir. Örneğin, bir öğeye (element) tıklandığında, bir tuşa basıldığında veya bir form gönderildiğinde, bu olay JavaScript kodu tarafından dinlenip algılanır. Dinlenen ve ele alınan event'lere göre belirli işlemler gerçekleştirilir.

3. Olay dinleyicisi (`event listener`), bir HTML öğesinin bir event'ine yanıt olarak tetiklenecek bir JavaScript işlevini (function) temsil eder. Yani, belirli bir olay gerçekleştiğinde belirli bir işlevin çağrılmasını sağlar. Örneğin, kullanıcının butona tıklaması, formun gönderilmesi gibi bir dizi olay, bir event listener kullanılarak ele alınabilir.

4. JavaScript'de `NodeList`, adından da anlaşılacağı gibi bir listedir ve öğeleri sırayla depolar. NodeList, çoğu durumda bir diziye benzer, ancak bir dizi değildir. Bu nedenle, bir NodeList'i diziye dönüştürmek, dizi ile aynı özelliklere sahip olmasını sağlar ve daha sonra dizi üzerinde kolayca işlem yapılabilir. Örneğin, bir NodeList üzerindeki öğeleri döngü ile gezerek her bir öğeye bir event listener eklemek istiyorsak, bu NodeList'i önce bir diziye dönüştürmemiz gerekir. Çünkü NodeList üzerinde `forEach()` gibi bazı dizi yöntemleri doğrudan kullanılamazlar. NodeList'i Array'e dönüştürmek için `Array.from()` veya `spread operatörü` kullanabiliriz.

5. Bileşen (`component`), tekrar kullanılabilen bir kod parçasıdır. Kendi işlevselliği ve tasarımı olan bağımsız bir yapıya sahiptir ve başka yerlerde de kullanılabilir. Bileşenler, kodun yeniden kullanılabilirliğini artırır ve kodu daha iyi organize eder. Örneğin, bir card bileşeni, makalenin başlığı, yazarı, fotoğrafı vb. ile birlikte gösterilebilir ve bu bileşen farklı makalelerde de kullanılabilir.
