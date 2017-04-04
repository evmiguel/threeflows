/* @flow weak */
import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import * as Api from '../../helpers/api.js';
import ReadMore from '../renderers/read_more.jsx';


// Render the question and response.  For now, only works with text questions
// and audio responses.
export default React.createClass({
  displayName: 'ReviewStep',

  propTypes: {
    row: React.PropTypes.object.isRequired,
    token: React.PropTypes.string.isRequired,
    emailAddress: React.PropTypes.string.isRequired
  },

  getInitialState() {
    return {
      isAudioExpanded: false
    };
  },

  onListenTapped(e) {
    const {isAudioExpanded} = this.state;
    this.setState({ isAudioExpanded: !isAudioExpanded });
  },

  render() {
    const {row, token, emailAddress} = this.props;
    const audioUrl = row.audio_url;
    if (!audioUrl) return null;

    const audioUrlWithTokens = Api.audioUrlWithTokens(audioUrl, token, emailAddress);
    const questionText = row.question.text;
    return (
      <div key={audioUrlWithTokens}>
        <ReadMore fulltext={questionText}/>
        {this.renderAudioOnDemand(audioUrlWithTokens)}
      </div>
    );
  },

  // Rendering causes the browser to load all audio files from the
  // server at once in parallel, so require a user step to defer downloading
  // all that data until they want it.
  renderAudioOnDemand(audioUrlWithTokens) {
    const {isAudioExpanded} = this.state;
    return (isAudioExpanded)
      ? <audio
        key={audioUrlWithTokens}
        controls={true}
        src={audioUrlWithTokens}
        autoPlay={true}
        style={{paddingTop: 10, paddingBottom: 20}} />
      : <RaisedButton
        onTouchTap={this.onListenTapped}
        style={styles.button}
        primary={true}
        label="Listen" />;
  }
});

const styles = {
  button: {
    marginTop: 20
  }
};