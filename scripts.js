// Copy json to clipboard when button is clicked.
function copyOutputGenerated() {
    const outputGenerated = document.getElementById("outputGenerated").innerText;
    navigator.clipboard.writeText(outputGenerated).then(function() {});
}

document.getElementById("copyButton").addEventListener("click", copyOutputGenerated);
    
// Clear all data from all form-control classes.
function clearInputs(className) {
    const inputs = document.getElementsByClassName(className);
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}

    // These two lines prohibits the popup to show onload. Not sure why they want to...
    test = document.getElementById('popup');
    test.style.display='none';


// Render search results and build table
function renderJSON(json) {
    var elem = document.getElementsByClassName("searchContainer");
    while (elem.length > 0) {
        elem[0].parentNode.removeChild(elem[0]);
    }
    let container = document.createElement("div");
    container.setAttribute("class", "queries container-fluid text-break");

    let searchContainer = document.createElement("div");
    searchContainer.setAttribute("class", "search-container d-flex align-items-center");

    // Create search input field
    let searchInput = document.createElement("input");
    searchInput.setAttribute("class", "form-control");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Search...");
    searchInput.addEventListener("input", searchHandler);

    searchContainer.appendChild(searchInput);

    // Create category select dropdown
    let categorySelect = document.createElement("select");
    categorySelect.setAttribute("class", "form-select");
    categorySelect.setAttribute("aria-label", "Select category");

    // Create default option
    let defaultOption = document.createElement("option");
    defaultOption.setAttribute("selected", "selected");
    defaultOption.innerHTML = "All categories";
    categorySelect.appendChild(defaultOption);

    // Extract categories from JSON data and add them to category select dropdown
    let categories = new Set();
    for (let element in json) {
        let category = json[element].category;
        for (let i = 0; i < category.length; i++) {
            categories.add(category[i]);
        }
    }

    // Loop through JSON data and create details and summary tags with codebox, author and category information
    for (let category of categories) {
        let option = document.createElement("option");
        option.innerHTML = category;
        categorySelect.appendChild(option);
    }
    categorySelect.addEventListener("change", searchHandler);
    searchContainer.appendChild(categorySelect);

    container.appendChild(searchContainer);

    for (let element in json) {
        let details = document.createElement("details");
        details.setAttribute("class", "queryDetails");

        let summary = document.createElement("summary");
        summary.setAttribute("class", "querySummary");
        summary.innerHTML = json[element].name;
        details.appendChild(summary);

        let codebox = document.createElement("pre");
        codebox.setAttribute("class", "codeBox text-wrap");
        json[element].code.forEach(array => {
            let div = document.createElement("span");
            div.setAttribute("class", "tippy data-bs-toggle");
            let span = document.createElement("span");
            span.setAttribute("class", "tippytext data-bs-content");
            span.innerHTML = array[1];
            div.innerHTML = array[0];
            div.appendChild(span);
            codebox.appendChild(div);
        });

        let searchString = json[element].name.toLowerCase();
        let category = json[element].category;
        for (let i = 0; i < category.length; i++) {
            searchString += " " + category[i].toLowerCase();
        }

        details.dataset.search = searchString;
        details.dataset.category = category.join(",");
        details.appendChild(codebox);

        // Add author and category information
        let author = document.createElement("div");
        author.setAttribute("class", "authorInfo");
        author.innerHTML = "Author: " + json[element].author;
        details.appendChild(author);

        let categoryInfo = document.createElement("div");
        categoryInfo.setAttribute("class", "categoryInfo");
        categoryInfo.innerHTML = "Category: " + category.join(", ");
        details.appendChild(categoryInfo);

        container.appendChild(details);
    }

// Handle search input and category select changes
function searchHandler() {
    let searchTerm = searchInput.value.toLowerCase();
    let selectedCategory = categorySelect.value;
    let details = document.querySelectorAll(".queryDetails");
    details.forEach(detail => {
        if ((detail.dataset.search.includes(searchTerm) || searchTerm === "") &&
            (selectedCategory === "All categories" || detail.dataset.category.includes(selectedCategory))) {
            detail.style.display = "block";
        } else {
            detail.style.display = "none";
        }
    });
    }
    
    return container;
}


// Async function to fetch JSON data from newQueries.json file
async function getJSONData() {
    try {
      const response = await fetch('newQueries.json'); 
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  
  // Call the getJSONData function to fetch and load the JSON data to the search container
  getJSONData().then((data) => {
    document.getElementById("searchContainer").appendChild(renderJSON(data));
  });  

// Function to get the selected text from the input field
function get_selected(){
    const textarea = document.getElementById("input-field");
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    return selectedText;
}

// Initialize an empty array to store the generated JSON
var json_gen = [
    {
        "name": "",
        "code": 
        [
            ["", ""]
        ],
        "category": "",
        "author": ""
    }
]

var gen_cnt = 0;

// Function to print the generated JSON
function print_generated_json(){
    // Get selected text and replace newlines with <br> tags
    var selected = get_selected();
    selected = selected.replace(/\n/g, "<br>");

    // Get name and popup input values from form
    var name = document.getElementById("query_name").value;
    var popup_input = prompt('Write description of selected text/element.');

    // If this is the first generated code block, update existing array values
    if (gen_cnt == 0){
        json_gen[0].code[gen_cnt][0] = selected;
        json_gen[0].code[gen_cnt][1] = popup_input;
    } 
    // Otherwise, add a new array to the code property
    else {
        json_gen[0].code.push([selected, popup_input]);
    }

    // Update name, category, and author properties with form values
    json_gen[0].name = name;
    json_gen[0].category = (document.getElementById("query_category").value).split(",");
    json_gen[0].author = ""; // Author information

    // Update the output text with the generated JSON string
    document.getElementById("outputGenerated").textContent = JSON.stringify(json_gen, null, "\t");

    // Increment the code block counter
    gen_cnt++;
}


// Function to display the popup window
function open_generator(){
    document.getElementById('overlay').style.display="block";
    document.getElementById('popup').style.display='block';
}

// Function to close the popup window
function close_generator(){
    document.getElementById('popup').style.display='none';
    document.getElementById('overlay').style.display='none';                    
}