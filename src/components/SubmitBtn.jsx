import { useNavigation } from 'react-router-dom'

const SubmitBtn = ({ text }) => {
  var navigation = useNavigation()
  var isSubmitting = navigation.state === 'submitting'
  return (
    <button
      type="submit"
      className="btn btn-primary btn-block uppercase"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner loading-sm"></span>
          sending...
        </>
      ) : (
        text || 'submitting'
      )}
    </button>
  )
}

export default SubmitBtn
