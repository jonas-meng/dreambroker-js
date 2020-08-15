const assert = require('assert');
const { textLength, wordCount, charCount } = require('../analyzer');

describe('textLength Test', () => {
    it('should return 0 for both withSpaces and withoutSpaces', () => {
        var text = null;
        var answer = textLength(text);
        var expected = { withSpaces: 0, withoutSpaces: 0 };
        assert.deepEqual(expected, answer);
    });
    it('should return 3 for withSpaces and 0 for withoutSpaces', () => {
        var text = '   ';
        var answer = textLength(text);
        var expected = { withSpaces: 3, withoutSpaces: 0 };
        assert.deepEqual(expected, answer);
    });
    it('should return 5 for withSpaces and 2 for withoutSpaces', () => {
        var text = ' ab  ';
        var answer = textLength(text);
        var expected = { withSpaces: 5, withoutSpaces: 2 };
        assert.deepEqual(expected, answer);
    });
});

describe('wordCount Test', () => {
    it('should return 0', () => {
        var text = null;
        var answer = wordCount(text);
        var expected = 0;
        assert.deepEqual(expected, answer);
    });
    it('should return 0', () => {
        var text = '   ';
        var answer = wordCount(text);
        var expected = 0
        assert.deepEqual(expected, answer);
    });
    it('should return 1', () => {
        var text = ' ab  ';
        var answer = wordCount(text);
        var expected = 1
        assert.deepEqual(expected, answer);
    });
    it('should return 2', () => {
        var text = ' ab cd ';
        var answer = wordCount(text);
        var expected = 2
        assert.deepEqual(expected, answer);
    });
});

describe('charCount Test', () => {
    it('should return []', () => {
        var text = null;
        var answer = charCount(text);
        var expected = [];
        assert.deepEqual(expected, answer);
    });
    it('should return []', () => {
        var text = '  &^%$ ';
        var answer = charCount(text);
        var expected = [];
        assert.deepEqual(expected, answer);
    });
    it("should return [{ 'a': 2 }, { 'b': 1 }]", () => {
        var text = ' aba  ';
        var answer = charCount(text);
        var expected = [{ 'a': 2 }, { 'b': 1 }];
        assert.deepEqual(expected, answer);
    });
    it("should return [{ 'a': 2 }, { 'b': 1 }]", () => {
        var text = ' ABA  ';
        var answer = charCount(text);
        var expected = [{ 'a': 2 }, { 'b': 1 }];
        assert.deepEqual(expected, answer);
    });
});
