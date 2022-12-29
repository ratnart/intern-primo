export function merge(collection_1: number[], collection_2: number[]): number[] {
    const result: number[] = []
    let i: number = 0, j: number = 0;
    const sizeCollection1 = collection_1.length
    const sizeCollection2 = collection_2.length
    while (i < sizeCollection1 || j < sizeCollection2) {
        if (i < sizeCollection1 && j < sizeCollection2) {
            if(collection_1[i]<=collection_2[j]){
                result.push(collection_1[i])
                i++
            }
            else{
                result.push(collection_2[j])
                j++
            }
        }
        else if(i<sizeCollection1){
            result.push(collection_1[i])
            i++
        }
        else if(j<sizeCollection2){
            result.push(collection_2[j])
            j++
        }
    }
    return result
}
