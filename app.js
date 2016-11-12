class PostPageModel {
  constructor(wrapper) {
    this.loadMask = wrapper.getElementById("loadMask");
    this.nextButton = wrapper.getElementById("newsNext");
    this.wrapperBlock = wrapper.getElementById("wrapper");
    this.newsArray = {};
  }

  set news(data) {
    this.newsArray = this.getNews(data.articles);
  }

  get news() {
    return this.newsArray.next.bind(this.newsArray);
  }

  * getNews(news) {
    for (let i = 0; i < news.length; i++) {
      this.wrapperBlock.innerText = news[i].description;
      yield news[i];
    }
  }
}

class PostsDataService {
  constructor(key) {
    this.apiKey = key;
  }

  getData() {
    let url = `https://newsapi.org/v1/articles?source=bbc-news&apiKey=${this.apiKey}`;
    return fetch(url, {
      method: 'get'
    }).then((data) => {
      return data.json();
    }, (error) => {
      return error;
    });
  }
}
/////////




let dataService = new PostsDataService("3ab1f5713ec448baa4b9c2f91e08b15f"),
  results = dataService.getData(),
  page = new PostPageModel(document);
page.loadMask.innerText = "No news!";
page.nextButton.setAttribute("disabled", true);
results.then((news) => {
  loadMask.innerText = "News was founded. Click 'Next'";
  page.news = news;
  page.nextButton.removeAttribute("disabled");
  page.nextButton.addEventListener('click', page.news);
});
