/**
 * Get the neighbours of a cell from its index
 * //TOOD: Make this function more generic
 * @param index 
 */
export function getNeighboursFromIndex(index:number):number[]{
    let neighboursIndex:number[] = [];
    switch(index){
        case 0:
            neighboursIndex.push(1);
            neighboursIndex.push(3);
            neighboursIndex.push(4);
            break;
        case 1:
            neighboursIndex.push(0);
            neighboursIndex.push(2);
            neighboursIndex.push(4);
            neighboursIndex.push(5);
            break;
        case 2:
            neighboursIndex.push(1);
            neighboursIndex.push(5);
            neighboursIndex.push(6);
            break;
        case 3:
            neighboursIndex.push(0);
            neighboursIndex.push(4);
            neighboursIndex.push(7);
            neighboursIndex.push(8);
            break;
        case 4:
            neighboursIndex.push(0);
            neighboursIndex.push(1);
            neighboursIndex.push(3);
            neighboursIndex.push(5);
            neighboursIndex.push(8);
            neighboursIndex.push(9);
            break;
        case 5:
            neighboursIndex.push(1);
            neighboursIndex.push(2);
            neighboursIndex.push(4);
            neighboursIndex.push(6);
            neighboursIndex.push(9);
            neighboursIndex.push(10);
            break;
        case 6:
            neighboursIndex.push(2);
            neighboursIndex.push(5);
            neighboursIndex.push(10);
            neighboursIndex.push(11);
            break;
        case 7:
            neighboursIndex.push(3);
            neighboursIndex.push(8);
            neighboursIndex.push(12);
            break;
        case 8:
            neighboursIndex.push(3);
            neighboursIndex.push(4);
            neighboursIndex.push(7);
            neighboursIndex.push(9);
            neighboursIndex.push(12);
            neighboursIndex.push(13);
            break;
        case 9:
            neighboursIndex.push(4);
            neighboursIndex.push(5);
            neighboursIndex.push(8);
            neighboursIndex.push(10);
            neighboursIndex.push(13);
            neighboursIndex.push(14);
            break;
        case 10:
            neighboursIndex.push(5);
            neighboursIndex.push(6);
            neighboursIndex.push(9);
            neighboursIndex.push(11);
            neighboursIndex.push(14);
            neighboursIndex.push(15);
            break;
        case 11:
            neighboursIndex.push(6);
            neighboursIndex.push(10);
            neighboursIndex.push(15);
            break;
        case 12:
            neighboursIndex.push(7);
            neighboursIndex.push(8);
            neighboursIndex.push(13);
            neighboursIndex.push(16);
            break;
        case 13:
            neighboursIndex.push(8);
            neighboursIndex.push(9);
            neighboursIndex.push(12);
            neighboursIndex.push(14);
            neighboursIndex.push(16);
            neighboursIndex.push(17);
            break;
        case 14:
            neighboursIndex.push(9);
            neighboursIndex.push(10);
            neighboursIndex.push(13);
            neighboursIndex.push(15);
            neighboursIndex.push(17);
            neighboursIndex.push(18);
            break;
        case 15:
            neighboursIndex.push(10);
            neighboursIndex.push(11);
            neighboursIndex.push(14);
            neighboursIndex.push(18);
            break;
        case 16:
            neighboursIndex.push(12);
            neighboursIndex.push(13);
            neighboursIndex.push(17);
            break;
        case 17:
            neighboursIndex.push(13);
            neighboursIndex.push(14);
            neighboursIndex.push(16);
            neighboursIndex.push(18);
            break;
        case 18:
            neighboursIndex.push(14);
            neighboursIndex.push(15);
            neighboursIndex.push(17);
            break;
        default:
            throw new Error("Invalid index");
    }
    return neighboursIndex;
}