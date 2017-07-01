'use strict';

(function() {
	const themeToggle = () => {
		const $body = document.body;
		const $themeToggleSwitch = document.getElementById('js-theme-toggle');

		const darkClass = 'dark';

		let isDarkMode = $themeToggleSwitch.checked;

		function switchToggleMode() {
			isDarkMode = this.checked;

			if(isDarkMode) {
				$body.classList.add(darkClass);
			} else {
				$body.classList.remove(darkClass);
			}
		}

		// public functions
		return {
			init: () => {
				$themeToggleSwitch.addEventListener('change', switchToggleMode);
			}
		};
	};

	function init() {
		const newThemeToggle = themeToggle();
		newThemeToggle.init();
	}

	function ready(fn) {
	  if (document.readyState != 'loading'){
	    fn();
	  } else {
	    document.addEventListener('DOMContentLoaded', fn);
	  }
	}

	ready(init);
})();