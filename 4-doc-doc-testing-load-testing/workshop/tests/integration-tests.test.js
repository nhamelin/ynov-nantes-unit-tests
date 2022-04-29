const clientmongoose = require("mongoose");
const ToDo = require("../toDoModel");

beforeAll(async () => {
    await clientmongoose
      .connect("mongodb://mongo:27017/toDoApp", {
        useNewUrlParser: true,
      })
      .then(() => console.log("MongoDB toDoApp Connected"))
      .catch((err) => console.log(err));
  });

it("create activity", async() => {
    const text = "New activity";
    const toDo = new ToDo({ text: text });
    toDo.save();
    expect(toDo.text).NotToBeNull(itemName);
    expect(toDo.text).toBe("New activity");
});

it("Update activity  ", async() => {

    const text = "New activity";
    const toDo = await ToDo.findOne({ text: text })
    toDo.set({ text: "New project" })
    toDo.save();
    expect(item.name).toEqual("New project");

});