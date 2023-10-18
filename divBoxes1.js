// Function to fetch data from a JSON file
function fetchDataFromJSON() {
    fetch("json.json")
      .then((response) => response.json())
      .then((data) => createNewDivs(data))
  }
  
  // Function to create new divs based on JSON data
  function createNewDivs(data) {
    const DivsContainer = document.getElementById("box1");
  
    data.forEach((item) => {
      const newDiv = document.createElement("div");
      newDiv.classList.add("newDiv");
      newDiv.style.borderTop = `2px solid ${item.borderColor}`; // Set the border color
      newDiv.innerHTML = `
          <div class="logo">
            <img src="${item.image}">
            <p class="name">${item.username}</p>
          </div>
          <div class="followerCount">
            <span>${item.followers}</span>
            <p class="follow1">${item.followers2}</p>
          </div>
          <div class="followerDay">
            <img src="${item.svg}">
            <p class="Ptoday"  style="color: ${item.followPercentColor}">${item.followersToday}</p>
          </div>
      `;
      DivsContainer.appendChild(newDiv);
    });
  }
  
  
  // Fetch data from JSON file and create new divs when the page loads
  fetchDataFromJSON();
  
  
  
  