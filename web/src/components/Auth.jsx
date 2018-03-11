import React from 'react'
import styled from 'styled-components'

const logo = require('../images/logo.png')

class Auth extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            providedUid: '',
            generatedUid: ''
        }
    }

    handleSubmitClick() {
        this.props.history.push('/menu')
    }

    handleSwitchClick() {
        this.props.history.push(this.props.formType === 'login' ? '/register' : '/login')
    }

    render() {
        const {
            providedUid,
            generatedUid
        } = this.state

        const {
            formType,
            history
        } = this.props

        const switchPrompt = formType === 'login' ? `Don't have a Unique ID?` : `Want to use an existing Unique ID?`

        return(
            <Wrapper>
                <Logo src={logo} height = "180" width ="180" />
                <Form>
                    
                    <div>
                        <Label>Unique ID</Label>
                        <Input  type='text' 
                                disabled={formType === 'register'}
                                value={formType === 'login' ? providedUid : generatedUid}
                                onChange={(e) => this.setState({providedUid: e.value})}/>
                    </div>
                    <div>
                        <Label>Password</Label>
                        <Input type='password'/>
                    </div>
                    <Submit type='submit' 
                            value={formType === 'login' ? 'Login' : 'Register'}
                            onClick={() => this.handleSubmitClick()}></Submit>
                    <Switcher onClick={() => this.handleSwitchClick()}>{switchPrompt}</Switcher>
                </Form>
            </Wrapper>
        )
    }
}

export default Auth

const Wrapper = styled.div`
    background: linear-gradient(#3f5d83, #323e4f);
    margin: 0;
    padding: 0;
    height: 100vh;
`

const Form = styled.div`
    width: 50%;
    margin: 0 auto;
    padding: 5vh 5%;
    border-radius: 3px;
    padding-top: 50vh;
    height: 50vh;
`

const Label = styled.label`
    font-size: 14px;
    font-family: Oswald;
    display: block;
    margin-bottom: 4px;
    color: #f4f7f6;
`

const Input = styled.input`
    margin-bottom: 10px;
    border-radius: 3px;
    border: 0px;
    padding: 6px;
    font-size: 12px;
    font-family: 'Open Sans';
    width: 100%;
    background-color: transparent;
    border-bottom: 1px solid #ccc;
    color: #fff;
    outline: 0;
`

const Submit = styled.input`
    font-size: 16px;
    font-family: Oswald;
    width: 50%;
    text-align: center;
    background: #49c5b6;
    border: 0px;
    color: #fff;
    margin: 0 auto;
    margin-top: 12px;
    display: block;
    padding: 6px;
`

const Switcher = styled.p`
    margin-top: 14px;
    font-size: 10px;
    color: #f4f7f6;
    font-family: 'Open Sans';
    display: block;
    text-decoration: underline;
    text-align: center;
`

const Logo = styled.img`
    position: absolute;
    top: 10vh;
    left: 50%;
    transform: translateX(-50%);
`