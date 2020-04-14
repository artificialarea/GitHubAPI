'use strict';
/* eslint-disable indent */

// REQUIREMENTS ///////////////////////////////////

// user enters github profile name to search 

// fetch data
// API HTTP request URL
// https://api.github.com/users/[user]/repos
// e.g. https://api.github.com/users/artificialarea/repos
// catch errors, if applicable

// generate/render/display in the DOM... 
// user name
    // "owner"."login"
// list of repos associated with that username handle
    // "name"
// with links to each repo URL
    // "html_url"

// EXTRAs?
    // "description"
    // if "has_pages": true  
        // then a href: `https://${owner.login}.github.io/${name}

// user must be able to make multiple searches and
// only see the results for latest current search

// end REQUIREMENTS ///////////////////////////////////


const searchURL = 'https://api.github.com/users/';
