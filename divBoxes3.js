// Function to fetch data from a JSON file
function fetchDataFromJSON() {
    fetch("json23.json")
      .then((response) => response.json())
      .then((data) => NewDiv2(data))
  }  
  
  // Function to create new divs based on JSON data
  function NewDiv2(data) {
    const DivsContainer2 = document.getElementById("fcset2");
  
    data.forEach((item) => {
      const contDiv = document.createElement("div");
      contDiv.classList.add("contDiv2");
      contDiv.innerHTML = `
          <div class="Flogo2">
            <p class="PVnames2">${item.pages}</p>
            <img src="${item.image}">
          </div>

          <div class="FCount2">
            <span>${item.followCount}</span>
            <div class="svgDiv2">
                <img src="${item.svg}">
                <p class="Fpercent2" style="color: ${item.followPercentColor}">${item.followPercent}</p>
            </div>
          </div>
      `;
      DivsContainer2.appendChild(contDiv);
    });
  }
  
  
  // Fetch data from JSON file and create new divs when the page loads
  fetchDataFromJSON();
  
  
  
  