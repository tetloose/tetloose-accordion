[![forthebadge](https://forthebadge.com/images/badges/made-with-crayons.svg)](https://forthebadge.com)

#Simple vanilla javascript Accordion with 7-Layer Ice Cream Markup and Nickabockaglory Styles

## 7-Layer Ice Cream Markup
```
<div class="faq js-faq">
  <div class="faq__item js-faqItem">
    <h3 class="faq__title js-faqItemTrigger">Question 1?</h3>
    <div class="faq__content js-faqItemContent">
      <p>Answer 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas molestiae veritatis, a adipisci cumque est veniam quisquam ullam ad eaque hic in. Dolores incidunt voluptatibus iusto corporis odio consectetur repudiandae!</p>
    </div>
  </div>
</div>
```

## Nickabockaglory Styles
```
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.faq {
  padding-top: 20px;
  display: block;
}

.faq__item {
  border-width: 2px 0 0 0;
  border-style: solid;
  border-color: black;
}

.faq__item.is-visible .faq__title::before {
  transform: rotate(180deg);
}

.faq__item.is-visible .faq__content {
  display: block;
  height: auto;
}

.faq__title {
  position: relative;
  padding: 5px 5px 5px 40px;
  margin: 0;
  background-color: black;

  color: white;
  cursor: pointer;

  transition: all 200ms;
}

.faq__title::before {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  top: 12px;
  left: 10px;

  border-style: solid;
  border-width: 10px 10px 0 10px;
  border-color: white transparent transparent transparent;
}

.faq__content {
	display: none;
	height: 0;
  overflow: hidden;
  transition: height 200ms;
}

.faq__content p {
  padding: 20px 0;
  margin: 0;
}
```

## Vanilla JS
```
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
```
