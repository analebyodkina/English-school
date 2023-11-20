const nav = document.querySelector('.mobile-nav');

function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');	
	const menuIcon = document.querySelector('.nav-icon');
	const links = document.querySelectorAll('.moving');

	navBtn.onclick = function () {		
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		
	};

	// Add click event listeners to each link
	links.forEach(function (link) {
		link.onclick = function () {
		  nav.classList.remove('mobile-nav--open');
		  document.body.classList.remove('no-scroll');
		  menuIcon.classList.remove('nav-icon--active');
		};
		
	  });
}

export default mobileNav;