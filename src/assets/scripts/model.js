class App {
	constructor(numThings, numPosts){
		this.things = [];
		this.posts = [];
		for (var i = 0; i < numThings; i++){
			this.things.push(new Thing());
		}
		for (var i = 0; i < numThings; i++){
			this.posts.push(new Post());
		}
	}
}

class Thing {
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

class Post {
	constructor(id, title, type, date, author, content){
		this.id = id;
		this.title = title;
		this.type = type;
		this.date = date;
		this.author = author;
		this.content = content;
	}
}

export default {Thing: Thing, Post: Post};