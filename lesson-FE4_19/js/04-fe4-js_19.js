console.log(
    '%c 4.Паралельні запити. ',
    'color: white; background-color: #D33F49',
);

//! Паралельні запити
// console.warn("Паралельні запити:");
//? ✴️ Якщо одночасно необхідно зробити декілька запитів, 
//? використовувати синтаксис async/await потрібно дуже обережно. 
//? У наступному прикладі будуть виконані три послідовних запити, 
//? тому що виконання асинхронної функції призупиняється, 
//? коли інтерпретатор зустрічає await. 
//? Крім того, парс результатів запитів 
//? також буде послідовний, що забере більше часу.
const fetchUsers = async () => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const firstResponse = await fetch(`${baseUrl}/users/1`);
    const secondResponse = await fetch(`${baseUrl}/users/2`);
    const thirdResponse = await fetch(`${baseUrl}/users/3`);

    const firstUser = await firstResponse.json();
    const secondUser = await secondResponse.json();
    const thirdUser = await thirdResponse.json();

    console.log(firstUser, secondUser, thirdUser);
    console.log("----------------------------------------------------------------------------------------------------------");

};

fetchUsers();
// console.log("----------------------------------------------------------------------------------------------------------");
