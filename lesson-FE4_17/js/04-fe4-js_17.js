console.log(
    '%c 4.Прийом «Завантажити ще». ',
    'color: white; background-color: #D33F49',
);

//! Прийом «Завантажити ще»
//? ✴️ Щоб динамічно змінювати номер групи на кожний наступний запит, 
//? достатньо оголосити ще одну глобальну змінну, назвемо її page 
//? і встановимо початкове значення 1 - перша група елементів. 
//? Після кожного успішного запиту, в колбек методу then() 
//? будемо збільшувати значення page на одиницю. 
//? Складаючи параметри запиту, використовуємо її значення.
//? ✳️ 

const fetchPostsBtn = document.querySelector(".fetch-btn4");
const postList = document.querySelector(".posts-list4");
const fetchPostsPrevBtn = document.getElementById("prev");
const fetchPostsNextBtn = document.getElementById("next");

//! Контролює кількість груп
let page = 3;
//! Контролює кількість елементів у групі
let perPage = 4;
// ____________________________________________________________________________

fetchPostsBtn.addEventListener("click", fetchPosts);
fetchPostsPrevBtn.addEventListener("click", fetchPostsPrev);
fetchPostsNextBtn.addEventListener("click", fetchPostsNext);

//! Функція збирає ВСЕ при першому запиту: параметри рядка запиту, обробляє запит, додає розмітку
function fetchPosts() {
    const url = createSearchParams();
    fetchData(url)
        .then((posts) => renderPosts(posts))
        .catch((error) => console.log(error));
};

//! Функція збирає ВСЕ при Prev-запиту: параметри рядка запиту, обробляє запит, додає розмітку
function fetchPostsPrev() {
    page -= 1;
    const url = createSearchParams();
    fetchData(url)
        .then((posts) => renderPosts(posts))
        .catch((error) => console.log(error));
};

//! Функція збирає ВСЕ при Next-запиту: параметри рядка запиту, обробляє запит, додає розмітку
function fetchPostsNext() {
    page += 1;
    const url = createSearchParams();
    fetchData(url)
        .then((posts) => renderPosts(posts))
        .catch((error) => console.log(error));
};

//! Функція створює параметри рядка запиту
function createSearchParams() {
    const BaseURL = "https://jsonplaceholder.typicode.com/";
    const endpoint = "posts"
    const params = new URLSearchParams(
        {
            _limit: perPage,
            _page: page,
        }
    );

    const url = `${BaseURL}${endpoint}?${params}`;
    console.log("url:", url); //! "https://jsonplaceholder.typicode.com/posts?_limit=3&_page=5"
    return url;
};

//! Функція створює запит і повертає відповідь
function fetchData(url) {
    console.log("url --> fetchData:", url);
    return fetch(url) //todo: var.2 
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            };
            return response.json();
        })
};

//! Функція будуе розмітку
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
    console.log("markup:", markup);
    postList.innerHTML = markup; //todo: var.1
    // postList.insertAdjacentHTML("beforeend", markup); //todo: var.2
    console.log("----------------------------------------------------------------------------------------------------------");
};

console.log("-------------------------------------------------------------------");
