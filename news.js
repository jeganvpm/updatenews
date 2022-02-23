var option = 'in';
let apiKey = '7a1d0c68ab5d451884c4e518db989392'

// calling a news container

let newsContent = document.getElementById('newsContent');

// Create an ajax get request
debugger;
const xhr = new XMLHttpRequest();
xhr.open('GET',`news.json`,true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            let news=`<div class="card mb-3" style="max-width: 900px;margin-left: 10%;margin-right: 10%; border-radius:15px;">
            <div class="row g-0">
              <div class="col-md-6" style="padding : 20px;">
                <img src="${element["urlToImage"]}" class="img-fluid rounded-start" alt="image can't be displayed." style="border-radius:15px;" >
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h3 class="card-title">${element["title"]}</h3>
                  <p class="card-text">${element["content"]}</p>
                  <a href="${element['url']}" target="_blank" style="text-decoration : none;">Read more here</a>  
                </div>
              </div>
            </div>
          </div>`;
            newsHtml += news;
        });
        newsContent.innerHTML = newsHtml;
    }
    else {
        console.log("error occured")
    }
}

xhr.send();
const searchData = async searchText => {
  const response = await fetch('news.json');
  const data = await response.json();

  let getFilteredValues = data.articles.filter((v,k)=> {
    let searchVal = searchText.toLowerCase();
    return v.description.toLowerCase().includes(searchVal);
  });
  
  let newsHtml = "";
  if(searchText) {
    if(getFilteredValues.length > 0) {
      getFilteredValues.forEach(function(element, index) {
        let news=`<div class="card mb-3" style="max-width: 900px;margin-left: 10%;margin-right: 10%; border-radius:15px;">
        <div class="row g-0">
          <div class="col-md-6" style="padding : 20px;">
            <img src="${element["urlToImage"]}" class="img-fluid rounded-start" alt="image can't be displayed." style="border-radius:15px;" >
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h3 class="card-title">${element["title"]}</h3>
              <p class="card-text">${element["content"]}</p>
              <a href="${element['url']}" target="_blank" style="text-decoration : none;">Read more here</a>  
            </div>
          </div>
          </div>
        </div>`;
        newsHtml += news;
      });
      newsContent.innerHTML = newsHtml;
    } else {
      newsContent.innerHTML = '';
      let news=`<div class="row g-0">
      <div class="col-md-12 text-center">
        <h2>No Records Found</h2>
      </div>`;
      newsHtml = news;
      newsContent.innerHTML = newsHtml;
    }
  } else {
    let newsHtml = "";
        data.articles.forEach(function(element, index) {
            let news=`<div class="card mb-3" style="max-width: 900px;margin-left: 10%;margin-right: 10%; border-radius:15px;">
            <div class="row g-0">
              <div class="col-md-6" style="padding : 20px;">
                <img src="${element["urlToImage"]}" class="img-fluid rounded-start" alt="image can't be displayed." style="border-radius:15px;" >
              </div>
              <div class="col-md-6">
                <div class="card-body">
                  <h3 class="card-title">${element["title"]}</h3>
                  <p class="card-text">${element["content"]}</p>
                  <a href="${element['url']}" target="_blank" style="text-decoration : none;">Read more here</a>  
                </div>
              </div>
            </div>
          </div>`;
            newsHtml += news;
        });
        newsContent.innerHTML = newsHtml;
  }
}

document.getElementById('searchTxt').addEventListener('keyup',(e)=>{
  debugger;
  searchData(e.target.value);
  console.log(e.target.value);
});