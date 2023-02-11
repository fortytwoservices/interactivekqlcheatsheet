function renderJSON(json) {
    var elem = document.getElementsByClassName("queries");
    while (elem.length > 0) {
        elem[0].parentNode.removeChild(elem[0]);
    }
    let container = document.createElement("div");
    container.setAttribute("class", "queries container-fluid text-break");

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
            details.appendChild(codebox);
        })
        container.appendChild(details);
    }
    return container;
}


function convert_to_list() {
    var inputText = document.getElementById('myInput').value;
    var splittedText = inputText.split(" ");
    return splittedText;
}

function findObjectsWithTags(objects) {
    const tagsList = convert_to_list();
    const results = [];
  
    Object.values(objects).forEach(object => {
      let matches = 0;
      tagsList.forEach(tag => {
        if (object.tags.includes(tag)) {
          matches++;
        }
      });
      if (matches === tagsList.length) {
        results.push(object);
      }
    });
    return renderJSON(results);
  }
  

function createSetOfTags(data) {
    let tags = new Set();

    for (let key in json) {
        json[key].tags.forEach(tag => tags.add(tag));
    }

    return Array.from(tags);
}

//SEARCH FUNCTION
function autocomplete(inp, arr) {
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more vi
            sible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
//var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Clearing input text with clear button.
function clearInput(){
    var getValue= document.getElementById("myInput");
      if (getValue.value !="") {
          getValue.value = "";
      }
}