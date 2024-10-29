import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          {/* <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div> */}
          <div className="col-xs-12 col-md-12">
            <div className="about-text">
              <h2>About Us</h2>
              <p style={{fontSize:"20px"}}>{props.data ? props.data.paragraph : "loading..."}</p>
              {/* <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`} style={{fontSize:"20px"}}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`} style={{fontSize:"20px"}}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div> */}
{/* <table class="table" >
  <thead>
    <tr>
      <th scope="col">image</th>
      <th scope="col">Help</th>
      <th scope="col">Support</th>
    
    </tr>
  </thead>
  <tbody>
    <tr className="d-flex align-items-center">
      <th scope="row">1213, 12th Floor, Shivalik Shilp II,<br/> Near Keshav Baug Party Plot, <br/>opp ITC Hotel Project,<br/> Vastrapur, Ahmedabad, Gujarat - 380015.</th>
      <td className="align-middle"> Search</td>
      <td>About Us</td>
     
    </tr>
    <tr>
      <th scope="row"><a>+919909979500</a></th>
      <td className="d-flex align-items-center">Help</td>
      <td>Career</td>
     
    </tr>
    <tr>
      <th scope="row"><a>mail</a></th>
      <td>Information</td>
      <td>Delievry</td>
   
    </tr>
  </tbody>
</table> */}





            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
