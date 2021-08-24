# Frontend Mentor - Stats preview card component solution - Challenge #1

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![](./StatsPreviewCardComponent-PC.png)
![](./StatsPreviewCardComponent-Mobile.png)

### Links

- Solution URL: [Solution - Frontendmentor](https://www.frontendmentor.io/solutions/html-css-flexbox-pwt5J0fUK)
- Live Site URL: [Live site](https://gustcodetheone.github.io/statsPreviewCardComponent/)

## My process

For this Stat Card I use Flexbox for the container with the class of 'card', with a flex direction of 'row'. In the card container we have two containers, the first one is for all the text content (.contentCard) with a h1 HTML tag for the title and a p HTML tag for the description. Under this two theres the 'statContainer' class with a display flex row on it for the 1440px view, in order to be well separated, it's applied a justify content of space-between.
The second one is for the image, in wich the image is put in the background with a background-size of cover so it adjusts depending of the sized of the screen and it doesn't repeats it self. We add a div container as a layer that covers all the image container (width and height 100%) in order to give the effect of a purple mask over the image, this purple has a opacity of 0.6 so we can obtain the results we are looking for.

And for the Mobile view (375px), I use some media queries, and usind display flex with a column-reverse so that the image is located at the top of the container, and a display flex of column for the stats container.

Sorry for my English!! ... And it's my first README

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow

## Author

- Website - [Gustavo Nieves](https://github.com/gustCodeTheOne)
- Frontend Mentor - [@gustCodeTheOne](https://www.frontendmentor.io/profile/gustCodeTheOne)
