/*SHOW MENU*/
const navMenu = document.getElementById('nav-menu'),
              navToggle = document.getElementById('nav-toggle'),
              navClose = document.getElementById('nav-close');
   
        /* MENU SHOW */
        if (navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.add('show-menu');
            });
        }

        /* MENU HIDDEN */
        if (navClose) {
            navClose.addEventListener('click', () => {
                navMenu.classList.remove('show-menu');
            });
        }

/*REMOVE MENU MOBILE*/
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click', linkAction))

/*CHANGE BACKGROUD HEADER*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
}
window.addEventListener('scroll',  scrollHeader)

/*SHOW SCROLL UP*/
const scrollUp = () => {
    console.log("Scrolling detected");
    const scrollUpElement = document.getElementById('scroll-up');
    window.scrollY >= 350 ? scrollUpElement.classList.add('show-scroll') : scrollUpElement.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp)

/*SCROLL SECTIONS ACTIVE LINK*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
 
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link'); // Perbaiki di sini
        } else {
            sectionClass.classList.remove('active-link'); // Perbaiki di sini
        }
    });
};

window.addEventListener('scroll', scrollActive);

/*DARK LIGHT THEME*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ?'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme)? 'ri-sun-line' : 'ri-sun-line'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
    themeButton.classList[selectedIcon == 'ri-sun-line' ? 'add' : 'remove'] (iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentIcon())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/*SCROLL REVEAL ANIMATION*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
});

// Menggunakan sr.reveal, bukan sections.reveal
sr.reveal('.home__img, .newsletter__container, .footer__logo, .footer__description, .footer__content, .footer__info');
sr.reveal('.home__data', { origin: 'bottom' });
sr.reveal('.about__data, .recently__data', { origin: 'left' });
sr.reveal('.about__img, .recently__img', { origin: 'right' });
sr.reveal('.popular__card', { interval: 100 });

// FORM PEMBELIAN

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Mengambil nilai dari form
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const orderType = document.getElementById('orderType').value;
    const purchaseType = document.getElementById('purchaseType').value;
    const quantity = document.getElementById('quantity').value; // Mengambil jumlah item
    const date = document.getElementById('date').value; // Mengambil tanggal
    const address = document.getElementById('address').value;

    // Membuat pesan untuk WhatsApp
    const message = `Nama: ${name}\nNomor HP: ${phone}\nJenis Pesanan: ${orderType}\nJenis Pembelian: ${purchaseType}\nJumlah Item: ${quantity}\nTanggal Pengiriman: ${date}\nAlamat Pengiriman: ${address}`;
    
    // Mengencode pesan untuk URL
    const encodedMessage = encodeURIComponent(message);

    // Mengarahkan ke WhatsApp
    const whatsappNumber = "83107937823"; // Ganti dengan nomor WhatsApp penjual
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank'); // Membuka link di tab baru

    // Reset form setelah pengiriman
    document.getElementById('orderForm').reset();
});


