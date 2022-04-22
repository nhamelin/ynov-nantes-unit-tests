const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("fixme");
  });

  it("should return sellIn for each product", function() {
    const gildedRose = new Shop([new Item("item1", 1, 1), new Item("item2", 2, 2), new Item("item3", 3, 3)]);



    gildedRose.items.forEach(item => {
      expect(item.sellIn.toBeDefined);
    });
  });

  it("should return quality for each product", function() {
    
  });
});
