const clientmongoose = require("mongoose");
const { ToDo } = require("../toDoModel");

beforeAll(async() => {
    await clientmongoose
        .connect("mongodb://localhost:27017/toDoAppTest", {
            useNewUrlParser: true,
        })
        .then(() => console.log("MongoDB toDoApp Connected"))
        .catch((err) => console.log(err));
});

it("create activity", async() => {
    const text = "New activity";
    const toDo = new ToDo({ text: text });
    toDo.save();
    expect(toDo.text).toBe("New activity");
});

it("Update activity  ", async() => {

    const text = "New activity";
    const toDo = await ToDo.findOne({ text: text })
    toDo.set({ text: "New project" })
    toDo.done = true;
    toDo.save();
    expect(toDo.text).toBe("New project");
    expect(toDo.done).toBe(true);

});