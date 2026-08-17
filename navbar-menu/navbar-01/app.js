const body = document.querySelector('body'),
    sidebar = body.querySelector('.sidebar'),
    toggle = body.querySelector('.toggle'),
    searchBtn = body.querySelector('.search-box'),
    modeSwitch = body.querySelector('.toggle-switch'),
    modeText = body.querySelector('.mode-text'),
    overlay = body.querySelector('.overlay');

// Toggle Sidebar (Desktop & Mobile)
toggle.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    } else {
        sidebar.classList.toggle('close');
    }
});

// Buka sidebar saat elemen pencarian diklik
searchBtn.addEventListener('click', () => {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('close');
    } else {
        sidebar.classList.add('open');
        overlay.classList.add('active');
    }
});

// Tutup sidebar di layar mobile saat overlay diklik
overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
});

// Switch Mode Dark/Light
modeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        modeText.innerText = 'Light Mode';
    } else {
        modeText.innerText = 'Dark Mode';
    }
});