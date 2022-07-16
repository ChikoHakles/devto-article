const apikey = "FesfAHRo9gsPxYgGzvqJtS8L";

const apiURL = 'https://dev.to/api/articles?per_page=15';

const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

function fetchURL(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      data.forEach(element => {
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        const link = document.createElement('a')
        link.setAttribute('href', element.url)
        link.setAttribute('class', 'link')
        link.setAttribute('target', '_blank')
  
        const h1 = document.createElement('h1')
        h1.textContent = element.title
  
        const p = document.createElement('p')
        p.textContent = element.description
  
        const un = document.createElement('p')
        un.textContent = "Posted By: " + element.user.username;

        container.appendChild(card)
        card.appendChild(link)
        link.appendChild(h1)
        link.appendChild(p)
        link.appendChild(un)
      });
    })  // here the main response
    .catch((err) => console.log(err));

}

fetchURL(apiURL); // Calling Function

