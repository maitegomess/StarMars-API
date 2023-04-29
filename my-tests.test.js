const { sum } = require('./my-tests')

describe('math functions', () => {
    it('sums 2 numbers', () => {
        expect(sum(1, 2)).toBe(3)
    })
})