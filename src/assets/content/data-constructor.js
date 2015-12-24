import articles from './articles/articles.json';
import projects from './projects/projects.json';

import block01 from './story/block-01.yaml';
import block0200 from './story/block-02-00.yaml';
import block0201 from './story/block-02-01.yaml';
import block0202 from './story/block-02-02.yaml';
import block0203 from './story/block-02-03.yaml';

let story = {
	storyHeader: block01,
	storyItems: [
		{
			blocks: [
				block0200,
				block0201,
				block0202,
				block0203 
			]
		}
	]
}

export default {story: story, projects: projects, articles: articles};