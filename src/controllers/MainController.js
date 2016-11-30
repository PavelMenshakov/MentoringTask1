import { PostsDataService } from '../services/PostsDataService';
import { PostPageModel } from '../models/PostPageModel';

let dataService = new PostsDataService('3ab1f5713ec448baa4b9c2f91e08b15f'),
  results = dataService.getData(),
  page = new PostPageModel(document);
page.loadMask.innerText = 'No news!';
page.envBlock.innerText = process.env.NODE_ENV;
page.nextButton.setAttribute('disabled', true);
results.then((news) => {
  loadMask.innerText = 'News was founded. Click "Next"';
  page.news = news;
  page.nextButton.removeAttribute('disabled');
  page.nextButton.addEventListener('click', page.news);
});