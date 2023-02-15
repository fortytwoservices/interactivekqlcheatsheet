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

    function renderJSON(json) {
        var elem = document.getElementsByClassName("searchContainer");
        while (elem.length > 0) {
            elem[0].parentNode.removeChild(elem[0]);
        }
        let container = document.createElement("div");
        container.setAttribute("class", "queries container-fluid text-break");

        let searchContainer = document.createElement("div");
        searchContainer.setAttribute("class", "search-container d-flex align-items-center");

        let searchInput = document.createElement("input");
        searchInput.setAttribute("class", "form-control");
        searchInput.setAttribute("type", "text");
        searchInput.setAttribute("placeholder", "Search...");
        searchInput.addEventListener("input", searchHandler);

        searchContainer.appendChild(searchInput);
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
                let tags = json[element].tags;
                for (let i = 0; i < tags.length; i++) {
                searchString += " " + tags[i].toLowerCase();
                }

                details.dataset.search = searchString;
                details.appendChild(codebox);
                container.appendChild(details);
    }

    // Missing description
    function searchHandler() {
        let searchTerm = searchInput.value.toLowerCase();
        let details = document.querySelectorAll(".queryDetails");
        details.forEach(detail => {
        if (detail.dataset.search.includes(searchTerm)) {
            detail.style.display = "block";
        } else {
            detail.style.display = "none";
        }
        });
    }

    return container;
    }

    // Missing description
    async function getJSONData() {
        try {
            const response = await fetch('queries.json');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
        }
        getJSONData().then((data) => {
        document.getElementById("searchContainer").appendChild(renderJSON(data));
        });

    // Missing description
    function get_selected(){
        const textarea = document.getElementById("input-field");
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = textarea.value.substring(start, end);
        return selectedText;
    }
    

    var json_gen = [
        {
            "name": "",
            "code": 
            [
                ["", ""]
            ],
            "tags": ""
        }
    ]
    var gen_cnt = 0;
    
    // Missing description
    function print_generated_json(){
        var selected = get_selected();
        selected = selected.replace(/\n/g, "<br>");


        name = document.getElementById("query_name").value;

        if (gen_cnt == 0){
            var popup_input=prompt('Write description of selected text/element.');

            json_gen[0].code[gen_cnt][0] = selected;
            json_gen[0].code[gen_cnt][1] = popup_input;
        } else {
            var popup_input = prompt('Write description of selected text/element.');
            json_gen[0].code.push([selected, popup_input]);
        }

        json_gen[0].name = name;
        json_gen[0].tags = (document.getElementById("query_tags").value).split(",");
        document.getElementById("outputGenerated").textContent = JSON.stringify(json_gen, null, "\t");
        gen_cnt++;
    }

    // Missing description
    function open_generator(){
        document.getElementById('overlay').style.display="block";
        document.getElementById('popup').style.display='block';
    }

    // Missing description
    function close_generator(){
        document.getElementById('popup').style.display='none';
        document.getElementById('overlay').style.display='none';                    
    }