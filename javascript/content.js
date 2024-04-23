// Function to fetch trends from the database 
function getDatabaseTrends() {
    const text = "This text is retrieved from the database!";
    return text;
}

// function to fetch trend descriptions from the database
function getDatabaseDescriptions() {
    const text = "This text is retrieved from the database!";
    return text;
}

function readFile(fileInput) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = function(e) {
            const content = e.target.result;
            const lines = content.split('\n').filter(Boolean);
            resolve(lines);
        };

        reader.onerror = function() {
            reject('Unable to read file');
        };

        reader.readAsText(fileInput.files[0]); // Read the file as text
    });
}

// Function to update the div element
async function updateText() {
    const trend_array = await readFile(document.getElementById("trends_file_input"));
    const description_array = await readFile(document.getElementById("descriptions_file_input"));

    for (let i = 0; i < trend_array.length; i++) {
        // get the html elements to edit
        let trend_class = document.querySelector(".trend" + String(i));
        let description_class = document.querySelector(".trend-description" + String(i));
        let modal = document.getElementById("modal-title" + String(i + 1));

        // store text in variable
        let trend_text = trend_array[i];
        let description_text = description_array[i];

        // update elements
        trend_class.textContent = trend_text;
        description_class.textContent = description_text;
        modal.textContent = description_text;
    }
}

// Call the update function on page load (or when needed)
updateText();
