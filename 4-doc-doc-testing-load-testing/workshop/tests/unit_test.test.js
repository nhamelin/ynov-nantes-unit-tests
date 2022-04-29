const jsdom = require("jsdom");
const { JSDOM } = jsdom;

beforeEach(function(done) {
    JSDOM.fromFile('../public/index.html')
    .then((dom) => {
      input = dom.window.document.querySelector('input');
    })
    .then(done, done);
});

describe("test post", (data) => {
    it("should reload page", () => {
        input.value = "test post to do";

        const todo = createTODO()
        
        expect(window.location.reload).toHaveBeenCalled();  
    });
});