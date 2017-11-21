import { compose, withHandlers } from 'recompose'
import { graphql } from 'react-apollo'
import { reduxForm } from 'redux-form'
import Survey from '../components/Survey'
import { surveyById } from '../queries'
import withLoading from '../../common/hocs/with-loading'
import { createAnswer as createAnswerMutation } from '../mutations'
import withCurrentUser from '../../auth/hocs/with-current-user'
import { makeVoucherAvailable as makeVoucherAvailableMutation } from '../../voucher/mutations'

const mapEdges = edges => edges.map(edge => edge.node)

const mapSurvey = survey => ({
  ...survey,
  questions: mapEdges(survey.questions.edges).map(question => ({ ...question, config: JSON.parse(question.config) })),
})
export default compose(
  withCurrentUser,
  graphql(surveyById, {
    options: ({ surveyId }) => ({
      variables: { surveyId },
    }),
    props: ({ data }) => ({
      survey: data.loading ? null : mapSurvey(data.viewer.Survey),
      loading: data.loading,
    }),
  }),
  withLoading(props => props.loading),
  graphql(makeVoucherAvailableMutation, {
    props: ({ ownProps: { voucherId }, mutate }) => ({
      makeVoucherAvailable: () => mutate({
        variables: {
          clientMutationId: 'clientMutationId',
          voucherId,
        },
      }),
    }),
  }),
  graphql(createAnswerMutation, {
    props: ({ ownProps: { user }, mutate }) => ({
      createAnswer: (questionId, value) => mutate({
        variables: {
          questionId,
          value,
          userId: user.id,
          clientMutationId: 'clientMutationId',
        },
      }),
    }),
  }),
  withHandlers({
    onSubmit: ({ createAnswer, makeVoucherAvailable }) => async (values) => {
      console.log(values)
      try {
        await Promise.all(Object.keys(values).map(questionId => createAnswer(questionId, values[questionId])))
        await makeVoucherAvailable()
        alert('Success!')
      } catch (err) {
        alert(err.toString())
        console.log(err)
      }
    },
  }),
  reduxForm({
    form: 'survey',
  }),
)(Survey)
