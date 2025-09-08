console.log(
    '%c 3.Номер групи елементів («сторінка»). ',
    'color: white; background-color: #D33F49',
);

//! Номер групи елементів («сторінка»)
//? ✴️ Вказавши бажану кількість елементів у відповіді,
//? ми завжди отримаємо однаковий результат
//? - перші per_page елементів колекції,
//? так звану першу групу або «сторінку».
//? Другий параметр пагінації контролює зміщення всередині колекції
//? - номер групи елементів, яку ми хочемо отримати.
//? Якщо бекенд реалізує пагінацію,
//? то значення цього параметра за замовчуванням одиниця
//? - перша група або «сторінка» елементів.
//? Нехай у нашому випадку він називається page.

//! Page paramater
console.warn(`Page paramater​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_17/images/page-param.png"}`);
//? ✳️ Змінюючи значення параметра page, ми уточнюємо бекенду, 
//? яку наступну групу елементів хочемо отримати, 
//? і так, доки в колекції не закінчаться елементи. 
//? Якщо вказати від'ємне значення або більше груп в колекції 
//? - відповідь бекенду буде залежати від його реалізації.
//? ✳️ По кліку на кнопку «Fetch N posts» 
//? зробимо GET-запит і виведемо 
//? список N постів згідно заданої кількості:
const fetchPostsBtn = document.querySelector(".fetch-btn3");
const postList = document.querySelector(".posts-list3");

//! -------------------------- Створюємо параметри рядка запиту --------------------------
const BaseURL = "https://jsonplaceholder.typicode.com/";
const endpoint = "posts"
const params = new URLSearchParams(
    {
        _limit: 3,
        _page: 5,
    }
);

const url = `${BaseURL}${endpoint}?${params}`;
console.log("url:", url); //! "https://jsonplaceholder.typicode.com/posts?_limit=3&_page=5"
//! ________________________________________________________________________________________

fetchPostsBtn.addEventListener("click", fetchPosts);

function fetchPosts() {
    fetchData(url)
        .then((posts) => renderPosts(posts))
        .catch((error) => console.log(error));
};

function fetchData(url) {
    // return fetch("https://jsonplaceholder.typicode.com/posts?_limit=3&_page=5") //todo: var.1 
    return fetch(url) //todo: var.2 
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
    console.log("----------------------------------------------------------------------------------------------------------");
};
console.log("----------------------------------------------------------------------------------------------------------");
