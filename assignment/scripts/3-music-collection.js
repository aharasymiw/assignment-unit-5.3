console.log('***** Music Collection *****')

// Create an empty collection array.
let collection = [];

// Take in information about an album, turn it into an object, and add it to our
// collection array.
function addToCollection(title, artist, yearPublished) {
    // Turn our information into an object.
    let newCollectionItem = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };

    // Add that object to our collection array.
    collection.push(newCollectionItem)

    // Return the object we created.
    return newCollectionItem;
}

console.log(addToCollection("Title 1", "Artist 1", 2000));
console.log(addToCollection("Title 2", "Artist 1", 2001));
console.log(addToCollection("Title 3", "Artist 2", 2001));
console.log(addToCollection("Title 4", "Artist 2", 2002));
console.log(addToCollection("Title 5", "Artist 3", 2002));
console.log(addToCollection("Title 6", "Artist 3", 2003));

console.log("collection", collection);
