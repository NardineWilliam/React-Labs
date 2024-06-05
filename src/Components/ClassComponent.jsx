// src/components/ClassComponent.jsx
import React, { Component } from "react";
import styles from "../Styles/classComponent.module.css";

class ClassComponent extends Component {
  state = {
    comments: [],
    currentIndex: 0,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("https://dummyjson.com/comments");
    const data = await response.json();
    this.setState({ comments: data.comments });
  };

  handleNext = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 5) % prevState.comments.length,
    }));
  };

  handlePrevious = () => {
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 5 + prevState.comments.length) %
        prevState.comments.length,
    }));
  };

  render() {
    const { comments, currentIndex } = this.state;
    const displayComments = comments.slice(currentIndex, currentIndex + 5);

    return (
      <div className={styles.classComponentContainer}>
        <h2>Class Component</h2>
        <ul className={styles.commentsList}>
          {displayComments.map((comment) => (
            <li key={comment.id}>{comment.body}</li>
          ))}
        </ul>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary mx-2"
            onClick={this.handlePrevious}>
            Previous
          </button>
          <button className="btn btn-primary mx-2" onClick={this.handleNext}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default ClassComponent;
