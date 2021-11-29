const { returnTwo, greeting, add } = require('./functions.js')

test('returning two', () => {
    expect(returnTwo()).toBe(2)
})

test('greeting name', () => {
    expect(greeting('James')).toEqual("Hello, James")
    expect(greeting('Jill')).toEqual("Hello, Jill")
})

test('add two', () => {
    expect(add(1, 2)).toEqual(3)
    expect(add(5, 9)).toEqual(14)
})