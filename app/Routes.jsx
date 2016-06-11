import React from 'react'
import { Route, Router, IndexRoute } from "react-router";
// import createBrowserHistory from 'history/lib/createBrowserHistory';
import createHashHistory from 'history/lib/createHashHistory';

import { useBasename } from 'history';

import Homepage from './containers/Homepage'
import About from './containers/About'
import Team from './containers/Team'
import Faq from './containers/Faq'
import Contact from './containers/Contact'

import App from './containers/App'
import Signup from './containers/Signup'
import Signin from './containers/Signin'
import ResetPass from './containers/ResetPass'
import HomeApp from './containers/pages/HomeApp'

import Items from './containers/pages/Items'
import AddItem from './containers/pages/AddItem'
import ItemDetail from './containers/pages/ItemDetail'
import EditItem from './containers/pages/EditItem'

import Outfits from './containers/pages/Outfits'
import CreateOutfit from './containers/pages/CreateOutfit'
import OutfitDetail from './containers/pages/OutfitDetail'
import EditOutfit from './containers/pages/EditOutfit'

import Lookbooks from './containers/pages/Lookbooks'
import CreateLookbook from './containers/pages/CreateLookbook'

import Calendar from './containers/pages/Calendar'
import ChoseOutfit from './containers/pages/ChoseOutfit'

import Profil from './containers/pages/Profil'

// let history = useBasename(createBrowserHistory)({basename: '/html/'});
let history = useBasename(createHashHistory)({basename: '/html/'});

export class Routes extends React.Component {
	render(){
		return(
			<Router history={history}>
				<Route path="/">
					<IndexRoute component={Homepage} />
					<Route path="about" component={About}/>
					<Route path="team" component={Team}/>
					<Route path="faq" component={Faq}/>
					<Route path="contact" component={Contact}/>
					<Route path="signup" component={Signup}/>
					<Route path="signin" component={Signin}/>
					<Route path="reset-pass" component={ResetPass}/>
					<Route path="app" component={App}>
						<Route path="home" component={HomeApp}/>
						<Route path="items">
						  <IndexRoute component={Items} />
						  <Route path="add-item" component={AddItem} />
						  <Route path=":id" component={ItemDetail} />
						  <Route path="edit/:id" component={EditItem} />
						</Route>
						<Route path="outfits">
							<IndexRoute component={Outfits} />
							<Route path="create-outfit" component={CreateOutfit} />
							<Route path=":id" component={OutfitDetail} />
							<Route path="edit/:id" component={EditOutfit} />
						</Route>
						<Route path="lookbooks">
							<IndexRoute component={Lookbooks} />
							<Route path="create-lookbook" component={CreateLookbook} />
							<Route path=":id" component={OutfitDetail} />
							<Route path="edit/:id" component={EditOutfit} />
						</Route>
						<Route path="calendar">
							<IndexRoute component={Calendar} />
							<Route path="chose-outfit" component={ChoseOutfit} />
						</Route>
						<Route path="profil" component={Profil}/>
					</Route>
				</Route>
			</Router>
		);
	}
}
