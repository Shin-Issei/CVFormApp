function Display(props) {
  return (
    <div className="Display">
      <p className="section"> Contact Information</p>
      <div>Name: {props.name}</div>
      <div>Phone: {props.phone}</div>
      <div>E-mail: {props.email}</div>
      <p className="section"> Educational Experience </p>
      <div>College: {props.education}</div>
      <div>Previous Jobs: {props.prevJobs}</div>
      <div>Relevant Skills: <p id="skill-section">{props.skills}</p></div>
    </div>
  );
}

export default Display;
