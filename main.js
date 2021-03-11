// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin(userObj) {
    if (userObj.userRole === 'ADMIN') {
        return true;
    } else { 
        return false;
    }
}

function getEmail(userObj) {
    let first = userObj.firstName.toLowerCase();
    let last = userObj.lastName.toLowerCase();
    return `${first}.${last}@codeimmersives.com`;
}  


function getPlaylistLength(userObj) {
    let numSongs = userObj.songs.length;
    return numSongs;
}

function getHardestHomework(array) {
    let lowestAverage = 100;
    let hardestAssignment = '';

    for (const average of array) {
        if (average.averageScore < lowestAverage) {
            lowestAverage = average.averageScore;
            hardestAssignment = average.name;
        }
    }
    return hardestAssignment;
}

console.log(getHardestHomework([{ name: 'homework 1', averageScore: 99 }, { name: 'homework 2', averageScore: 1 }]))

function createPhonebook(arr1, arr2) {
    let phoneBook = [];
    for (let i = 0; i < arr1.length; i++) {
        phoneBook.push(arr1[i] + ' : ' + arr2[i])
    }
    return phoneBook;
}

console.log(createPhonebook(['Jimothy', 'Maria', 'Karl'], ['123-456-7890', '000-000-0000', '999-888-7766']))


// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};