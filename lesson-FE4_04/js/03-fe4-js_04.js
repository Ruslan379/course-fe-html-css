console.log(
    '%c 3.Команди NPM. ',
    'color: white; background-color: #D33F49',
);

//! Команди NPM
console.warn("Документація NPM: \n https://docs.npmjs.com/");
console.warn("Основні команди:");
console.log(
    `%c
    npm init — ініціалізує npm в проєкті і створює файл package.json
    npm install — встановлює всі залежності, перелічені в package.json
    npm list --depth=0 — виведе в терміналі список локально встановлених пакетів з номерами їх версій, без залежностей
    npm install [package-name] — встановить пакет локально у папку node_modules
    npm uninstall [package-name] — видалить пакет, встановлений локально і оновить package.json
    npm start і npm test — запустить скрипт start або test, розташований в package.json
    npm run [custom-script] — запустить кастомний скрипт, розташований в package.json
    npm outdated — використовується для пошуку оновлень, виявить сумісні версії програмно і виведе список доступних оновлень
    npm update — оновить всі пакети до максимально дозволеної версії

    `,
    'color: blue; font-size: 18px',
);
console.log("--------------------------------------------------------------------------------------------------------");

