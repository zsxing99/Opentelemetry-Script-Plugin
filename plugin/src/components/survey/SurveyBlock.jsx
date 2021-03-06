import React from 'react';
import QuestionBlock from './QuestionBlock';
import { connect } from "react-redux";
import { addPreSurvey, addPostSurvey } from "../../redux-store/actions";

class SurveyBlock extends React.Component {
  constructor() {
    super();
    this.state = { answers: [] };
  }

  updateQuestionAnswer(qid, selectedOption) {
    this.setState(prevState => ({
      answers: [
        ...prevState.answers,
        {
          question: qid,
          selectedOption,
        }
      ]
    }));
  };

  handleSurveyAnswers() {
    const sessionId = window.sessionStorage.getItem("ux-test-olap-session");
    if (this.props.type === "pre-survey") {
      this.props.addPreSurvey(sessionId, this.state.answers);
    }
    else if (this.props.type === "post-survey") {
      this.props.addPostSurvey(sessionId, this.state.answers);
    }
  }

  render() {
    const onclick = () => {
      this.handleSurveyAnswers();
      this.props.callback();
    }
    return (
      <div>
        <div>{ this.props.title }</div>
        { 
          this.props.questions.map(question => 
            <QuestionBlock
              updateQuestionAnswer={this.updateQuestionAnswer.bind(this)}
              question={question}
            />
          )
        }
        <button onClick={onclick}>Complete</button>
      </div>
    );
  }
}

// export default SurveyBlock;
export default connect(
  null,
  { addPreSurvey, addPostSurvey }
)(SurveyBlock);
