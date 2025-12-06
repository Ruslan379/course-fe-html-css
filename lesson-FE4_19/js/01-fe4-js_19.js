console.log(
    '%c 1.Асинхронні функції. ',
    'color: white; background-color: #D33F49',
);

//! Асинхронні функції
//? ✳️ Робота з бекендом може бути заплутаною 
//? - після однієї асинхронної операції необхідно 
//? зробити ще один запит на сервер на підставі 
//? отриманих даних, і так кілька разів. 
//? Наприклад, на сторінці профілю користувач 
//? хоче подивитися список друзів. 
//? Перше, що необхідно зробити 
//? - підтвердити його права доступу до цієї сторінки на бекенді. 
//? Для цього потрібно зробити запит до my-api.com/me. 
//? Якщо бекенд дозволить доступ, у відповіді 
//? ми отримаємо унікальний токен доступу до захищених ресурсів.
console.warn("КРОК-1.Підтвердження прав доступу до сторінки:");
console.log(
    `%c
    const fetchFriends = () => {
        return fetch("my-api.com/me").then(token => {
            console.log(token);
        });
    };
    `,
    'color: blue; font-size: 18px',
);

console.warn("КРОК-2.Запит профілю користувача:");
//? ✳️ Потім необхідно зробити запит профілю користувача
//? з my-api.com/profile, але профіль - неповний,
//? він містить тільки критично важливу інформацію:
//? ідентифікатор користувача без списку друзів.
let token = "${token}"; //! для вірного відображення в console.log()
console.log(
    `%c
    const fetchFriends = () => {
        return fetch("my-api.com/me")
            .then(token => {
                return fetch('my-api.com/profile?token=${token}');
        })
        .then(user => {
            console.log(user.id);
        });
    };
    `,
    'color: blue; font-size: 18px',
);

console.warn("КРОК-3.Запит списку друзів:");
//? ✳️ І тільки після цього можна зробити запит
//? списку друзів з my-api.com/users/:userId/friends.
let user = { id: "${user.id}" }; //! для вірного відображення в console.log()
console.log(
    `%c
    const fetchFriends = () => {
        return fetch("my-api.com/me")
            .then(token => {
                return fetch('my-api.com/profile?token=${token}');
        })
        .then(user => {
            return fetch('my-api.com/users/${user.id}/friends');
        });
    };

    fetchFriends()
        .then(friends => console.log(friends))
        .catch(error => console.error(error));
    `,
    'color: blue; font-size: 18px',
);

//? ✳️ В результаті отримуємо, не найзручніший
//? для читання код, хоча операції - порівняно прості.
//? Оскільки ми передаємо функції-обробники методу then(),
//? утворюються ялинкоподібні вкладеності.


console.warn("КРОК-4.Код з асинхронними функціями:");
//? ✴️ Асинхронні функції допомагають 
//? позбавиться колбеків і вкладених конструкцій. 
//? Водночас, вони відмінно працюють разом із 
//? методами then() і catch(), 
//? тому що гарантовано повертають проміс.
console.log(
    `%c
    const fetchFriends = async () => {
        const token = await fetch("my-api.com/me");
        const user = await fetch('my-api.com/profile?token=${token}');
        const friends = await fetch('my-api.com/users/${ user.id }/friends');
        return friends;
    };

    fetchFriends()
        .then(friends => console.log(friends))
        .catch(error => console.error(error));
        `,
        'color: darkgreen; font-size: 18px',
);

console.log("-------------------------------------------------------------------------------------------------------------------");
