#Задание

Напишите одностраничное приложение (SPA) для конвертирования валют. Для получения текущих курсов найдите и используйте любое открытое API.
Приложение должно состоять из двух страниц:

- 1) Конвертер из одной валюты в другую. На этой странице должно быть текстовое поле, в которое можно ввести текст в виде 15 usd in rub и получить результат.
- 2) Страница с текущими курсами валют. На этой странице пользователь должен видеть «свежие» курсы валют относительно базовой валюты — например, если базовая валюта — рубль, то пользователь видит, что 1 USD = 63.49 RUB, а 1 EUR = 72.20

По-умолчанию у пользователя должна определяться «базовая» валюта, которую он может настроить.

Плюсом будет:
- Хорошо продуманный интерфейс и внешний вид
- Тесты
- Максимальная скорость работы приложения (как при загрузке приложения, так и при конвертировании валют)

Для реализации используйте
- Любые библиотеки, которые считаете уместными




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
