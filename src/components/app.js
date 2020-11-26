import { Router } from 'preact-router';
import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Books from "../routes/books";
import Buttons from "../routes/buttons";

const App = () => (
	<div id="app">
		<Header />
		<div class="page-container">
			<Router>
				<Home path="/"  />
				<Books path="/Books" />
				<Buttons path="/Buttons" />
			</Router>
		</div>

	</div>
)

export default App;
