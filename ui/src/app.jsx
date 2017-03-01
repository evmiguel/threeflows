/* @flow weak */
import React from 'react';
import {RouterMixin} from 'react-mini-router';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AuthContainer from './auth_container.jsx';
import VirtualSchoolPage from './virtual_school/virtual_school_page.jsx';
import HomePage from './home_page.jsx';
import RawPage from './ecd/raw_page.jsx';
import CandidatePage from './ecd/candidate_page.jsx';
import EvaluatorPage from './ecd/evaluator_page.jsx';
import * as MessagePopup from './message_popup/index.js';


export default React.createClass({
  displayName: 'App',

  mixins: [RouterMixin],

  propTypes: {
    muiTheme: React.PropTypes.object
  },

  getDefaultProps() {
    return {
      muiTheme: getMuiTheme()
    };
  },

  componentWillMount() {
    injectTapEventPlugin(); // material-ui, see https://github.com/zilverline/react-tap-event-plugin
  },

  routes: {
    '/': 'home',
    '/virtual_school': 'virtualSchool',

    '/message_popup*': 'messagePopupRedirect',
    
    '/teachermoments': 'messagePopup',
    '/playtest/:cohortKey': 'messagePopupPlaytest',
    '/teachermoments/bias': 'biasHome',
    '/teachermoments/alpha': 'alphaPlaytest',
    '/teachermoments/turk-0000': 'turk0000',
    '/teachermoments/mentoring': 'mentoringPlaytest',
    '/teachermoments/mindset': 'mindsetPlaytest',
    '/teachermoments/danson': 'dansonPlaytest',
    '/teachermoments/danson2': 'dansonPlaytest2',
    '/teachermoments/twine': 'messagePopupTwine',
    '/teachermoments/demo': 'messagePopupDemo',
    '/teachermoments/sub': 'messagePopupPairs',
    '/teachermoments/exploration': 'messagePopupExploration',
    '/teachermoments/evaluations/:id': 'messagePopupEvaluation',
    '/teachermoments/scoring': 'messagePopupScoring',
    '/teachermoments/author/questions' : 'messagePopupAuthorQuestions',
    '/teachermoments/author/questions/new' : 'messagePopupAuthorQuestionsNew',
    '/teachermoments/author/questions/:id' : 'messagePopupAuthorQuestionsEdit',
    
    '/ecd/raw': 'ecdRaw',
    '/ecd/candidate': 'ecdCandidate',
    '/ecd/evaluator': 'ecdEvaluator'
  },

  /*eslint-disable react/sort-comp */
  render(){
    return (
      <MuiThemeProvider muiTheme={this.props.muiTheme}>
        <AuthContainer isEmailRequired={false}>
          {this.renderCurrentRoute()}
        </AuthContainer>
      </MuiThemeProvider>
    );
  },

  home(query = {}) {
    return <HomePage />;
  },

  notFound(path) {
    return <HomePage />;
  },

  messagePopupRedirect(remainingPath, query = {}) {
    window.location = `/teachermoments${remainingPath}`;
  },

  messagePopup(query = {}) {
    // Uses a unique key per query string so that navigating between
    // rebuilds the page.
    return <MessagePopup.ExperiencePage key={JSON.stringify(query)} query={query} />;
  },

  messagePopupTwine(query = {}) {
    return <MessagePopup.TwinePage key={JSON.stringify(query)} />;
  },

  messagePopupDemo(query = {}) {
    return <MessagePopup.DemoPage key={JSON.stringify(query)} />;
  },

  alphaPlaytest(query = {}) {
    return <MessagePopup.InsubordinationPage query={{}}/>;
  },

  turk0000(query = {}) {
    return (
      <MessagePopup.MTurkPage
        query={query}
        experimentFactory={MessagePopup.InsubordinationExperiment} />
    );
  },

  // Home page for bias project, from website, reachout, etc.
  biasHome(query = {}) {
    return this.messagePopupPairs(query);
  },

  mentoringPlaytest(query = {}) {
    return <MessagePopup.MentoringPage query={{}}/>;
  },

  mindsetPlaytest(query = {}) {
    return <MessagePopup.MindsetPage query={{}}/>;
  },

  dansonPlaytest(query = {}) {
    return <MessagePopup.DansonExperiencePage query={{}}/>;
  },

  messagePopupPairs(query = {}) {
    return <MessagePopup.PairsExperiencePage query={{}}/>;
  },

  dansonPlaytest2(query = {}) {
    return <MessagePopup.DansonExperiencePage2 query={{}}/>;
  },

  messagePopupPlaytest(cohortKey, query = {}) {
    // Uses a unique key per query string so that navigating between
    // rebuilds the page.
    return <MessagePopup.PlaytestExperiencePage key={JSON.stringify(query)} cohortKey={cohortKey} query={{}}/>;
  },
  
  messagePopupExploration(query = {}) {
    return <MessagePopup.ExplorationPage query={query} />;
  },

  messagePopupScoring(query = {}) {
    return <MessagePopup.ScoringPage query={query} />;
  },

  messagePopupEvaluation(evaluationId) {
    return <MessagePopup.EvaluationViewerPage evaluationId={evaluationId} />;
  },

  messagePopupAuthorQuestions(query = {}) {
    return <MessagePopup.QuestionsPage />;
  },

  messagePopupAuthorQuestionsNew(query = {}){
    return <MessagePopup.NewQuestionPage />;
  },

  messagePopupAuthorQuestionsEdit(questionId, query = {}){
    return <MessagePopup.EditQuestionPage questionId={questionId}/>;
  },

  virtualSchool(query = {}) {
    return <VirtualSchoolPage query={query} />;
  },

  ecdRaw(query = {}) {
    return <RawPage query={query} />;
  },

  ecdCandidate(query = {}) {
    return <CandidatePage candidateEmail={query.email} />;
  },

  ecdEvaluator(query = {}) {
    return <EvaluatorPage evaluatorEmail={query.email} />;
  }
  /*eslint-enable react/sort-comp */
});
