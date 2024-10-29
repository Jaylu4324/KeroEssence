import React from "react";

export const Header = (props) => {
  return (
    <header id="header" >
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-6  col-sm-12 intro-text justify-content-center mx-0 px-0" style={{textAlign:"center",color:"black"}}>
                <h1 className="text-center" style={{textAlign:"center",color:"black",verticalAlign:"center",textTransform:"capitalize",fontSize:"25px"}}>
                  {props.data ? props.data.title : "Loading"}
                  {props.data && (
                    <div style={{ textTransform: "capitalize", textAlign: "center" ,fontSize:"20px" ,color:"black"}}>
                      Skincare
                    </div>
                  )}
                  
                </h1>
                <p style={{fontSize:"25px",color:"black"}}>{props.data ? props.data.paragraph : "Loading"}</p>
                <a href="#features" className="btn btn-custom btn-lg page-scroll">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
