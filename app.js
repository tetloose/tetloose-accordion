// Define ui vars
const faq = document.querySelector('.js-faq'),
      faqItems = document.querySelectorAll('.js-faqItem');

// 1. Load all event listeners as a function
loadEventListners();

// 1. Load event listner function
// 2. faq click event listener for deligation run faqTrigger function
function loadEventListners(e) {
  faq.addEventListener('click', faqTrigger);
}

// FAQ Trigger function
// 1. if faq target classname contains trigger
// 2. TRUE, check if this target parent element contains the class is-visible
// 3. TRUE - run function hide to hide this faqItem
// 4. ELSE - for each faqItems, return as node list, check if any faq is visible, if a match hide by index
// 5. Pass faqItem and faqItemContent to faqShow function
function faqTrigger(e) {
  if (e.target.classList.contains('js-faqItemTrigger')) {
    if (e.target.parentElement.classList.contains('is-visible')) {
      faqHide(e.target.parentElement, e.target.nextElementSibling);
    } else {
      faqItems.forEach(function(faqItem, index) {
        if (faqItem.classList.contains('is-visible')) {
          faqHide(faqItems[index], faqItems[index].children[1]);
        }
      });
      faqShow(e.target.parentElement, e.target.nextElementSibling);
    }
  }
  e.preventDefault();
}

// FAQ Show function
// 1. Set faqItemContent to show
// 2. Get natural height
// 3. Remove height
// 4. Add class is-visible to faqItem
// 5. Set faqItemContent inline height to allow css transition
// 6. Set timeout same length as css transition
// 7. Remove faqItemContent inline height
function faqShow(faqItem, faqItemContent) {
	const getHeight = function() {
		faqItemContent.style.display = 'block';
		const height = faqItemContent.scrollHeight + 'px';
		faqItemContent.style.display = '';
		return height;
  };

  const height = getHeight();
	faqItem.classList.add('is-visible');
	faqItemContent.style.height = height;

	setTimeout(function() {
		faqItemContent.style.height = '';
	}, 200);
}

// 1. Set inline height of faqItemContent of faqItemContent
// 2. Settimeout height to 0 on faqItemContent for 1ms - allow for css transition
// 3. Settimeout of css transition time remove is-visible from faqItem
function faqHide(faqItem, faqItemContent) {
	faqItemContent.style.height = faqItemContent.scrollHeight + 'px';

	setTimeout(function () {
		faqItemContent.style.height = '0';
	}, 1);

	setTimeout(function () {
    faqItem.classList.remove('is-visible');
	}, 200);
}
