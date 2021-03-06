const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const introductionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
});

const infoQuestionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  questions: [{
    type: Schema.Types.ObjectId, ref: 'SurveyQuestion', required: true
  }],
});


const surveySchema = new Schema({
    intro: introductionSchema,
    preSurvey: infoQuestionSchema,
    tasks: [{
      type: Schema.Types.ObjectId, ref: 'SurveyTask', required: true
    }],
    postSurvey: infoQuestionSchema,
    id: {
      type: String,
      unique: true,
      required: true,
    },
}, { timestamps: true });

const Survey = model('Survey', surveySchema);

module.exports.Survey = Survey;
