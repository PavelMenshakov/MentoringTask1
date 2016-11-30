export class PostPageModel {
  constructor(wrapper) {
    this.loadMask = wrapper.getElementById("loadMask");
    this.nextButton = wrapper.getElementById("newsNext");
    this.wrapperBlock = wrapper.getElementById("wrapper");
	this.envBlock = wrapper.getElementById("env");
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