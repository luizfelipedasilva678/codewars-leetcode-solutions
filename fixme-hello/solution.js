class Dinglemouse {
  parts = [];
  agePartIdx = -1;
  sexPartIdx = -1;
  namePartIdx = -1;

  constructor() {
    this.name = this.age = this.sex = 0;
  }

  setAge(age) {
    this.age = age;
    this.updatePart("age", ` I am ${age}.`);
    return this;
  }

  setSex(sex) {
    this.sex = sex;
    const sexDescription = sex === "M" ? "male" : "female";
    this.updatePart("sex", ` I am ${sexDescription}.`);
    return this;
  }

  setName(name) {
    this.name = name;
    this.updatePart("name", ` My name is ${name}.`);
    return this;
  }

  updatePart(partType, description) {
    const partIdx = this[`${partType}PartIdx`];
    if (partIdx === -1) {
      this.parts.push(description);
      this[`${partType}PartIdx`] = this.parts.length - 1;
    } else {
      const arr = this.parts[partIdx].split(" ");
      arr[arr.length - 1] = `${description.split(" ").pop()}`;
      this.parts[partIdx] = arr.join(" ");
    }
  }

  hello() {
    return "Hello." + this.parts.join("");
  }
}
