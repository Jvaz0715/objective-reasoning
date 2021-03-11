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
    let highestAverageScore = 0;
    let lowestAverageScore = 0;
    let hardestAssignment = '';

    for (const grade of array) {
        if (grade.averageScore > highestAverageScore) {
            lowestAverageScore = grade.averageScore;
            hardestAssignment = grade.name;
        }
    }
    return hardestAssignment;
}


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