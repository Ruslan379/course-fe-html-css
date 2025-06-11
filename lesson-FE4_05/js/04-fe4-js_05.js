console.log(
    '%c 4.Бібліотека Chart.js. ',
    'color: white; background-color: #D33F49',
);

//! Бібліотека Chart.js
console.warn("Бібліотека Chart.js: \n https://www.chartjs.org");
console.warn("Бібліотека Chart.js на NPM: \n https://www.npmjs.com/package/chart.js");


//! Встановлення бібліотеки Chart.js
console.warn("Встановлення бібліотеки Chart.js:")
console.log(
    `%c
    npm i chart.js
    `,
    'color: blue; font-size: 18px',
);
console.log("------------------------------------------------------------------------------------------------------------------");


//! Використання бібліотеки Chart.js
console.warn("Використання бібліотеки Chart.js: \n https://www.chartjs.org/docs/latest/getting-started/usage.html");
console.log(
    `%c
        HTML:
    <div style="width: 800px;"><canvas id="acquisitions"></canvas></div>
    `,
    'color: blue; font-size: 18px',
);
console.log("------------------------------------------------------------------------------------------------------------------");

console.log(
    `%c
            JS (src/main.js):
    import Chart from 'chart.js/auto'

    (async function () {
        const data = [
            { year: 2010, count: 10 },
            { year: 2011, count: 20 },
            { year: 2012, count: 15 },
            { year: 2013, count: 25 },
            { year: 2014, count: 22 },
            { year: 2015, count: 30 },
            { year: 2016, count: 28 },
        ];

        new Chart(
        document.getElementById('acquisitions'),
        {
            type: 'bar',
            data: {
            labels: data.map(row => row.year),
            datasets: [
                {
                    label: 'Acquisitions by year',
                    data: data.map(row => row.count)
                }
            ]
            }
        }
        );
    })();
    `,
    'color: blue; font-size: 18px',
);
console.log("------------------------------------------------------------------------------------------------------------------");
