import db from '../config/connection.js';
import { User, Thought } from '../models/index.js';
import cleanDB from './cleanDB.js';
import { getRandomUser, getRandomThought, getRandomArrItem } from './data.js';
try {
    await db();
    await cleanDB();
    const users = [];
    for (let i = 0; i < 5; i++) {
        const username = getRandomUser();
        const email = `${username}@gmail.com`;
        const user = {
            username,
            email,
            thoughts: [],
            friends: [],
        };
        users.push(user);
    }
    const userData = await User.create(users);
    for (let i = 0; i < userData.length; i++) {
        const user = userData[i];
        const thoughts = getRandomThought(3);
        for (let thought of thoughts) {
            const newThought = await Thought.create({
                ...thought,
                username: user.username,
            });
            user.thoughts.push(newThought._id);
        }
        await user.save();
    }
    for (let i = 0; i < userData.length; i++) {
        const user = userData[i];
        const friends = userData.filter((u) => u._id.toString() !== user._id.toString());
        const randomFriends = getRandomArrItem(friends);
        user.friends.push(randomFriends._id);
        await user.save();
    }
    console.table(userData);
    console.info('Seeding complete! 🌱');
    process.exit(0);
}
catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
}
