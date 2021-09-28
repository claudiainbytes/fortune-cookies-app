import React from 'react';
import '../App.scss';
import { Dots }  from 'react-preloaders2';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps, fetchGetQuotes } from '../redux/reducers';

// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: [],
      quotes: [],
      randomIndex: 0
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  ask() {
      this.setState({
        randomIndex: Math.floor(Math.random() * 100)
      });
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  componentDidMount() {
    this.props.fetchGetQuotes();
  }
  render() {
    const quotes = this.props.quotes;
    const possibleAnswers = quotes;
    
    //let answer = possibleAnswers[55]; //possibleAnswers[this.state.randomIndex];
    let answer = {'text': "texto", 'author': "none"};
    if(typeof possibleAnswers[this.state.randomIndex] !== 'undefined'){
      console.log("rta: ");
      console.log(possibleAnswers[this.state.randomIndex]);
      answer = possibleAnswers[this.state.randomIndex];
    }
    return (
      <div> 
        <div className="container">
          <div className="row">
            <div className="column">
              <br />
              <button onClick={this.ask}>Break the cookie!</button>
              <br />
              <h3>Answer:</h3>
              <p>{ answer.text }<br/> - { answer.author }</p>
           </div>
          </div>
          <div className="row">
            <div className="column">
              <h2>Type in a new Message:</h2>
              <input
                value={this.state.input}
                onChange={this.handleChange}/><br/>
              <button onClick={this.submitMessage}>Submit</button>
              <ul>
                {this.state.messages.map( (message, idx) => {
                    return (
                      <li key={idx}>{message}</li>
                    )
                  })
                }
              </ul>
              <ul>
                {quotes.map( (quote, idx) => {
                    return (
                      <li key={idx}>{quote.text}</li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
        <Dots color={'#f7f7f7'} background="linear-gradient(90deg, rgba(243, 72, 104,1) 20.260775120440467%,rgba(242, 71, 104,1) 20.260775120440467%,rgba(158, 0, 236,1) 80.26163540949759%)" animation="fade" />
      </div> 
    );
  }
 };
 
// Change code above this line
 
const App = connect((state) => ({ quotes: state.quotes.quotes }),
                      { 
                        mapStateToProps, 
                        mapDispatchToProps, 
                        fetchGetQuotes}
                    )
                    (Presentational);

export default App;