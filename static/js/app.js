// Using D3 to read the JSON file
d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
    console.log(data);  // Print data to console for reference

    // Extract the sample names and populate the dropdown menu
    var sampleNames = data.names;
    var dropdownMenu = d3.select("#selDataset");

    sampleNames.forEach((sample) => {
        dropdownMenu.append("option")
                    .property("value", sample)
                    .text(sample);
    });
});

// This function is called when a dropdown menu item is selected
function optionChanged(selectedSample) {
    console.log("Selected sample: ", selectedSample);
    
    // Read the JSON file again
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
        
        // Filter the data for the selected sample
        var sampleData = data.samples.filter(sample => sample.id === selectedSample)[0];
        console.log(sampleData);  // Print sample data to console for reference

        // Sort the OTUs by sample values to create the bar chart
        var otuIds = sampleData.otu_ids.slice(0, 10).reverse();
        var sampleValues = sampleData.sample_values.slice(0, 10).reverse();
        var otuLabels = sampleData.otu_labels.slice(0, 10).reverse();

        var trace = {
            x: sampleValues,
            y: otuIds.map(otuId => `OTU ${otuId}`),
            text: otuLabels,
            type: "bar",
            orientation: "h"
        };

        var layout = {
            title: "Top 10 OTUs Found in Individual",
            xaxis: { title: "Sample Values" },
            yaxis: { title: "OTU IDs" }
        };

        Plotly.newPlot("bar", [trace], layout);

        // Create the bubble chart
        var bubbleTrace = {
            x: sampleData.otu_ids,
            y: sampleData.sample_values,
            text: sampleData.otu_labels,
            mode: 'markers',
            marker: {
                size: sampleData.sample_values,
                color: sampleData.otu_ids,
                colorscale: 'Earth'
            }
        };

        var bubbleLayout = {
            xaxis: { title: 'OTU ID' },
            yaxis: { title: 'Sample Values' },
            showlegend: false
        };

        Plotly.newPlot('bubble', [bubbleTrace], bubbleLayout);

        // Display the sample metadata
        var metadata = data.metadata.filter(meta => meta.id == selectedSample)[0];
        console.log("Metadata: ", metadata);  // Print metadata to console for reference

        var demographicInfo = d3.select('#sample-metadata');
        demographicInfo.html("");  // Clear the previous metadata

        Object.entries(metadata).forEach(([key, value]) => {
            demographicInfo.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });
    });
}