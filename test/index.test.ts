import {merge} from '../src/index.js';

describe('testing merge function',()=>{
    test('result is concatination between two arrays and sorted',()=>{
        expect(merge([1,4,6],[2,3,8,9])).toStrictEqual([1,2,3,4,6,8,9])
    })
})