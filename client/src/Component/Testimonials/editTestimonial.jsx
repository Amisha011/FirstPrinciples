import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'
import { Link } from "react-router-dom";

const customStyles = {
    overlay: {
        backgroundColor: "rgba(0,0,0,0.4)",
        zIndex: 1,
    },
    content: {
        color: "orange",
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        flexDirection: "column",
        width: "450px",
    },
};

const EditTestimonialModal = (testimonial) => {
    // Initializations
    //   const history = useHistory();
console.log(testimonial)
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    // States
    // Functions
    const [testimonialFormData, setTestimonialFormData] = useState({
        Name: testimonial.Name,
        Post: testimonial.Post,
        Photo: testimonial.Photo,
        TestimonialDescription: testimonial.TestimonialDescription
    })
    const [testimonialId, setTestimonialId] = useState(" ");
    const changeTestimonialFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setTestimonialFormData({ ...testimonialFormData, [name]: value });
    };

    const updateTestimonial = async () => {
        console.log("det",testimonialFormData);
        console.log(testimonialId);
        console.log(testimonial._id)
        try {
            const response = await axios.put(`http://localhost:8001/api/Testimonials/updateProduct/${testimonial._id}`, testimonialFormData);
            toast.success("Successfully Updated tsetimonial !!");
        } catch (error) {
            console.log("error", error.response);
            toast.error("error occured in editing tsetimonial details")
        }
    }
    useEffect(() => {
        console.log("hello")
    }, [])



    return (
        <>
            <p
                onClick={openModal}
                className="cursor-pointer"
                style={{
                    cursor: "pointer",
                    color: "#007bff",
                }}
            >
                <i class="fas fa-edit"></i> ??
            </p>
            <Modal
                isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={false}
                shouldCloseOnEsc={false}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="reset-screen">
                    <div id="addTestimonial" style={{ backgroundColor: "cadetblue", padding: "10px" }}>
                        Add Testimonialss
                        <div className="productDetails">
                            <h1>ADD Testimonials details </h1>

                            <input
                                type="text"
                                name="Name"
                                placeholder="Name"
                                value={testimonialFormData.Name}
                                onChange={changeTestimonialFormData}>

                            </input>

                            <input
                                style={{ backgroundColor: "white", borderColor: "-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))", borderImage: "initial", color: "gray" }}
                                border
                                type="file"
                                name="Photo"
                                placeholder="image url"
                                value={testimonialFormData.Photo}
                                onChange={changeTestimonialFormData}>
                            </input>

                            <input
                                type="text"
                                name="Post"
                                placeholder="Post"
                                value={testimonialFormData.Post}
                                onChange={changeTestimonialFormData}></input>

                            <input
                                type="text"
                                name="TestimonialDescription"
                                placeholder=" Add Testimonial Description"
                                value={testimonialFormData.TestimonialDescription}
                                onChange={changeTestimonialFormData}></input>




                            <button onClick={updateTestimonial} >Update Testimonial</button>
                            <EditTestimonialModal/>


                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default EditTestimonialModal;
