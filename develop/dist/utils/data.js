const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
];
const thoughtDescriptions = [
    'Just had the best cup of coffee!',
    'Feeling inspired today!',
    'Just finished reading a great book.',
    'The weather is amazing!',
    'I love coding!',
    'Excited for the new movie coming out!',
    'Had a great workout session today.',
    'Learning something new every day.',
    'Missing my friends!',
    'Life is beautiful.',
    'So much to do, so little time!',
    'Just took an amazing trip!',
    'Feeling so creative today.',
    'Grateful for this moment.',
    'Trying to stay positive amidst challenges.',
    'Sometimes you need a good laugh!',
    'Happy to be alive!',
    'Trying to get better each day.',
    'The little things make life better.',
];
// Helper function to get a random item from an array
export const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
// Function to generate a random full name
export const getRandomName = () => `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
// Function to generate random users
export const getRandomUser = () => {
    const fullName = getRandomName();
    const username = fullName.split(' ')[0].toLowerCase() + Math.floor(Math.random() * 1000); // Generate unique username
    const email = `${username}@example.com`;
    return {
        name: fullName,
        username,
        email,
    };
};
// Function to generate random thoughts (posts)
export const getRandomThoughts = (int) => {
    const thoughts = [];
    for (let i = 0; i < int; i++) {
        thoughts.push({
            content: getRandomArrItem(thoughtDescriptions), // Random thought content
            createdAt: new Date(),
        });
    }
    return thoughts;
};
// Function to generate random reactions (likes, loves, etc.) for a given post
export const getRandomReactions = (thoughtId, int) => {
    const reactions = ['Like', 'Love', 'Wow', 'Haha', 'Sad', 'Angry']; // List of possible reactions
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            reactionType: getRandomArrItem(reactions),
            thoughtId, // Associate the reaction with a specific thought/post
            createdAt: new Date(),
        });
    }
    return results;
};
