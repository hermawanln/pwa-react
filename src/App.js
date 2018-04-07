import React, { Component } from 'react';
import AppShell from './AppShell';
import Grid from 'material-ui/Grid';
import {
	Route,
	BrowserRouter as Router,
	NavLink,
	Switch,
	Redirect,
	Link
} from 'react-router-dom';
import Button from './Button';
import About from './About'; 
import Content from './Content'; 
import Contact from './Contact';

export class App extends Component { 
	render() { 
		return ( 
				<div>
				 <Router>
					  <div> 
					  <AppShell/> 
						  <Switch> 
							  <Route exact path='/' component={Content}/> 
							  <Route path='/About' component={About}/> 
							  <Route path='/Contact' component={Contact}/> 
						  </Switch> 
					  </div> 
				  </Router> 
				</div> 
		 	); 
		} 
	}

/*class App extends Component {
  constructor(){
  	super();
  	this.state={isi:[]}
  }

  componentDidMount(){
  	this.setState({isi:['Klik', 'Saya', 'Dong']})
  }

  render() {

	const subContact = ({match}) => (
		<h1>{match.params.name}</h1>
		)
  	const Home = () => (
		<div>
		<h1>Ini Homenya</h1>
		</div>
		);
		const About = () => (
		<div>
		<h1>Tentang</h1>
		</div>
		)
		const Contact = () => (
		<div>
		<h1>Contact</h1>
		<ul>
		<li><Link to="/Contact/Me">Me</Link></li>
		<li><Link to="/Contact/You">You</Link></li>
		<li><Link to="/Contact/Love">Love</Link></li>
		</ul>
		<Route path="/Contact/:name" 
		component={subContact}/>
		</div>
	)
  	let i=1;
  	let button = this.state.isi.map(value => (<Button key={i++} isi = {value}/>));
    return (
    <div>
      {<h1>Hello world</h1>
      <p>Selamat Datang</p>
      {button}
      <Router>
		<div>
		<ul>
		<li><NavLink to="/">Home</NavLink></li>
		<li><NavLink to="/About">About</NavLink></li>
		<li><NavLink to="/Contact">Contact</NavLink></li>
		</ul>
			<Route path="/" component={Home}/>
			<Route path="/About" component={About}/>
			<Route path="/Contact" component={Contact}/>
		</div>
	</Router>
	}
		<AppShell />
    </div>
    );
    
  }
  
}*/

export default App;
