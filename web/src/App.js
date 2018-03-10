import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Auth from './components/Auth'
import Results from './components/Results'
import { injectGlobal } from 'styled-components'

class App extends React.Component{
    render(){
        injectGlobal`
            body{
                margin: 0;
                padding: 0;
            }
        `

        return (
            <Switch>
                <Route exact path='/:path(login|register)' render={props =>
                    <Auth {...props} formType={props.match.params.path} />
                }/>
            <Route exact path='/:path(results)' render={props =>
                    <Results {...props} formType={props.match.params.path} />
                }/> 
            </Switch>
        )
    }
}

export default App
