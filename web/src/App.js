import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Auth from './components/Auth'
import Chat from './components/Chat'
import PastResults from './components/PastResults'
import CurrentProgress from './components/CurrentProgress'
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
                <Route exact path='/view/past' render={props =>
                    <PastResults {...props}/>
                }/>
                <Route exact path='/view/current' render={props =>
                    <CurrentProgress {...props}/>
                }/>
                <Route exact path='/chat' render={props =>
                    <Chat {...props} formType={props.match.params.path} />
                }/>
            </Switch>
        )
    }
}

export default App
