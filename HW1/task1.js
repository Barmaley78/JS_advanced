"use strict";

const compositions = [
    { title: "Album1", artist: "Artist1", year: "1980" },
    { title: "Album2", artist: "Artist2", year: "1990" },
    { title: "Album3", artist: "Artist3", year: "2000" },
]

const musicCollection = {
    compositions,
    *[Symbol.iterator]() {
        for (let i = 0; i < this.compositions.length; i++) {
            yield `${this.compositions[i].title} - ${this.compositions[i].artist}(${this.compositions[i].year})`;
        }
    }
}

for (const composition of musicCollection) {
    console.log(composition);
}