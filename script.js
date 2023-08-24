document.addEventListener("DOMContentLoaded", function() {

    let cardContainer = document.getElementById("card-container"); // Replace with the ID of your container

   fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Request failed");
        }
      })
      .then(data => {
        const catNames = ["Whiskers", "Felix", "Luna", "Oliver", "Bella", "Leo", "Mittens", "Cleo", "Max", "Chloe"];
        for (let i = 0; i < data.length; i++) {  
            let cardHTML = `
            <div class="m-2">
            <div  class="card card-width" >
              <img src="${data[i].url}" class="card-img-top" alt="Cat Image">
              <div class="card-body">
               
                <h4 class="card-title " ><span class="d-flex gap-2 align-items-center justify-content-center"><h2>Name - </h2>${catNames[i]}</h4></span>

              </div>
            </div>
            </div>
          `;
        
          // Append the card HTML to the container
          cardContainer.insertAdjacentHTML("beforeend", cardHTML);
                             
        }
        
      })
      .catch(error => {
        console.error("An error occurred:", error);
      });
  });
  