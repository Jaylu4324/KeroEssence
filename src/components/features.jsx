import React from "react";
import Img from "./DV_02159.JPG"
import Img1 from "./DV_02155.JPG"
import Img2 from "./DV_02146.JPG"
export const Features = (props) => {
  const arr=[Img,Img1,Img2]
  return (
    <div id="features" className="text-center container-fluid " style={{paddingTop:"25px"}} >
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Products</h2>
        </div>

        <div className="row">

        {arr.map((e,i)=>{return <div className="col-md-4"><img src={e} style={{height:"250px",width:"200px"}} className="itemss"/>
        <h3>{props.data&&props.data[i].title}</h3>
        <div>{props.data&&props.data[i].quantity}</div>
        <div>{props.data&&props.data[i].li.map((e)=>( <li class="list-group-item " style={{backgroundColor:"#f6f6f6",fontSize:"20px",border:"none"}}>{e}</li>))
          }


          </div>
       
        
        </div>})

}
        <div>
        </div>
          {/* {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-4 col-md-4 text-center">
                  {" "}
                  
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."} */}
        </div>
       
      </div>
    </div>
  );
};
