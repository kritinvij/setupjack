// ==UserScript==
// @name         colonist.io remove ads
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove ads and bloat from Catan online website
// @author       Kritin Vij
// @match        https://colonist.io
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById('lobby_featured_video_div').remove();
    document.getElementById('lobby_featured_tournamet_div').remove();
    document.getElementById('lobby_navigation_learntoplay').remove();
    document.getElementById('lobby_ad_left').remove();
    document.getElementById('lobby_ad_right').remove();

    document.getElementById('in-game-ad-right').remove();
    document.getElementById('in-game-ad-left').remove();
    document.getElementsByClassName('main_block game_chat_block')[1].remove();
})();
