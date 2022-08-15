function Display(props) {
  return (
    <div>
        Contact Information
      <div>Name: {props.name}</div>
      <div>Phone: {props.phone}</div>
      <div>E-mail: {props.email}</div>
    </div>
  );
}

export default Display;
