import GitHubCard from './GitHubCard'
import renderer from 'react-test-renderer'

test('renders a snapshot', () => {
    const tree = renderer.create(<GitHubCard />).toJSON()
    expect(tree).toMatchSnapshot()
  })

//import GitHubCard from './GitHubCard'
//import renderer from 'react-test-renderer'

/*test('renders a snapshot', () => {
  const tree = renderer.create(<GitHubCard />).toJSON()
  expect(tree).toMatchSnapshot()
})*/

/*test('renders text MickeyMouse', () => {
    render(<App />)
    const nameElement = screen.getByText(/final fantasy/i)
    expect(nameElement).toBeInTheDocument()
  });*/

