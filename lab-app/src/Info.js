import "./Info.css";

const firstIcon = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png";
const secondIcon = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png";
const thirdIcon = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png";
const fourthIcon = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png";

const Info = () => {
  return (
    <div className='Info'>
      <div>
        <img className='custom-img' src={firstIcon} alt='icon1' />
        <h3>Declarative</h3>
        <p className='Info-text'>React makes it painless to create interactive UIs.</p>
      </div>
      <div>
        <img className='custom-img' src={secondIcon} alt='icon2' />
        <h3>Components</h3>
        <p className='Info-text'>Build encapsulated components that manage their state.</p>
      </div>
      <div>
        <img className='custom-img' src={thirdIcon} alt='icon3' />
        <h3>Single-Way</h3>
        <p className='Info-text'>A set of immutable values are passed to the component's.</p>
      </div>
      <div>
        <img className='custom-img' src={fourthIcon} alt='icon4' />
        <h3>JSX</h3>
        <p className='Info-text'>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
};

export default Info;
