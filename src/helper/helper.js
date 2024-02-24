/**
 * @license Apache-2.0
 * @copyright 2024 codewithsadee 
 */

'use strict';

const getAvatar = function (name) {
    const [firstName, lastName] = name.split(' ');

    if (lastName) {
        return firstName.at(0) + lastName;
    } else {
        return firstName.slice(0, 2);
    }
}
module.exports = getAvatar;