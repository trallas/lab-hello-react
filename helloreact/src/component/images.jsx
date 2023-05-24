import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

function images() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
          <img src={icon1}/>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs</p>
          </div>
          <div className="col">
          <img src={icon2}/>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
          </div>
          <div className="col">
          <img src={icon3}/>
          <h2>Single-way</h2>
          <p>A set of immutable values are passed to the components.</p>
          </div>
          <div className="col">
          <img src={icon4}/>
          <h2>JXS</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default images;
