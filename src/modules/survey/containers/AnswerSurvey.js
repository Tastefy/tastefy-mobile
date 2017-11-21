import { compose } from 'recompose'
import { graphql } from 'react-apollo'
import { reduxForm } from 'redux-form'
import Survey from '../components/Survey'
import { surveyById } from '../queries'
import withLoading from '../../common/hocs/with-loading'

const mapEdges = edges => edges.map(edge => edge.node)

const mapSurvey = survey => ({
  ...survey,
  questions: mapEdges(survey.questions.edges).map(question => ({ ...question, config: JSON.parse(question.config) })),
})
export default compose(
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
  reduxForm({
    form: 'survey',
  }),
)(Survey)
