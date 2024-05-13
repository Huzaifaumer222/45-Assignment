function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    const album: { artist: string, title: string, tracks?: number } = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

console.log(make_album("Atif Aslam", "Junoon"));
console.log(make_album("Young Stunners", "Khi Chal", 12));
console.log(make_album("Ed Sheeran", "Divide", 16));
