const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item => {
    const li = item.parentElement;

    item.addEventListener('click', function () {
        allSideMenu.forEach(i => {
            i.parentElement.classList.remove('active');
        });
        li.classList.add('active');
    });
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
});

// REAL-TIME CLOCK
function updateRealTimeClock() {
    const clock = document.getElementById('real-time-clock');
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    clock.textContent = timeString;
}

updateRealTimeClock();
setInterval(updateRealTimeClock, 1000);

// SEARCH FORM TOGGLE (RESPONSIVE)
const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

if (searchButton) {
    searchButton.addEventListener('click', function (e) {
        if (window.innerWidth < 576) {
            e.preventDefault();
            searchForm.classList.toggle('show');
            if (searchForm.classList.contains('show')) {
                searchButtonIcon.classList.replace('bx-search', 'bx-x');
            } else {
                searchButtonIcon.classList.replace('bx-x', 'bx-search');
            }
        }
    });
}

if (window.innerWidth < 768) {
    sidebar.classList.add('hide');
} else if (window.innerWidth > 576) {
    if (searchButtonIcon) {
        searchButtonIcon.classList.replace('bx-x', 'bx-search');
    }
    if (searchForm) {
        searchForm.classList.remove('show');
    }
}

window.addEventListener('resize', function () {
    if (this.innerWidth > 576) {
        if (searchButtonIcon) {
            searchButtonIcon.classList.replace('bx-x', 'bx-search');
        }
        if (searchForm) {
            searchForm.classList.remove('show');
        }
    }
});

// DARK MODE TOGGLE
const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});

// DEVICE CONTROL
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btn5 = document.querySelector('#btn5');
let btn6 = document.querySelector('#btn6');
let btn7 = document.querySelector('#btn7');
let btn8 = document.querySelector('#btn8');
let btn11 = document.querySelector('#CLEAR_STORAGE');

let state1 = localStorage.getItem("state1") ? parseInt(localStorage.getItem("state1")) : 0;
let state2 = localStorage.getItem("state2") ? parseInt(localStorage.getItem("state2")) : 0;
let state3 = localStorage.getItem("state3") ? parseInt(localStorage.getItem("state3")) : 0;
let state4 = localStorage.getItem("state4") ? parseInt(localStorage.getItem("state4")) : 0;

let device1 = document.querySelector('#device1');
let device2 = document.querySelector('#device2');
let device3 = document.querySelector('#device3');
let device4 = document.querySelector('#device4');

btn1.addEventListener('click', () => {
    state1 = 1;
    localStorage.setItem("state1", state1);
    firebase.database().ref("thietbi1").set({ device1: 1 });
    UpdateImage1();
});

btn2.addEventListener('click', () => {
    state1 = 0;
    localStorage.setItem("state1", state1);
    firebase.database().ref("thietbi1").set({ device1: 0 });
    UpdateImage1();
});

btn3.addEventListener('click', () => {
    state2 = 1;
    localStorage.setItem("state2", state2);
    firebase.database().ref("thietbi2").set({ device2: 1 });
    UpdateImage2();
});

btn4.addEventListener('click', () => {
    state2 = 0;
    localStorage.setItem("state2", state2);
    firebase.database().ref("thietbi2").set({ device2: 0 });
    UpdateImage2();
});

btn5.addEventListener('click', () => {
    state3 = 1;
    localStorage.setItem("state3", state3);
    firebase.database().ref("thietbi3").set({ device3: 1 });
    UpdateImage3();
});

btn6.addEventListener('click', () => {
    state3 = 0;
    localStorage.setItem("state3", state3);
    firebase.database().ref("thietbi3").set({ device3: 0 });
    UpdateImage3();
});

btn7.addEventListener('click', () => {
    state4 = 1;
    localStorage.setItem("state4", state4);
    firebase.database().ref("thietbi4").set({ device4: 1 });
    UpdateImage4();
});

btn8.addEventListener('click', () => {
    state4 = 0;
    localStorage.setItem("state4", state4);
    firebase.database().ref("thietbi4").set({ device4: 0 });
    UpdateImage4();
});

btn11.addEventListener('click', () => {
    localStorage.removeItem("dataList");
    dataList = [];
    let tableBody = document.querySelector("#dataTable tbody");
    tableBody.innerHTML = "";
});

function UpdateImage1() {
    if (state1 === 1) {
        device1.src = "img/fan_running.png";
    } else {
        device1.src = "img/fan_off.png";
    }
}

function UpdateImage2() {
    if (state2 === 1) {
        device2.src = "img/fan_running.png";
    } else {
        device2.src = "img/fan_off.png";
    }
}

function UpdateImage3() {
    if (state3 === 1) {
        device3.src = 'img/lamp_on.png';
    } else {
        device3.src = 'img/lamp_off.png';
    }
}

function UpdateImage4() {
    if (state4 === 1) {
        device4.src = 'img/lamp_on.png';
    } else {
        device4.src = 'img/lamp_off.png';
    }
}

function UpdateALL() {
    if (state5 == 1) {
        state1 = 1;
        state2 = 1;
        state3 = 1;
        state4 = 1;
    } else if (state5 == 0) {
        state1 = 0;
        state2 = 0;
        state3 = 0;
        state4 = 0;
    }
    state5 = 3;
    localStorage.setItem("state5", state5);
    localStorage.setItem("state1", state1);
    localStorage.setItem("state2", state2);
    localStorage.setItem("state3", state3);
    localStorage.setItem("state4", state4);
    UpdateImage1();
    UpdateImage2();
    UpdateImage3();
    UpdateImage4();
}