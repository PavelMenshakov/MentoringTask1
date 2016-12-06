import { ElementsFactory } from './ElementsFactory';

export class PostPageModel {
  constructor(wrapper) {
	this.envBlock = wrapper.appendChild(ElementsFactory.create("div", "env"));
    this.loadMask = wrapper.appendChild(ElementsFactory.create("div", "loadMask"));
    this.wrapperBlock = wrapper.appendChild(ElementsFactory.create("div", "wrapper"));
    this.nextButton = wrapper.appendChild(ElementsFactory.create("button", "newsNext"));
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