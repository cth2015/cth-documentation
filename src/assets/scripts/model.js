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
    this.projects = projects || [];
    this.importance = importance || 1;
  }
};

function entityFaker(){
	return (new Entity(
		faker.random.uuid(),
		faker.lorem.sentence(5),
		faker.date.between("01-01-2014", "01-01-2016"),
		"research",
		["nomination", "Rijksmuseum"],
		faker.lorem.sentences(2),
		faker.lorem.paragraph(2),
		faker.image.cats(500, 500),
		[faker.name.firstName() + " " + faker.name.lastName(), faker.name.firstName() + faker.name.lastName()],
		faker.internet.url(),
		1,
		faker.random.number(5)
	));
}

class App {
	constructor(numProjects, numPosts){
		this.projects = {teaching: [], research: [], platform: [], fotd: [], cth: [], ast: []};
		this.partners = [];
		this.people = [];
		this.posts = [];

		for (var i = 0; i < numProjects; i++){
			this.projects.push(entityFaker());
		}
	}
}

export default {App: App, Entity: Entity};