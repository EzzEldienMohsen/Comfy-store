/* eslint-disable react/prop-types */
const FormInput = ({ type, name, label, defaultValue, size }) => {
  return (
    <label className="form-control ">
      <div className="label">
        <span className="label-text capitalize">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`${size} input input-bordered`}
      />
    </label>
  )
}

export default FormInput
