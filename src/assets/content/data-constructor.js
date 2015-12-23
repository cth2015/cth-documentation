import block01 from './story/block-01.md';
import block01Data from './story/block-01.json';
import block0200 from './story/block-02-00.md';
import block0200Data from './story/block-02-00.json';
import block0201 from './story/block-02-01.md';
import block0201Data from './story/block-02-01.json';
import block0202 from './story/block-02-02.md';
import block0202Data from './story/block-02-02.json';
import block0203 from './story/block-02-03.md';
import block0203Data from './story/block-02-03.json';

import articles from './articles/articles.json';
import projects from './projects/projects.json';

let story = {
	storyHeader: {
		content: block01,
		data: block01Data
	},
	storyItems: [
		{
			blocks: [
				{
					content: block0200,
					data: block0200Data
				},
				{
					content: block0201,
					data: block0201Data
				},
				{
					content: block0202,
					data: block0202Data
				},
				{
					content: block0203,
					data: block0203Data
				}
			]
		}
	]
};

export default {story: story, projects: projects, articles: articles};