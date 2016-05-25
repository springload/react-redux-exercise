# react-redux-exercise
Exercise to understand better react-redux, how it works and how to use it.

## Install
`npm install`

`npm run start`

## Redux

### with images

![alt Redux image](./readme/redux1.jpg)

Source http://staltz.com/unidirectional-user-interface-architectures.html

![alt Redux image](./readme/redux2.png)

http://blog.tighten.co/react-101-using-redux

### with words

Don't be afraid by these images if you find them complicated.
Redux just needs to be tested and you will pick it up.

Basically, a Redux cycle works like this:
- a user clicks on a button on the UI (for instance)
- This button dispatches an action
- This action will be managed by a reducer which is listening for one or many actions
- This reducer will update the state using the store
- The new store is then passed to the component which rerenders with the new value
