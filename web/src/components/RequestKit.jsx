import React from 'react'
import styled from 'styled-components'

class RequestKit extends React.Component{

    handleRequestClick()
    {
        this.props.history.push({pathname: '/view/current', state: {option: this.state.option}})
    }
    render(){
        return(
            <Wrapper>
                <Page>Request Kit</Page>  
                
                <Message>
                    Please select the required kit: <br /><br />

                    {/* <select name="Kits">
                        <option>HIV/AIDS</option>
                        <option>Syphilis</option>
                        <option>Gonorrhoea</option>
                        <option>Chlamydia</option>
                    </select> */}
                    <br />
                    <Options onChange={e => this.setState({option: e.target.value})}>
                       <input type="radio" name="disease"/>HIV/AIDS<br /> 
                        <input type="radio" name="disease"/>Syhpilis<br />
                        <input type="radio" name="disease"/>Gonorrhoea<br />
                        <input type="radio" name="disease"/>Chlamydia

                        <br />
                    </Options>
                </Message>

                <Button2  onClick={() => this.handleRequestClick()}>Request</Button2>
                {/*<Button1>Back</Button1>*/}
            </Wrapper>
        )
    }
}

export default RequestKit

const Wrapper = styled.div`
    background: white;
    margin: 0;
    padding: 0;
    height: calc(100vh - 50px);
    font-family: 'Open Sans';
`

const Message = styled.div`
 position: absolute;
 left: 20px;
 font-size: 20px;
 top: 180px;
 right: 20px;
`

const Button = styled.button`
    background: transparent;
    border: 2px solid #49c5b6;
    color: #49c5b6;
    border-radius: 3px;
    margin: 4px 5%;
`

const Button1 = styled(Button) `
font-size: 13px;
font-family: Open Sans;
position: absolute;
bottom:  4px;
cursor: pointer;
left: 4px;
`
const Button2 = styled(Button) `
font-size: 13px;
font-family: Open Sans;
position: absolute;
bottom:  4px;
cursor: pointer;
right: 4px;
`

const Page = styled.h1`
color: #008080;
text-align: center;
`

const Options = styled.div`
position: absolute;
left: 70px;
font-size: 20px;
`