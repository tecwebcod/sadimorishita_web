import {Route, Switch} from 'react-router-dom'
import Home from '../pages/home'

export default function RouterApp() {
    return (
        <Switch>
            <Route exact path={'/'} component={Home}></Route>
        </Switch>
    )
}