const d = document;
/* -------------------------------------------------- */
/* ----------------- Darkmode  ---------------------- */

let btnOscuro = d.querySelector('#btnOscuro');

// Al hacer click, cambia a modo oscuro.
btnOscuro.addEventListener('click', () =>{
	const main = d.querySelector('main');
	const posts = d.querySelectorAll('.post');
	const headers = d.querySelectorAll('h1, h2, h3, h4, h4, h5, h6');
	const sections = d.querySelectorAll('section');
	const labels = d.querySelectorAll('label');
	const is = d.querySelectorAll('i');
	const as = d.querySelectorAll('a');
	const btnCV = d.querySelector('ul.actions');
	const footer = d.querySelector('#footer');
	const nav = d.querySelector('#nav');

	const navPanel = d.querySelector('#navPanel');
	main.classList.toggle('darkmode');
	btnCV.classList.toggle('darkmode');
	footer.classList.toggle('darkmode');
	nav.classList.toggle('darkmode');
	btnOscuro.classList.toggle('darkmode')
	navPanel.classList.toggle('darkmode');
	postsDarkM();
	sectionsDarkM();
	headersDarkM();
	labelsDarkM();
	asDarkM();
	isDarkM();

	function isDarkM() {
		for (i = 0; i < is.length; i++) {
			is[i].classList.toggle('darkmode');
		}
	}

	function asDarkM() {
		for (i = 0; i < as.length; i++) {
			as[i].classList.toggle('darkmode');
		}
	}

	function labelsDarkM() {
		for (i = 0; i < labels.length; i++) {
			labels[i].classList.toggle('darkmode');
		}
	}
	function headersDarkM() {
		for (i = 0; i < headers.length; i++) {
			headers[i].classList.toggle('darkmode');
		}
	}
	function sectionsDarkM() {
		for (i = 0; i < sections.length; i++) {
			sections[i].classList.toggle('darkmode');
		}
	}
	function postsDarkM() {
		for (i = 0; i < posts.length; i++) {
			posts[i].classList.toggle('darkmode');
		}
	}
  });
  
  // Para ver si está o no el darkmode
  function load(){
	const darkmode = localStorage.getItem('darkmode');
  
	if (!darkmode){
	  store('false');
	} else if(darkmode == 'true'){
	  body.classList.add('darkmode');
	}
  }
  
  function store(value){
	localStorage.setItem('darkmode', value);
  }

/* -------------------------------------------------- */

/* -------------------------------------------------- */
/* ------------ Traducción ES/EN -------------------- */
let btnLenguaEN = d.querySelector('.lengua.ingles');
let btnLenguaES = d.querySelector('.lengua.espanol');

let INTROh1 = d.querySelector('#intro > h1')
let NAVli2 = d.querySelector('#nav > ul.links > li.leng > a')
let NAVli4 = d.querySelector('#nav > ul.links > li.cont > a')
let PREh2 = d.querySelector('h2.lang');
let PREp = d.querySelector('p.lang');
let PREleng = d.querySelector('#lenguajes');
let PREcv = d.querySelector('.button.large')

/* Página personal */
let PWspan = d.querySelector('article.postUno > header > span')
let PWh2 = d.querySelector('article.postUno > header > h2')
let PWp = d.querySelector('article.postUno > p')
let PWh5 = d.querySelector('article.postUno > h5')
let PWliB = d.querySelector('article.postUno > ul > li:nth-child(2)')
let PWliC = d.querySelector('article.postUno > ul > li:nth-child(3)')

/* Arquitech */
let ARQspan = d.querySelector('article.postDos > header > span')
let ARQp = d.querySelector('article.postDos > p')
let ARQh5 = d.querySelector('article.postDos > h5')
let ARQliC = d.querySelector('article.postUno > ul > li:nth-child(3)')

/* MQuotes */
let MQspan = d.querySelector('article.postTres > header > span')
let MQp = d.querySelector('article.postTres > p')
let MQh5 = d.querySelector('article.postTres > h5')
let MQliA = d.querySelector('article.postTres > ul > li:first-child')


/* Le Gout */
let LGspan = d.querySelector('article.postCuatro > header > span')
let LGp = d.querySelector('article.postCuatro > p')
let LGh5 = d.querySelector('article.postCuatro > h5')

let FOOh3a = d.querySelector('#footer > section.split.contact > section.alt > h3.fooUbi')
let FOOh3b = d.querySelector('#footer > section.split.contact > section > h3.fooTel')
let FOOh3c = d.querySelector('#footer > section.split.contact > section > h3.fooRedes')
let btnCVEN = d.querySelector('ul.actions > li.btnCVEN')
let btnCVES = d.querySelector('ul.actions > li.btnCVES')

btnLenguaES.addEventListener('click', () =>{
	/* INTRO - ESPAÑOL */
	INTROh1.innerHTML = "Bienvenido"

	/* NAV - ESPAÑOL */
	NAVli2.innerHTML = "Lenguajes / Tecnologías"
	NAVli4.innerHTML = "Contacto"

	/* PRESENTACIÓN - ESPAÑOL */
	PREh2.innerHTML = "Presentación"
	PREp.innerHTML = 'Hola! soy Felipe Rodriguez Carle, tengo 23 años y soy un estudiante de Licenciatura en Sistemas (UNLP). <br> También estoy realizando la carrera Front End Developer en <a href="https://educacionit.com" target="_blank">EducaciónIT</a>.'
	PREleng.innerHTML = '<i class="fa fa-code"></i> <br> Lenguajes y tecnologías:'
	PREcv.innerHTML = 'Descargar CV'
	
	/* Pagina Personal - ESPAÑOL */
	PWspan.innerHTML = "Proyecto 1"
	PWh2.innerHTML = '<a href="#">Página Personal'
	PWp.innerHTML = "Es mi página personal, la cual se encuentra actualmente y uso para mi presentación. Página con diseño responsivo-adaptable completamente personalizada con cambio de lenguaje y modo claro/oscuro para una mejor experiencia de usuario."
	PWh5.innerHTML = "CARACTERÍSTICAS:"
	PWliB.innerHTML = "Español / Inglés."
	PWliC.innerHTML = "Modo Claro / Oscuro."
	
	/* Arquitech - ESPAÑOL */
	ARQspan.innerHTML = "Proyecto 2"
	ARQp.innerHTML = "Arquitech es una página ficticia que simula ser un estudio arquitectónico de diseño y creación de edificaciones. Esta página posee modo claro/oscuro, presentación, proyectos, redes, formulario de contacto y ubicación (API Google Maps)."
	ARQh5.innerHTML = "CARACTERÍSTICAS:"
	ARQliC.innerHTML = "Modo Claro / Oscuro."

	/* El Noticiero - ESPAÑOL */
	MQspan.innerHTML = "Proyecto 3"
	MQp.innerHTML = "MQuotes es una página web que muestra frases motivacionales dichas por peronas famosas. Consume la API de type-fit mediante Fetch y JSON."
	MQh5.innerHTML = "CARACTERÍSTICAS:"
	MQliA.innerHTML = "Trabaja con la API de type-fit."

	/* Le Gout - ESPAÑOL */
	LGspan.innerHTML = "Proyecto 4"
	LGp.innerHTML = "Le Gout es un restaurant ficticio de comida francesa hecho con Bootstrap. Posee un diseño minimalista, responsivo y atractivo a la vista, cuenta con un mapa de ubicación (utilizando la API de Google Maps)."
	LGh5.innerHTML = "CARACTERÍSTICAS:"

	/* FOOTER - ESPAÑOL */
	FOOh3a.innerHTML = 'Ubicación'
	FOOh3b.innerHTML = 'Teléfono'
	FOOh3c.innerHTML = 'Redes'

	/* BOTON CV */
	btnCVES.style.display ="block"
	btnCVEN.style.display = "none"
});

btnLenguaEN.addEventListener('click', e =>{
	/* INTRO - INGLÉS */
	INTROh1.innerHTML = "Welcome"

	/* NAV - INGLÉS */
	NAVli2.innerHTML = "Languages / Technologies"
	NAVli4.innerHTML = "Contact"
	
	/* PRESENTACIÓN - INGLÉS */
	PREh2.innerHTML = "Presentation"
	PREp.innerHTML = 'Hi! My name is Felipe Rodriguez Carle. I am a 23 years old student of BSc Computer Science (UNLP), currently living in Argentina. Also, I am doing the Front End Developer Career at <a href="https://educacionit.com" target="_blank">EducaciónIT</a>'
	PREleng.innerHTML = '<i class="fa fa-code"></i> <br> Languages and technologies:'
	PREcv.innerHTML = 'Download CV'

	/*Personal Web - INGLÉS*/
	PWspan.innerHTML = "Project 1"
	PWh2.innerHTML = '<a href="#">Personal Web'
	PWp.innerHTML = "It is my personal web, which I use for my presentation. This web has responsive and personalized design. It has Spanish/English languages and dark/light mode for a better user experience."	
	PWh5.innerHTML = "FEATURES:"
	PWliB.innerHTML = "Spanish / English."
	PWliC.innerHTML = "Dark / Light Mode."

	/* Arquitech - INGLÉS*/
	ARQspan.innerHTML = "Project 2"
	ARQp.innerHTML = "Arquitech is a fictional web that simulates an arquitechtonic office of design and creation of infrastructures. This webpage has dark/light mode, presentation, projects, social media, forms and location (Google Maps API)"
	ARQh5.innerHTML= "FEATURES:"
	ARQliC.innerHTML = "Dark / Light Mode."

	/* MQuotes - INGLÉS */
	MQspan.innerHTML = "Project 3"
	MQp.innerHTML = "MQuotes is a website that shows you motivational quotes said by famous people. It consumes the API of type-fit through fetch and JSON responses."
	MQh5.innerHTML = "FEATURES:"
	MQliA.innerHTML = "Works with type-fit API's."

	/* Le Gout - INGLÉS */
	LGspan.innerHTML = "Project 4"
	LGp.innerHTML = "Le Gout is a fictional web page of a french restaurant made with Bootstrap. It has a minimalistic, responsive and attractive design. Also, owns a location map (by usign the Google Maps API)."
	LGh5.innerHTML = "FEATURES:"

	/* FOOTER - INGLÉS */
	FOOh3a.innerHTML = 'Location'
	FOOh3b.innerHTML = 'Phone'
	FOOh3c.innerHTML = 'Social'

	/* BOTON CV */
	btnCVES.style.display = "none"
	btnCVEN.style.display = "block"
});

/* -------------------------------------------------- */


/* -------------------------------------------------- */

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$nav = $('#nav'),
		$main = $('#main'),
		$navPanelToggle, $navPanel, $navPanelInner;

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	/**
	 * Applies parallax scrolling to an element's background image.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._parallax = function(intensity) {

		var	$window = $(window),
			$this = $(this);

		if (this.length == 0 || intensity === 0)
			return $this;

		if (this.length > 1) {

			for (var i=0; i < this.length; i++)
				$(this[i])._parallax(intensity);

			return $this;

		}

		if (!intensity)
			intensity = 0.25;

		$this.each(function() {

			var $t = $(this),
				$bg = $('<div class="bg"></div>').appendTo($t),
				on, off;

			on = function() {

				$bg
					.removeClass('fixed')
					.css('transform', 'matrix(1,0,0,1,0,0)');

				$window
					.on('scroll._parallax', function() {

						var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);

						$bg.css('transform', 'matrix(1,0,0,1,0,' + (pos * intensity) + ')');

					});

			};

			off = function() {

				$bg
					.addClass('fixed')
					.css('transform', 'none');

				$window
					.off('scroll._parallax');

			};

			// Disable parallax on ..
				if (browser.name == 'ie'			// IE
				||	browser.name == 'edge'			// Edge
				||	window.devicePixelRatio > 1		// Retina/HiDPI (= poor performance)
				||	browser.mobile)					// Mobile devices
					off();

			// Enable everywhere else.
				else {

					breakpoints.on('>large', on);
					breakpoints.on('<=large', off);

				}

		});

		$window
			.off('load._parallax resize._parallax')
			.on('load._parallax resize._parallax', function() {
				$window.trigger('scroll');
			});

		return $(this);

	};

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

	// Background.
		$wrapper._parallax(0.925);

	// Nav Panel.

		// Toggle.
			$navPanelToggle = $(
				'<a href="#navPanel" id="navPanelToggle"></a>'
			)
				.appendTo($wrapper);

			// Change toggle styling once we've scrolled past the header.
				$header.scrollex({
					bottom: '5vh',
					enter: function() {
						$navPanelToggle.removeClass('alt');
					},
					leave: function() {
						$navPanelToggle.addClass('alt');
					}
				});

		// Panel.
			$navPanel = $(
				'<div id="navPanel">' +
					'<nav>' +
					'</nav>' +
					'<a href="#navPanel" class="close"></a>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-navPanel-visible'
				});

			// Get inner.
				$navPanelInner = $navPanel.children('nav');

			// Move nav content on breakpoint change.
				var $navContent = $nav.children();

				breakpoints.on('>medium', function() {

					// NavPanel -> Nav.
						$navContent.appendTo($nav);

					// Flip icon classes.
						$nav.find('.icons, .icon')
							.removeClass('alt');

				});

				breakpoints.on('<=medium', function() {

					// Nav -> NavPanel.
						$navContent.appendTo($navPanelInner);

					// Flip icon classes.
						$navPanelInner.find('.icons, .icon')
							.addClass('alt');

				});

			// Hack: Disable transitions on WP.
				if (browser.os == 'wp'
				&&	browser.osVersion < 10)
					$navPanel
						.css('transition', 'none');

	// Intro.
		var $intro = $('#intro');

		if ($intro.length > 0) {

			// Hack: Fix flex min-height on IE.
				if (browser.name == 'ie') {
					$window.on('resize.ie-intro-fix', function() {

						var h = $intro.height();

						if (h > $window.height())
							$intro.css('height', 'auto');
						else
							$intro.css('height', h);

					}).trigger('resize.ie-intro-fix');
				}

			// Hide intro on scroll (> small).
				breakpoints.on('>small', function() {

					$main.unscrollex();

					$main.scrollex({
						mode: 'bottom',
						top: '25vh',
						bottom: '-50vh',
						enter: function() {
							$intro.addClass('hidden');
						},
						leave: function() {
							$intro.removeClass('hidden');
						}
					});

				});

			// Hide intro on scroll (<= small).
				breakpoints.on('<=small', function() {

					$main.unscrollex();

					$main.scrollex({
						mode: 'middle',
						top: '15vh',
						bottom: '-15vh',
						enter: function() {
							$intro.addClass('hidden');
						},
						leave: function() {
							$intro.removeClass('hidden');
						}
					});

			});

		}

})(jQuery);
