# react-redux-exercise

> Exercise to understand better React and Redux, how they work and how to use them.

**If you like this repo and/or learnt something from it, please give us a star :) Thanks!**

## Get started

### Prerequisites

This project uses [nvm](https://github.com/creationix/nvm). 

You need to have it installed on your machine.

### Install

To clone the project on your machine, install the required dependencies and run the server, follow these commands:

```sh
$ git clone https://github.com/springload/react-redux-exercise.git

$ cd react-redux-exercise

# Install the correct version of Node/NPM with nvm
$ nvm install

# Then, install all project dependencies.
$ npm install

# Then run the server
$ npm run start

# Open your browser to http://localhost:3000
```

And if you want some `eslint` love (and you should):

`npm run lint .` (or specify the path to the file you want to check)

### Debugging

I highly recommend that you install the [Redux extension for Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

It looks like this: 

![alt Extension image](./readme/extension.png)

And it will help you a lot to debug and understand what's going with your code.

## Redux

### with images

![alt Redux image](./readme/redux3.png)

Source https://www.reddit.com/r/webdev/comments/4r1947/i_am_working_on_a_reactredux_video_tutorial/

![alt Redux image](./readme/redux1.jpg)

Source http://staltz.com/unidirectional-user-interface-architectures.html

![alt Redux image](./readme/redux2.png)

Source http://blog.tighten.co/react-101-using-redux


### with words

Don't be afraid by these images if you find them complicated.
Redux just needs to be tested and you will pick it up.

Basically, a Redux cycle works like this:
- A user clicks on a button on the UI (for instance)
- This button dispatches an action
- This action will be managed by a reducer which is listening for one or many actions
- This reducer will update the store state
- The new store is then passed to the component which rerenders with the new value
