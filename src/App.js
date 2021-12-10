import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Dashboard from './Pages/Dashboard'

Amplify.configure(awsconfig);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Dashboard}/>
      </Switch>
    </Router>
  );
}

export default withAuthenticator(App);




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <AmplifySignOut />
//         <h2>My App Content</h2>
//       </header>
//     </div>
//   );
// }