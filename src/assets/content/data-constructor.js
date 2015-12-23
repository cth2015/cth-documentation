import block01 from './story/block-01.md';
import block01Data from './story/block-01.json';
import block02 from './story/block-02.md';
import block0201 from './story/block-02-01.md';
import block0202 from './story/block-02-02.md';
import block0202Data from './story/block-02-02.json';
import block0203 from './story/block-02-03.md';
import block0203Data from './story/block-02-03.json';

import articles from './articles/articles.json';
import projects from './projects/projects.json';

let story = [
	{
		content: block01,
		visualisation: block01Data
	},
	{
		content: block02,
		blocks: [
			{
				content: block0201,
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
];

export default {story: story, projects: projects, articles: articles};