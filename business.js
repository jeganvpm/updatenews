
// Initialize the news api parameters
let source = 'the-times-of-india';
let apiKey = '7a1d0c68ab5d451884c4e518db989392'

// calling the news container for business news
let newsContent = document.getElementById('newsContent');;

// Create an ajax get request

fetch('business.json')
.then(response => response.json())
.then(data => console.log(data));

const xhr = new XMLHttpRequest();
xhr.open('GET', `business.json`, true);
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      let news = `<div class="card mb-3" style="max-width: 900px; margin-left: 10%;margin-right: 10%; border-radius:15px;">
            <div class="row g-0">
              <div class="col-md-6" style="padding : 20px;">
                <img src="${element["urlToImage"]}" class="img-fluid rounded-start" alt="image can't be displayed" style="border-radius:15px;">
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h3 class="card-title" style="font-weight:600;">${element["title"]}</h3>
                  <p class="card-text">${element["content"]}</p>
                  <a href="${element['url']}" target="_blank" style="text-decoration : none;" >Read more here</a> 
                  
                </div>
              </div>
            </div>
          </div>`;
      newsHtml += news;
    });
    newsContent.innerHTML = newsHtml;
  }
  else {
    console.log(" error occured")
  }
}

xhr.send()


