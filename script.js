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
    // "owner.login"
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



//////////////////////////////////////////////////////////////
// SEPERATION OF CONCERNS: TYPES OF FUNCTIONS
// (Miscellaneous): Fetch Data
// Template Generators
// Rendering Functions
// Event Handlers
//////////////////////////////////////////////////////////////


// INIT /////////////////////////////////////////////////////
function init() {
  handleSubmission();

}


// (MISC) FETCH DATA /////////////////////////////////////////

function fetchGitHubUser(searchTerm) {

  const queryString = `${searchTerm}/repos`;
  const url = searchURL + queryString;
  console.log(url);

  const options = {
    headers: new Headers({
      "Accept": "application/vnd.github.nebula-preview+json",
    }),
  };

  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      renderResults(data);
    })
    .catch(err => {
      console.log(err);
    });
}


// TEMPLATE GENERATORS ///////////////////////////////////////

function generateQuery() {

}

function generateResults(data) {
  
}


// RENDERING FUNCTIONS ///////////////////////////////////////

function renderResults(data) {
  // pass data to generateResults
  const results = generateResults(data);
  // render HTML into DOM
  $('section').html(results);
}

// EVENT HANDLERS ////////////////////////////////////////////

function handleSubmission() {
  // listen for submit and get (event.target).val();
    $('#search').on('submit', event => {
      event.preventDefault();
      const searchTerm = $('#js-search-username').val();
      if (!searchTerm) {
        console.log('nothing entered in input field');
      }
      console.log(searchTerm);
      $('.js-results').empty();
      fetchGitHubUser(searchTerm);
    });
  


}


//
$(init);