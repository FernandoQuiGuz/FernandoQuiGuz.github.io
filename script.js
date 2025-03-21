async function getFetch(){
    const url = ' https://newsapi.org/v2/everything?q=bitcoin&apiKey=a356b91066c84c5eab68b3d3e73a81a8';
       
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    

}
