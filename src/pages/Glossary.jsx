// Glossary.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Glossary.css";

const glossaryData = [
  {
    term: "Geografik koordinata",
    definition:
      "Yer yuzasidagi nuqta o'rnini aniqlash uchun kenglik va uzunlik ko'rsatkichlari.",
  },
  { term: "Atlas", definition: "Xaritalar to'plami." },
  {
    term: "Xaritografiya",
    definition: "Xaritalar yaratish va ularni o'rganish sohasi.",
  },
  {
    term: "Rel'ef",
    definition: "Yer yuzasining baland-pastliklar bilan bog'liq shakllari.",
  },
  {
    term: "Ekvatordan uzoqlik",
    definition:
      "Yer yuzidagi nuqta ekvatordan qancha masofada joylashganligini bildiradi.",
  },
  {
    term: "Miqyos",
    definition: "Xaritada tasvirlangan masofaning haqiqiy masofaga nisbati.",
  },
  {
    term: "Janubiy yarimshar",
    definition: "Yer sharining ekvatordan janubda joylashgan qismi.",
  },
  {
    term: "Shimoliy yarimshar",
    definition: "Yer sharining ekvatordan shimolda joylashgan qismi.",
  },
  {
    term: "Iqlim",
    definition: "Muayyan hududning uzoq muddatli ob-havo sharoitlari.",
  },
  {
    term: "Gidrografiya",
    definition:
      "Yer yuzasidagi suv havzalari va ularning xususiyatlarini o'rganadigan fan sohasi.",
  },
  {
    term: "Landshaft",
    definition:
      "Tabiiy yoki inson tomonidan shakllangan hududning umumiy ko'rinishi.",
  },
  {
    term: "O'lkashunoslik",
    definition:
      "Hududlarning tabiiy, ijtimoiy va iqtisodiy xususiyatlarini o'rganish.",
  },
  {
    term: "Topografiya",
    definition: "Hududning batafsil xaritasi yoki rejasi.",
  },
  {
    term: "Ekologiya",
    definition:
      "Organizmlarning o'zaro va atrof-muhit bilan aloqalarini o'rganadigan fan.",
  },
  {
    term: "Transport geografiyasi",
    definition:
      "Transport tizimlarining joylashuvi va rivojlanishini o'rganadigan soha.",
  },
  {
    term: "Azimut",
    definition:
      "Joy yoki xaritada shimol yo’nalishi bilan tanlangan narsa yo’nalishi orasidagi burchak. Azimut burchaklari shimol yo’nalishidan soat mili harakati yo’nalishi bo’yicha 0° dan 360° gacha hisoblanadi.",
  },
  { term: "Barometr", definition: "Atmosfera bosimini o’lchaydigan asbob." },
  {
    term: "Bulutlilik",
    definition:
      "Osmonning bulut bilan qoplanganlik darajasi. Osmonni bulut tekis qoplagan bo’lsa bulutlilik 10 ballga, agar osmonni yarim qoplagan bo’lsa 5 ballga, havo ochiq bo’lsa 0 ballga teng deb qabul qilinadi.",
  },
  { term: "Geraldistlar", definition: "Tamg’a (gerb)larni o’rganuvchilar." },
  {
    term: "Gorizont",
    definition:
      "Yer yuzasining ochiq, tekis yerda atrofimizda ko’rinadigan qismi.",
  },
  {
    term: "Daryo",
    definition: "O’zi hosil qilgan tabiiy o’zandan oqadigan suv.",
  },
  {
    term: "Daryo vodiysi",
    definition:
      "Yer yuzasida uzunasiga cho’zilgan qiyosan kambar soylik. Daryo vodiylari oqish suvlari natijasida vujudga kelgan.",
  },
  {
    term: "Daryo mansabi",
    definition:
      "Daryoning dengiz, okean, ko’lga yoki boshqa daryoga qo’shiladigan joyi.",
  },
  {
    term: "Daryo nishabi",
    definition:
      "Daryo biror qismning yoki butun daryoning yuqori nuqtasi bilan quyi nuqtasi orasidagi tik balandlikning uning uzunligiga nisbati.",
  },
  {
    term: "Daryo oqimi",
    definition:
      "Suving tabiatda aylanib yurish jarayonida daryo o’zanida oqadigan suv.",
  },
  {
    term: "Daryo sistemasi",
    definition:
      "Biror daryo havzasiga kiruvchi barcha daryo irmoq, tarmoq, jilg’alar.",
  },
  {
    term: "Daryo havzasi",
    definition: "Biron-bir daryo sistemasiga suv keladigan maydon, hudud.",
  },
  {
    term: "Epigrafistlar",
    definition:
      "Tosh, metall, sopol va yog’ochdagi yozuvlarni o’rganuvchi olimlar.",
  },
  {
    term: "Etnografiya",
    definition:
      "Dunyo xalqlarining madaniyati, maishiy hayoti, kelib chiqishi (etnogenezi)ni, joylashishi (etnik geografiyasi)ni o’rganadigan fan.",
  },
  {
    term: "Ekskursiya",
    definition:
      "Tahlim-tarbiya ishlarining bir turi bo’lib, o’rganilayotgan ob’ektni uning turgan joyida bevosita ko’rib, idrok etish asosida o’rganiladi.",
  },
  {
    term: "Jamoat o’lkashunosligi",
    definition:
      "O’lkashunoslikning qishloq, ovul, qo’rg’on, tuman, shahar va viloyat hududidagi tarixiy obidalarni saqlash va asrash ishlariga boshchilik qiladigan tur.",
  },
  {
    term: "Jarlik",
    definition:
      "Tog’li o’lkalardagi tik yonbag’irlar, daryolar baland terrasalarining tik kesilgan chekkalari.",
  },
  {
    term: "Iqlim",
    definition:
      "Yer yuzasi biror joyi ob-havosining ko’p yillik rejimi. Iqlim Quyosh radiatsiyasi, yer yuzasining holati va atmosferadagi havo harakatlari hosilasidir.",
  },
  {
    term: "Ilmiy (davlat) o’lkashunoslik",
    definition:
      "O’lkashunoslikning Respublikamizdagi tarixiy va madaniy yodgorliklar, muzeylar hamda ularni saqlash bilan shug’ullanadigan turlari.",
  },
  {
    term: "Mahalliy shamollar",
    definition:
      "Uncha katta bo’lmagan hudud uchun xos bo’lgan ob-havoni hosil qiluvchi va tez-tez takrorlanib turuvchi shamollar.",
  },
  {
    term: "Mikroiqlim",
    definition:
      "Kichik joylar (biror jar, ko’l, ko‘cha, maydon, yonbag‘ir) iqlimi.",
  },
  {
    term: "Milliy bog‘lar",
    definition:
      "Tabiatni muhofaza qilish, istirohat sayohat, dam olish maqsadlarida maxsus ajratib, qo‘riqlanadigan joylar.",
  },
  { term: "Mutlaq namlik", definition: "1 m3 havodagi suv bug’i mikdori." },
  {
    term: "Nisbiy balandlik",
    definition: "Yer yuzasidagi ikki nuqta orasidagi tik balandlik.",
  },
  {
    term: "Numizmatlar",
    definition: "Tanga pullarni o’rganuvchi mutaxassislar.",
  },
  {
    term: "Ob-havo",
    definition:
      "Atmosfera quyi qismining muayyan bir qisqa vaqtdagi tabiiy holati.",
  },
  { term: "Promille", definition: "Biron-bir sonning mingdan bir ulushi." },
  { term: "Psixrometr", definition: "Havo namligini o’lchaydigan asbob." },
  {
    term: "Relg’ef",
    definition:
      "Yer yuzasi shakllari: tog’lar, tekisliklar, pasttekieliklar, adirlar, yassi tog’liklar, tepaliklar, qirlar.",
  },
  { term: "Sfragistlar", definition: "Muhrlarni o’rganuvchilar." },
  {
    term: "Tabiat yodgorliklari",
    definition:
      "Tabiatning ilmiy, o‘quv-ta’limiy, tarixiy, me’morlik, madaniy, ma’naviy, estetik ahamiyatga ega bo’lgan ob’ektlari.",
  },
  { term: "Tabiat", definition: "Bizni o‘rab olgan borliq, olam." },
  {
    term: "Tabiat boyliklari",
    definition:
      "Tabiatning xo‘jalikda foydalaniladigan, insoniyatning yashashi uchun zarur bo‘lgan barcha elementlari.",
  },
  {
    term: "Tabiatni muhofaza qilish",
    definition:
      "Tabiatni insoniyat manfaatlarini ko‘zlab saqlashga va ongli ravishda o‘zgartirishga qaratilgan barcha tadbirlar.",
  },
  {
    term: "Fenologiya",
    definition:
      "Yil fasllarining almashishini va ob-havoning o’zgarishi munosabati bilan organik va anorganik tabiatning mavsumiy o’zgarib borishini o’rganadigan fan.",
  },
  {
    term: "Fyon",
    definition:
      "Tog’li o’lkalarda tog’lardan vodiylarga yuqoridan pastga qarab esuvchi iliq va quruq kuchli shamol.",
  },
  {
    term: "Flyuger",
    definition: "Shamolning yo’nalishi va tezligini aniqlaydigan asbob.",
  },
  { term: "SHarq", definition: "Ufqaning to’rtta asosiy tomonlaridan biri." },
  { term: "SHimol", definition: "Ufqaning to’rtta asosiy tomonlaridan biri." },
  {
    term: "O’lkashunoslik",
    definition:
      "Vatanimizning ma’lum bir qismi (viloyat, tuman yoki aholi punktlari) mahalliy aholi ishtirokida har tomonlama kompleks holda o’rganish.",
  },
];

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const filteredGlossary = glossaryData.filter((item) =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="glossary-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        {" "}
        {/* Orqaga tugmasi */}
        &larr; Orqaga
      </button>
      <h1 className="glossary-title">Glossary</h1>
      <input
        type="text"
        className="glossary-search"
        placeholder="Atamalarni qidiring..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="glossary-list">
        {filteredGlossary.map((item, index) => (
          <div key={index} className="glossary-item">
            <h3 className="term">{item.term}</h3>
            <p className="definition">{item.definition}</p>
          </div>
        ))}
        {filteredGlossary.length === 0 && (
          <p className="no-results">Natijalar topilmadi.</p>
        )}
      </div>
    </div>
  );
};

export default Glossary;
