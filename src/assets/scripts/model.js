import faker from "faker";

class ThingModel {
  constructor(id, title, type, date, tags, category, keyConcept, shortDescription, description, image, people, location, relations, importance){
    this.id = id;
    this.title = title;
    this.date = date;
    this.tags = tags || [];
    this.category = category || "";
    this.keyConcept = keyConcept || "";
    this.shortDescription = description || "";
    this.description = description || "";
    this.image = image || "";
    this.people = people || [];
    this.location = location || [];
    this.relations = relations || [];
    this.importance = importance || 1;
  };
};

class PostModel {
	constructor(id, title, type, date, author, content){
		this.id = id;
		this.title = title;
		this.type = type;
		this.date = date;
		this.author = author;
		this.content = content;
	}
}

class AppModel {
	constructor(numThings, numPosts){
		this.things = [];
		this.posts = [];
		for (var i = 0; i < numThings; i++){
			this.things.push(new ThingModel());
		}
		for (var i = 0; i < numPosts; i++){
			this.posts.push(new PostModel());
		}
	}
}

export default {AppModel: AppModel, ThingModel: ThingModel, PostModel: PostModel};