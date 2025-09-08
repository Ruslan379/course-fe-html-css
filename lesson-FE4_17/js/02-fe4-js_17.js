console.log(
  '%c 2.Кількість елементів у відповіді від бекенду. ',
  'color: white; background-color: #D33F49',
);

//! Кількість елементів у відповіді від бекенду
console.warn(`Параметр кількісті елементів на сторінці: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_17/images/per-page-param.png"}`);
//? ✴️ Перший параметр визначає кількість елементів
//? у відповіді від бекенду.
//? Нехай, у нашому випадку, він називається per_page.
//? Стандарт іменування параметрів пагінації відсутній,
//? тому їх імена залежать від бекенд розробника.

//? ✳️ У такому GET-запиті бекенд поверне не всю колекцію
//? з дванадцяти елементів, а тільки перші чотири.
//? Якщо передати від'ємне значення або значення більше
//? кількості елементів в колекції, то бекенд
//? може відповісти по-різному - проігнорувати їх
//? або повернути помилку 400 (BAD REQUEST),
//? залежно від його реалізації.

//? ✳️ Публічний JSONPlaceholder API так само підтримує пагінацію
//? - кількість елементів у відповіді контролюється параметром _limit.
//? Всього колекція /posts налічує сто елементів.
//? Змінюйте значення параметра _limit в прикладі і
//?  досліджуйте відповідь бекенду в інтерфейсі і на вкладці Network.
console.warn("Параметр кількісті елементів на сторінці на JSONPlaceholder API: \n https://github.com/typicode/json-server#paginate");

//? ✳️ По кліку на кнопку «Fetch N posts» 
//? зробимо GET-запит і виведемо 
//? список N постів згідно заданої кількості:
const fetchPostsBtn = document.querySelector(".fetch-btn");
const postList = document.querySelector(".posts-list");

fetchPostsBtn.addEventListener("click", fetchPosts);

function fetchPosts() {
  fetchData()
    .then((posts) => renderPosts(posts))
    .catch((error) => console.log(error));
};

function fetchData() {
  return fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      };
      return response.json();
    })
};

function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `
                <li>
                    <h3 class="post-title">${title.slice(0, 30)}</h3>
                    <p><b>Post id</b>: ${id}</p>
                    <p><b>Author id</b>: ${userId}</p>
                    <p class="post-body">${body}</p>
                </li>
            `;
    })
    .join("");
  postList.innerHTML = markup;
  console.log("markup:", markup);
  console.log("---------------------------------------------------------------------------------");
};
console.log("---------------------------------------------------------------------------------");
