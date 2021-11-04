# Recipe Manager App with Edamame Recipe Search API

## Instructions
### How to Install and Run
- Clone this repository 
`gh repo clone ChaemeVogue/recipe-manager-app` or download the zip file.
- You will also need to `install npm `.
- Run the code using `npm start` and stop using `CTRL + C`.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Edamam Search Recipe V2 API
- API documentation: https://developer.edamam.com/edamam-docs-recipe-api.
- In order to run this app you will need an app id and key from Edamam Recipe Search V2
  https://developer.edamam.com. (Hint: Use the free developer tier).
  
- Inside the react-manager-app folder navigate to src/components/EdamamAppIdKey, 
  and insert your app id and key.
  Example:
  - `const appID = "a1b2c3d4"`
  - `const appKEY = "a1b2c3d4a1b2c3d4a1b2c3d4";`

## Description
- This React app will allow you to search for recipes using the 
Edamam Recipe Search V2 API.
- In addition to a simple search, you can also use the health label dropdown 
  and narrow your search to only include recipes with the labels: 
  - vegetarian, gluten free, dairy free, tree nut free, or low sugar.
  
### Technologies Used
- TypeScript
- React Router: `npm install react-router-dom`
- [React Loader Spinner:](https://www.npmjs.com/package/react-loader-spinner) 
  `npm install react-loader-spinner`

### Bonus Features
- **Input validation**: the "search by name" field is required, meaning 
  users must type something. Additionally, users cannot enter only blank space, 
  and they cannot enter special characters.
- **Dropdown in search form**: the user has the option to search with the addition 
  of narrowing their search using the health labels.

## Improvements I Would Like to Make
- More selections for narrowing a search, such as, dietLabels, calories, prep time
- Properly define object arrays from the api instead of using `any[]`
- deploy this app to Github pages
  - create a login screen for the user to enter the api key and id, or
  - make an api call to my own backend and fetch the api key and id

## Learn More: React Documentation
- You can learn more in the [Create React App documentation]
  (https://facebook.github.io/create-react-app/docs/getting-started).
- To learn React, check out the [React documentation](https://reactjs.org/).
