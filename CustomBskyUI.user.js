// ==UserScript==
// @name         BetterBskyUI
// @namespace    https://ambraglow.org/
// @version      2025-05-04
// @description  Custom theme for bluesky
// @author       ambraglow
// @match        https://bsky.app/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

function LoadTheme() {
    document.body.removeAttribute('bgcolor');
    var r = document.querySelector('html');
    r.className = '';

    var customstyle = document.createElement('style');
    customstyle.textContent = `
        .customdiv {
            align-items: stretch;
            background-color: rgba(0, 0, 0, 0);
            border: 0px solid black;
            box-sizing: border-box;
            display: flex;
            flex-basis: auto;
            flex-direction: column;
            flex-shrink: 0;
            list-style: none;
            margin: 0px;
            min-height: 0px;
            min-width: 0px;
            padding: 0px;
            position: relative;
            text-decoration: none;
            z-index: 0;
        }
        .theme--custom {
            --text: lightgray;
            --background: #1d1d1d;
            --backgroundlight: #29333d;
            --border-color: #434343;
            background-color: #1d1d1d;
            color-scheme: dark;
        }
    `;
    if(!document.head.contains(customstyle)) {
        document.head.appendChild(customstyle);
    }
    r.classList.add("theme--custom");
}

function ThemeReplace() {
    var target = document.querySelectorAll('div');
    Array.prototype.forEach.call(target, function(element){
        //element.classList.remove('css-175oi2r')
        //element.classList.add("customdiv")
        element.style.backgroundColor = '';
        if(element.style.borderColor)
        {
            element.style.borderColor = 'var(--border-color)';
        }
    });

    /*
    var buttons = document.querySelectorAll('button');
    Array.prototype.forEach.call(buttons, function(element){
        //element.classList.remove('css-175oi2r')
        //element.classList.add("customdiv")
        element.style.backgroundColor = '#aaffaa';
    });
    */
    var targetkemski = document.getElementsByClassName('r-kemksi');
    Array.prototype.forEach.call(targetkemski, function(element){
        element.style.backgroundColor = 'var(--background)';
    });

    var targetfeedpage = document.querySelectorAll('[data-testid="customFeedPage"]')
    Array.prototype.forEach.call(targetfeedpage, function(element){
        element.style.backgroundColor = '';
    });

    var nav = document.querySelector('nav');
    var targetText = nav.getElementsByClassName('css-146c3p1');
    Array.prototype.forEach.call(targetText, function(element){
        element.style.color = 'var(--text)';
    });
}

window.addEventListener('load', function(){
    setTimeout(LoadTheme, 500);
    const observer = new MutationObserver(() => {
        ThemeReplace();
    });
    observer.observe(document.body, { childList: true, subtree: true });

}, false);
