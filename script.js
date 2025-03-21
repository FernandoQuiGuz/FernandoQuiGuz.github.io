async function getFetch() {
    const url = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=a356b91066c84c5eab68b3d3e73a81a8&pageSize=10`;

    const response = await fetch(url);
    const data = await response.json();

    displayArticles(data.articles);
}

function displayArticles(articles) {
    const container = document.getElementById("data_container");
    container.innerHTML = ""; 

    articles.forEach(article => {
        const card = document.createElement("div");
        card.classList.add("card", "mb-3"); 

        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${article.title}</h5>
                <p class="card-text">${article.description || "No description available"}</p>
                <a href="${article.url}" class="btn btn-primary" target="_blank">See More</a>
            </div>
        `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", getFetch);
