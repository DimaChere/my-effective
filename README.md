This is a [Next.js] project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## React приложение для чтения афоризмов Afforismix

Чтобы запустить development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Откройте [http://localhost:3000](http://localhost:3000) чтобы увидеть результат.

## Задачи

Сделать React приложение для чтения афоризмов по аналогии с сайтами: https://quotes.thefamouspeople.com/, https://socratify.net/quotes или https://www.goodreads.com/quotes

Необходимо использовать TypeScript, функциональные компоненты и хуки

Веб приложение должно содержать несколько страниц

-   на главной должны быть представлены лучшие афоризмы из разных категорий (принцип формирования и дословная структура главной не принципиально. главное что б на ней были афоризмы из разных категорий)
-   кроме главной, должны быть страницы, отображающие афоризмы из конкретной категории (так чтобы у пользователя была возможность просмотреть все афоризмы в данной категории)
-   также должна быть возможность поставить лайк понравившемуся афоризму. лайки должны сохраняться локально на стороне клиента и сохраняться между сессиями
-   верстка должна быть резиновой, то есть при изменении размера окна на десктопе и при открытии сайта с мобильного устройства сайт не должен рассыпаться

API для получения афоризмов – https://github.com/lukePeavey/quotable#list-quotes

## Демонстрация приложения

React приложение расположенно [здесь](https://my-effective.vercel.app/) или по ссылке https://my-effective.vercel.app/, с использованием [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).
