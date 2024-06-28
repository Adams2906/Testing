const { default: TestRunner} = require("jest-runner");
const addFive = require('./Node');
const Node = require("./Node");

test ('return the number plus 5', ()=> {
    expect(Node(1)).toBe(6);
})