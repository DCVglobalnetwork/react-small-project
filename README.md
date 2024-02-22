## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.




# Create custom components in React

Components are independent pieces of functionality that you can reuse in your application, and are the building blocks of all React applications. Often, they can be simple JavaScript functions and classes, but you use them as if they were customized HTML elements. Buttons, menus, and any other front-end page content can all be created as components. Components can also contain state information and display markdown.

# Prerequisites

* need a development environment running Node.js

* be able to create apps with Create React App please see more information above when comes to React app 

* be using JSX syntax, which you can learn about in our How To Create Elements with JSX

* need a basic knowledge of JavaScript, HTML, CSS


***Step 1***

create a new project. Open a terminal, then run the following command
```javascript

npx create-react-app tutorial-02-component

```

go into the project directory

```javascript

cd tutorial-02-component

```

Open the App.js code in a text editor


Take out the template code created by Create React App, then replace the contents with new React code that displays a list of emojis

```javascript

import React from 'react';

import './App.css';

const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: '🪙',
    name: "Tokens"
  },
  {
    emoji: '📜',
    name: "All legal agreements are written in smart contracts"
  },
  {
    emoji: '🔑',
    name: "Security Researchers Locked witht the key"
  }
];

function App() {
  const greeting = "greeting";
  const displayAction = false;
  return (
    <div className="container">
      <h1 id={greeting}>Hello, Blockchain</h1>
      {displayAction && <p>I am writing JSX</p>}
      <Instructions />
      <Instructions />
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button
                onClick={displayEmojiName}
              >
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;

```

Save and close the file. You can now delete the logo.svg

Go to App.css Replace the contents with the following CSS

```javascript
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

button {
    font-size: 2em;
    border: 0;
    padding: 0;
    background: none;
    cursor: pointer;
}

ul {
    display: flex;
    padding: 0;
}

li {
    margin: 0 20px;
    list-style: none;
    padding: 0;
}

```

Please check for me how to create React Elements with JSX. If you do not follow or experience problems

Save and exit the file

Open another terminal window in the root of your project. Start the project with the following command:

```javascript

npm start

```

### After the command runs, you’ll see the project running in your web browser at http://localhost:3000.

***You can use any other background image if you want, below are just examples!!!***


![Screenshot 2024-02-22 131929](https://github.com/DCVglobalnetwork/react-small-project/assets/105791829/6fd2b98d-b405-4bc4-bdd3-244a3a757dcd)


![Screenshot 2024-02-22 132042](https://github.com/DCVglobalnetwork/react-small-project/assets/105791829/50034911-5890-44d1-9021-42e21df225a3)

***For more emoji and icons please visit***

https://emojipedia.org/coin



 
# Creating an Independent Component with React Classes

***Step 2***

In this step, you’ll create an independent React component by extending the base React Component class. You’ll create a new class, add methods, and use the render function to show data.

React components are self-contained elements that you can reuse throughout a page. By making small, focused pieces of code, you can move and reuse pieces as your application grows. The key here is that they are self-contained and focused, allowing you to separate out code into logical pieces. 

create a new file

```javascript

src/Instructions.js

```

open the file 

import React and the Component class and export Instructions with the following lines:

```javascript

import React, { Component } from 'react';

export default class Instructions extends Component {}

```

Importing React will convert the JSX. Component is a base class that you’ll extend to create your component. To extend that, you created a class that has the name of your component (Instructions) and extended the base Component with the export line. You’re also exporting this class as the default with export default keywords at the start of the class declaration.

The base Component class has several methods you can use in your custom class. 

add this to your file 

```javascript
import React, { Component } from 'react';

export class Instructions extends Component {

  render() {
    return(
      <p>Decentralization empowers individuals to control their own financial destiny.</p>
    )
  }

}
```
Open src/App.js

import the component:

```javascript

import React from 'react';

import Instructions from './Instructions';

import './App.css';

...

export default App;
```

you’ve imported the component, add it to the rest of your code as if it were a custom HTML element:

```javascript
import React from 'react';

import Instructions from './Instructions.js'

...
function App() {
  const greeting = "greeting";
  const displayAction = false;
  return(
    <div className="container">
      <h1 id={greeting}>Hello, Blockchain</h1>
      {displayAction && <p>I am writing JSX</p>}
      <Instructions />
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button
                onClick={displayEmojiName}
              >
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;
```
Download an emoji image whichever you like make sure either is svg or png

in your file /src/Instructions.js Import the emoji and add it to your custom component with a dynamic link

```javascript
import emoji from './emoji.png'
```

make the image smaller, you’ll need to add some CSS and a className to your custom component

```javascript

import React, { Component } from 'react';
import emoji from './emoji.png'

export class Instructions extends Component {

    render() {
        return (
            <div className="instructions">
                <img alt="alien emoji" src={emoji} />
                <p>Decentralization empowers individuals to control their own financial destiny.</p>
            </div>
        )
    }

}
```
Save and close the file. Next open App.css add:

```javascript

.instructions {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.instructions img {
  width: 100px;
  height: 100px;

}
```

In App.js, add a second instance of the component:
```javascript
import React from 'react';

import Instructions from './Instructions.js'

...

function App() {
  const greeting = "greeting";
  const displayAction = false;
  return(
    <div className="container">
      <h1 id={greeting}>Hello, Blockchain</h1>
      {displayAction && <p>I am writing JSX</p>}
      <Instructions />
      <Instructions />
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button
                onClick={displayEmojiName}
              >
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;
```

Save the file. When the browser reloads, you’ll see the component twice.

***Result***
![Screenshot 2024-02-22 140907](https://github.com/DCVglobalnetwork/react-small-project/assets/105791829/5fc56db5-4755-4d46-b78e-5b3791ba9b33)


Happy Coding !!!!!
  Thank you 



