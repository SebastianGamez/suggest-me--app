// React
import React from "react";

// Screens
import { RegisterScreen } from "./screens/RegisterScreen";
import { PleasuresScreen } from "./screens/PleasuresScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { SuggestScreen } from "./screens/SuggestScreen";
import { Header } from "./components/Header";

// React router
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export const SuggestMeRouter = () => {
  return (
    <Router>
        
        <Header />
        <Switch>

            <Route path='/suggest' exact='true'>
                
                <SuggestScreen />

            </Route>
            <Route path='/login' exact='true'>
                
                <LoginScreen />

            </Route>
            <Route path='/register' exact='true'>
                
                <RegisterScreen />

            </Route>
            <Route path='/pleasures'>
                
                <PleasuresScreen />

            </Route>
            <Route path='/'>
                
                <HomeScreen />

            </Route>

        </Switch>
    </Router>
  )
}
