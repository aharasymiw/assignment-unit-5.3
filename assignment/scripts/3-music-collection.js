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
