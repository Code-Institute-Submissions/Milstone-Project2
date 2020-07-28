# Milstone-Project2
It is an app on live tracking of recent Covid19 cases worldwide based on Google map along with javascript.
It shows the latest data using live Covid19 cases APIs, it can use by anyone, and based on user search it displays the selected country with covid19 cases e.x: Total cases, Recovered and Deaths in number as well as total update cases for the whole world. Individual country's information can be displayed by click on each country's marker. The site also has a reference link TO the World Health Organisation(WHO) which can provide important information and guidelines during this on-going Covid19 pandemic. 

## UX
Expected users of the website could be any individuals who want to know about the covid19 pandemic locally or globally.
__Goals__
* The main goal is to provide platform for users to know more about the ongoing covid19 pandemic around the globe.
* To make an interactive website with Javascript,Google map Api and the current live data from various APIs source.
* To make visual for all available cases about Covid19 and give an overview of each and every country.
* To create a design that would be responsive.

__User Stories__
1. Seun Owonikoko (mentor) - She searched her country Nigeria's recent cases and at the same time compared the pandemic between several countries(e.x: Estonia, India, Bangladesh).
2. Aziz Kaura 32, France - "It's interesting to see the map and data at the same time, now I can search and find out cases for any country".
3. Momotaj 35(Data-scientist, NZ) -" COVID-19 WORLDWIDE TRACKER is a very interactive dashboard and provides real-time statistics about Covid-19 across the globe.
 The page is very attractive and readable. I liked the developing pattern of the website which is giving active filtering options by countries, and a summary of the total case of the world."
4. Tusher 22 - " Now I can follow the corona virus cases of my country and can evaluate the situation".
5. Sohag 25 - He searched the data for some countries in his Iphone-8 and the site was working well.

### Frameworks and responsivenes
![Responsive design](/images/responsive.png)

### Wireframes
* Figma layout:https://www.figma.com/file/D494G7ujMm0HjOu5rkzOw1/Covid-19-cases?node-id=0%3A1- automatic!


## Features
* __Worldmap__: Google Map has used with map-tile layer and styled in Night mode.
* __Search Country__: with the jquery a search country bar used to search specific country name and a pop-up window appears with data.
* __Marker__: Google map default marker used to display a clickable icon on the map.
* __Info-window__: An Info-window used to show the data of individual countries on the map via API.
* __Dashboard__: Displayed the total cases of the world from the live API.
* __Controls__: A basic zoom control with two buttons (zoom in and zoom out) for the map.
* __Guidelines__: a clickable button at the top will recommend users to WHO Guidelines Page for the Pandemic. 

#### Features to be
 * I would like to add a more efficient and reliable API for better User Experiences.
 * Adding Graphs to show data over a timeline would be a good feature.
 * Zoom in feature upon clicking search bar would more accurate via better API(latitude and longitude)

 ## Technologies Used
* __Figma__: The collaborative interface design tool.
    * https://www.figma.com/
* __HTML__: HTML for structure or used as shell of site
* __CSS__: Cascading Style Sheet for styling and design
* __Bootstrap__: Framework from Bootstrap
    * https://getbootstrap.com/
* __Javascript__: For all user Interactions
* __JQuery__: To simplify DOM manipulation
* __GoogleMap API__: An open source Javascript API for interactive map
* __Axois__: provides a single API for dealing with XMLHttpRequests
* __Font-awesome__: https://fontawesome.com/
* __Google-front__: https://fonts.google.com/
* __Google Chrome__: Used for dev tools and browser
* __Mozila Firefox__:Used for browser
* __Google__: Used for research
* __Git__: For Version control
* __Github__: Repository host
* __Github Page__: Website host


 ## Testing 
* __HTML Validator__: https://validator.w3.org/
    No errors or warnings to show.

* __CSS validator__:https://jigsaw.w3.org/css-validator/validator

* __Javascript Validator__:https://jshint.com/

* The site was tested in several devices for validate the UX features inculding:
    * Dekstop
    * Laptop
    * Ipad and Ipad pro screen using dev tool in google Chrome
    * Iphon8
    * Huawei P20
    * Galaxy S7
    * Samsung A5
    * Testing compatibility with different browsers
       I manually tested the website on the following web browsers:
        * Google Chrome
        * Mozilla Firefox
        * Apple Safari

 ## Deployment 
 The project is hosted on Github.
1. AT first, host a git repository on GitHub.
2. The project contains README.md,index.html, js, CSS files.
3. The CSS folder contains a style.css file.
4. the js folder contains index.js and map-style.js.
5. Move to the GitHub Pages section on the GitHub repository settings page.
6. On the setting, page changes the source to 'master branch' or any other desired branch.
7. The appeared link would be the project home page (index.html).
8. My repository can be found here:
    * Repo:https://github.com/himaldew/Milstone-Project2
9. The live site can found on https://himaldew.github.io/Milstone-Project2/

 ## Credit
  * I am highly inspired by "https://jeet-khondker.github.io/covid19-live-tracker/". (major code source)
  * The World Health Organization(WHO)
  * Freecodecame ("https://www.freecodecamp.org/news/how-to-add-coronavirus-covid-19-case-statistics-to-your-map-dashboard-in-gatsby-and-react-leaflet/")
  * Google map Javascript API("https://developers.google.com/maps/documentation/javascript/overview")
  * https://www.youtube.com/(Code explained channel)
  * https://corona.lmao.ninja/v2/countries
  * https://api.covid19api.com/summary
  * https://www.w3schools.com/
  * https://stackoverflow.com/

## Acknowledgements
Thank you to the following for inspiration, motivation, and the direction I needed:

* Jeet-Khondker(covid19 live tracker)
* Seun Owonikoko @seun_mentor
* Tutor Assistant-Code Institute

