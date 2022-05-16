/* Created by: Joanne Santhosh
 * Created on: Apr 2022
 * This file contains the JS functions for index.html
 */

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-6-02-Cookie/sw.js", {
    scope: "/ICS20-Unit-6-02-Cookie/",
  })
}

/**
 * This function increases cookies
 */
function updateClickCount() {
  
  if (localStorage.click) {
      localStorage.click = Number(localStorage.click) +1;
  }
  else (localStorage.click = 1;)
  // output
  document.getElementById("answer").innerHTML =
    "Total hits : " + localStorage.click
}
