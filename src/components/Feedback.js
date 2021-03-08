import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';
import Control from './Control/Control';
import SectionTitle from './Section/SectionTitle';
import Statistic from './Statistic/Statistic';
import Notification from './Notification/Notification';

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
        <SectionTitle title="Please leave feedback" children>
          <Control onIncrement={this.hanleIncrement} />
        </SectionTitle>

        {this.countTotalFeedback() > 0 ? (
          <SectionTitle children title="Statistics">
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              countTotal={this.countTotalFeedback()}
              countPositive={this.countPositiveFeedbackPercentage()}
            />
          </SectionTitle>
        ) : (
          <Notification />
        )}
      </section>
    );
  }
}
export default Feedback;
Feedback.propTypes = {
  initialValue: PropTypes.number,
};
