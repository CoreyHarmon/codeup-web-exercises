const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


/*Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
    Use .map to create an array of strings where each element is a user's email address
Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
    Use .reduce to get the longest email from the list of users.
    Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.*/

// Answers below
// 2.
const usersWithThreeOrMoreLanguages = users.filter(user => user.languages.length >= 3);

console.log(usersWithThreeOrMoreLanguages);

// 3.
const userEmails = users.map(user => user.email);

console.log(userEmails);

// 4.
const experienceStats = users.reduce(function (accumulator, user) {
    return {
        totalYears: accumulator.totalYears + user.yearsOfExperience,
        totalUsers: accumulator.totalUsers + 1
    };
}, { totalYears: 0, totalUsers: 0 });

const averageYearsOfExperience = experienceStats.totalYears / experienceStats.totalUsers;

console.log("Total Years of Experience:", experienceStats.totalYears);
console.log("Average Years of Experience:", averageYearsOfExperience);


// 5.
const longestEmail = users.reduce((longest, user) => {
    return user.email.length > longest.length ? user.email : longest;
}, "");

console.log("Longest Email:", longestEmail);


// 6.
const userListString = users.reduce((userNamesString, user, index, array) => {
    userNamesString += user.name;
    if (index < array.length) {
        userNamesString += ', ';
    }
    return userNamesString;
}, 'Your instructors are: ');

console.log(userListString);

