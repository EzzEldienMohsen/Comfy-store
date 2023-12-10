import { Outlet, useNavigation } from 'react-router-dom'
import { Header, Navbar, Loading } from '../components'

const HomeLayout = () => {
  var navigation = useNavigation()
  var isPageLoading = navigation.state === 'loading'
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <div className="align-element py-20">
          <Outlet />
        </div>
      )}
    </>
  )
}

export default HomeLayout
