// Load plugins
import 'jquery'
import 'inputmask/dist/min/jquery.inputmask.bundle.min.js'

import svg4everybody from 'svg4everybody'
window.svg4everybody = svg4everybody;

import objectFitImages from 'object-fit-images'
window.objectFitImages = objectFitImages;

import imagesLoaded from 'imagesloaded'
window.imagesLoaded = imagesLoaded;

// load modules
import Utils from'./js/utils/utils'
import Forms from'./js/forms/forms'
import Accordion from'./js/accordion'
import Comments from'./js/comments'
import DownloadFile from'./js/download-file'
import Edit from'./js/edit'
import Increment from'./js/increment'
import Maps from'./js/maps'
import MapPost from'./js/map-post'
import MobileMenu from'./js/mobile-menu'
import Modals from'./js/modals'
import Profile from'./js/profile'
import SvgUse from'./js/svgUse'
import Sliders from'./js/sliders'
import Select from'./js/select'
import Tabs from'./js/tabs'
import Video from'./js/video'
import Anchor from'./js/anchor'

// Run components

window.App = {
    debug: false,
    lang: 'ru'
};

// debug detect

if (window.location.href.indexOf('192') !== -1) {
    App.debug = true;
}

if (window.SITE_LANG) {
    App.lang = window.SITE_LANG;
}

if (App.debug) {
    console.log('Debug: ' + App.debug);
    console.log('Lang: ' + App.lang);
}

document.addEventListener('DOMContentLoaded', function() {
    objectFitImages();

    App.Utils = new Utils();
    App.Forms = new Forms();
    App.Accordion = new Accordion();
    App.Comments = new Comments();
    App.DownloadFile = new DownloadFile();
    App.Edit = new Edit();
    App.Increment = new Increment();
    App.Maps = new Maps();
    App.MapPost = new MapPost();
    App.MobileMenu = new MobileMenu();
    App.Modals = new Modals();
    App.Profile = new Profile();
    App.SvgUse = new SvgUse();
    App.Sliders = new Sliders();
    App.Select = new Select();
    App.Tabs = new Tabs();
    App.Video = new Video();
    App.Anchor = new Anchor();

    $('.inputmask').inputmask({mask: "+7 (999) 999-99-99", greedy: false});
});

