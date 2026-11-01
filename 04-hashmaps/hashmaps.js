class HashMap {
    constructor() {
        this.storage = [];
    }
    set(key, value) {
 
     this.storage.push({ key, value });

 }
 get(key) {

    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i].key === key) {
      return this.storage[i].value;
}
    }
}
has(key) {
    for (let i = 0; i < this.storage.length; i++) {
        if (this.storage[i].key === key) {
            return true;
        }
    }

    return false;
}
delete(key) {
    for (let i = 0; i < this.storage.length; i++) {
        if (this.storage[i].key === key) {
            this.storage.splice(i, 1);
            return true;
        }
    }

    return false;
}
update(key, value) {
    for (let i = 0; i < this.storage.length; i++) {
        if (this.storage[i].key === key) {
            this.storage[i].value = value;
            return true;
        }
    }

    return false;
}
}
let myMap = new HashMap();
myMap.set("name", "Kelly");
myMap.set("age", 20);


console.log(myMap.storage);
console.log(myMap.get("name"));  // Kelly
console.log(myMap.get("age"));   // 20
console.log(myMap.has("email")); //false
/*
console.log(myMap.delete("age")); // true
console.log(myMap.has("age"));    // false
console.log(myMap.delete("email")); // false
  */
console.log(myMap.update("age", 21)); // true
console.log(myMap.get("age"));        // 21

console.log(myMap.update("email", "kelly@gmail.com")); // false