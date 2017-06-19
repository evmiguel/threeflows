/* @flow weak */
import React from 'react';

import MixedQuestion from '../renderers/mixed_question.jsx';
import ChoiceForBehaviorResponse from '../renderers/choice_for_behavior_response.jsx';
import MinimalOpenResponse from '../renderers/minimal_open_response.jsx';



// This renders a question and an interaction.
export default React.createClass({
  displayName: 'QuestionInterpreter',
  
  propTypes: {
    question: React.PropTypes.object.isRequired,
    onLog: React.PropTypes.func.isRequired,
    onResponseSubmitted: React.PropTypes.func.isRequired
  },

  render() {
    const {question, onLog, onResponseSubmitted} = this.props;
    return (
      <div>
        <MixedQuestion question={question} />
        {this.renderInteractionEl(question, onLog, onResponseSubmitted)}
      </div>
    );
  },

  renderInteractionEl(question, onLog, onResponseSubmitted) {
    const key = JSON.stringify(question);
    if (question.open) {
      return <MinimalOpenResponse
        key={key}
        responsePrompt=""
        recordText="Click then speak"
        onLogMessage={onLog}
        forceResponse={question.force || false}
        onResponseSubmitted={onResponseSubmitted}
      />;
    }

    if (question.choices && question.choices.length > 0) {
      return <ChoiceForBehaviorResponse
        key={key}
        choices={question.choices}
        onLogMessage={onLog}
        onResponseSubmitted={onResponseSubmitted}
      />;
    }

    return <ChoiceForBehaviorResponse
      key={key}
      choices={['OK']}
      onLogMessage={onLog}
      onResponseSubmitted={onResponseSubmitted}
    />;
  }
});