const users = ['Aaran', 'Aaren', 'Aarez', 'Aarman', 'Aaron'];

const userThoughts = ['HAHA', 'LOL', 'ROFL', 'LMAO'];

const usedUsernames = new Set();

export const getRandomArrItem = (arr: any) =>
  arr[Math.floor(Math.random() * arr.length)];

// export const getRandomUser = () =>
//   `${getRandomArrItem(users)} ${getRandomArrItem(users)}`;

export const getRandomUser = () => {
  let username;
  do {
    username = `${getRandomArrItem(users)} ${getRandomArrItem(users)}`;
  } while (usedUsernames.has(username));
  usedUsernames.add(username);
  return username;
};

export const getRandomThought = (int: number) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(userThoughts), // Corrected to thoughtText
    });
  }
  return results;
};
