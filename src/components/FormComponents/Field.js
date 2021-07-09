const Field = ({ label, id, error, ...rest }) => (
  <>
    <div className="input-group">
      <label>{label}</label>
      <input className="form-control" id={id} placeholder={label} {...rest} />
    </div>
    {error && (
      <p className="text-danger px-3">
        <small>{error}</small>
      </p>
    )}
  </>
);

export default Field;
