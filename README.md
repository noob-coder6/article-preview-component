# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon



### Links

- Solution URL: [Solution URL](https://github.com/noob-coder6/article-preview-component.git)
- Live Site URL: [LIVE DEMO](https://noob-coder6.github.io/article-preview-component/)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript
- Font Awesome icons
- Google Fonts (Manrope)

### What I learned

This project helped me understand several key web development concepts:

**CSS Custom Properties for Theming:**
```css
:root {
    --clr-primary-dark-blue: hsl(217, 19%, 35%);
    --clr-primary-desaturated-blue: hsl(214, 17%, 51%);
}
```
Using CSS variables makes it easy to maintain consistent colors throughout the project and makes future theme changes simple.

**Event Delegation and Bubbling:**
```js
document.addEventListener('click', (event) => {
    if (!cardFooter.contains(event.target)) {
        shareTooltip.classList.remove('visible');
        shareButton.classList.remove('active');
        cardFooter.classList.remove('share-active');
    }
});
```
I learned how to implement a "click outside to close" feature by listening to document clicks and checking if the click target is inside a specific container.

**Responsive Conditional Logic:**
```js
if (window.innerWidth < 768) {
    cardFooter.classList.toggle('share-active', isActive);
}
```
This project taught me how to apply different behaviors based on screen size directly in JavaScript, complementing CSS media queries.

**classList.toggle() with Boolean Parameter:**
```js
const isActive = shareTooltip.classList.toggle('visible');
shareButton.classList.toggle('active', isActive);
```
I discovered that `toggle()` can accept a second parameter to force adding or removing a class, which is perfect for keeping multiple elements in sync.

### Continued development

In future projects, I want to focus on:

- **Accessibility improvements** - Adding keyboard navigation support (Enter/Space to toggle, Escape to close)
- **Animation refinements** - Adding smooth transitions for the tooltip appearance
- **Component reusability** - Refactoring the code into a reusable class or module that could work with multiple share buttons
- **Touch device handling** - Improving the mobile experience with better touch event handling

## Author

- Frontend Mentor - [@noob-coder6](https://www.frontendmentor.io/profile/noob-coder6)