import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {fetchPics} from "./actions/action"

import './App.css';

function App(props) {
  useEffect(() => {
    props.fetchPics()
    }, []);
 
  return (
    <div className="App">
      <header className="App-header">
      {props.picError && <p>Error: {props.picError}</p>}
      {props.isLoading ? (
        <div className="spinner" />
      ) : (
        <img src={props.pic} width="500" alt="Random Pic" />
      )}
      </header>
    </div>
  );
}

function mapStateToProps(state) {
  return{
  isLoading: state.isLoading,
  pic: state.pic,
  picError: state.error
  }
}

const mapDispatchToProps = {
  fetchPics
}

export default connect(mapStateToProps,  mapDispatchToProps)(App);
