"use strict";
exports.__esModule = true;
exports.merge = void 0;
function merge(collection_1, collection_2) {
    var result = [];
    var i = 0, j = 0;
    var sizeCollection1 = collection_1.length;
    var sizeCollection2 = collection_2.length;
    while (i < sizeCollection1 || j < sizeCollection2) {
        if (i < sizeCollection1 && j < sizeCollection2) {
            if (collection_1[i] <= collection_2[j]) {
                result.push(collection_1[i]);
                i++;
            }
            else {
                result.push(collection_2[j]);
                j++;
            }
        }
        else if (i < sizeCollection1) {
            result.push(collection_1[i]);
            i++;
        }
        else if (j < sizeCollection2) {
            result.push(collection_2[j]);
            j++;
        }
    }
    return result;
}
exports.merge = merge;