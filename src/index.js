let authLi1 = document.querySelector(".li1");
let authLi2 = document.querySelector(".li2");
let authLi3 = document.querySelector(".li3");
let authLi4 = document.querySelector(".li4");
let authLi5 = document.querySelector(".li5");
let authLi6 = document.querySelector(".li6");
let authMain = document.querySelector(".auth-main");
let loader = document.querySelector(".loader");
let signUpBtn = document.querySelector(".signUpBtn");
let loginBtn = document.querySelector(".loginBtn");



window.addEventListener("load", function () {
    let API_KEY = "6065a270b19a4c6c8b3bc836f66a7a67";
    async function fetchData(url) {
        try {
          // Before fetching, set loading state
          console.log('Loading...');
          
          const response = await fetch(url);
      
          // Check if response is successful (status 200)
          if (!response.ok) {
            // If response is not successful, throw an error
            throw new Error('Network response was not ok');
          }
      
          // Parse response as JSON
          const data = await response.json();
      
          // After successful fetching, log data
          console.log('Data fetched:', data);
          // Return the fetched data
          return data;
        } catch (error) {
          // If any error occurs during fetching, log the error
          console.error('Fetch error:', error.message);
          
          // Return null or any other appropriate value to indicate error state
          return null;
        } finally {
          // Finally block will always execute, regardless of success or failure
          console.log('Fetch completed.');
        }
      }

      const apiUrl3 =  `https://newsapi.org/v2/top-headlines/sources?apiKey=${API_KEY}`;

      fetchData(apiUrl3)
      .then(data => {
        if (data !== null) {
          const {status,sources} = data;
          authLi1.textContent = `${sources[0].name}`
          authLi2.textContent = `${sources[1].name}`
          authLi3.textContent = `${sources[2].name}`
          authLi4.textContent = `${sources[3].name}`
          authLi5.textContent = `${sources[6].name}`
          authLi6.textContent = `${sources[7].name}`

        } else {

        }
      });

      
});