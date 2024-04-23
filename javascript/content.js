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
    let trends = [];
    var file = fileInput.files[0]; // Get the first file (assuming one file is selected)

    if (file) {
        var reader = new FileReader();

        reader.onload = function(e) {
            var content = e.target.result;
            // Split the content by new lines and filter out any empty lines
            var lines = content.split('\n').filter(Boolean);
            console.log("Original lines:", lines); // Log the original lines to the console

            // Clear the trends array before adding new data
            trends.length = 0;

            // Add the lines from the file to the trends array
            trends.push(...lines);
            console.log("Trends array:", trends); // Log the trends array to see its content

        };

        reader.readAsText(file); // Read the file as text
    } else {
        alert("Please select a file first.");
    }
    return trends;
}

// Function to update the div element
function updateText() {
    const trend_array = [];
    fileInput = "trends_text.txt";
    var file = fileInput.files[0]; // Get the first file (assuming one file is selected)

    if (file) {
        var reader = new FileReader();

        reader.onload = function(e) {
            var content = e.target.result;
            // Split the content by new lines and filter out any empty lines
            var lines = content.split('\n').filter(Boolean);
            console.log("Original lines:", lines); // Log the original lines to the console

            // Clear the trends array before adding new data
            trend_array.length = 0;

            // Add the lines from the file to the trends array
            trend_array.push(...lines);
            console.log("Trends array:", trend_array); // Log the trends array to see its content

        };

        reader.readAsText(file); // Read the file as text
    } else {
        alert("Please select a file first.");
    }
    
    const description_array = readFile("descriptions_text.txt");

    for (let i = 0; i < trend_array.length; i++) {
        // get the html elements to edit
        let i_string = toString(i);
        let trend_class = document.getElementsByClassName("trend" + i_string);
        let description_class = document.getElementsByClassName("trend-description" + i_string);
        let modal = document.getElementById("modal-title" + toString(i+1));


        // store text in variable
        let trend_text = trend_array[i];
        let description_text = description_array[i];

        // update elements
        trend_class.innerHTML = trend_text;
        description_class.innerHTML = description_text;
        modal.innerHTML = description_text;

    }
}
  
  // Call the update function on page load (or when needed)
  updateText();