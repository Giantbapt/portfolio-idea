import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["This Portfolio is Awesome", "It's Baptiste Chebassier's"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
