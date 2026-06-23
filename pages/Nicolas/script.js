function interactiveSection(entries) {
	entries.forEach(entry => {
		const element = document.getElementById(entry.target.id + 'Content');
		if (!element)
			return ;

		const content = element.querySelector('.content');
		const additionnal = element.querySelector('.additionnalContent');

		if (entry.isIntersecting) {
			element.classList.replace('sizeDown', 'sizeUp');
			element.style.backgroundColor = '#ffebcd';
			if (content)
				content.classList.replace('reduce', 'maximise');
			if (additionnal)
				additionnal.classList.replace('reduce', 'maximise');
		}
		else {
			element.classList.replace('sizeUp', 'sizeDown');
			element.style.backgroundColor = '#faebd7';
			if (content)
				content.classList.replace('maximise', 'reduce');
			if (additionnal)
				additionnal.classList.replace('maximise', 'reduce');
		}
	});
}

const sections = document.querySelectorAll('.background article');
const observer = new IntersectionObserver(interactiveSection, { threshold: 0.7 });

sections.forEach(section => observer.observe(section));
