1. What problem does the context API help solve?
   Context api helps enable components to share data without passing it to each component manually. Avoids prop-drilling.

1) In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   Actions help us execute a certain state change, reducers help manage state, and stores hold data.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   Application state would apply to the overall app whereas component state would apply to just that component. If you want data shared between all components then that would be a good time to use application state.

1) Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   Middleware that lets you call action creators that return a function

1. What is your favorite state management system you've learned and this sprint? Please explain why!
   Probably Redux, because it's more powerful, but Context makes more sense (for now)
