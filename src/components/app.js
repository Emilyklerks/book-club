import { Router } from 'preact-router';
import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Books from "../routes/books";

const App = () => (
	<div id="app">
		<Header />
		<div class="page-container">
			<Router>
				<Home path="/"  />
				<Books path="/Books" />
			</Router>
		</div>

	</div>
)

export default App;
