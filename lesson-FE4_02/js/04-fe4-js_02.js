console.log(
    '%c 4.Debounce (відкладений виклик) ',
    'color: white; background-color: #D33F49',
);

//! Debounce (відкладений виклик)
console.warn(`Debounce: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_02/images/debounce.png"}`);

const vanillaOutput = document.querySelector(".part_4 .output.vanilla");
const throttledOutput = document.querySelector(".part_4 .output.throttled");
const debouncedOutput = document.querySelector(".part_4 .output.debounced");
const eventCounter = {
    vanilla: 0,
    throttled: 0,
    debounced: 0
};
let { vanilla, throttled, debounced } = eventCounter;

document.addEventListener("scroll", () => {
    vanilla += 1;
    vanillaOutput.textContent = vanilla;
});

document.addEventListener(
    "scroll",
    _.throttle(() => {
        throttled += 1;
        throttledOutput.textContent = throttled;
    }, 300)
);

document.addEventListener(
    "scroll",
    _.debounce(() => {
        debounced += 1;
        debouncedOutput.textContent = debounced;
    }, 300)
);
console.log("---------------------------------------------------------");


//! Input (with debounce)
console.warn("Input (with debounce)​:");
const input = document.querySelector(".part_4 .input");
console.log("input:", input); //!

input.addEventListener("input", _.debounce(() => {
    console.log("Отправка запроса:", input.value);
}, 500));
console.log("---------------------------------------------------------");
