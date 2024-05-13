function make_great_copy(magicians: string[]): string[] {
    const greatMagiciansCopy: string[] = magicians.map(magician => "the Great " + magician);
    return greatMagiciansCopy;
}

const magicianNames3: string[] = ["David Copperfield", "Lance Burton", "Cyril Takayama"];
const greatMagiciansCopy: string[] = make_great_copy(magicianNames3.slice()); // Using slice() to create a copy of the array
show_magicians(magicianNames3);
show_magicians(greatMagiciansCopy);
