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
		faker.image.cats(500, 500),
		faker.internet.url(),
		[faker.name.firstName() + " " + faker.name.lastName(), faker.name.firstName() + faker.name.lastName()],
		faker.random.number(5)
	));
}

class App {
	constructor(numPosts, numPeople, numCompanies){
		this.story = {
			"teaching": {
				"cth": entityFaker(),
				"fotd": entityFaker(),
				"ast": entityFaker()
			},
			"research": {
				"augM": entityFaker(),
				"hdat": entityFaker()
			},
			"platform": {
				"iteration-one": entityFaker(),
				"iteration-two": entityFaker(),
				"iteration-three": entityFaker()
			},
			"blog": []
		};
		this.people = [];
		this.companies = [];

		for (var i = 0; i < numPosts; i++){
			this.story.blog.push(entityFaker());
		}
		for (var i = 0; i < numPeople; i++){
			this.people.push(entityFaker());
		}
		for (var i = 0; i < numCompanies; i++){
			this.companies.push(entityFaker());
		}
	}
}

export default {App: App, Entity: Entity};