export class PostsDataService {
  constructor(key) {
    this.apiKey = key;
  }

  getData() {
    let url = `https://newsapi.org/v1/articles?source=bbc-news&apiKey=${this.apiKey}`;
    return fetch(url, {
      method: "get"
    }).then((data) => {
      return data.json();
    }, (error) => {
      return error;
    });
  }
}