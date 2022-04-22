const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function() {

    // Exemple
    it("should foo", function() {
        const gildedRose = new Shop([new Item("foo", 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toBe("fixme");
    });

    // Vérification du nombre de jours restants
    it("should return sellIn for each product", function() {
        const gildedRose = new Shop([new Item("item1", 1, 1), new Item("item2", 2, 2), new Item("item3", 3, 3)]);

        gildedRose.items.forEach(item => {
            expect(item.sellIn.toBeDefined);
        });
    });

    // Vérification de la qualité
    it("should return quality for each product", function() {
        const gildedRose = new Shop([new Item("item1", 1, 1), new Item("item2", 2, 2), new Item("item3", 3, 3)]);

        gildedRose.items.forEach(item => {
            expect(item.quality.toBeDefined);
        });
    });

    // Vérification de la diminution de la qualité et du nombre de jours restants à la fin de chaque journée
    it("should decrease values at the end of the day v1", function() {
        const gildedRose = new Shop([new Item("finito", 3, 8)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toEqual(2);
        expect(items[0].quality).toEqual(7);

    });

    it("should decrease values at the end of the day v2", function() {
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

    // Vérification de la diminution de la qualité quand le nombre de jours restants est à 0
    it("should increase quality degradation", function() {
        const gildedRose = new Shop([new Item("item1", 0, 5)]);
        const items = gildedRose.updateQuality();

        expect(items[0].quality).toEqual(3);
    });

    // Vérification que la qualité n'est pas inférieure à 0
    it("should never be negative", function() {
        const gildedRose = new Shop([new Item("item1", 0, 0)]);
        const items = gildedRose.updateQuality();

        expect(items[0].quality).toEqual(0);
    });

    // Vérification de Aged Brie
    it("should increase quality when Aged Brie", function() {
      const gildedRose = new Shop([new Item("Aged Brie", 0, 9)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(10);
    });

    // Vérification que la qualité ne dépasse pas 50
    it("should never be more than 50 quality", function() {
      const gildedRose = new Shop([new Item("Aged Brie", 0, 50)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(50);
    });

    // Vérification de la non dégration de la qualitié de Sulfuras
    it("should never decrease quality of Sulfuras", function() {
      const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 30)]);
      const items = gildedRose.updateQuality();

      expect(items[0].quality).toEqual(30);
    });

});