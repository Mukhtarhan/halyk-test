# Currency Exchange Rates SPA

## Описание проекта

Это одностраничное приложение (SPA), созданное с использованием Vue 3, Pinia и Vue Router. Приложение получает данные о валютных курсах из API Национального банка Республики Казахстан и отображает их в удобном формате. Пользователи могут фильтровать, лайкать валюты и сохранять избранные записи.

## Основные функции

- **Главная страница**:
  - Поле для ввода даты для запроса курсов валют.
  - Отображение списка курсов валют с полным именем, кодом, курсом и флагом страны.
  - Фильтрация списка по наименованию и коду валюты.
  - Пагинация списка с возможностью выбора количества записей на странице.
  
- **Избранное**:
  - Возможность лайкать валютные записи (добавление в избранное).
  - Отображение избранных валют на отдельной странице.
  - Сохранение избранных записей в локальном хранилище браузера, чтобы они не пропадали при перезагрузке страницы.

## Установка

1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/Mukhtarhan/halyk-test.git
  

