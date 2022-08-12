import {Switch, Route} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Login from './components/LoginPage'
import Popular from './components/Popular'
import SearchPage from './components/SearchPage'
import MovieDetails from './components/MovieDetails'
import Account from './components/AccountPage'
import NotFound from './components/NotFoundPage'

import './App.css'

const App = () => (
  <div className="main-container">
    <Switch>
      <Route path="/login" exact component={Login} />
      <ProtectedRoute path="/" exact component={Home} />
      <ProtectedRoute path="/popular" exact component={Popular} />
      <ProtectedRoute path="/search" exact component={SearchPage} />
      <ProtectedRoute path="/account" exact component={Account} />
      <ProtectedRoute path="/movies/:id" exact component={MovieDetails} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
