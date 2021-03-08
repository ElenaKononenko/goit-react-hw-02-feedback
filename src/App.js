import React, { Component } from 'react';
import Feedback from './components/Feedback/Feedback';
import PropTypes from 'prop-types';
import s from './App.module.css';
import SectionTitle from './components/Section';
import Statistic from './components/Statistic';
import Notification from './components/Notification';
class App extends Component {
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
    const { good, neutral, bad } = this.state;
    return (
      <section className={s.app}>
        <SectionTitle title="Please leave feedback" children>
          <Feedback
            options={{ good, neutral, bad }}
            onIncrement={this.hanleIncrement}
          />
        </SectionTitle>

        {this.countTotalFeedback() > 0 ? (
          <SectionTitle title="Statistics" children>
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

export default App;
App.propTypes = {
  initialValue: PropTypes.number,
};
