import articles from './articles/articles.json';
import projects from './projects/projects.json';

import block01Y from './story/block-01.yaml';
import block0200Y from './story/block-02-00.yaml';
import block0201Y from './story/block-02-01.yaml';
import block0202Y from './story/block-02-02.yaml';
import block0203Y from './story/block-02-03.yaml';

let storyY = {
	storyHeader: block01Y,
	storyItems: [
		{
			blocks: [
				block0200Y,
				block0201Y,
				block0202Y,
				block0203Y 
			]
		}
	]
}

export default {story: storyY, projects: projects, articles: articles};