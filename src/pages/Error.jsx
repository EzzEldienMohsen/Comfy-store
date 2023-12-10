import { Link, useRouteError } from 'react-router-dom'
const Error = () => {
  var error = useRouteError()
  if (error.status === 404) {
    return (
      <div className="grid place-items-center min-h-[80vh] px-8">
        <div className="text-center">
          <div className="text-9xl font-semibold text-primary">404</div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            page not found
          </h1>
          <p className="text-lg mt-6 leading-7">
            Sorry, we could not find the page you are looking for...
          </p>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary">
              go back home
            </Link>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="grid place-items-center min-h-[80vh] px-8">
      <h4 className="text-center font-bold- text-4xl capitalize">
        there was an error...
      </h4>
    </div>
  )
}

export default Error
