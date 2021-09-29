import React from 'react';
import '../App.scss';
// import { Dots }  from 'react-preloaders2';
import { connect } from 'react-redux';
import { fetchGetQuotes } from '../redux/reducers';

// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      randomIndex: 0
    };
    this.ask = this.ask.bind(this);
  }
  ask() {
      this.setState({
        randomIndex: Math.floor(Math.random() * 100)
      });
  }
  componentDidMount() {
    this.props.fetchGetQuotes();
  }
  render() {
    const quotes = this.props.quotes;
    let answer = {'text': "texto", 'author': "none"};
    if(typeof quotes[this.state.randomIndex] !== 'undefined'){
      answer = quotes[this.state.randomIndex];
    }
    return (
      <div> 
        <div className="container">
          <div className="row">
            <div className="column column-xs-100 column-xs-offset-0 column-md-50 column-md-offset-25">
              <div className="align-xs-left py-25">
                <h2 className="m-0">Fortune cookie</h2>
              </div> 
            </div>
          </div>  
          <div className="row">
            <div className="column column-xs-100 column-xs-offset-0 column-md-50 column-md-offset-25">
              <div className="align-xs-left">
                  <blockquote className="m-0 quote">
                    <p>{ answer.text }<br/><small>- { (answer.author !== null) ? answer.author : "Anonymous" }</small></p>              
                  </blockquote> 
              </div>   
            </div>
          </div>  
          <div className="row">
            <div className="column column-xs-100 column-xs-offset-0 column-md-50 column-md-offset-25">
               <div className="align-xs-center py-25">
                 <button className="m-0" onClick={this.ask}>Break the cookie!</button>
               </div>
            </div>
          </div>
        </div>
        {/* <Dots color={'#f7f7f7'} background="linear-gradient(90deg, rgba(243, 72, 104,1) 20.260775120440467%,rgba(242, 71, 104,1) 20.260775120440467%,rgba(158, 0, 236,1) 80.26163540949759%)" animation="fade" /> */}
      </div> 
    );
  }
 };
 
// Change code above this line
 
const App = connect((state) => ({ quotes: state.quotes.quotes }),
                      { fetchGetQuotes }
                    )
                    (Presentational);

export default App;