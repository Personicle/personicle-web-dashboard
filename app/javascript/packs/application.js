// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import 'bootstrap'
import "chartkick/chart.js"
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// require("chart.js")
// require("Chart.extension.js")
require("jquery-scrollLock.min.js")
require("jquery.scrollbar.min.js")
require("argon.js")


//import "chartkick"

//require("chartkick")
//require("chart.js")
//= require rails-ujs
//= require turbolinks
//= require chartkick
//= require Chart.bundle
//= require_tree . 

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
// Support component names relative to this directory:
// Support component names relative to this directory:
var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);

global.$ = global.jQuery = jQuery;
window.$ = window.jQuery= jQuery;