console.log('***** Music Collection *****')

// Create an empty collection array.
let collection = [];

// Take in information about an album, turn it into an object, and add it to our
// collection array.
function addToCollection(title, artist, yearPublished, tracks) {
    // Turn our information into an object.
    let newCollectionItem = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks
    };

    // Add that object to our collection array.
    collection.push(newCollectionItem)

    // Return the object we created.
    return newCollectionItem;
}

let track1 = {
    name: "Awesome Song",
    duration: 616
};
let track2 = {
    name: "Better Ballad",
    duration: 205
};

let tracks = [track1, track2];

console.log(addToCollection("Title 1", "Artist 1", 2000, tracks));
console.log(addToCollection("Title 2", "Artist 1", 2001, tracks));
console.log(addToCollection("Title 3", "Artist 2", 2001, tracks));
console.log(addToCollection("Title 4", "Artist 2", 2002, tracks));
console.log(addToCollection("Title 5", "Artist 3", 2002, tracks));
console.log(addToCollection("Title 6", "Artist 3", 2003, tracks));
console.log(addToCollection("Title 7", "Artist 3", 2003, tracks));
console.log(addToCollection("Title 8", "Artist 3", 2003, tracks));
console.log(addToCollection("Title 9", "Artist 4", 2003, tracks));



console.log("collection", collection);

function showCollection(array) {
    console.log("Number of items:", array.length);
    console.log("\n\n COLLECTION CONTENTS: \n\n");
    for (item of array) {
        console.log(`${item.title} by ${item.artist}, published in ${item.yearPublished}:\n`);
        let trackNumber = 1;
        item.tracks.forEach(track => {
            console.log(`${trackNumber}. ${track.name}: ${track.duration}`);
            trackNumber++;
        });
    }
}

showCollection(collection);

function findByArtist(artist) {
    let resultsByArtist = [];
    for (album of collection) {
        if (album.artist === artist) {
            resultsByArtist.push(album);
        }
    }
    return resultsByArtist;
}

console.log("findByArtist test:", findByArtist("Artist 2"));
console.log("findByArtist test:", findByArtist("Artist 4"));

function search(query) {

    if (query.trackName) {
        let resultsByTrackName = [];

        for (let album of collection) {
            album.tracks.forEach(track => {
                if (track.name === query.trackName) {
                    resultsByTrackName.push(album);
                }
            });
        }
        return resultsByTrackName;
    }

    if (query === undefined || query.artist === undefined || query.year === undefined) {
        return collection;
    }

    let resultsByArtistAndYear = [];

    for (let album of collection) {
        if (album.artist === query.artist && album.yearPublished === query.year) {
            resultsByArtistAndYear.push(album);
        }
    }

    return resultsByArtistAndYear;
}

let query1 = {
    artist: "Artist 3",
    year: 2002
};

console.log("test search should yeild Title 5:", search(query1));

let query2 = {
    artist: "Artist 7",
    year: 2002
};

console.log("test search should yeild []:", search(query2));

let query3 = {
    artist: "Artist 3",
    year: 2003
};

console.log("test search should yeild Title 6,7,8:", search(query3));

let query4 = {
    trackName: "Better Ballad"
};

console.log("test search should yeild Better Ballad:", search(query4));
