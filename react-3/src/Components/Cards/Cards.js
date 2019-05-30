import React, { Component } from 'react';
import "../../App.css";
import data from '../../data';

export default class Cards extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        let index= this.props.index;
        // let prev= this.props.prevHandler;
        // let next= this.props.nexthandler;
        console.log(this.props)

       return (
           <div className="home">
               <section className='cards'>
                    <h2 id="num">{this.props.index}/{data.length}</h2>
                    <h1 id="name">{`${data[index].name.first} ${data[index].name.last}`}</h1>
                    <section>
                        <div className="from">
                            <h2 id="from">From:</h2>
                            <h2 id="from2">{`${data[index].city}, ${data[index].country} `}</h2>
                        </div>
                        <div className="job">
                            <h2 id="job">Job Title:</h2>
                            <h2 id="title">{`${data[index].title}`}</h2>
                        </div>
                        <div className="employer">
                            <h2 id="employer">Employer:</h2>
                            <h2 id="employer1">{`${data[index].employer}`}</h2>
                        </div>
                    </section>
                    <div className='favMovies'>
                        <h2 id="fav">Favorite Movies:</h2>
                        <h2 id="movies">{`${data[index].favoriteMovies}`}</h2>
                    </div>

               </section>
               <div className="buttons">
                    <button id="previous" onClick={this.props.prev}> &lt; Previous</button>
                        <div className="black_diamond">
                            <button id="edit">Edit</button>
                            <button id="delete">Delete</button>
                            <button id="new">New</button>
                        </div>
                    <button id="next" onClick={this.props.next}>Next &gt;</button>
               </div>
           </div>
       )
    }
}