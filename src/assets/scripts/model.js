import faker from "faker";

class ThingModel {
  constructor(id, title, date, category, tags, keyConcept, shortDescription, description, image, people, location, link, relations, importance){
    this.id = id;
    this.title = title;
    this.date = date;
    this.category = category || "";
    this.tags = tags || [];
    this.keyConcept = keyConcept || "";
    this.shortDescription = description || "";
    this.description = description || "";
    this.image = image || "";
    this.people = people || [];
    this.location = location || [];
    this.link = link || "";
    this.relations = relations || [];
    this.importance = importance || 1;
  };
};

class PostModel {
	constructor(id, title, type, date, author, content, relations){
		this.id = id;
		this.title = title;
		this.type = type;
		this.date = date;
		this.author = author;
		this.content = content;
		this.relations = relations;
	}
}

class AppModel {
	constructor(numThings, numPosts){
		this.things = [];
		this.posts = [];
		for (var i = 0; i < numThings; i++){
			this.things.push(new ThingModel(
				faker.random.uuid(),
				faker.lorem.sentence(5),
				faker.date.between("01-01-2014", "01-01-2016"),
				"event",
				"nomination",
				"Collaboration",
				faker.lorem.sentences(2),
				faker.lorem.paragraph(2),
				faker.image.cats(500, 500),
				[faker.name.firstName() + " " + faker.name.lastName(), faker.name.firstName() + faker.name.lastName()],
				faker.internet.url(),
				1,
				faker.random.number(5)
			));
		}

		// constructor(id, title, type, date, author, content)


		for (var i = 0; i < numPosts; i++){
			this.posts.push(new PostModel(
				faker.random.uuid(),
				faker.lorem.sentence(5),
				"story",
				faker.date.between("01-01-2014", "01-01-2016"),
				(faker.name.firstName() + " " + faker.name.lastName()),
				faker.lorem.paragraphs(5), 
				(function (numThings){ 
					let relationsArray = [];
					for (var j = 0; j < faker.random.number(5, 10); j++){
						faker.random.number(numThings);
					}
					return relationsArray;
				})(numThings)
			));
		}
	}
}

export default {AppModel: AppModel, ThingModel: ThingModel, PostModel: PostModel};