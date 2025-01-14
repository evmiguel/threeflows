/* @flow weak */
import PropTypes from 'prop-types';

import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import * as Colors from 'material-ui/styles/colors';

import * as Routes from '../../routes.js';
import AudioRecorderFlow from '../../components/audio_recorder_flow.jsx';


/*
Component that handles recording a minimal audio response or responding by doing nothing.
Users can't review their responses.
This component also handles saving the wav file to the server, and then ultimately
passing back a URL to the audio as part of the response.
*/
export default class extends React.Component {
  props: {
    onLogMessage: Function,
    onResponseSubmitted: Function,
    forceResponse?: boolean,
    responsePrompt?: string,
    recordText?: string,
    ignoreText?: string,
  };

  static displayName = 'MinimalAudioResponse';

  static propTypes = {
    onLogMessage: PropTypes.func.isRequired,
    onResponseSubmitted: PropTypes.func.isRequired,
    forceResponse: PropTypes.bool,
    responsePrompt: PropTypes.string,
    recordText: PropTypes.string,
    ignoreText: PropTypes.string
  };

  static defaultProps = {
    forceResponse: false,
    responsePrompt: 'Respond.',
    recordText: 'Record',
    ignoreText: 'Say nothing'
  };

  onDone = ({uploadedUrl, downloadUrl}) => {
    const audioUrl = uploadedUrl;
    this.props.onLogMessage('message_popup_audio_response', {audioUrl});
    this.props.onResponseSubmitted({audioUrl, downloadUrl});
  };

  onIgnoreTapped = () => {
    this.props.onLogMessage('message_popup_audio_ignore');
    this.props.onResponseSubmitted({ignore: true});
  };

  render() {
    return (
      <div style={styles.container}>
        <AudioRecorderFlow
          url={Routes.messagePopupUploadWavPath()}
          start={this.renderStart}
          reviewing={this.renderReviewing}
          recording={this.renderRecording}
          onDone={this.onDone}
          onLogMessage={this.props.onLogMessage}
        />
      </div>
    );
  }

  renderStart = ({onRecord}) => {
    const {forceResponse} = this.props;

    return (
      <div>
        <div style={styles.instruction}>{this.props.responsePrompt}</div>
        <RaisedButton key="record" onTouchTap={onRecord} label={this.props.recordText} secondary={true} />
        {!forceResponse && <RaisedButton key="ignore" onTouchTap={this.onIgnoreTapped} label={this.props.ignoreText} />}
      </div>
    );
  };

  renderRecording = ({onDone}) => {
    return (
      <div>
        <div style={styles.instruction}></div>
        <RaisedButton key="done" onTouchTap={onDone} label="Done" primary={true} />
        <div style={{...styles.recordingMessage, color: Colors.accent1Color}}>Recording...</div>
      </div>
    );
  };

  // TODO(kr) hack
  renderReviewing = ({blob, downloadUrl, onSubmit, onRetry}) => {
    window.setTimeout(onSubmit, 0);
    return null;
  };

  // TODO(kr) hack
  renderDone = ({uploadedUrl}) => {
    window.setTimeout(this.onDone.bind(this, uploadedUrl), 0);
    return null;
  };
}

const styles = {
  container: {
    padding: 20,
    fontSize: 14
  },
  instruction: {
    paddingBottom: 5
  },
  recordingMessage: {
    paddingTop: 10
  }
};