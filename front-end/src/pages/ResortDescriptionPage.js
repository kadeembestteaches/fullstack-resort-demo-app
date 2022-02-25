import React, { useState,useEffect } from 'react'
import Header from '../components/Header';
import Footer  from '../components/Footer';
import { useParams } from 'react-router-dom';


const ResortDescriptionPage = () => {

   const [resort, setResort] = useState({
       id:0,
       title:"",
       imageSrc:"",
       price:"",
       description:""
       
   });

   const {id} = useParams()

   

   useEffect(()=>{

 

    const URL = `http://localhost:5000/resorts/${id}`
    //MAKE AN AJAX request

    fetch(URL)
    .then(response=>response.json())

    .then(json=>{
    
      setResort(json.result)

    
 
    })
    .catch(err=>console.log(err))


   },[])

  return (
    <div className="grid grid-row-3" id="main-container">

    <Header/>
    <main>
        <section id="resort-description-section">
            <div className="container grid grid-col-4 grid-gap-2">

                <img src={resort.imageSrc} alt=""/>
            
                <div className="resort-description-content-area">
                    <h2>{resort.title}</h2>
                    <p>${resort.price}per night</p>
                    <h3>Details</h3>
                    <p>{resort.description}</p>
                </div>
            </div>
        </section>
    </main>
    <Footer/>

</div>
  )
}

export default ResortDescriptionPage