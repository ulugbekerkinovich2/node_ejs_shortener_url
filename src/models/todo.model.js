const {v4:uuid} = require("uuid");

class Todo {
    #id;
    #name;
    #description;
    #userId;
    constructor(name,description,userId) {
        this.id = uuid();
        this.name = name;
        this.description = description;
        this.userId = userId
    }
}

module.exports = Todo;