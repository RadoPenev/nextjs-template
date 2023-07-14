/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <div>
      <div className="cover">
        <h1 className="title">KFC</h1>
      </div>

      <div className="columns">
        <div className="column-half">
          <img className="image" src="/menu.png" alt="image01" />
        </div>
        <div className="column-half">
          <h2 className="section-title">Представяне</h2>
          <p>
          Кентъки Фрайд Чикън е американска верига ресторанти за
          бързо хранене, популярни в цял свят със своите сандвичи 
          с пържено пиле, чиято главна квартира е в град Луисвил, 
          щат Кентъки, САЩ.
          </p>
        </div>
      </div>

      <div className="columns">
        <div className="column-half">
          <h2 className="section-title">Повече информацияя</h2>
          <p>
          Първият ресторант на KFC отваря врати на пл.Гарибалди
          в столицата през Юли 1994 г. През първите години името
          на фирмата е 
          преведено на български - „Панирани пилета от Кентъки“.
          Към средата на май 2019 година KFC има 28 ресторанта
          </p>
        </div>
        <div className="column-half">
          <img className="image" src="/menu1.jpg" alt="image01" />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">За управителя</h2>
        <p>
        Историята на Полковника, или как целият свят се влюби в пилето му.

На 9 септември 1890 г. Харланд Сандърс се ражда в околностите на Хенривил, Индиана. От детството си, той се грижи за братята си след смъртта на баща си. Трудностите го учат да не се отказва и влиза в различни професии.

На 40-годишна възраст се завръща към своята страст - готвенето на пиле. В годините на депресията отваря първия си ресторант в Корбин, Кентъки.

Специалната рецепта на Полковника, съчетаваща специални техники за готвене и подправки, става много популярна. Той отдава бизнеса си на франчайз и KFC завладява Съединените щати.

Сега KFC е присъствие в 118 страни по света, а Полковник Сандърс остава символ на качество и вкус.
        </p>
      </div>

      <div className="container">
        <h2 className="section-title">Галерия</h2>
        <div className="gallery">
          <img className="gallery-image" src="/icon1.jpg" alt="image01" />
          <img className="gallery-image" src="/icon2.jpg" alt="image01" />
          <img className="gallery-image" src="/icon3.jpg" alt="image01" />
        </div>
      </div>

      <div className="container">
        <h2 className="section-title">Нашите Клиенти</h2>
        <div className="card-container">
          <div className="card">
            <img className="avatar" src="/avatars.jpg" alt="avatar" />
            <h3 className="card-name">Abdul Al-Katil</h3>
            <p>
              По-вкусно пиле не съм ял през живота ми . Продължавайте с добрата работа!
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/avatars.jpg" alt="avatar" />
            <h3 className="card-name">Omar Al-Hakim</h3>
            <p>
            Пилето на KFC ме пренесе в рая! Всеки залита вкусът ви е съвършено оригинален. Безкрайна благодарност!
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/avatars.jpg" alt="avatar" />
            <h3 className="card-name">Ahmed Al-Mansouri</h3>
            <p>
            Когато хапна от KFC, времето спира. Вкусът и хрупкавостта на пилето ви са като магия! Просто невероятно!
            </p>
          </div>
          <div className="card">
            <img className="avatar" src="/avatars.jpg" alt="avatar" />
            <h3 className="card-name">Fatima Abdullahi</h3>
            <p>
            KFC е суперлъчшият ресторант! Вкусът на пилето ви ме кара да танцувам от щастие. Няма по-добро място за пилешко удоволствие!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
