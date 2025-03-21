async function getFetch() {
    const apiKey = 'a356b91066c84c5eab68b3d3e73a81a8'; 
    const category = 'technology'; 
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}&pageSize=10`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === "ok") {
            displayArticles(data.articles);
        } else {
            console.error("Error en la respuesta de la API", data);
        }
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}
function displayArticles(articles) {
    const container = document.getElementById("data_container");
    container.innerHTML = ""; 
    const list = document.createElement("ul"); 
    articles.forEach(article => {
        const listItem = document.createElement("li"); 
        listItem.innerHTML = `
            <span>${article.title}</span><br>
            <span style="color: gray; font-size: 12px;">${article.source.name}</span><br>
            <p style="font-size: 12px; margin-top: 5px;">${article.description || "No description available"}</p>
        `;
        list.appendChild(listItem); 
    });
    container.appendChild(list);
}
document.addEventListener("DOMContentLoaded", getFetch);
