import React, { Component } from "react";
import Swipeable from "react-swipy";
import Card from './Card';


const appStyles = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "100vh",
  fontFamily: "sans-serif",
  overflow: "hidden"
};

const wrapperStyles = { position: "relative", width: "250px", height: "250px" };
const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12
};

class Swipe extends Component {
  state = {
    cards: ["First", "Second", "Third", "Fourth", "Fifth"]
  };

  remove = () =>
    this.setState(({ cards }) => ({ cards: cards.slice(1, cards.length) }));

  render() {
    const { cards } = this.state;

    return (
      <div style={appStyles}>
        <div style={wrapperStyles}>
          {cards.length > 0 && (
            <div style={wrapperStyles}>
              <Swipeable
                buttons={({ right, left }) => (
                  <div style={actionsStyles}>
                    <button onClick={left}>Reject</button>
                    <button onClick={right}>Accept</button>
                  </div>
                )}
                onAfterSwipe={this.remove}
              >
                <Card>{cards[0]}</Card>
              </Swipeable>
              {cards.length > 1 && <Card zIndex={-1}>{cards[1]}</Card>}
            </div>
          )}
          {cards.length <= 1 && <Card zIndex={-2}>No more cards</Card>}
        </div>
      </div>
    );
  }
}

export default Swipe;



// import React, { Component } from 'react';
// import Cards, { Card } from 'react-swipe-card';
 
 
// // const data = ['Alexandre', 'Thomas', 'Lucien']
 
// // class Swipe extends Component {
// //   constructor(props) {
// //     super(props)
// //   }
// //   render() {
// //     return(
// //       <Cards onEnd={console.log("action('end')")}>
// //         {data.map(item => 
// //           <Card 
// //             key={item}
// //             onSwipeLeft={console.log("action('swipe left')")} 
// //             onSwipeRight={console.log("action('swipe right')")}>
// //             <h2>{item}</h2>
// //           </Card>
// //         )}
// //       </Cards>
// //     )
// //   }
// // }

// // export default Swipe;


// const Wrapper = ({data, onSwipeLeft, onSwipeRight}) => {
//   return (
//     <Cards onEnd={console.log("action('end')")} className='master-root'>
//       {data.map(item =>
//         <Card 
//           key={item}
//           onSwipeLeft={()=>{console.log("action('swipe left')")}} 
//           onSwipeRight={() => {console.log("action('swipe right')")}}>
//           <h2>{item}</h2>
//         </Card>
//       )}
//     </Cards>
//   )
// }

// export default class MyCards extends Component {
//   state = {
//     data: ['Alexandre', 'Thomas', 'Lucien', 'Raphael', 'Donatello', 'Michelangelo', 'Leonardo'],
//     liked: [],
//     disliked: []
//   }
//   onSwipeLeft = () => {
//      const newData = this.state.data.slice(1);
//      this.setState(prevState => ({ data: newData, disliked: [...prevState.disliked, prevState.data[0]]}));
//   }
//   onSwipeRight = () => {
//     const newData = this.state.data.slice(1);
//     this.setState(prevState => ({ data: newData, liked: [...prevState.liked, prevState.data[0]] }));
//   }
//   render() {
//     return (
//       <div>
//         <Wrapper 
//           onSwipeLeft={this.onSwipeLeft}
//           onSwipeRight={this.onSwipeRight}
//           data={this.state.data}
//         />
//         <ul>Liked: {this.state.liked.map(data => <li>{data}</li>)}</ul>
//         <ul>Disliked: {this.state.disliked.map(data => <li>{data}</li>)}</ul>
//       </div>
//     )
//   }
// }
