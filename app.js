'use strict';

const gallery_item = document.querySelectorAll('.gallery_item');
const gallery = document.querySelector('#gallery');
const return_button = document.querySelector('.fa-arrow-left');
const landing_page = document.querySelector('#landing_page');

// Rotation api function (IIFE)
(function () {
  var rotateElement = document.getElementsByClassName('rotate-this');
  new Propeller(rotateElement, {
    inertia: 0.9,
    speed: 10,
  });
})();

const is_touch_device = function () {
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  var mq = function (query) {
    return window.matchMedia(query).matches;
  };

  if (
    'ontouchstart' in window ||
    (window.DocumentTouch && document instanceof DocumentTouch)
  ) {
    return true;
  }
  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
};

// Render slider
const renderSlider = function (
  img_url,
  h1,
  a_url,
  websiteName,
  skills,
  git_url
) {
  const html = `
    <div id="slider">
      <a id="return_button" href="index.html"
        ><i style="color: rgb(38, 38, 38)" class="fas fa-arrow-left fa-2x"></i
      ></a>
      <div class="grid-item grid-item-1">
        <img src="${img_url}" alt="Project Image"/>
      </div>
      <div class="grid-item grid-item-2">
        <h1>${h1}</h1>
        <a href="${a_url}">Visit ${websiteName} ></a>
      </div>
      <div class="grid-item grid-item-3"></div>
      <div class="grid-item grid-item-4">
        <h1>${skills}</h1>
        <p>Discover the technology behind this application.</p>
        <a href="${git_url}">View on GitHub ></a>
      </div>
    </div>
  `;
  landing_page.insertAdjacentHTML('afterbegin', html);
};

// // Slide the slider back to transform:transition(-100%) when return is clicked
// const returnAnimation = function () {
//   return_button.addEventListener('click', function () {
//     tl.fromTo(
//       slider,
//       2,
//       {},
//       { transform: 'translate(-100%)', ease: Power1.easeInOut }
//     );
//   });
// };

// Rotating gallery animation
const rotationAnimation = function (angle) {
  const tl = new TimelineMax();
  tl.to(gallery, 1, {
    transform: `rotate(${angle}deg)`,
    zIndex: '3',
  });
};

// Slider sliding animation
const slidingAnimation = function () {
  const tl = new TimelineMax();
  tl.to(slider, 2, {
    transform: 'translate(0)',
    ease: Power1.easeInOut,
  });
};

for (let i = 0; i < gallery_item.length; i++) {
  gallery_item[i].addEventListener('click', function (e) {
    // const target = e.target.parentElement.parentElement;
    let angle,
      img_url,
      h1,
      a_url,
      websiteName,
      skills,
      git_url,
      backgroundColor;

    if (i === 0) {
      angle = 270;
      img_url = 'source/img/Forkify screenshot.jpg';
      h1 = 'Start Searching for Food Recipes.<br />Try Typing "pasta."';
      a_url = 'https://forkify-jaehonglee.netlify.app';
      websiteName = 'Forkify';
      skills = 'HTML, CSS, JavaScript, and Forkify API';
      git_url = 'https://github.com/ja34luv/Forkify';
      backgroundColor = '#f8c4c8';
    }
    if (i === 1) {
      angle = 247.5;
      img_url = 'source/img/Mapty screenshot.jpg';
      h1 = 'Map Your Workouts🏃‍♂️ Simply Click, and Record your Data';
      a_url = 'https://mapty-jaehonglee.netlify.app';
      websiteName = 'Mapty';
      skills = 'HTML, CSS, JavaScript, Geolocation API, and External Libraries';
      git_url = 'https://github.com/ja34luv/Mapty';
      backgroundColor = '#ffd6d6';
    }
    if (i === 2) {
      angle = 225;
      img_url = 'source/img/Bankist screenshot.jpg';
      h1 = 'Simple, Modern, and Efficient to Navigate <br/> "User-Friendly"';
      a_url = 'https://bankist-jaehonglee.netlify.app/';
      websiteName = 'Bankist';
      skills = 'HTML, CSS, and Vanilla JavaScript';
      git_url = 'https://github.com/ja34luv/Bankist';
      backgroundColor = '#a8dadc';
    }
    if (i === 3) {
      angle = 202.5;
      img_url = 'source/img/BankAPP screenshot.jpg';
      h1 = 'Manage your Balance <br/> Transfer money, Request loan, and More ';
      a_url = 'https://bankapp-jaehonglee.netlify.app/';
      websiteName = 'BankAPP';
      skills = 'HTML, CSS, Vanilla JavaScript, and DOM';
      git_url = 'https://github.com/ja34luv/Bank-APP';
      backgroundColor = '#c7d7e2';
    }
    if (i === 4) {
      angle = 179.999;
      img_url = 'source/img/Dice screenshot.jpg';
      h1 =
        'First to 100 Wins 🏆<br/> But Do Not Roll a 1 🙅‍♀️<br/> Test your luck';
      a_url = 'https://dice-jaehonglee.netlify.app/';
      websiteName = 'Dice';
      skills = 'HTML, CSS, Vanilla JavaScript, and DOM';
      git_url = 'https://github.com/ja34luv/Dice';
      backgroundColor = '#e8ebee';
    }
    if (i === 5) {
      angle = 157.5;
      img_url = 'source/img/Guess screenshot.jpg';
      h1 = 'Guess My Number! <br/> Set a New Highscore💯';
      a_url = 'https://guess-jaehonglee.netlify.app/';
      websiteName = 'Guess';
      skills = 'HTML, CSS, Vanilla JavaScript, and DOM';
      git_url = 'https://github.com/ja34luv/Guess';
      backgroundColor = '#95cec7';
    }
    if (i === 6) {
      angle = 135;
      img_url = 'source/img/EdgeLedger screenshot.jpg';
      h1 = 'Financial Website 💳<br/> Classic UI Design ';
      a_url = 'https://edgeledger-jaehonglee.netlify.app/';
      websiteName = 'EdgeLedger';
      skills = 'HTML, CSS, and jQuery';
      git_url = 'https://github.com/ja34luv/EdgeLedger';
      backgroundColor = '#f0d697';
    }
    if (i === 7) {
      angle = 112.5;
      img_url = 'source/img/NewsGrid screenshot.jpg';
      h1 = 'NewsGrid Template <br/> Easy-to-View Articles Layout 📰 ';
      a_url = 'https://newsgrid-jaehonglee.netlify.app/';
      websiteName = 'NewsGrid';
      skills = 'HTML, CSS, and Responsive Design';
      git_url = 'https://github.com/ja34luv/Newsgrid';
      backgroundColor = '#ee9a85';
    }
    if (i === 8) {
      angle = 90;
      img_url = 'source/img/Forkify screenshot.jpg';
      h1 = 'Start Searching for Food Recipes.<br />Try Typing "pasta."';
      a_url = 'https://forkify-jaehonglee.netlify.app';
      websiteName = 'Forkify';
      skills = 'HTML, CSS, JavaScript, and Forkify API';
      git_url = 'https://github.com/ja34luv/Forkify';
      backgroundColor = '#ffd6d6';
    }
    if (i === 9) {
      angle = 67.5;
      img_url = 'source/img/Mapty screenshot.jpg';
      h1 = 'Map Your Workouts🏃‍♂️ Simply Click, and Record your Data';
      a_url = 'https://mapty-jaehonglee.netlify.app';
      websiteName = 'Mapty';
      skills = 'HTML, CSS, JavaScript, Geolocation API, and External Libraries';
      git_url = 'https://github.com/ja34luv/Mapty';
      backgroundColor = '#d1c9ff';
    }
    if (i === 10) {
      angle = 45;
      img_url = 'source/img/Bankist screenshot.jpg';
      h1 = 'Simple, Modern, and Efficient to Navigate <br/> "User-Friendly"';
      a_url = 'https://bankist-jaehonglee.netlify.app/';
      websiteName = 'Bankist';
      skills = 'HTML, CSS, and Vanilla JavaScript';
      git_url = 'https://github.com/ja34luv/Bankist';
      backgroundColor = '#95cbeb';
    }
    if (i === 11) {
      angle = 22.5;
      img_url = 'source/img/BankAPP screenshot.jpg';
      h1 = 'Manage your Balance <br/> Transfer money, Request loan, and More ';
      a_url = 'https://bankapp-jaehonglee.netlify.app/';
      websiteName = 'BankAPP';
      skills = 'HTML, CSS, Vanilla JavaScript, and DOM';
      git_url = 'https://github.com/ja34luv/Bank-APP';
      backgroundColor = '#a583db';
    }
    if (i === 12) {
      angle = 0;
      img_url = 'source/img/Dice screenshot.jpg';
      h1 =
        'First to 100 Wins 🏆<br/> But Do Not Roll a 1 🙅‍♀️<br/> Test your luck';
      a_url = 'https://dice-jaehonglee.netlify.app/';
      websiteName = 'Dice';
      skills = 'HTML, CSS, Vanilla JavaScript, and DOM';
      git_url = 'https://github.com/ja34luv/Dice';
      backgroundColor = '#ffe3a3';
    }
    if (i === 13) {
      angle = 337.5;
      img_url = 'source/img/Guess screenshot.jpg';
      h1 = 'Guess My Number! <br/> Set a New Highscore💯';
      a_url = 'https://guess-jaehonglee.netlify.app/';
      websiteName = 'Guess';
      skills = 'HTML, CSS, Vanilla JavaScript, and DOM';
      git_url = 'https://github.com/ja34luv/Guess';
      backgroundColor = '#b5b8ae';
    }
    if (i === 14) {
      angle = 315;
      img_url = 'source/img/EdgeLedger screenshot.jpg';
      h1 = 'Financial Website 💳<br/> Classic UI Design ';
      a_url = 'https://edgeledger-jaehonglee.netlify.app/';
      websiteName = 'EdgeLedger';
      skills = 'HTML, CSS, and jQuery';
      git_url = 'https://github.com/ja34luv/EdgeLedger';
      backgroundColor = '#e0e0e0';
    }
    if (i === 15) {
      angle = 292.5;
      img_url = 'source/img/NewsGrid screenshot.jpg';
      h1 = 'NewsGrid Template <br/> Easy-to-View Articles Layout 📰 ';
      a_url = 'https://newsgrid-jaehonglee.netlify.app/';
      websiteName = 'NewsGrid';
      skills = 'HTML, CSS, and Responsive Design';
      git_url = 'https://github.com/ja34luv/Newsgrid';
      backgroundColor = '#fdd992';
    }

    renderSlider(img_url, h1, a_url, websiteName, skills, git_url);
    const slider = document.querySelector('#slider');
    slider.style.background = `${backgroundColor}`;
    rotationAnimation(angle);
    setTimeout(slidingAnimation, 1000);
  });
}
