function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = magicians.map(magician => "the Great " + magician);
    return greatMagicians;
}

const magicianNames2: string[] = ["Dynamo", "Derren Brown", "Chris Angel"];
const greatMagicians: string[] = make_great(magicianNames2);
show_magicians(greatMagicians);
