// import React, { Component } from "react";
// // import ReactDOM from 'react-dom';
// import SuperTreeView from "react-super-treeview";
// import SyntaxHighlighter from "react-syntax-highlighter";

// export default class extends Component {
//   constructor() {
//     super();
// import "./style.css";
// // import Topics from "./topics.json";

// // Will take in topics
// class TopicsList extends Component {
//   constructor(props) {
//     super(props);
//       this.state = {
//         topics: []
//       };
//   }

//     this.state = {
//       data: [
//         {
//           id: 1,
//           name: "#technology",
//           isExpanded: true,
//           children: [
//             {
//               id: 10,
//               name: "#software",
//               isExpanded: true,
//               children: [
//                 {
//                   id: 100,
//                   name: "#computer"
//                 },
//                 {
//                   id: 101,
//                   name: "#tablet"
//                 },
//                 {
//                   id: 103,
//                   name: "#mobile"
//                 },
//                 {
//                   id: 104,
//                   name: "#online"
//                 },
//                 {
//                   id: 105,
//                   name: "#server"
//                 }
//               ]
//             },
//             {
//               id: 11,
//               name: "#hardware",
//               isExpanded: true,
//               children: [
//                 {
//                   id: 110,
//                   name: "#computer"
//                 },
//                 {
//                   id: 111,
//                   name: "#tablet"
//                 },
//                 {
//                   id: 113,
//                   name: "#mobile"
//                 },
//                 {
//                   id: 114,
//                   name: "#online"
//                 },
//                 {
//                   id: 115,
//                   name: "#server"
//                 }
//               ]
//             }
//           ]
//         },
//         {
//           id: 2,
//           name: "#movies",
//           isExpanded: true,
//           children: [
//             {
//               id: 20,
//               name: "#comedy"
//             },
//             {
//               id: 21,
//               name: "drama"
//             },
//             {
//               id: 22,
//               name: "action"
//             },
//             {
//               id: 23,
//               name: "adventure"
//             }
//           ]
//         }
//       ]
//     };
//   }
//   render() {
//     const codeString = `this.state = {
//             data: [
//                 {
//                     id: 1,
//                     name: '#technology',
//                     isExpanded: true,
//                     children: [
//                         {
//                             id: 10,
//                             name: '#software',
//                             isExpanded: true,
//                             children: [
//                                 {
//                                     id: 100,
//                                     name: '#computer'
//                                 },
//                                 {
//                                     id: 101,
//                                     name: '#tablet'
//                                 },
//                                 {
//                                     id: 103,
//                                     name: '#mobile'
//                                 },
//                                 {
//                                     id: 104,
//                                     name: '#online'
//                                 },
//                                 {
//                                     id: 105,
//                                     name: '#server'
//                                 }

//                             ]},
//                         {
//                             id: 11,
//                             name: '#hardware',
//                             isExpanded: true,
//                             children: [
//                                 {
//                                     id: 110,
//                                     name: '#computer'
//                                 },
//                                 {
//                                     id: 111,
//                                     name: '#tablet'
//                                 },
//                                 {
//                                     id: 113,
//                                     name: '#mobile'
//                                 },
//                                 {
//                                     id: 114,
//                                     name: '#online'
//                                 },
//                                 {
//                                     id: 115,
//                                     name: '#server'
//                                 }

//                             ]
//                         }
//                     ]
//                 },
//                 {
//                     id: 2,
//                     name: '#movies',
//                     isExpanded: true,
//                     children: [
//                         {
//                             id: 20,
//                             name: '#comedy'
//                         },
//                         {
//                             id: 21,
//                             name: 'drama',

//                         },
//                         {
//                             id: 22,
//                             name: 'action'
//                         },
//                         {
//                             id: 23,
//                             name: 'adventure'
//                         }
//                     ]
//                 }
//             ]
//         }
//     }
// <SuperTreeView
//     data={ this.state.data }
//     onUpdateCb={(updatedData)=>{
//         this.setState({data: updatedData})
//     }}
//     isExpandable={(node, depth)=>{
//         // Allow expansion for node with id 21,
//         // Disallow expansion for all nodes of depth 1
//         // or for node with the id of '1'
//         // NOTE: The highest depth is 0, node children are depth+1
//         if(node.id === 21){
//             return true
//         }else if(depth === 1 || node.id === 1){
//             return false;
//         }else{
//             return true;
//         }
//     }}
//     onExpandToggleCb={(node, depth)=>{
//         const status = (node.isExpanded)? 'open' : 'close';
//         alert(\'\${node.name} will \${status}\');
//     }}
// />`
//     // Will take in topics

//     render(){
//     return (
//       <>
//         <style type="text/css">
//           {`
//             .header {
//                 font-family: "Josefin Sans", sans-serif;
//                 font-size: 25px;
//               }
//         `}
//         </style>
//         <div>
//           <h2>Expand/Collapse options</h2>
//           <p>These are the options:</p>
//           <ol>
//             <li>
//               <code>isExpandable</code> Show/hide Expand Toggle button (
//               <span className="caret" />
//               ). Default returns <code>true</code>{" "}
//             </li>
//             <li>
//               <code>onExpandToggleCb</code> Callback function runs when Expand
//               Toggle button is clicked
//             </li>
//           </ol>

//           <hr />
//           <div className="row">
//             <div className="col">
//               <div className="panel panel-default">
//                 <div className="panel-body">
//                   <SuperTreeView
//                     data={this.state.data}
//                     onUpdateCb={updatedData => {
//                       this.setState({ data: updatedData });
//                     }}
//                     isExpandable={(node, depth) => {
//                       // Allow expansion for node with id 21,
//                       // Disallow expansion for all nodes of depth 1
//                       // or for node with the id of `1`
//                       // NOTE: The highest depth is 0, node children are depth+1
//                       if (node.id === 21) {
//                         return true;
//                       } else if (depth === 1 || node.id === 1) {
//                         return false;
//                       } else {
//                         return true;
//                       }
//                     }}
//                     onExpandToggleCb={(node, depth) => {
//                       const status = node.isExpanded ? "open" : "close";
//                       alert(`${node.name} will ${status} `);
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <h5>Source code:</h5>
//           <SyntaxHighlighter language="javascript">
//             {codeString}
//           </SyntaxHighlighter>
//         </div>
//       </>
//     )}
//       <div className="card mt-3 ml-1 shadow-sm">
//       <div className="card-body text-center">
//         <h5 className="header card-title">Topics</h5>
//       </div>
//       <ul className="list-group list-group-flush">
//         {/* {this.state.Topics.map(topic => {
//             <li className="list-group-item" id={topic.id}>
//                 {topic.topicName}
//             </li>
//         })} */}
//       </ul>
//       </div>
//     );
//   }
// }

// // export default TopicsList;
