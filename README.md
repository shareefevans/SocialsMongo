# SocialsMongo

![TypeScript](https://img.shields.io/badge/TypeScript-v5.5.4-blue.svg)
![@types/express](https://img.shields.io/badge/@types/express-v4.17.21-blue.svg)
![@types/mongoose](https://img.shields.io/badge/@types/mongoose-v5.11.96-green.svg)

## 🚀 Description

SocialsMongo is a backend social media application that allows users to view friends, provide thoughts, and react to those thoughts as you would, like on any other social media application. The application provides seeded data to play around with in Insomnia. Refer to the Usage to test it out.

### 📋 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Walkthrough](#walkthrough)
- [Questions](#questions)
- [License](#license)

## 🔌 Installation

> [!IMPORTANT]
> This application will require users to use terminal (Mac) or GitBash (Windows)🚨.

1. Clone project using `git clone` from this like [Here](https://github.com/shareefevans/socialsMongo)
2. Open the project folder in a text editor such as `VS Code` or an alternative editor
3. Open the command line/terminal/gitbash and navigate to the appropriate folder within `socialsMongo` labelled Develop that contains a `package.json` file
4. Run `npm i` to install any dependencies in command line/terminal/gitbash
5. Run `npm run build` & `npm run seed` then `npm run start` in command line/terminal/gitbash

### Important Commands

```
git clone
npm i (OR) npm install
npm run build
npm run seed
npm run start
```

## 👍 Usage

1. Run all npm build commands to begin the application
2. open insomnia
3. refer to the folder `routes/api`
4. refer to the routes within `thought-routes` and `user-routes`
5. in insomnia we can create `GET` `POST` and `DELETE` requests for all API endpoints found in routes

## ➕ Contributing

[Contributor Covenant](https://www.contributor-covenant.org/)

## ✅ Tests

1. run the application
2. open insomnia
3. create a `GET` request: `http://localhost:3001/api/users/`
4. this will retrieve all the users
5. hit send => then copy and paste the `_id` of the first user, `Aarman Aaron`: `67564cc4cfce30a0229e3698`
6. paste the ID into the request url: `http://localhost:3001/api/users/67564cc4cfce30a0229e3698` and his send
7. trial adding a user with a `POST` request: to do this, we use this again `http://localhost:3001/api/users/`, but we make sure its a `POST` request
8. then we provide the JSON body:

```
{
"username": "Shareef Evans",
"email" : "shareefevans@gmail.com"
}
```

9. a user has been created, then we can test a `DELETE` request by taking the id, that we recieved in the preview after creating the new user, adding it to the request, ensuring we have a `DELETE` request selected, and sending that request.
10. you should recieve a message that confirms the users been deleted
11. to update a user, use a `PUT` request. Ensure you have the ID of the user you want to update it the URL. Then provide the Body with some code related to the item you want to change for example:

```
{
	"username": "Aaran Sam"
}
```

12. when sent, this should reflect in the user that is being retrieved/updated!

## 🎥 Walkthrough

[See Walkthrough Video Here](https://drive.google.com/file/d/1zAy8hPKW_T5pn0_npiN22DNYOqzEp_5M/view)

## ❓ Questions

### Github profile below 👇

- GitHub Name: shareefevans
- GitHub Link: [Follow link here](https://github.com/shareefevans)

### Contact Me

- Email: *shareef3vans@gmail.com*

## 🏆 License

This is an unlicensed project
