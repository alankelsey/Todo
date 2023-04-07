import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
import { Auth } from '@aws-amplify/auth';
import awsconfig from './aws-exports';

Amplify.Auth.configure(awsconfig);

console.log(typeof AmplifySignOut);

let timeStampNow = new Date().toLocaleTimeString();
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload ok its on {timeStampNow}.
          {}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div class="logOut">
          <button id="logOut-button" onClick={logOut}>SignOut</button>
        </div>
      </header>
    </div>
  );
}

async function logOut() {
  await Auth.signOut();
  window.location.href = 'http://localhost:3000';
}

// function logOut() {
//   try {
//     Amplify.Auth.signOut(); =  true
//     // window.location.reload(true);
//   } catch (error) {
//     console.log('error signing out: ', error);
//   }

// }
// window.location.reload(true);


// console.log(withAuthenticator({ includeGreetings: true }));
export default withAuthenticator(App, { AmplifyGreetings: true });
// export default App;
