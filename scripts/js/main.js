//JavaScript for the website
//Sidenav
$('.sidenav').sidenav();

//Collapsible
$('.collapsible').collapsible();

// We have to remove everything because it is being sent to AQA and we had to screenshot everything, find the code within the text file :)
//Thanks bb



$(document).ready(function () {
    window.scroll(0, 0);

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop != 0) {
                var $nav = $(".navbar-fixed");
                var $navBrand = $(".navbar-brand");
                var $navLink = $(".nav-link");
                var $internalNav = $(".internal-nav");
                $navLink.toggleClass('scrolled3', $(this).scrollTop() > $nav.height());
                $navBrand.toggleClass('scrolled2', $(this).scrollTop() > $nav.height());
                $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
                $internalNav.toggleClass('scrolled4', $(this).scrollTop() > $nav.height());
            }
        });

    });
});

//$(function () {
//    $(window).scroll(function () {
//        if ($(this).scrollTop != 0) {
//            var $nav = $(".navbar-fixed");
//            var $navBrand = $(".navbar-brand");
//            var $navLink = $(".nav-link");
//            var $internalNav = $(".internal-nav");
//            $navLink.toggleClass('scrolled3', $(this).scrollTop() > $nav.height());
//            $navBrand.toggleClass('scrolled2', $(this).scrollTop() > $nav.height());
//            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//            $internalNav.toggleClass('scrolled4', $(this).scrollTop() > $nav.height());
//        }
//    });

//});

const setSwitchState = (state) => {
    document.getElementById("switchDarkTheme").checked = state;
    document.getElementById("switchDarkThemeSidenav").checked = state;
};

if (localStorage.getItem("theme") == "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    setSwitchState(true);
} else {
    document.documentElement.removeAttribute("data-theme");
}


const changeTheme = () => {
    if (localStorage.getItem("theme") != "dark") {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
       
        setSwitchState(true);
    } else {
        localStorage.setItem("theme", "light");
        document.documentElement.removeAttribute("data-theme");
   
        setSwitchState(false);
    }
}

document.getElementById("switchDarkTheme").onclick = changeTheme;
document.getElementById("switchDarkThemeSidenav").onclick = changeTheme;









//Scroll changes navbar
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 25) {
            var $nav = $(".navbar-fixed");
            var $navBrand = $(".navbar-brand");
            var $navLink = $(".nav-link");
            var $internalNav = $(".internal-nav");
            $navLink.toggleClass('scrolled3', $(this).scrollTop() > $nav.height());
            $navBrand.toggleClass('scrolled2', $(this).scrollTop() > $nav.height());
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            $internalNav.toggleClass('scrolled4', $(this).scrollTop() > $nav.height());
        }
        if ($(this).scrollTop() < 25) {
            var $nav = $(".navbar-fixed");
            var $navBrand = $(".navbar-brand");
            var $navLink = $(".nav-link");
            var $internalNav = $(".internal-nav");
            $internalNav.removeClass('scrolled4');
            $navLink.removeClass('scrolled3');
            $navBrand.removeClass('scrolled2');
            $nav.removeClass('scrolled');
        }
    });
});