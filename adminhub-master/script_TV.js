// Toggle sidebar
const menuBar = document.querySelector('#content nav .bx-menu');
const sideBar = document.querySelector('#sidebar');

menuBar.addEventListener('click', function () {
    sideBar.classList.toggle('hide');
});

// Handle active menu item
const allMenu = document.querySelectorAll('.side-menu:not(.bottom) li');
allMenu.forEach(item => {
    const a = item.querySelector('a');
    a.addEventListener('click', function () {
        allMenu.forEach(item1 => item1.classList.remove('active'));
        this.parentElement.classList.add('active');
    });
});

// Handle image toggle for Phạm Ngọc Diễm Trang
const trangOn = document.querySelector('#trang-on');
const trangOff = document.querySelector('#trang-off');
const trangImg = document.querySelector('#trang\\.img'); // Sửa lỗi cú pháp ID

if (trangOn && trangOff && trangImg) {
    trangOn.addEventListener('click', () => {
        trangImg.src = 'trang.jpg';
        firebase.database().ref("thietbi1").set({ trang: 1 });
    });

    trangOff.addEventListener('click', () => {
        trangImg.src = 'user.png';
        firebase.database().ref("thietbi1").set({ trang: 0 });
    });
}

// Handle image toggle for Lê Anh Tuấn
const tuanOn = document.querySelector('#tuan-on');
const tuanOff = document.querySelector('#tuan-off');
const tuanImg = document.querySelector('#tuan\\.img'); // Sửa lỗi cú pháp ID

if (tuanOn && tuanOff && tuanImg) {
    tuanOn.addEventListener('click', () => {
        tuanImg.src = 'tuan.jpg';
        firebase.database().ref("thietbi2").set({ tuan: 1 });
    });

    tuanOff.addEventListener('click', () => {
        tuanImg.src = 'user.png';
        firebase.database().ref("thietbi2").set({ tuan: 0 });
    });
}

// Handle image toggle for Trương Minh Khôi
const khoiOn = document.querySelector('#khoi-on');
const khoiOff = document.querySelector('#khoi-off');
const khoiImg = document.querySelector('#khoi\\.img'); // Sửa lỗi cú pháp ID

if (khoiOn && khoiOff && khoiImg) {
    khoiOn.addEventListener('click', () => {
        khoiImg.src = 'khoi.jpg';
        firebase.database().ref("thietbi3").set({ khoi: 1 });
    });

    khoiOff.addEventListener('click', () => {
        khoiImg.src = 'user.png';
        firebase.database().ref("thietbi3").set({ khoi: 0 });
    });
}