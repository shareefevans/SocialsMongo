import { Thought, User } from '../models/index.js';

const cleanDB = async (): Promise<void> => {
  try {
    await User.deleteMany({});
    console.log('User collection cleaned.');

    await Thought.deleteMany({});
    console.log('Thought collection cleaned.');
  } catch (error) {
    console.error('Error cleaning collections:', error);
    process.exit(1);
  }
};

export default cleanDB;
