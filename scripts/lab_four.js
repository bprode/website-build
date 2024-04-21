
fetch("https://fake-coffee-api.vercel.app/api")
.then((res) => res.json())
.then((data) => {
    // Selecting the ul element where coffee cards will be appended
    const coffeeList = document.getElementById("coffee-list");
   
    // Loop through each coffee and create a card for it
    data.forEach((coffee) => {
      // Create elements for the card
      const listItem = document.createElement("li");
      listItem.classList.add("card");
      const img = document.createElement("img");
      img.src = coffee.image_url; // Using the provided image URL
      img.alt = "Coffee Bean Product of " + coffee.name;
      const cardContent = document.createElement("div");
      cardContent.classList.add("card-content");
      const subheader = document.createElement("h3");
      subheader.classList.add("subheader");
      subheader.textContent = coffee.region;
      const header = document.createElement("h4");
      header.classList.add("header");
      header.textContent = coffee.name;
      const paragraph = document.createElement("p");
      paragraph.classList.add("paragraph");
      paragraph.textContent = coffee.description;

      // Append elements to the card
      cardContent.appendChild(subheader);
      cardContent.appendChild(header);
      cardContent.appendChild(paragraph);
      listItem.appendChild(img);
      listItem.appendChild(cardContent);

      // Append card to the list
      coffeeList.appendChild(listItem);
    });
})
.catch((error) => {
    console.error("Error fetching data:", error);
});

let currentDate = new Date();
document.getElementById("footer-year").textContent = currentDate.getFullYear();