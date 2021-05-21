//starter file from TA - Erin Wills
// provided comments for basic version of HW
// included function names and filteredData variable

// from data.js
const tableData = data;

// get table references where table will be inserted
var tbody = d3.select("tbody");
console.log(data);

function buildTable(data) {
  // When the page loads, it needs to display the table
  // But if the table reloads then you may need to ensure the 
  // previous output is cleared/overwritten from scratch 
tbody.html("")
  // Think of the class activities for generating tables

data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

function handleClick() {

  // Grab the datetime value from the filter
  
  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
  // grab all the table data and set to filteredData
  
  // Check to see if a date was entered and filter the
  // data using that date.
  console.log(filteredData);

  

  

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  // take your filtered data and put it into the buildTable to rebuild the table with the filtered data
  buildTable(filteredData);
}
d3.selectAll("#filter-btn").on("click", handleClick);
// Attach an event to listen for the form button that calls handleClick on a click of the filter button


// Build the table when the page loads
buildTable(tableData);
