const clientmongoose = require("mongoose");
const Item = require("./Item");

beforeAll(async () => {
  await clientmongoose
    .connect("mongodb://mongo:27017/docker-integration-test-mongo", {
      useNewUrlParser: true,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
});

it("createItem with name", async () => {
    const itemName = "itemTest";
    const date = Date.now();
    const myItem = new Item({name: itemName, date: date});
    myItem.save();
    expect(myItem.name).toBe(itemName);
    expect(myItem.date).toEqual(new Date(date));
});

it("create Item ", async () => {
  const itemName = "Toto";
  const date = Date.now();
  const item = new Item({ name: itemName, date : date });
  await item.save();

  const oneItem = await Item.findOne({ name: { $eq: itemName }});

  //expect(listItem.length).toBe(1);
  expect(oneItem.name).toBe(itemName);
});

it("create Item et get all àt that same name ", async () => {
    const itemName = "Japhet";
    const date = Date.now();
    const item = new Item({ name: itemName, date : date });
    await item.save();
  
    const listItem = await Item.find({ name: { $eq: itemName }});
  
    //expect(listItem.length).toBe(23);
    expect(listItem[0].name).toBe(itemName);
    //expect(listItem[0].date).toEqual(new Date(date));
  });


  it("Update Item  ", async () => {
    const itemName = "Toto";
    const item = await Item.findOne({name: itemName})
    item.set({name:"Nicolas"})
    item.save();
    expect(item.name).toEqual("Nicolas");
  });


  it('Delete item',  async () => {
    const deletedCount = await Item.deleteOne({name:"Nicolas"})
    console.log(deletedCount.deletedCount);
    expect(deletedCount.deletedCount).toBe(1);
});


 

 
