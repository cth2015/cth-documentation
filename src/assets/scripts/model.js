class Thing {
  constructor(id, title, type, date, tags, category, keyConcept, shortDescription, description, people, location, relations, importance){
    this.id = id;
    this.title = title;
    this.date = date;
    this.tags = tags || [];
    this.category = category || "";
    this.keyConcept = keyConcept || "";
    this.shortDescription = description || "";
    this.description = description || "";
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