import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notifications/Notification';
import { GlobalStyles } from './GlobalStyles';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickOnButton = e => {
    this.setState(prevState => {
      const newState = { ...prevState };
      for (const key in newState) {
        if (key === e.target.textContent) {
          newState[key] += 1;
        }
      }
      return newState;
    });
  };

  countTotalFeedback() {
    let value = Object.values(this.state).reduce((acc, value) => {
      return acc + value;
    }, 0);

    return value;
  }

  countPositiveFeedbackPercentage() {
    let value = 0;

    if (!this.state.good) {
      return 0;
    }

    // використати reduce
    value = Object.values(this.state).reduce((acc, value) => {
      return acc + value;
    }, 0);

    return Math.round((this.state.good * 100) / value);
  }

  render() {
    return (
      <div>
        <GlobalStyles />
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.clickOnButton}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}