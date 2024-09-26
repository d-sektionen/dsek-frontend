import { format } from 'date-fns'
import { sv } from 'date-fns/locale'

function makeUpperCase(str) {
    const arr = str.split(" ");
    //loop through each element of the array and capitalize the first letter.

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    //Join all the elements of the array back into a string
    //using a blankspace as a separator
    return arr.join(" ");
}

export function showDatetime(datetime) {
    return makeUpperCase(format(new Date(datetime), 'PPPP - kk:mm', { locale: sv }));
}