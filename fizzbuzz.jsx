import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 300px;
`

export default class Fizzbuzz extends React.Component {
    constructor(props) {
        super()
        this.state = {fizzBuzz: []}
        this.fizzBuzz = this.fizzBuzz.bind(this)
        this.buzzFizz = this.buzzFizz.bind(this)
    }

    componentDidMount() {
        this.fizzBuzz(this.props.match.params.n)
    }

    render() {
        const props = this.props
        return (
            <Container>
                <h1>{props.match.params.n}</h1>
                <ul>
                    {this.state.fizzBuzz.map(val => {
                        return(
                            <li>
                                {val}
                            </li>
                        )
                    })}
                </ul>
            </Container>
        )
    }

    fizzBuzz(n) {
        const fizbuz = []
        for (var i = 1; i <= n; i++) {
            var f = i % 3 === 0, b = i % 5 === 0, ba = i % 7 === 0, pr = this.isPrime(i)
            fizbuz.push(this.buzzFizz(f, b, ba, pr, i))
        }
        this.setState({fizzBuzz: fizbuz})
    }

    buzzFizz(fizz, buzz, bang, prime, n) {
        const arr = []
        fizz && arr.push('Fizz')
        buzz && arr.push('Buzz')
        bang && arr.push('Bang')
        prime && arr.push('Prime')
        if(arr.length === 0) return n.toString()
        return arr.join('')
    }

    isPrime(num) {
        for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
        return num !== 1;
    }
}
