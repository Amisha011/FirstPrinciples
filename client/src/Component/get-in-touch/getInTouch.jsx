import React from "react";

const GetInTouch = () => {
    return (
        <div>
            <section class="client-logo-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-6">
                            <div class="single-client mt-30 text-center">
                                <img src="assets/images/client_logo_01.png" alt="Logo" />
                            </div>
                        </div>
                        <div class="col-md-3 col-6">
                            <div class="single-client mt-30 text-center">
                                <img src="assets/images/client_logo_02.png" alt="Logo" />
                            </div>
                        </div>
                        <div class="col-md-3 col-6">
                            <div class="single-client mt-30 text-center">
                                <img src="assets/images/client_logo_03.png" alt="Logo" / >
                            </div>
                        </div>
                        <div class="col-md-3 col-6">
                            <div class="single-client mt-30 text-center">
                                <img src="assets/images/client_logo_04.png" alt="Logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="contact" class="contact-area">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="section-title text-center pb-10">
                                <h4 class="title">Get In touch</h4>
                                <p class="text">Stop wasting time and money designing and managing a website that doesn’t get
                                    results. Happiness guaranteed!</p>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="contact-form">
                                <form id="contact-form" action="assets/contact.php" method="post" data-toggle="validator">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="single-form form-group">
                                                <input type="text" name="name" placeholder="Your Name"
                                                    data-error="Name is required." required="required" />
                                                <div class ="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="single-form form-group">
                                                <input type="email" name="email" placeholder="Your Email"
                                                    data-error="Valid email is required." required="required" />
                                                <div class ="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="single-form form-group">
                                                <input type="text" name="subject" placeholder="Subject"
                                                    data-error="Subject is required." required="required" />
                                                <div class ="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="single-form form-group">
                                                <input type="text" name="phone" placeholder="Phone"
                                                    data-error="Phone is required." required="required" />
                                                <div class ="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="single-form form-group">
                                                <textarea placeholder="Your Mesaage" name="message"
                                                    data-error="Please, leave us a message." required="required"></textarea>
                                                <div class="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <p class="form-message"></p>
                                        <div class="col-md-12">
                                            <div class="single-form form-group text-center">
                                                <button type="submit" class="main-btn">send message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default GetInTouch; 