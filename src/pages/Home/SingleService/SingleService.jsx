// import React, { useEffect, useState } from "react";
// import { NavLink, useLoaderData, useLocation } from "react-router-dom";
// import "./SingleService.css";

// const SingleService = () => {
//   const location = useLocation();
//   const { title, description, details, image, id } = location.state || {};

//   const [serviceName, setServiceName] = useState([]);
//   useEffect(() => {
//     fetch("services.json")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setServiceName(data);
//       });
//   }, []);

//   return (
//     <div className="single-service-page">
//       <div className="ss-banner">
//         <div className="page-title">
//           <h2>Services Details</h2>
//         </div>
//         <div className="breadcrumb-nav">
//           <NavLink to="/">Home</NavLink> | <span>Service Details</span>
//         </div>
//       </div>
//       <div className="container ss-content">
//         <div className="row">
//           <div className="col-lg-8">
//             <div className="service-details">
//               <img src={image} alt="" />
//               <h3 className="ss-title">{title}</h3>
//               <p>{details}</p>
//               {/* TODO: line break have to apply and other service details should be added */}
//             </div>
//           </div>
//           <div className="col-lg-4">
//             <ul>
//               {serviceName.map((item) => (
//                 <li>{item.title}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         {/* TODO: let's talk have to apply */}
//       </div>
//     </div>
//   );
// };

// export default SingleService;

//  2ndddddddddddddddddd
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./SingleService.css";

const SingleService = () => {
  const location = useLocation();
  const { title, description, details, image, id } = location.state || {};

  const [serviceName, setServiceName] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServiceName(data);
      });
  }, []);

  return (
    <div className="single-service-page">
      <div className="ss-banner">
        <div className="page-title">
          <h2>Services Details</h2>
          <p>{description}</p>
        </div>
        <div className="breadcrumb-nav">
          <NavLink to="/">Home</NavLink> | <span>Service Details</span>
        </div>
      </div>
      <div className="container ss-content">
        <div className="row">
          <div className="col-lg-8">
            <div className="service-details">
              <img src={image} alt="" />
              <h3 className="ss-title">{title}</h3>
              <p>{details}</p>
              {/* TODO: line break have to apply and other service details should be added */}
            </div>
          </div>
          <div className="col-lg-4">
            <ul className="service-category">
              {serviceName.map((item) => (
                <li key={item.id}>
                  <Link to={`/singleservice/${item.id}`}>{item.title}</Link>
                  {/* TODO: link have to dynamic */}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* TODO: let's talk have to apply */}
      </div>
    </div>
  );
};

export default SingleService;
