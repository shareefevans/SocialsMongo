import db from '../config/connection.js';
import { User, Thought } from '../models/index.js';
import cleanDB from './cleanDB';
import { getRandomName, getRandomThoughts } from './data.js';
try {
    await db();
    await cleanDB();
    const users = [];
    const thoughts = [];
    for (let i = 0; i < 10; i++) {
        const fullName = getRandomName();
        const username = fullName.split(' ')[0].toLowerCase();
        const email = `${username}@gmail.com`;
        users.push({
            username,
            email,
        });
    }
    const userData = await User.create(users);
    for (let i = 0; i < 20; i++) {
        const randomUser = userData[Math.floor(Math.random() * userData.length)];
        const thoughText = getRandomThoughts(10);
        const thought = {
            thoughText,
            username: randomUser.username,
            userId: randomUser._id,
        };
        thoughts.push(thought);
    }
    const thoughtData = await Thought.create(thoughts);
    for (const user of userData) {
        const userThoughts = thoughtData
            .filter((thought) => thought.username === user.username)
            .map((thought) => thought._id);
        await User.findByIdAndUpdate(user._id, { $push: { thoughts: { $each: userThoughts } } }, { new: true });
    }
    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
}
catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
}
