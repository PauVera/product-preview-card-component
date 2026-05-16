# Frontend Mentor - Product preview card component solution

This is my solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![Desktop version](./design/Frontend%20Mentor%20Product%20preview%20card%20component%20desktop.png)
![Mobile version](./design/Frontend%20Mentor%20Product%20preview%20card%20component%20mobile.png)

### Links

- Solution URL: [Solution in Frontend Mentor]()
- Live Site URL: [Live site in Github pages](https://pauvera.github.io/product-preview-card-component/)

## My process

### Built with

- Built with
- Semantic HTML5 markup
- CSS custom properties
- CSS cascade layers
- CSS logical properties
- Fluid typography using clamp()
- Mobile-first workflow
- Flexbox
- CSS Grid
- Progressive enhancement
- Vanilla JavaScript

### What I learned

This challenge became much more than recreating a card component. I've been making these challenges attempts at building design systems.

I experimented with:
- separating primitive and semantic tokens,
- using fluid spacing selectively instead of making everything fluid,
- structuring CSS with cascade layers,
- using logical properties consistently,
- and thinking about spacing as composition rather than just numbers.

One of the most valuable lessons was understanding that not every value deserves to become a token. I started thinking more carefully about the difference between:
- reusable system decisions,
- semantic abstractions,
- and component-specific values.

I also explored inline SVGs for the first time and learned how much easier they are to style and integrate into components compared to background images.

Another big learning moment was creating a small microinteraction for the button. Clicking the CTA generates a floating +1 animation with randomized movement using CSS custom properties controlled from JavaScript.
```css
.plus-one-effect {
  position: absolute;
  pointer-events: none;


  transform:
    translate(calc(-50% + var(--_random-x, 0px)), -50%)
    rotate(var(--_random-rotate, 0deg));


  animation: float-up 2s ease-out forwards;
}
```
That interaction taught me a lot about:
- transforms,
- animation performance,
- DOM cleanup,
- pointer-events,
- reduced motion accessibility,
- and coordinating CSS and JavaScript behavior.

I also became much more comfortable reasoning about layout systems instead of relying on trial and error.

### Continued development

In future projects I want to continue improving:
- responsive layout systems,
- fluid spacing strategies,
- accessibility-aware motion,
- component APIs using CSS custom properties,
- and visual rhythm/composition.

I also want to deepen my understanding of:
- Grid layout patterns,
- advanced theming,
- container queries,
- and scalable design system architecture.

### Useful resources

- [Utopia](https://utopia.fyi/) - Extremely useful for experimenting with fluid typography and spacing scales.

### AI Collaboration

I used ChatGPT throughout the project as a thinking partner and architectural reviewer, not a code generator.

The collaboration mainly focused on:
- discussing semantic HTML decisions,
- reasoning about token systems,
- understanding responsive layout strategies,
- debugging interaction issues,
- improving accessibility,
- evaluating architectural tradeoffs,
- and traslating documentation to english.

## Author

- Website - [Pau's Github](https://github.com/PauVera)
- Frontend Mentor - [@PauVera](https://www.frontendmentor.io/profile/PauVera)