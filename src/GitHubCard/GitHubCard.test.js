import GitHubCard from './src/GitHubCard/GitHubCard.js'
import renderer from 'react-test-renderer'

test('renders a snapshot', () => {
  const tree = renderer.create(<GitHubCard />).toJSON()
  expect(tree).toMatchSnapshot()
})