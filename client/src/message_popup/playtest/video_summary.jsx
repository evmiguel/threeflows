/* @flow weak */
import _ from 'lodash';
import PropTypes from 'prop-types';

import React from 'react';
import YouTube from 'react-youtube';
import Divider from 'material-ui/Divider';

// Delay display of video summary because of slow loading of youtube videos.
export default class extends React.Component {
  static displayName = 'VideoSummary';

  static propTypes = {
    questions: PropTypes.array.isRequired,
    responses: PropTypes.array.isRequired,
    onLogMessage: PropTypes.func.isRequired,
    delayRenderingMs: PropTypes.number
  };

  constructor(props) {
    super(props);
    const {delayRenderingMs} = props;

    this.state = {
      hasRendered: !(delayRenderingMs && delayRenderingMs > 0)
    };
  }

  componentDidMount() {
    const {delayRenderingMs} = this.props;
    if (!delayRenderingMs) return;
    this.timeout = window.setTimeout(this.onDelayFinished, delayRenderingMs);
  }

  componentWillUnmount() {
    if (this.timeout) window.clearTimeout(this.timeout);
  }

  timeout = null;

  onDelayFinished = () => {
    this.setState({ hasRendered: true });
  };

  onPlayAudio = (question, response) => {
    this.props.onLogMessage('video_summary_play_audio', {question, response});
  };

  onPlayVideo = (question) => {
    this.props.onLogMessage('video_summary_play_video', {question});
  };

  render() {
    return (
      <div>
        <p style={styles.summaryTitle}>Simulation Summary</p>
        <Divider />
        {this.renderSummary()}
      </div>
    );
  }

  renderSummary = () => {
    const {questions, responses} = this.props;
    const {hasRendered} = this.state;
    if (!hasRendered) {
      return null;
    }

    const responsesEl = [];
    for(let i = 0; i < questions.length; i++) {
      if(questions[i].stage !== 'scenario') {
        continue;
      }
      responsesEl.push(
        <div key={"question-" + i} style ={_.merge(styles.instructions, styles.summaryQuestion)}>
          <div style={styles.videoContainer}>
            <YouTube
              videoId={questions[i].youTubeId}
              opts={{
                height: '100%',
                width: '100%',
                playerVars: { // https://developers.google.com/youtube/player_parameters
                  autoplay: 0,
                  controls: 1,
                  rel: 0,
                  showinfo: 0,
                  start: questions[i].start,
                  end: questions[i].end
                }
              }}
              onPlay={this.onPlayVideo.bind(this, questions[i])}
            />
          </div>
          <p style={styles.responseLabel}>Your Response:</p>
          <audio 
            key={'response-' + i} 
            onPlay={this.onPlayAudio.bind(this, questions[i], responses[i])} 
            controls={true} 
            src={responses[i].downloadUrl} 
            style={{paddingTop: 0, paddingBottom: 20}}/>
        </div>
      );
    }

    return <div>{responsesEl}</div>;
  };
}


const styles = {
  instructions: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  summaryTitle: {
    fontSize: 20,
    padding: 20,
    paddingBottom: 5,
    margin: 0,
    fontWeight: 'bold'
  },
  summaryQuestion: {
    whiteSpace: 'pre-wrap',
    fontSize: 16,
    lineHeight: 1.2,
    paddingTop: 10,
    paddingBottom: 10
  },
  responseLabel: {
    marginTop: 10,
    marginBottom: 0,
    fontSize: 12
  },
  videoContainer: {
    height: 230
  }
};