// Function to fetch data from a JSON file
function fetchDataFromJSON() {
    fetch("json22.json")
      .then((response) => response.json())
      .then((data) => NewDivs(data))
  }
  
  // Function to create new divs based on JSON data
  function NewDivs(data) {
    const DivsContainer = document.getElementById("fcset1");
  
    data.forEach((item) => {
      const contDiv = document.createElement("div");
      contDiv.classList.add("contDiv");
      contDiv.innerHTML = `
          <div class="Flogo2">
            <p class="PVnames">${item.pages}</p>
            <img src="${item.image}">
          </div>

          <div class="FCount">
            <span>${item.followCount}</span>
            <div class="svgDiv">
                <img src="${item.svg}">
                <p class="Fpercent" style="color: ${item.followPercentColor}">${item.followPercent}</p>
            </div>
          </div>
      `;
      DivsContainer.appendChild(contDiv);
    });
  }
  
  
  // Fetch data from JSON file and create new divs when the page loads
  fetchDataFromJSON();
  
  
  
  