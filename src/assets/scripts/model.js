class Thing {
  constructor(id, title, type, date, tags, category, shortDescription, description, people, location, relations, importance){
    this.id = id;
    this.title = title;
    this.date = date;
    this.tags = tags || [];
    this.category = category || "";
    this.shortDescription = description || "";
    this.description = description || "";
    this.people = people || [];
    this.location = location || [];
    this.relations = relations || [];
    this.importance = importance || 1;
  };
};

export default {Thing: Thing};