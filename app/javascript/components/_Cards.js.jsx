import React, { Component } from 'react';
import axios from 'axios';
import Swipeable from "react-swipy";

class Cards extends Component {
  constructor(props){
    super(props)
  }
  state = {
    quotes: [],
    currentQuote: {},
  };

  componentDidMount() {
    axios.get(`/quotes/`)
    .then((response) => {
      this.setState({
        quotes: response.data
      })
    })
    .catch(function (error) {
      return error;
    });
  }

  quotesText = arr => {
    const textArr = [];
    arr.forEach(function(quote) {
      textArr.push(quote.text)
    })
    return textArr;
  }

  generateRandom = (min, max) => {
    const x = Math.random() * (max - min) + min;
    return Math.round(x)
  }

  render() {
    if (this.state.quotes.length === 0) {
      return <p>Loading...</p>
    }
    const qLength = this.state.quotes.length
    const quoteIndex = this.generateRandom(0, qLength - 1)
    const randomQuote = this.state.quotes[quoteIndex];
    return (
      <div className="whole-card">
        <Swipeable buttons={({ right, left }) => (
            <div className="buttons">
              <button className="dissBtn"
                onClick={() => {this.props.leftSwipe(randomQuote.party_id); left();}}>Dislike
              </button>
              <button className="likeBtn"
                onClick={() => {this.props.rightSwipe(randomQuote.party_id); right();}}>Like
              </button>
            </div>
          )}
          >
          <section className="play-card">
            <div className="mobile-modal-body">
              <div className="mobile-matched-with quotearea">
                <i className="fas fa-quote-left quotation-left"></i>
                <h4 className="quote">{randomQuote.text}</h4>
                <i className="fas fa-quote-right quotation-right"></i>
              </div>
            </div>
          </section>
        </Swipeable>
      </div>
    )
  }
}

export default Cards;

// import React, { Component } from 'react';
// import axios from 'axios';
// import Swipeable from "react-swipy";

// class Cards extends Component {
//   constructor(props){
//     super(props)
//     }
//     state = {
//       quotes: [],
//       currentQuote: {},
//       currentIndex: 0,
//     };

//   componentDidMount() {
//     axios.get(`/quotes/`)
//     .then((response) => {
//       this.setState({
//         quotes: response.data
//       })
//     })
//     .catch(function (error) {
//       return error;
//     });
//   }

//   quotesText = arr => {
//     const textArr = [];
//     arr.forEach(function(quote) {
//       textArr.push(quote.text)
//     })
//     return textArr;
//   }

//   render() {
//     if (this.state.quotes.length === 0) {
//       return <p>Loading...</p>
//     }
//     function generateQuote() {
//       this.setState(({currentIndex}) => {
//         let nextIndex = currentIndex;
//         nextIndex = nextIndex + 1;
//         return {currentIndex: nextIndex};
//       })
//     }

//     const randomQuote = this.state.quotes[generateQuote()];

//     return (
//       <div className="whole-card">
//         <Swipeable buttons={({ right, left }) => (
//             <div className="buttons">
//               <button className="dissBtn"
//                 onClick={() => {this.props.leftSwipe(randomQuote.party_id); left();}}>Dislike
//               </button>
//               <button className="likeBtn"
//                 onClick={() => {this.props.rightSwipe(randomQuote.party_id); right();}}>Like
//               </button>
//             </div>
//           )}
//           >
//           <section className="play-card">
//             <div className="mobile-modal-body">
//               <div className="mobile-matched-with quotearea">
//                 <i className="fas fa-quote-left quotation-left"></i>
//                 <h4 className="quote">{rand.text}</h4>
//                 <i className="fas fa-quote-right quotation-right"></i>
//               </div>
//             </div>
//           </section>
//         </Swipeable>
//       </div>
//     )
//   }
// }

// export default Cards;
