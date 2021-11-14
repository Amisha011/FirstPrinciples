import React from "react";
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import AddTestimonial from "./addTestimonial";
import EditTestimonial from './editTestimonial';


const Testimonials = () => {


    // const history = useHistory();
    const [state, setState] = useState([]);


    const [toggleOpenForm, setToggleOpenForm] = useState(false);
    //post api for adding product in table

    // const [allTestimonials, setAllTestimonials] = useState([]);
    const getTestimonials = async () => {
        console.log("smtg smtg")
        const response = await axios.get("http://Localhost:8001/api/Testimonials/getAllTestimoinal");
        console.log("response", response);
        const arrayOfData = []

        setState(arrayOfData);


    }
    useEffect(() => {
        getTestimonials()
            
    }, [])



    return (
        <div>

            <section id="testimonial" class="testimonial-area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="section-title text-center pb-10">
                                <h4 class="title">Testimonial</h4>
                                <p class="text">Stop wasting time and money designing and managing a website that doesn’t get
                                    results. Happiness guaranteed!</p>
                                <button onClick={
                                    (e) => {
                                        e.preventDefault();
                                        setToggleOpenForm(!toggleOpenForm)
                                    }
                                } > {toggleOpenForm ? "Close form" : "Add Testimonial"} </button>
                            </div>
                        </div>
                    </div>
                    {toggleOpenForm && <AddTestimonial view="EDIT" />}
                    {state.map((data) => {
                        return (
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="row testimonial-active">
                                        <div class="col-lg-4">

                                            <div class="single-testimonial mt-30 mb-30 text-center">
                                                <div class="testimonial-image">
                                                    <img src={data.Photo} alt="Author" />
                                                </div>
                                                <div class="testimonial-content">
                                                    <p class="text">{data.testimonialDescription}</p>
                                                    <h6 class="author-name">{data.Name}</h6>
                                                    <span class="sub-title">{data.Post}</span>
                                                    {/* <i onClick={() => {
                                                history.push({
                                                    
                                                });
                                            }} class="far fa-edit" >Edit</i> */}

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )

}
export default Testimonials;