import { watch } from 'vue';


export function useWatchCharacters(valueToWatch,maxSizeValue) {
    //watch the number of alphabets
    // single ref
    watch(valueToWatch, (newNotesValue) => {
        if(newNotesValue.length>=maxSizeValue)
        {
        alert(`The size of the notes has to be ${maxSizeValue}`)
        }
    })
}