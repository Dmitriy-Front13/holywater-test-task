# Holywater – Тестове завдання

Веб-застосунок для адміністраторів, який дозволяє створювати конфігурації головного екрану мобільного застосунку. Адміністратор може додавати секції з різними типами макетів (наприклад, банер, слайдер, вертикальні та горизонтальні списки), змінювати порядок секцій, редагувати вміст та переглядати JSON-конфігурацію, яка буде споживатися мобільним клієнтом.

## 🛠️ Стек технологій

- **Frontend**: React, TypeScript, Vite, TailwindCSS, ShadCN
- **Backend**: Node.js, Express, TypeScript
- **База даних**: MongoDB (Mongoose)

## 🚀 Деплой

Проєкт задеплоєно та доступний за посиланням:

- 🔗 [Фронтенд]([https://...](https://holywater-test-task.vercel.app/))
- 🔗 [API (GET /api/screen)]([https://...](https://holywater-test-task-backend.onrender.com/api/screen))

## 📦 Локальний запуск

### Frontend

```bash
cd frontend
yarn
yarn dev
```

### Backend

```bash
cd backend
yarn
yarn dev
```

## 📝 Схема даних (MongoDB)

```ts
type SectionTypes = 'slider' | 'horizontalGrid' | 'verticalGrid' | 'banner' | 'horizontalList';

type SectionTitle =
  | 'Top Chart'
  | 'Most Trending'
  | 'Continue Watching'
  | 'Most Popular'
  | 'Slider'
  | 'Banner';

interface ISectionItem {
  title: string;
  description?: string;
  imageURL: string;
  exclusive: boolean;
}

interface ISection {
  type: SectionTypes;
  title: SectionTitle;
  showTitle: boolean;
  showItemsTitle: boolean;
  items: ISectionItem[];
}

interface IConfiguration {
  name: string;
  isMain: boolean;
  sections: ISection[];
}
```

## 💡 Припущення

- Один конфіг може бути позначений як `isMain: true` — він буде використовуватись як основний екран.
- Кожна секція має тип (визначає вигляд), заголовок, прапор показу заголовків, та список елементів.
- Дані повертаються через REST-ендпойнт `GET /api/screen` у форматі JSON, готовому для мобільного клієнта.

## ✅ Реалізований функціонал

- Створення, редагування та видалення конфігурацій.
- Додавання, редагування та видалення секцій.
- Перетягування секцій для зміни порядку.
- Редагування контенту всередині секцій (назва, опис, зображення, прапор exclusive).
- Прегляд згенерованого JSON.
- Вибір головної конфігурації (isMain).

## ❗ Що не встиг реалізувати

- Окрема колекція для серіалів: наразі всі дані зберігаються без поділу, але в майбутньому планувалося винести інформацію про серіали в окрему колекцію для зручнішого керування та масштабування.

