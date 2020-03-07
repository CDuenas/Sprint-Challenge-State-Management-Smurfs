1. What problem does the context API help solve?

 React Context solves the problem of props drilling. It allows you to share props or state
with an indirect child or parent.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store contains your reducer(s) which uses action(s) in order to use and create a new state from the initialstate.The store is known as the single source of truth because that is where your state is coming
from and that beginning state can not be changed only used to create a new updated state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and component state is local inside the component that it is created in. Application state is good to use for a state that you will want to pass down through many areas of your App and component state is good for a smaller app or when you will only be using it in that one component that it is being held in.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. It allows us to make asynchronous action calls in order to be able to properly use an API
call.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Personally I enjoyed both but because we have only been working with
small scale apps I liked context better as it felt like it was easier
to setup because there was very little state that needed managing but
I also see why redux has its place and will definitely prefer using it
on bigger projects.
