const primaryHeader = document.querySelector('.primary-header');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting)
}, {rootMargin: "100px 0px 0px 0px"});

navObserver.observe(scrollWatcher)





// media menu collapse

let MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if(MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px"
    }
    else {
        MenuItems.style.maxHeight = "0px";
    }

}

// scroll reveal script

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: false
});

sr.reveal('#hero-header',{delay:50, origin:'top'});
sr.reveal('#hero-p',{delay:750, origin:'top'});
sr.reveal('#hero-btn',{delay:1550, origin:'top'});
sr.reveal('#herosplit1',{delay:400, origin:'right'});
sr.reveal('#herosplit2',{delay:400, origin:'left'});
sr.reveal('.col-3',{delay:100, origin:'top'});
