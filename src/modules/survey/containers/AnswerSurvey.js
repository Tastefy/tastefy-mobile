import { compose, withHandlers } from 'recompose'
import { graphql } from 'react-apollo'
import { reduxForm } from 'redux-form'
import Survey from '../components/Survey'
import { surveyById } from '../queries'
import withLoading from '../../common/hocs/with-loading'
import { createAnswer as createAnswerMutation } from '../mutations'
import withCurrentUser from '../../auth/hocs/with-current-user'

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
    onSubmit: ({ createAnswer }) => async (values) => {
      console.log(values)
      try {
        await Promise.all(Object.keys(values).map(questionId => createAnswer(questionId, values[questionId])))
      } catch (err) {
        console.log(err)
      }

      alert('Finished!')
    },
  }),
  reduxForm({
    form: 'survey',
  }),
)(Survey)
