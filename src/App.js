import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Login from './components/LoginPage'
import Popular from './components/Popular'
import SearchPage from './components/SearchPage'
import MovieDetails from './components/MovieDetails'
import NotFound from './components/NotFoundPage'

import './App.css'

const App = () => (
  <div className="main-container">
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={Home} />
      <Route path="/popular" exact component={Popular} />
      <Route path="/search" exact component={SearchPage} />
      <Route path="/movies/:id" exact component={MovieDetails} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
