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
    let first = userObj.firstName;
    let last = userObj.lastName;
    let domain = '@codeimmersives.com'
    if ( first !== undefined && last !== undefined){
        return `${first}.${last}${domain}`
    }
    
}

function getPlaylistLength() {

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