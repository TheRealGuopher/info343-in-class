// @ts-check
"use strict";

//how many records to display at a time
const PAGE_SIZE = 100;

//references to the previous/next page <button>s
//the crazy `@type {HTMLButtonElement}` stuff tells vscode
//that the element we get back from querySelector() is not
//just any-old element, but a <button> element specifically.
//This allows us to use button-specific properties,
//like `.disabled`, without vscode showing type errors.'
//this has no effect at runtime, but will help us catch
//errors while coding.

// Tell VS Code PREV_PAGE_BUTTON is a HTMLButtonElement to make coding easier
const PREV_PAGE_BUTTON = /** @type {HTMLButtonElement} */(document.querySelector("#prev-page"));

// selects id called "#next-page"
const NEXT_PAGE_BUTTON = /** @type {HTMLButtonElement} */(document.querySelector("#next-page"));

//reference to the <input id="name-filter">
//here we again tell vscode that this is an <input>
//element specifically, so that we don't see errors
//when referring to the input-specific `.value` property.
const NAME_FILTER_INPUT = /** @type {HTMLInputElement} */(document.querySelector("#name-filter"));

//references to the <span id="current-page">
//and <span id="total-pages"> elements.
//these don't require any type declarations because
//there are no span-specific properties we need
//to reference.
const CURRENT_PAGE = document.querySelector("#current-page");
const TOTAL_PAGES = document.querySelector("#total-pages");

//sort records by name ascending
BABYNAMES.sort(function(rec1, rec2) {
    return rec1.name.localeCompare(rec2.name);
});

//our program's state
//At the heart of every program, including
//a web application, is a set of values known
//as the program's state. The UI is rendered
//based on the current value of this state.
//When the state changes, we re-render the UI.
//User actions trigger changes to the state, which
//triggers a re-render of the UI.
<<<<<<< HEAD
/**
 * @property {number} currentPage // specify the property type
=======

/**
 * @property {BabyNameRecord[]} records
 * @property {number} currentPage
>>>>>>> a714d76ea192f088385736e6a160b1daa46bc695
 */
let state = {
    records: BABYNAMES, //the records to render (might be filtered)
    currentPage: 0      //the current page we are showing
};

//TODO: implement functions to render the current state
//to the page as new <tr> and <td> elements within the
//<tbody> element that is already in the page.

/**
<<<<<<< HEAD
 * Creates and returns a new DOM element...
 * @param {string} name 
 * @param {*} value 
 * @param {string} className 
 */
function createElem(name, value, className) { // create new element based on name, which is an element name like p, div, h1
=======
 * Creates and returns a new DOM element using `name`
 * as the element name, value as the textContent, and
 * className as the style class name.
 * @param {string} name the element name
 * @param {*} value 
 * @param {string} [className]
 */
function createElem(name, value, className) {
>>>>>>> a714d76ea192f088385736e6a160b1daa46bc695
    let elem = document.createElement(name);
    elem.textContent = value;
    if (className) {
        elem.className = className;
    }
    return elem;
}

/**
<<<<<<< HEAD
 * Renders a record as a table row
 * @param {BabyNameRecord} record // specify BabyNameRecord so that you can call properties of BabyNameRecord
 */
function renderTableRow(record) {
    let tr = document.createElement("tr");
    tr.appendChild(createElem("td", record.name, ""));
    tr.appendChild(createElem("td", record.sex, ""));
=======
 * Renders a record as a table row (<tr>)
 * element and returns that element.
 * @param {BabyNameRecord} record 
 * @returns {HTMLElement}
 */
function renderTableRow(record) {
    let tr = document.createElement("tr");
    tr.appendChild(createElem("td", record.name));
    tr.appendChild(createElem("td", record.sex));
>>>>>>> a714d76ea192f088385736e6a160b1daa46bc695
    tr.appendChild(createElem("td", record.count, "text-right"));
    return tr;
}

<<<<<<< HEAD
// render a page's state
function render(state) {
    let tbody = document.querySelector("tbody");
    tbody.textContent = "";

    let totalPages = Math.ceil(state.records.length / PAGE_SIZE);
    let startingIndex = state.currentPage * PAGE_SIZE;
    let pageRecords = state.records.slice(startingIndex, startingIndex + PAGE_SIZE);
    for (let i = 0; i < pageRecords.length; i++) {
        tbody.appendChild(renderTableRow(pageRecords[i]));
    }


    CURRENT_PAGE.textContent = state.currentPage + 1;
    TOTAL_PAGES.textContent = totalPages.toString();
    PREV_PAGE_BUTTON.disabled = state.currentPage === 0;
    NEXT_PAGE_BUTTON.disabled = state.currentPage === totalPages - 1;
}

render(state)
=======
function render(state) {
    let tbody = document.querySelector("tbody");
    tbody.textContent = "";

    let totalPages = Math.ceil(state.records.length / PAGE_SIZE);
    let startingIndex = state.currentPage * PAGE_SIZE;
    let pageRecords = state.records.slice(startingIndex, startingIndex + PAGE_SIZE);
    for (let i = 0; i < pageRecords.length; i++) {
        tbody.appendChild(renderTableRow(pageRecords[i]));
    }

    CURRENT_PAGE.textContent = state.currentPage + 1;
    TOTAL_PAGES.textContent = totalPages.toString();
    PREV_PAGE_BUTTON.disabled = state.currentPage === 0;
    NEXT_PAGE_BUTTON.disabled = state.currentPage === totalPages - 1;
}

render(state);
>>>>>>> a714d76ea192f088385736e6a160b1daa46bc695

//TODO: listen for the "click" event raised by the 
//prev/next page buttons, mutate the state.currentPage,
//and re-render
NEXT_PAGE_BUTTON.addEventListener("click", function() {
    state.currentPage++;
    render(state);
});

NEXT_PAGE_BUTTON.addEventListener("click", function() {
    // console.log("next page button pressed");
    state.currentPage++;
    render(state);
});

PREV_PAGE_BUTTON.addEventListener("click", function() {
    // console.log("prev page button pressed");
    state.currentPage--;
    render(state);
})


PREV_PAGE_BUTTON.addEventListener("click", function() {
    state.currentPage--;
    render(state);
});

//TODO: listen for the "input" event raised by the
//name filter <input> element, filter the state.records,
//and re-render
<<<<<<< HEAD

=======
>>>>>>> a714d76ea192f088385736e6a160b1daa46bc695
NAME_FILTER_INPUT.addEventListener("input", function() {
    let q = NAME_FILTER_INPUT.value.trim().toLowerCase();
    state.records = BABYNAMES.filter(function(record) {
        return record.name.toLowerCase().startsWith(q);
    });
    state.currentPage = 0;
    render(state);
});
<<<<<<< HEAD
=======

>>>>>>> a714d76ea192f088385736e6a160b1daa46bc695
