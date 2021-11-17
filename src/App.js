import "./App.css";
import Home from "./home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";
import Login from "./Login";
import {DataProvider} from "./dataContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddRooms from './addRooms'
import FileUpload from "./fileupload";
import RoomsBooked from './roomsBooked';

function App() {
  return (
    <div className="app">
      <Router>
      <DataProvider>
        <Header />
        <Switch>
        <Route path='/host' component={FileUpload} exact={true}/>
        <Route path='/host1' component={AddRooms} exact={true}/>
        <Route path='/rooms' component={RoomsBooked} exact={true}/>
          <Route path='/login' component={Login} exact={true}/>
          <Route path='/search' component={SearchPage} exact={true}/>
          <Route path='/' component={Home} exact={true}/>
        </Switch>
        </DataProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
