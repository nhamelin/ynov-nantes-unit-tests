const { Shop, Item } = require("../src/gilded_rose");

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
        const gildedRose = new Shop([new Item("item1", 1, 1), new Item("item2", 2, 2), new Item("item3", 3, 3)]);

        gildedRose.items.forEach(item => {
            expect(item.quality.toBeDefined);
        });
    });

    it("should diminue values at the of day", function() {
        const gildedRose = new Shop([new Item("finito", 3, 8)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(2);
        expect(items[0].quality).toEqual(7);

    });

    it("should diminue values at the of day", function() {
        const gildedRose = new Shop([new Item("item1", 3, 3), new Item("item2", 3, 3), new Item("item3", 3, 3)]);

        gildedRose.items.forEach(item => {
            item.sellIn = item.sellIn - 1;
            item.quality = item.quality - 1
        });
        gildedRose.items.forEach(item => {
            expect(item.sellIn).toBe(2);
            expect(item.quality).toBe(2);

        });
    });

    it("should increase diminue quality", function() {
        const gildedRose = new Shop([new Item("item1", 0, 5)]);
        const items = gildedRose.updateQuality();

        expect(items[0].quality).toEqual(3);
    });

    it("should never be negative", function() {
        const gildedRose = new Shop([new Item("item1", 0, 0)]);
        const items = gildedRose.updateQuality();

        expect(items[0].quality).toEqual(0);
    });

    it("should increase quality when Aged Brie", function() {
      const gildedRose = new Shop([new Item("Aged Brie", 0, 9)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(10);
  });

});