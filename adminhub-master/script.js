

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


let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btn5 = document.querySelector('#btn5');
let btn6 = document.querySelector('#btn6');

let buzzer = document.querySelector('#buzzer');
let door = document.querySelector('#door');
let fan = document.querySelector('#fan');
let state1 = localStorage.getItem("state1") ? JSON.parse(localStorage.getItem("state1")) : false;
let state2 = localStorage.getItem("state2") ? JSON.parse(localStorage.getItem("state2")) : false;
let state3 = localStorage.getItem("state3") ? JSON.parse(localStorage.getItem("state3")) : false;
let state5 = localStorage.getItem("state5") ? JSON.parse(localStorage.getItem("state5")) : false;

btn1.addEventListener('click', () => {
    state1 = true;
    buzzer.src = 'img/buzzer.png'; // Đổi ảnh quạt đang chạy
    firebase.database().ref("control").set({ 
        buzzer: state1,
        door: state2,
        fan: state3,
    });
});

btn2.addEventListener('click', () => {
    state1 = false;
    buzzer.src = 'img/bell.png'; // Đổi ảnh quạt tắt
    firebase.database().ref("control").set({
        buzzer: state1,
        door: state2,
        fan: state3,
    });
});    

btn3.addEventListener('click', () => {
    state2 = true;
    door.src = 'img/cua_mo.png'; // Đổi ảnh đèn bật
    firebase.database().ref("control").set({
        buzzer: state1,
        door: state2,
        fan: state3,
    });
});    

btn4.addEventListener('click', () => {
    state2 = false;
    door.src = 'img/cua_dong.png'; // Đổi ảnh đèn tắt
    firebase.database().ref("control").set({
        buzzer: state1,
        door: state2,
        fan: state3,
    });
});    
btn5.addEventListener('click', () => {
    state3 = true;
    fan.src = 'img/fan_on.png'; // Đổi ảnh đèn bật
    firebase.database().ref("control").set({
        buzzer: state1,
        door: state2,
        fan: state3,
    });
});

btn6.addEventListener('click', () => {
    state3 = false;
    fan.src = 'img/fan_off.png'; // Đổi ảnh đèn tắt
    firebase.database().ref("control").set({
        buzzer: state1,
        door: state2,
        fan: state3,
    });
});


