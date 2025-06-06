console.log(
    '%c 6.Типи залежностей. ',
    'color: white; background-color: #D33F49',
);

//! Типи залежностей
//? ✴️ Деякі залежності будуть використані у фінальному проекті,
//? інші необхідні тільки на стадії розробки,
//? а є й такі, які необхідно використовувати, незалежно від проекту.

//? 📌 Саме для цього команди npm install і npm uninstall мають три прапорці:

//?     🔸 -save - вказує, що додається залежність,
//?         яка увійде до фінального продукту.
//?         Пакет буде встановлений локально,
//?         в папку node_modules і буде доданий запис
//?         в поле dependencies в package.json.
    
//?     🔸 -save-dev - вказує, що додається залежність розробки.
//?         Пакет буде встановлений локально в папку node_modules,
//?         і буде доданий запис в поле devDependencies в package.json.
    
//?     🔸 -global - вказує, що додається глобальна залежність,
//?         тобто інструмент, який доступний для будь-якого проекту.
//?         Пакет буде встановлений глобально (в систему).

console.log(
    `%c
    🔸 -save - вказує, що додається залежність,
        яка увійде до фінального продукту.
        Пакет буде встановлений локально,
        в папку node_modules і буде доданий запис
        в поле dependencies в package.json.

    🔸 -save-dev - вказує, що додається залежність розробки.
        Пакет буде встановлений локально в папку node_modules,
        і буде доданий запис в поле devDependencies в package.json.

    🔸 -global - вказує, що додається глобальна залежність,
        тобто інструмент, який доступний для будь-якого проекту.
        Пакет буде встановлений глобально (в систему).
    `,
    'color: blue; font-size: 18px',
);
console.log("-------------------------------------------------------------------------------------------------------");
