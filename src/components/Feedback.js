import React, { Component } from 'react';

import s from './Feedback.module.css';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class Feedback extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  hanleIncrement = e => {
    let target = e.target.name;
    this.setState(prev => ({
      [target]: prev[target] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.neutral + this.state.good;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.ceil((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <section className={s.feedback}>
        <h1>Please leave feedback</h1>
        <div>
          <Button
            className={s.button}
            name="good"
            variant="outline-warning"
            onClick={this.hanleIncrement}
          >
            Good
          </Button>
          <Button
            className={s.button}
            name="neutral"
            variant="outline-warning"
            onClick={this.hanleIncrement}
          >
            Neutral
          </Button>
          <Button
            className={s.button}
            name="bad"
            variant="outline-warning"
            onClick={this.hanleIncrement}
          >
            Bad
          </Button>
        </div>

        <div className="">
          <h2>Statistics</h2>
          <ul className={s.list}>
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
            <li>Total: {this.countTotalFeedback()}</li>
            <li>
              Positive feedback:{' '}
              {this.countPositiveFeedbackPercentage()
                ? this.countPositiveFeedbackPercentage()
                : 0}
              %
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
export default Feedback;
