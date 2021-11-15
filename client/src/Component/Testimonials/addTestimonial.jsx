import react from "react"
import axios from "axios"
import "../Testimonials/testimonial.css"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { useState } from "react";
import { Link } from "react-router-dom"

const AddTestimonial = () => {
    const [toggleOpenForm, setToggleOpenForm] = useState(false);
    const [TestimonialFormData, setTestimonialFormData] = useState({
        Name: "",
        Photo: "",
        Post: "",
        TestimonialDescription: "",
    })

    const changeTestimonialFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setTestimonialFormData({ ...TestimonialFormData, [name]: value });
    };

    //post api for adding product in table

    const addTestimonials = async () => {

        try {
            console.log("TestimonialtFormData", TestimonialFormData);
            const response = await axios.post("http://localhost:8001/api/Testimonials/addTestimoinal", TestimonialFormData)
            console.log("response :", response);
            toast.success("Successfully Added Testimonial");
            setToggleOpenForm(false);
        } catch (error) {
            console.log("error", error);
            toast.error("Failed in adding Testimonial");
            setToggleOpenForm(false);
        }
    }
    const uploadImage = async e => {
        const files = e.target.files;
        const data = new FormData()
        data.append('file', files[0]);
        data.append('upload_preset', 'eyowpxag')
        // setLoading(true);

        const res = await fetch("https://api.cloudinary.com/v1_1/ddcy8imkx/image/upload", {
            method: 'POST',
            body: data
        })
        const file = await res.json();
        console.log(file);
        return file.secure_url;
        // setImagestate(file.secure_url)

        //setLoading(false)
    }

    return (
        <div id="addTestimonial" style={{ backgroundColor: "cadetblue", padding: "10px" }}>

            <div className="productDetails">
                <h1>Create Testimonial</h1>

                <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    value={TestimonialFormData.Name}
                    onChange={changeTestimonialFormData}>

                </input>

                <input
                    style={{ backgroundColor: "white", borderColor: "-internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133))", borderImage: "initial", color: "gray" }}
                    border
                    type="file"
                    name="Photo"
                    placeholder="image url"
                    onChange={async (e) => {
                        const url = await uploadImage(e)
                        setTestimonialFormData({ ...TestimonialFormData, ["Photo"]: url });
                        console.log("url", url);

                    }}></input>

                <input
                    type="text"
                    name="Post"
                    placeholder="Post"
                    value={TestimonialFormData.Post}
                    onChange={changeTestimonialFormData}></input>

                <input
                    type="text"
                    name="TestimonialDescription"
                    placeholder=" Add Testimonial Description"
                    value={TestimonialFormData.TestimonialDescription}
                    onChange={changeTestimonialFormData}></input>




                <button onClick={addTestimonials} >ADD TESTIMONIAL</button>


            </div>
        </div>
    )
}
export default AddTestimonial;