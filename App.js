import React from 'react';
import 'animate.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

//Components
import Landing from './components/landing'
import Fizzbuzz from './components/fizzbuzz'
import Chat from './components/chat'

export default function App() {
    return (
        <Router>
            <div>
                <Route exact path='/' component={Landing} />
                <Route exact path='/fizzbuzz/:n' component={Fizzbuzz} />
                <Route exact path='/chat' component={Chat} />
            </div>
        </Router>
    );
}
