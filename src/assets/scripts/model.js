import faker from "faker";

class Entity {
  constructor(id, name, date, category, tags, shortDescription, content, image, link, people, projects, importance){
    this.id = id;
    this.name = name;
    this.date = date || null;
    this.category = category || "";
    this.tags = tags || [];
    this.shortDescription = shortDescription || "";
    this.content = content || "";
    this.image = image || "";
    this.link = link || "";
    this.people = people || [];
    this.importance = importance || 1;
  }
};

function entityFaker(){
	return (new Entity(
		faker.random.uuid(),
		faker.lorem.sentence(3),
		faker.date.between("01-01-2014", "01-01-2016"),
		"research",
		["nomination", "Rijksmuseum"],
		faker.lorem.sentences(2),
		faker.lorem.paragraphs(5),
		faker.image.cats(1440, 720),
		faker.internet.url(),
		[faker.name.firstName() + " " + faker.name.lastName(), faker.name.firstName() + faker.name.lastName()],
		faker.random.number(5)
	));
}

class App {
	constructor(numPosts, numPeople, numCompanies){
		this.story = [
			{
				"title": "Coding The Humanities",
				"content": entityFaker(),
			},
			{
				"title": "Exporation",
				"content": entityFaker(),
				"pages": {
					"cth": entityFaker(),
					"fotd": entityFaker(),
					"ast": entityFaker()
				}
			},
			{
				"title": "Research", 
				"content": entityFaker(),
				"blog":[],
				"pages": {
					"augM": entityFaker(),
					"hdat": entityFaker()
				}
			},
			{
				"title": "Interfaces",
				"content": entityFaker(),
				"pages": {
					"iteration-one": entityFaker(),
					"iteration-two": entityFaker(),
					"iteration-three": entityFaker()
				}
			},
			{
				"title": "Partners",
				"content": entityFaker(),
				"visualisation": {}
			},
			{
				"title": "About",
				"content": entityFaker()
			}
		];
		for (var i = 0; i < numPosts; i++){
			this.story[2].blog.push(entityFaker());
		}
	}
}

export default {App: App, Entity: Entity};