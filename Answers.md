1. What problem does the context API help solve?
    Larger apps with state existing at different nested levels can access state more easily.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are transmit the payload of your application to the store.
The store is where all application state is stored.
Reducers update state according to what actions dictate.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is usable by all components.  Component state is accessable by only a component and it's children.  Component state works good for small apps where state can be passed down easily with props.  Application state is good for larger appl;ications with state nested in different places.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux-thunk is a middleware used to do something between our action and the reducer.  It allows us to run async processes like an API call.  Action creators are usable inside of thunk so we can use them inside of the middleware.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like contextAPI as it was easier to learn and impliment. I'd like to know redux better as I feel its boilerplate makes understanding where state and its associated processes reside and much easier to grasp .
