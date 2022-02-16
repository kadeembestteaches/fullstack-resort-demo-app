import React from 'react';

import ResortItem from "./ResortItem";


const ResortList = () => {


  return (
    <section id="section-resort-list">
      <div className= "container">
      
          <h1>Featured Resort</h1>

          <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">

               <ResortItem title="Resort 1" image ="https://resort-destination-app.s3.us-east-2.amazonaws.com/resort1.webp" price={500} />
               <ResortItem title="Resort 2" image ="https://resort-destination-app.s3.us-east-2.amazonaws.com/resort2.webp" price={150} />
               <ResortItem title="Resort 3" image ="https://resort-destination-app.s3.us-east-2.amazonaws.com/resort3.webp" price={220} />
               <ResortItem title="Resort 4" image ="https://resort-destination-app.s3.us-east-2.amazonaws.com/resort4.webp" price={300} />

  
          </div>

      </div>

    </section>

  );
};

export default ResortList;
