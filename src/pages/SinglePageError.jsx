import { useRouteError } from 'react-router-dom'
const SinglePageError = () => {
  var error = useRouteError()
  return <h4 className="text-4xl font-bold">{error.message}</h4>
}

export default SinglePageError
