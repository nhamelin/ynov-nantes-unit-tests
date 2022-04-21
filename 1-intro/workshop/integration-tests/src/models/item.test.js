const Item = require("./Item.js");

it("should return createItem", () => {
    const itemName = "itemTest";
    const date = Date.now();
    const myItem = new Item({name: itemName, date: date});

    //expect(myItem).to.not.be.null;
    expect(myItem.name).toBe(itemName);
    expect(myItem.date).toEqual(new Date(date));
})

/*
 * describe('Items', function() {
 * 
 *     it('should return the first item', function() {
 *         expect(Items.getFirstItem()).toBe('Item1')
 *     })
 * 
 * })
*/
