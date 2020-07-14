window.onload = () =>{

    document.querySelector(".list_container_country").style.display = "none";
    const input = document.querySelector("#country-input");
    input.addEventListener("input", searchCountry);
}
    var map;
    var coronaData;
    var markers = [];
    var infoWindow;
    var infos = [];

/***************************************
 * GOOGLE MAP
 ****************************************/
async function initMap() {

    var response = await axios.get("https://corona.lmao.ninja/v2/countries");

    coronaData = response.data;

    displayCountries(coronaData);
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
        lat: 46, 
        lng: 2
    },
        zoom: 5,
        styles: customGMapStyles,
    });

    google.maps.event.addListenerOnce(map, "tilesloaded", function () {
        
        
    });
    

    infoWindow = new google.maps.InfoWindow();

    displayMarkers(coronaData);

}


/************************************
     DISPLAY COUNTRY LISTS
 ************************************/
function displayCountries(countries) {
    var countriesHtml = '';
    
    countries.map((one) => {
        countriesHtml += 
        `
            <div id="${one['countryInfo']['_id']}" class="country-container" onclick="clickCountry('${one['countryInfo']['iso2']}')">
                <div class="country-info-container">
                    <div class="country-name">
                        <span>${one['country']}</span>
                        <span></span>
                    </div>
                    <div class="boundary"></div>
                </div>
                <div class="country-flag-container">
                    <div class="country-flag">
                        <img src="${one['countryInfo']['flag']}" width="20px" height="20px"></img>
                    </div>
                </div>
            </div>
        `
    })

    document.querySelector(".listofCountries").innerHTML = countriesHtml;
}

/****************************************
   FUNCTION : SHOW MARKERS IN GOOGLE MAP
 ****************************************/
function displayMarkers(newCovidData) {
    newCovidData.map((one, index) => {

        var latlng = new google.maps.LatLng(
            one["countryInfo"]["lat"],
            one["countryInfo"]["long"]
        );

        var lastUpdated = new Date(one["updated"]).toLocaleDateString("en");
        var country = one["country"];
        var cases = one["cases"];
        var active= one["active"]
        var deaths = one["deaths"];
        var todayDeaths = one["todayDeaths"];
        var todayCases = one["todayCases"];
        var id = one["countryInfo"]["_id"];
        var iso2 = one["countryInfo"]["iso2"];
        
        createCovidMarker(latlng, lastUpdated, country, cases,active, deaths, todayCases,todayDeaths, id, iso2);
    })
}

/****************************************
   FUNCTION : GOOGLE MAP MARKER CREATION
 ****************************************/
function createCovidMarker(latlng, lastUpdated, country, cases, active, deaths, id, todayCases, todayDeaths, iso2) {
    var html = 
    `
        <div class="covid-info-country-container">
            <div class="info-main-container">
                <div class="info-country">
                    ${country}
                </div>
                <div class="info-last-updated">
                    <span>Last Updated:&nbsp;</span>${lastUpdated}
                </div>
            </div>
            <div class="info-secondary-container">
                <div class="info-cases">Total Cases:&nbsp;${cases}</div>
                <div class="info-active">Active:&nbsp;${active}</div>
                <div class="info-todayCases">Today's Cases:&nbsp;${todayCases}</div>
                <div class="info-todayDeaths">Today's Deaths:&nbsp;${todayDeaths}</div>
                <div class="info-death">Total Deaths:&nbsp;${deaths}</div>
            </div>
        </div>
    `

    infos[iso2] = html;

    var image = {
    
        scaledSize: new google.maps.Size(50, 50)
    }

    var marker = new google.maps.Marker({
        map: map,
        position: latlng,
        label: iso2 + '',
        icon: image,
        abc: "ahihi"
    });

    google.maps.event.addListener(marker, "click", function () {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
    });

    markers.push(marker);
}

/****************************
   FUNCTION : CLICK COUNTRY
 ****************************/
function clickCountry(index) {
    document.getElementById("country-input").value = '';
    document.querySelector(".list_container_country").style.display = "none";
    
    var key = index.toString();
    var selectedMarker = markers.find(one => one.label.toLowerCase() === index.toLowerCase())
    infoWindow.setContent(infos[key]);
    infoWindow.open(map, selectedMarker);
    
}

/****************************
   FUNCTION : SEARCH COUNTRY
 ****************************/
function searchCountry() {
    var countryName = document.getElementById("country-input").value;

    if (countryName) {
        document.querySelector(".list_container_country").style.display = "flex";
    } else {
        document.querySelector(".list_container_country").style.display = "none";
    }

    var oldIndex = []
    
    var countriesResult = coronaData.filter((one, index) => {
        if (one["country"].toLowerCase().includes(countryName.toLowerCase())) {
            oldIndex.push(index);
            return true;
        }
    })

    countriesResult.map((one, index) => {
        one["index"] = oldIndex[index];
    })

    displayCountries(countriesResult);
}

/**********************************************
 * Global Data Dashboard
 **********************************************/
function getGlobalData(){
    fetch("https://api.covid19api.com/summary")
    .then(function(response){return response.json()})
    .then(function(data){
        var totalCases =data.Global.TotalConfirmed;
        var newCases =data.Global.NewConfirmed;
        var totalRecovered=data.Global.TotalRecovered;
        var totalDeaths=data.Global.TotalDeaths;


        document.getElementById('cases').innerHTML=totalCases;
        document.getElementById('newCases').innerHTML= newCases;
         document.getElementById('recovered').innerHTML= totalRecovered;
        document.getElementById('deaths').innerHTML= totalDeaths;
    });
    
};
getGlobalData();
