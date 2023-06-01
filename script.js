document.addEventListener('DOMContentLoaded', function() {
    fetchNews();
  });
  
  function fetchNews() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your NewsAPI key
  
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => displayNews(data.articles))
      .catch(error => console.log(error));
  }
  
  function displayNews(articles) {
    const newsList = document.getElementById('news-list');
  
    articles.forEach(article => {
      const card = document.createElement('div');
      card.className = 'card my-2';
  
      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';
  
      const title = document.createElement('h5');
      title.className = 'card-title';
      title.textContent = article.title;
  
      const description = document.createElement('p');
      description.className = 'card-text';
      description.textContent = article.description;
  
      const link = document.createElement('a');
      link.className = 'btn btn-primary';
      link.href = article.url;
      link.textContent = 'Read More';
  
      cardBody.appendChild(title);
      cardBody.appendChild(description);
      cardBody.appendChild(link);
  
      card.appendChild(cardBody);
  
      newsList.appendChild(card);
    });
  }
  