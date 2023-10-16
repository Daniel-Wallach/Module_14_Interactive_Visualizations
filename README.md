# Module_14_Interactive_Visualizations

## Background
In this assignment, you will build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Instructions
Complete the following steps:

1. Use the D3 library to read in `samples.json` from the URL `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

   - Use `sample_values` as the values for the bar chart.
   - Use `otu_ids` as the labels for the bar chart.
   - Use `otu_labels` as the hovertext for the chart.

     ![image](https://github.com/Daniel-Wallach/Module_14_Interactive_Visualizations/assets/44652327/65268e8d-220d-491c-b7d1-8cadbae7f973)

3. Create a bubble chart that displays each sample.
   - Use `otu_ids` for the x values.
   - Use `sample_values` for the y values.
   - Use `sample_values` for the marker size.
   - Use `otu_ids` for the marker colors.
   - Use `otu_labels` for the text values.
     ![image](https://github.com/Daniel-Wallach/Module_14_Interactive_Visualizations/assets/44652327/e4f29423-9614-4a9f-b261-4aa6b8ddbc7a)

 4. Display the sample metadata, i.e., an individual's demographic information.

 5. Display each key-value pair from the metadata JSON object somewhere on the page.

    ![image](https://github.com/Daniel-Wallach/Module_14_Interactive_Visualizations/assets/44652327/677996e3-dbe6-47bc-91ed-a26039da166d)

 7. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:
    
    ![image](https://github.com/Daniel-Wallach/Module_14_Interactive_Visualizations/assets/44652327/c6188a04-3519-411c-91de-cbad4865a94e)

 9. Deploy your app to a free static page hosting service, such as GitHub Pages

---
**Deployed App:** [Belly Button Biodiversity Dashboard](https://daniel-wallach.github.io/Module_14_Interactive_Visualizations/)
