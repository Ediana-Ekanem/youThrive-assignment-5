const navLinkEls = document.querySelectorAll(".nav_link");
const windowPathName = window.location.pathname;

// navLinkEls.forEach((navLinkEl) => {
//   const navLinkPathName = new URL(navLinkEl.href).pathname;
//   if (windowPathName === navLinkPathName) {
//     navLinkEl.classList.add("active-link");
//   }
// });

navLinkEls.forEach((navLinkEl) => {
  console.log(navLinkEl.href); // Check if this logs all the href values
  const navLinkPathName = new URL(navLinkEl.href).pathname;
  if (windowPathName === navLinkPathName) {
    navLinkEl.classList.add("active-link");
  } else {
    navLinkEl.classList.remove("active-link");
  }
});
