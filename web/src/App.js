import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Auth from './components/Auth'
import Results from './components/Results'
import RequestKit from './components/RequestKit'
import Chat from './components/Chat'
import PastResults from './components/PastResults'
import CurrentProgress from './components/CurrentProgress'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
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
            <div>
                <Route render={(props) => ['/login', '/register'].includes(props.location.pathname) ? null : <Navbar {...props}/>}/>
                <Switch>
                    <Route exact path='/:path(login|register)' render={props =>
                        <Auth {...props} formType={props.match.params.path} />
                    }/>
                    <Route exact path='/:path(results)' render={props =>
                        <Results {...props} formType={props.match.params.path} />
                    }/> 
                    <Route exact path='/:path(request)' render={props =>
                        <RequestKit {...props} formType={props.match.params.path} />
                    }/> 
                    <Route exact path='/view/past' render={props =>
                        <PastResults {...props}/>
                    }/>
                    <Route exact path='/view/current' render={props =>
                        <CurrentProgress {...props}/>
                    }/>
                    <Route exact path='/chat/:id' render={props =>
                        <Chat {...props} formType={props.match.params.path}/>
                    }/>
                    <Route exact path='/menu' render={props =>
                        <Menu {...props} formType={props.match.params.path} />
                    }/>
                </Switch>
            </div>
        )
    }
}

export default App
