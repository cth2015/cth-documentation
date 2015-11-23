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
		this.story = {
			"codingTheHumanities": {
				"content": entityFaker(),
			},
			"exporation": {
				"content": entityFaker(),
				"pages": {
					"cth": entityFaker(),
					"fotd": entityFaker(),
					"ast": entityFaker()
				}
			},
			"research": {
				"content": entityFaker(),
				"blog":[]
				"pages": {
					"augM": entityFaker(),
					"hdat": entityFaker()
				}
			},
			"interfaces": {
				"content": entityFaker(),
				"pages": {
					"iteration-one": entityFaker(),
					"iteration-two": entityFaker(),
					"iteration-three": entityFaker()
				}
			},
			"partners": {
				"content": entityFaker(),
				"visualisation": {}
			}
		};
		for (var i = 0; i < numPosts; i++){
			this.story.research.blog.push(entityFaker());
		}
	}
}

export default {App: App, Entity: Entity};