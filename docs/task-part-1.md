ДЗ №2. React ч.1 Статическая вёрстка

ДЗ 2:

Ecommerce на React — Итерация 1

ЗАЧЕМ?
Знакомство с React, практика компонентного подхода.

ЧТО ДЕЛАТЬ?

    Создайте в вашем репозитории на GitHub / GitLab проект Ecommerce
    Реализуйте первую итерацию (описана ниже)
    Разместите ссылку на репозиторий в форму

ДЕДЛАЙН:

25.04.2025, 12:00 по МСК

═══════════════════════════════════════
ИТЕРАЦИЯ 1: СТАТИЧЕСКАЯ ВИТРИНА ТЕЛЕВИЗОРОВ
═══════════════════════════════════════

ЦЕЛЬ:
Создать базовую статическую страницу каталога телевизоров. Никакой интерактивности — только вывод данных и вёрстка.

МАКЕТ:
https://www.figma.com/design/kqIZeoJ07t8ymMvjR0jLEM/Home-Assignment-2026?node-id=20-496&t=kPWWqMnOEayuhd1Z-0

───────────────────────────────────────
СТЕК
───────────────────────────────────────

Можно:
— React (Vite)
— Любая стилизация (Tailwind, CSS-in-JS, CSS modules)

Нельзя:
— Готовые React-компоненты (Material-UI и т.п.)
— Внешние библиотеки для роутинга, стейт-менеджмента и т.д.

───────────────────────────────────────
ТРЕБОВАНИЯ К ВЁРСТКЕ
───────────────────────────────────────

ВАЖНО:
это не курс по вёрстке, точное попадание в макет не требуется.

Обязательно:
— Sidebar слева, основная область справа

Опционально:
— Адаптивная вёрстка
— Sticky header
— Footer, прижатый к низу

───────────────────────────────────────
ПРИМЕРНАЯ СТРУКТУРА ПРОЕКТА
───────────────────────────────────────

Приводится как пример. Следовать не обязательно — можно взять bulletproof react, feature sliced design или придумать своё. Компонентов в вашем проекте может быть больше.

src/
-main.jsx
-app/
--App.css
--App.jsx
--pages/
---Home.css
---Home.jsx
--components/
---Header.css
---Header.jsx
---Footer.css
---Footer.jsx
---ProductSort.scss
---PoductSort.js
---ProductCard.css
---ProductCard.jsx
---Button.css
---Button.jsx
---Link.css
---Link.jsx
---Dropdown.css
---Dropdown.jsx
-data/
--products.js
-styles/
--index.css

───────────────────────────────────────
СТРУКТУРА ДАННЫХ ТОВАРА (Product)
───────────────────────────────────────

Каждый товар — объект с полями:

    id — уникальный номер (number)
    category — "tv", "phone" или "laptop"
    make — бренд/производитель (например "Samsung")
    model — название модели (например 65" OLED 4K Smart TV)
    price — цена в долларах (number)
    images — массив URL картинок (array of strings)
    isSpecialOffer — опциональный флаг спец-предложения (boolean или undefined)
    brand — то же что make, используется для фильтрации

───────────────────────────────────────
ДАННЫЕ (src/data/products.js)
───────────────────────────────────────

Создайте файл с захардкоженным массивом товаров. Скопируйте его целиком:

```JavaScript
const products = [
  {
    id: 1,
    category: "tv",
    make: "Samsung",
    model: 'QLED 4K Q80C 65"',
    price: 1299,
    images: [
      "https://images.unsplash.com/photo-1615210230840-69c07c13b4d1?w=400&q=80",
      "https://images.unsplash.com/photo-1558888401-3cc1de77652d?w=400&q=80",
      "https://images.unsplash.com/photo-1593361351718-6b853f7b3431?w=400&q=80",
    ],
    isSpecialOffer: true,
    brand: "Samsung",
  },
  {
    id: 2,
    category: "tv",
    make: "LG",
    model: 'OLED C3 55"',
    price: 1499,
    images: [
      "https://images.unsplash.com/photo-1558888401-3cc1de77652d?w=400&q=80",
      "https://images.unsplash.com/photo-1615210230840-69c07c13b4d1?w=400&q=80",
    ],
    brand: "LG",
  },
  {
    id: 3,
    category: "tv",
    make: "Sony",
    model: 'Bravia XR A80L 65"',
    price: 1899,
    images: [
      "https://images.unsplash.com/photo-1593361351718-6b853f7b3431?w=400&q=80",
    ],
    isSpecialOffer: true,
    brand: "Sony",
  },
  {
    id: 4,
    category: "tv",
    make: "Samsung",
    model: 'Neo QLED 8K QN900C 75"',
    price: 3499,
    images: [
      "https://images.unsplash.com/photo-1529338215083-dfbce6338219?w=400&q=80",
      "https://images.unsplash.com/photo-1593361351718-6b853f7b3431?w=400&q=80",
    ],
    brand: "Samsung",
  },
  {
    id: 5,
    category: "tv",
    make: "TCL",
    model: '6-Series 4K 55"',
    price: 649,
    images: [
      "https://images.unsplash.com/photo-1615210230840-69c07c13b4d1?w=400&q=80",
    ],
    brand: "TCL",
  },
  {
    id: 6,
    category: "tv",
    make: "Hisense",
    model: 'U8K Mini-LED 65"',
    price: 899,
    images: [
      "https://images.unsplash.com/photo-1558888401-3cc1de77652d?w=400&q=80",
      "https://images.unsplash.com/photo-1529338215083-dfbce6338219?w=400&q=80",
      "https://images.unsplash.com/photo-1615210230840-69c07c13b4d1?w=400&q=80",
    ],
    isSpecialOffer: true,
    brand: "Hisense",
  },
  {
    id: 7,
    category: "tv",
    make: "LG",
    model: 'NanoCell 75" 4K',
    price: 799,
    images: [
      "https://images.unsplash.com/photo-1593361351718-6b853f7b3431?w=400&q=80",
    ],
    brand: "LG",
  },
  {
    id: 8,
    category: "tv",
    make: "Sony",
    model: 'X90L 4K 55"',
    price: 999,
    images: [
      "https://images.unsplash.com/photo-1529338215083-dfbce6338219?w=400&q=80",
      "https://images.unsplash.com/photo-1558888401-3cc1de77652d?w=400&q=80",
    ],
    brand: "Sony",
  },
  {
    id: 9,
    category: "phone",
    make: "Apple",
    model: "iPhone 15 Pro Max",
    price: 1199,
    images: [
      "https://images.unsplash.com/photo-1649932542678-c5f6a78ae51a?w=400&q=80",
      "https://images.unsplash.com/photo-1658933161439-bbc61172d86b?w=400&q=80",
      "https://images.unsplash.com/photo-1649932542396-0a7838cd0596?w=400&q=80",
    ],
    isSpecialOffer: true,
    brand: "Apple",
  },
  {
    id: 10,
    category: "phone",
    make: "Samsung",
    model: "Galaxy S24 Ultra",
    price: 1299,
    images: [
      "https://images.unsplash.com/photo-1649932542396-0a7838cd0596?w=400&q=80",
      "https://images.unsplash.com/photo-1658933161439-bbc61172d86b?w=400&q=80",
    ],
    brand: "Samsung",
  },
  {
    id: 11,
    category: "phone",
    make: "Google",
    model: "Pixel 8 Pro",
    price: 999,
    images: [
      "https://images.unsplash.com/photo-1658933161439-bbc61172d86b?w=400&q=80",
    ],
    brand: "Google",
  },
  {
    id: 12,
    category: "phone",
    make: "OnePlus",
    model: "12 Pro",
    price: 899,
    images: [
      "https://images.unsplash.com/photo-1649932542678-c5f6a78ae51a?w=400&q=80",
      "https://images.unsplash.com/photo-1658933154992-d5375e01c535?w=400&q=80",
    ],
    isSpecialOffer: true,
    brand: "OnePlus",
  },
  {
    id: 13,
    category: "phone",
    make: "Apple",
    model: "iPhone 15",
    price: 899,
    images: [
      "https://images.unsplash.com/photo-1658933154992-d5375e01c535?w=400&q=80",
      "https://images.unsplash.com/photo-1649932542678-c5f6a78ae51a?w=400&q=80",
      "https://images.unsplash.com/photo-1649932542396-0a7838cd0596?w=400&q=80",
    ],
    brand: "Apple",
  },
  {
    id: 14,
    category: "phone",
    make: "Samsung",
    model: "Galaxy Z Fold 5",
    price: 1799,
    images: [
      "https://images.unsplash.com/photo-1649932542396-0a7838cd0596?w=400&q=80",
    ],
    brand: "Samsung",
  },
  {
    id: 15,
    category: "phone",
    make: "Xiaomi",
    model: "14 Pro",
    price: 799,
    images: [
      "https://images.unsplash.com/photo-1658933161439-bbc61172d86b?w=400&q=80",
      "https://images.unsplash.com/photo-1649932542678-c5f6a78ae51a?w=400&q=80",
    ],
    brand: "Xiaomi",
  },
  {
    id: 16,
    category: "phone",
    make: "Google",
    model: "Pixel 8",
    price: 699,
    images: [
      "https://images.unsplash.com/photo-1649932542678-c5f6a78ae51a?w=400&q=80",
    ],
    isSpecialOffer: true,
    brand: "Google",
  },
  {
    id: 17,
    category: "laptop",
    make: "Apple",
    model: 'MacBook Pro 16" M3 Max',
    price: 3499,
    images: [
      "https://images.unsplash.com/photo-1625296277624-dfca5e22a0ee?w=400&q=80",
      "https://images.unsplash.com/photo-1651614422674-1f51818f27b1?w=400&q=80",
      "https://images.unsplash.com/photo-1585645982492-639c028b8a10?w=400&q=80",
    ],
    isSpecialOffer: true,
    brand: "Apple",
  },
  {
    id: 18,
    category: "laptop",
    make: "Dell",
    model: "XPS 15 9530",
    price: 1899,
    images: [
      "https://images.unsplash.com/photo-1651614422674-1f51818f27b1?w=400&q=80",
      "https://images.unsplash.com/photo-1585645982492-639c028b8a10?w=400&q=80",
    ],
    brand: "Dell",
  },
  {
    id: 19,
    category: "laptop",
    make: "Lenovo",
    model: "ThinkPad X1 Carbon Gen 11",
    price: 1699,
    images: [
      "https://images.unsplash.com/photo-1585645982492-639c028b8a10?w=400&q=80",
    ],
    brand: "Lenovo",
  },
  {
    id: 20,
    category: "laptop",
    make: "HP",
    model: 'Spectre x360 14"',
    price: 1499,
    images: [
      "https://images.unsplash.com/photo-1650735310241-287171e38e5f?w=400&q=80",
      "https://images.unsplash.com/photo-1625296277624-dfca5e22a0ee?w=400&q=80",
    ],
    brand: "HP",
  },
  {
    id: 21,
    category: "laptop",
    make: "Apple",
    model: 'MacBook Air 15" M3',
    price: 1299,
    images: [
      "https://images.unsplash.com/photo-1625296277602-a9f0b67b3a99?w=400&q=80",
      "https://images.unsplash.com/photo-1651614422674-1f51818f27b1?w=400&q=80",
    ],
    isSpecialOffer: true,
    brand: "Apple",
  },
  {
    id: 22,
    category: "laptop",
    make: "ASUS",
    model: "ROG Zephyrus G14",
    price: 1599,
    images: [
      "https://images.unsplash.com/photo-1675668409245-955188b96bf6?w=400&q=80",
      "https://images.unsplash.com/photo-1585645982492-639c028b8a10?w=400&q=80",
      "https://images.unsplash.com/photo-1651614422674-1f51818f27b1?w=400&q=80",
    ],
    brand: "ASUS",
  },
  {
    id: 23,
    category: "laptop",
    make: "Microsoft",
    model: "Surface Laptop 5",
    price: 1299,
    images: [
      "https://images.unsplash.com/photo-1651614422674-1f51818f27b1?w=400&q=80",
    ],
    brand: "Microsoft",
  },
  {
    id: 24,
    category: "laptop",
    make: "Acer",
    model: "Swift X 14",
    price: 899,
    images: [
      "https://images.unsplash.com/photo-1585645982492-639c028b8a10?w=400&q=80",
      "https://images.unsplash.com/photo-1675668409245-955188b96bf6?w=400&q=80",
    ],
    isSpecialOffer: true,
    brand: "Acer",
  },
];
```

Примечание: на этой итерации рендерятся только товары с category: 'tv' (id 1–8). Телефоны и ноутбуки понадобятся в итерации 2, но данные уже должны лежать в файле.

───────────────────────────────────────
КОМПОНЕНТЫ
───────────────────────────────────────

    App Корневой компонент. На этом этапе просто рендерит <Home />.
    Home Главная (и единственная) страница.

Структура страницы (сверху вниз):

    <Header /> с текущей категорией
    Sidebar с фильтрами: — Бренд: выпадающий список (<select>) со списком брендов, вычисленным из данных. Фильтрация не работает (обработчик не привязан). — Цена: два поля ввода «Min» и «Max» — Кнопка «Apply Filters» (без функционала)
    Баннер Special Deal под фильтрами. Всегда показывает 0:59:59.
    Счётчик товаров и дропдаун сортировки
    Сетка товаров — <ProductCard /> для каждого продукта (все 8 телевизоров)
    <Footer />

    Header Содержимое: — Логотип «TechStore» (текст, кликабельный — ссылка на /tv) — Навигация: три кнопки-таба — TV, Phone, Laptop — Иконка корзины — Иконка пользователя

Кнопки категорий отрисовываются, но по клику ничего не происходит (обработчик передаётся, но родитель его не обрабатывает — категория всегда "tv").

Бонус:
Реализовать sticky header.

    Footer Четыре колонки:
    About — пара предложений о магазине
    Support — ссылки (FAQ, Shipping, Returns, Contact)
    Legal — ссылки (Privacy Policy, Terms of Service)
    Newsletter — поле email + кнопка «Subscribe»

Копирайт внизу: © 2026 TechStore. All rights reserved.

Ссылки никуда не ведут. Кнопка «Subscribe» ничего не делает.

Бонус:
футер прижимается к низу страницы.

    Счётчик товаров и дропдаун сортировки по цене — Счётчик: выводит общее количество товаров на экране в формате «N products» — <select> сортировки с заголовком «Sort by:». Опции:
        Price: High to Low
        Price: Low to High Сортировка не работает (обработчик не привязан).
    ProductCard (единственный stateful-компонент)

Карусель изображений:
— Если у товара больше 1 изображения: снизу индикатор количества фото, при наведении по бокам появляются стрелки, по клику фото меняется.
— Если 1 изображение — показывается только фотография.

Бейдж «Special Offer»:

красный, показывается если product.isSpecialOffer === true.

Название бренда (product.make) — серый/приглушённый текст.
Модель (product.model) — жирный, ограничение в 2 строки (line-clamp).
Цена — формат $X,XXX.

Избранное — кнопка-сердечко с двумя состояниями: «добавлено» / «не добавлено».

Add to Cart — работает как счётчик:
— При добавлении первого объекта кнопка меняется на:
— «минус» (уменьшает на 1)
— текст «N in cart»
— «плюс» (увеличивает на 1)
— При удалении последнего объекта возвращается исходная кнопка.

Все состояния локальны для каждой карточки.

───────────────────────────────────────
ЧЕГО НЕ ДОЛЖНО БЫТЬ В ЭТОЙ ИТЕРАЦИИ
───────────────────────────────────────

— Обратного отсчёта в таймере
— Роутинга между страницами
— Работающей фильтрации / сортировки / пагинации
— Авторизации
— Любых API-запросов

───────────────────────────────────────
КРИТЕРИИ ПРИЁМКИ (САМОПРОВЕРКА)
───────────────────────────────────────

Базовое:
[ ] Страница рендерит хедер
[ ] Кнопки категорий в Header не переключают контент (рендерятся только TV)
[ ] Header: логотип «TechStore» (ссылка на /tv), три таба категорий, иконка корзины, иконка пользователя
[ ] Страница рендерит счётчик товаров и панель сортировки
[ ] Страница рендерит 8 карточек телевизоров

Карточка товара:
[ ] Карусель: стрелки при наведении, индикатор количества фото, смена фото по клику
[ ] Бейдж «Special Offer» на товарах с isSpecialOffer === true
[ ] В карточке: бренд, модель (line-clamp 2 строки), цена в формате $X,XXX
[ ] Кнопка избранного (сердечко) с переключением состояния
[ ] «Add to Cart» работает как счётчик: «−» / «N in cart» / «+», возврат к исходной кнопке при 0

Sidebar и прочее: [ ] Sidebar:
dropdown брендов,
поля Min/Max цены,
кнопка «Apply Filters» — визуально присутствуют,
фильтрация не работает [ ] Баннер «Special Deal» с таймером 0:59:59 (статично)

[ ] Footer: четыре колонки (About, Support, Legal, Newsletter) + копирайт

Бонусы:
[ ] Sticky header
[ ] Footer прижат к низу страницы
[ ] Вёрстка адаптивная (1 → 2 → 3 → 4 колонки, резина в карточках)

───────────────────────────────────────
FAQ
───────────────────────────────────────

Что делать, если я в ступоре?
— Велком с вопросами в чат и ЛС :)

Важно: вы можете делать дополнительные задания — не бойтесь практиковаться и ошибаться!

_Обязательный вопрос
Ссылка на ваш репозиторий _
Ссылка на ваш ТГ аккаунт
(что мы могли связать ТГ + Гитлаб и давать вам ОС)

- Что такое JSX? _
  Новый язык программирования от Facebook
  Синтаксическое расширение JavaScript, которое позволяет писать HTML-подобную разметку внутри JS. и Позволяет упрощать написание кода
  Шаблонизатор, который работает только в браузере
  Библиотека для стилизации компонентов
  Во что превращается JSX-выражение <div className="card">Hello</div> после компиляции (например, через Babel)? _
  В обычную HTML-строку
  В вызов document.createElement('div')
  В вызов React.createElement('div', { className: 'card' }, 'Hello'), возвращающий объект ReactElement
  В DOM-узел, сразу вставляемый на страницу
  Какое из утверждений про JSX ВЕРНО? _
  A) В JSX можно использовать атрибут class так же, как в HTML
  B) JSX-компонент должен возвращать один корневой элемент (или Fragment)
  C) JSX работает без сборщика (Vite/Webpack/Babel) прямо в браузере
  D) В JSX нельзя вставлять JavaScript-выражения
  Что возвращает вызов useState(initialValue)? _
  Только текущее значение состояния
  Массив из двух элементов: [текущее значение, функция для его обновления]
  Объект вида { state, setState }
  Промис, который резолвится в значение состояния
  Что произойдёт после вызова setCount(count + 1)? _
  A) Значение count мгновенно изменится в текущей строке кода
  B) React запланирует обновление состояния и повторно отрендерит компонент с новым значением
  C) Компонент размонтируется и смонтируется заново
  D) Ничего — useState не триггерит ре-рендер
  Где можно вызывать хук useState? _
  A) В любом месте кода, включая условия и циклы
  B) Только внутри классовых компонентов
  C) Только на верхнем уровне функционального компонента (или кастомного хука), без условий и циклов
  D) Только в обработчиках событий
  В компоненте ProductCard у нас локальное состояние «в избранном / не в избранном». Как лучше его объявить? _
  A) const isFav = false;
  B) const [isFav, setIsFav] = useState(false);
  C) let isFav = useState(false);
  D) const isFav = React.state(false);
  Что такое props в React? _
  A) Внутреннее состояние компонента
  B) Объект с параметрами, которые родительский компонент передаёт дочернему
  C) Глобальные настройки приложения
  D) CSS-свойства компонента
  Можно ли мутировать props внутри дочернего компонента (например, props.value = 5)? _
  A) Да, это рекомендованный способ обновления данных
  B) Да, но только для примитивов
  C) Нет, props — read-only; для изменений нужно поднять состояние наверх или использовать колбэк
  D) Да, если использовать Object.assign
  Как передать функцию-обработчик клика из Home в дочерний Header? _
  A) <Header onCategoryChange={handleCategoryChange} />
  B) <Header handleCategoryChange() />
  C) <Header props={handleCategoryChange} />
  D) Через глобальную переменную window.handler
  В ProductCard приходит проп product. Как корректно достать из него поля? _
  A) function ProductCard(product) { return <div>{product.make}</div> }
  B) function ProductCard({ product }) { return <div>{product.make}</div> }
  C) function ProductCard() { const product = this.props; ... }
  D) function ProductCard([product]) { ... }
  Как вам лекция _
  1

2

3

4

5

Хватило ли лайвкодинга
1

2

3

4

5

Достаточно ли информации в презентации?

- 1

2

3

4

5

Достаточно ли понятное было объяснение от лектора?

- 1

2

3

4

5

Насколько сложным оказалось домашнее задание?

- 1

2

3

4

5

Понравилось ли домашнее задание?

- 1

2

3

4

5

Комфортное ли было время старта лекции?

- 1

2

3

4

5

Лекция продлилась 2 часа. Комфортно ли было слушать и усваивать так долго материал?
от 1 до 5.
1 - хочется короче (1.5 часа)
5 - все ок.

- 1
  2
  3
  4
  5
  Общая обратная связь. Можете поделиться тут своими мыслями)

Что хотелось бы, чтобы мы улучшили?
Критику мы воспринимаем крайне здраво, не переживайте!

Сделаю обязательным, чтобы вы чего-нибудь да написали :) \*
Никогда не используйте формы Google для передачи паролей.
Компания Google не имеет никакого отношения к этому контенту. - Связаться с владельцем формы - Условия использования - Политика конфиденциальности

Эта форма кажется вам подозрительной? Пожаловаться
Google Формы
