import React from 'react'
import styled from 'styled-components'
import results from '../data/results'

class PastResults extends React.Component{

    render(){

        return(
            <Wrapper>
                <Row>
                    <Field>Condition</Field>
                    <Field>Date Submitted</Field>
                    <Field>Result</Field>
                </Row>
                {
                    results.map(result => (
                        <Row key={result.id}>
                            <Field>{result.condition}</Field>
                            <Field>{result.date}</Field>
                            <Field>
                                <Button onClick={() => this.props.history.push(`/results`)}>View Result</Button>
                            </Field>
                        </Row>
                    ))
                }
            </Wrapper>
        )
    }
}

export default PastResults

const Wrapper = styled.div`
    background-color: #f4f7f6;
    font-family: 'Open Sans';
    margin: 0;
    padding: 0;
    height: calc(100vh - 50px);
`

const Row = styled.div`
    padding: 10px 5%;
    width: 100%;
    border-bottom: 1px solid #ddd;
    font-size: 12px;
    color: #202121;
`

const Field = styled.div`
    display: inline-block;
    width: 33.33%;
`

const Button = styled.button`
    background: transparent;
    border: 2px solid #49c5b6;
    color: #49c5b6;
    border-radius: 3px;
`