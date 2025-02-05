import React from "react";

export default function Layout(){
    return(
        <React.Fragment>
             {/*Hero Section*/}
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                <h1>Welcome to Medilab</h1>
                <h2>We are team of talented designers making websites with Bootstrap</h2>
                <a href="#about" className="btn-get-started scrollto">Get Started</a>
                </div>
            </section>{/*End Hero*/} 

            <main id="main">

                {/*Why us section*/}
                <section id="why-us" className="why-us">
                <div className="container">

                    <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="content">
                        <h3>Why Choose Medilab?</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                            Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                        </p>
                        <div className="text-center">
                            <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-8 d-flex align-items-stretch">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                        <div className="row">
                            <div className="col-xl-4 d-flex align-items-stretch">
                            <div className="icon-box mt-4 mt-xl-0">
                                <i className="bx bx-receipt"></i>
                                <h4>Corporis voluptates sit</h4>
                                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                            </div>
                            </div>
                            <div className="col-xl-4 d-flex align-items-stretch">
                            <div className="icon-box mt-4 mt-xl-0">
                                <i className="bx bx-cube-alt"></i>
                                <h4>Ullamco laboris ladore pan</h4>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                            </div>
                            </div>
                            <div className="col-xl-4 d-flex align-items-stretch">
                            <div className="icon-box mt-4 mt-xl-0">
                                <i className="bx bx-images"></i>
                                <h4>Labore consequatur</h4>
                                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/*End .content*/}
                    </div>
                    </div>

                </div>
                </section>{/*End Why Us Section*/} 

                {/*About Section*/}
                <section id="about" className="about">
                <div className="container-fluid">

                    <div className="row">
                    <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                        <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4"></a>
                    </div>

                    <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                        <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                        <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>

                        <div className="icon-box">
                        <div className="icon"><i className="bx bx-fingerprint"></i></div>
                        <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                        <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                        </div>

                        <div className="icon-box">
                        <div className="icon"><i className="bx bx-gift"></i></div>
                        <h4 className="title"><a href="">Nemo Enim</a></h4>
                        <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                        </div>

                        <div className="icon-box">
                        <div className="icon"><i className="bx bx-atom"></i></div>
                        <h4 className="title"><a href="">Dine Pad</a></h4>
                        <p className="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                        </div>

                    </div>
                    </div>

                </div>
                </section>{/*End About Section */}

                {/*Counts Section*/}
                <section id="counts" className="counts">
                <div className="container">

                    <div className="row">

                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                        <i className="fas fa-user-md"></i>
                        <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" className="purecounter"></span>
                        <p>Doctors</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                        <div className="count-box">
                        <i className="far fa-hospital"></i>
                        <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" className="purecounter"></span>
                        <p>Departments</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                        <i className="fas fa-flask"></i>
                        <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1" className="purecounter"></span>
                        <p>Research Labs</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                        <i className="fas fa-award"></i>
                        <span data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="1" className="purecounter"></span>
                        <p>Awards</p>
                        </div>
                    </div>

                    </div>

                </div>
                </section>{/*End Counts Section*/} 

                {/*Services Section*/}
                <section id="services" className="services">
                <div className="container">

                    <div className="section-title">
                    <h2>Services</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="icon-box">
                        <div className="icon"><i className="fas fa-heartbeat"></i></div>
                        <h4><a href="">Lorem Ipsum</a></h4>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                        <div className="icon-box">
                        <div className="icon"><i className="fas fa-pills"></i></div>
                        <h4><a href="">Sed ut perspiciatis</a></h4>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                        <div className="icon-box">
                        <div className="icon"><i className="fas fa-hospital-user"></i></div>
                        <h4><a href="">Magni Dolores</a></h4>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                        <div className="icon-box">
                        <div className="icon"><i className="fas fa-dna"></i></div>
                        <h4><a href="">Nemo Enim</a></h4>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                        <div className="icon-box">
                        <div className="icon"><i className="fas fa-wheelchair"></i></div>
                        <h4><a href="">Dele cardo</a></h4>
                        <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                        <div className="icon-box">
                        <div className="icon"><i className="fas fa-notes-medical"></i></div>
                        <h4><a href="">Divera don</a></h4>
                        <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                        </div>
                    </div>

                    </div>

                </div>
                </section>{/*End Services Section*/} 

                {/*Appointment Section*/}
                <section id="appointment" className="appointment section-bg">
                <div className="container" >

                    <div className="section-title">
                    <h2>Make an Appointment</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <form action="forms/appointment.php" method="post" role="form" className="php-email-form">
                    <div className="row">
                        <div className="col-md-4 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                        <div className="validate"></div>
                        </div>
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
                        <div className="validate"></div>
                        </div>
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                        <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                        <div className="validate"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 form-group mt-3">
                        <input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                        <div className="validate"></div>
                        </div>
                        <div className="col-md-4 form-group mt-3">
                        <select name="department" id="department" className="form-select">
                            <option value="">Select Department</option>
                            <option value="Department 1">Department 1</option>
                            <option value="Department 2">Department 2</option>
                            <option value="Department 3">Department 3</option>
                        </select>
                        <div className="validate"></div>
                        </div>
                        <div className="col-md-4 form-group mt-3">
                        <select name="doctor" id="doctor" className="form-select">
                            <option value="">Select Doctor</option>
                            <option value="Doctor 1">Doctor 1</option>
                            <option value="Doctor 2">Doctor 2</option>
                            <option value="Doctor 3">Doctor 3</option>
                        </select>
                        <div className="validate"></div>
                        </div>
                    </div>

                    <div className="form-group mt-3">
                        <textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
                        <div className="validate"></div>
                    </div>
                    <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Make an Appointment</button></div>
                    </form>

                </div>
                </section>{/*End Appointment Section*/} 

                {/*Departments Section*/}
                <section id="departments" className="departments">
                <div className="container">

                    <div className="section-title">
                    <h2>Departments</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row gy-4">
                    <div className="col-lg-3">
                        <ul className="nav nav-tabs flex-column">
                        <li className="nav-item">
                            <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Cardiology</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Neurology</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Hepatology</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Pediatrics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Eye Care</a>
                        </li>
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        <div className="tab-content">
                        <div className="tab-pane active show" id="tab-1">
                            <div className="row gy-4">
                            <div className="col-lg-8 details order-2 order-lg-1">
                                <h3>Cardiology</h3>
                                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                            </div>
                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                <img src="/Medilab/assets/img/departements-1.jpg" alt="" className="img-fluid"/>
                            </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="tab-2">
                            <div className="row gy-4">
                            <div className="col-lg-8 details order-2 order-lg-1">
                                <h3>Et blanditiis nemo veritatis excepturi</h3>
                                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                            </div>
                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                <img src="/Medilab/assets/img/departments-2.jpg" alt="" className="img-fluid"/>
                            </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="tab-3">
                            <div className="row gy-4">
                            <div className="col-lg-8 details order-2 order-lg-1">
                                <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                                <p className="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                                <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                            </div>
                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                <img src="/Medilab/assets/img/departments-3.jpg" alt="" className="img-fluid"/>
                            </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="tab-4">
                            <div className="row gy-4">
                            <div className="col-lg-8 details order-2 order-lg-1">
                                <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                                <p className="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                                <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                            </div>
                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                <img src="/Medilab/assets/img/departments-4.jpg" alt="" className="img-fluid"/>
                            </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="tab-5">
                            <div className="row gy-4">
                            <div className="col-lg-8 details order-2 order-lg-1">
                                <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                                <p className="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                                <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                            </div>
                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                <img src="/Medilab/assets/img/departments-5.jpg" alt="" className="img-fluid"/>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
                </section>{/*End Departments Section*/} 

                {/*Doctors Section*/}
                <section id="doctors" className="doctors">
                <div className="container">

                    <div className="section-title">
                    <h2>Doctors</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">

                    <div className="col-lg-6">
                        <div className="member d-flex align-items-start">
                        <div className="pic"><img src="/Medilab/assets/img/doctors/doctors-1.jpg" className="img-fluid"/></div>
                        <div className="member-info">
                            <h4>Walter White</h4>
                            <span>Chief Medical Officer</span>
                            <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                            <div className="social">
                            <a href=""><i className="ri-twitter-fill"></i></a>
                            <a href=""><i className="ri-facebook-fill"></i></a>
                            <a href=""><i className="ri-instagram-fill"></i></a>
                            <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <div className="member d-flex align-items-start">
                        <div className="pic"><img src="/Medilab/assets/img/doctors/doctors-2.jpg" className="img-fluid" alt=""/></div>
                        <div className="member-info">
                            <h4>Sarah Jhonson</h4>
                            <span>Anesthesiologist</span>
                            <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                            <div className="social">
                            <a href=""><i className="ri-twitter-fill"></i></a>
                            <a href=""><i className="ri-facebook-fill"></i></a>
                            <a href=""><i className="ri-instagram-fill"></i></a>
                            <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-4">
                        <div className="member d-flex align-items-start">
                        <div className="pic"><img src="/Medilab/assets/img/doctors/doctors-3.jpg" className="img-fluid"/></div>
                        <div className="member-info">
                            <h4>William Anderson</h4>
                            <span>Cardiology</span>
                            <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                            <div className="social">
                            <a href=""><i className="ri-twitter-fill"></i></a>
                            <a href=""><i className="ri-facebook-fill"></i></a>
                            <a href=""><i className="ri-instagram-fill"></i></a>
                            <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-4">
                        <div className="member d-flex align-items-start">
                        <div className="pic"><img src="/Medilab/assets/img/doctors/doctors-4.jpg" className="img-fluid"/></div>
                        <div className="member-info">
                            <h4>Amanda Jepson</h4>
                            <span>Neurosurgeon</span>
                            <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                            <div className="social">
                            <a href=""><i className="ri-twitter-fill"></i></a>
                            <a href=""><i className="ri-facebook-fill"></i></a>
                            <a href=""><i className="ri-instagram-fill"></i></a>
                            <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                            </div>
                        </div>
                        </div>
                    </div>

                    </div>

                </div>
                </section>{/*End Doctors Section*/} 

                {/*Frequently Asked Questions Section*/}  
                <section id="faq" className="faq section-bg">
                <div className="container">

                    <div className="section-title">
                    <h2>Frequently Asked Questions</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="faq-list">
                    <ul>
                        <li data-aos="fade-up">
                        <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">Non consectetur a erat nam at lectus urna duis? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                        <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                            <p>
                            Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                            </p>
                        </div>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="100">
                        <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">Feugiat scelerisque varius morbi enim nunc? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                        <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                            <p>
                            Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                            </p>
                        </div>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="200">
                        <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">Dolor sit amet consectetur adipiscing elit? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                        <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                            <p>
                            Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                            </p>
                        </div>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="300">
                        <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                        <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                            <p>
                            Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                            </p>
                        </div>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="400">
                        <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                        <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                            <p>
                            Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                            </p>
                        </div>
                        </li>

                    </ul>
                    </div>

                </div>
                </section>{/*End Frequently Asked Questions Section*/}

                {/*Testimonials Section */} 
                <section id="testimonials" className="testimonials">
                <div className="container">

                    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper-wrapper">

                        <div className="swiper-slide">
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                            <img src="/Medilab/assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
                            <h3>Saul Goodman</h3>
                            <h4>Ceo &amp; Founder</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            </div>
                        </div>
                        </div>{/**/}End testimonial item

                        <div className="swiper-slide">
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                            <img src="/Medilab/assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
                            <h3>Sara Wilsson</h3>
                            <h4>Designer</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            </div>
                        </div>
                        </div>{/*End testimonial item*/}

                        <div className="swiper-slide">
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                            <img src="/Medilab/assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
                            <h3>Jena Karlis</h3>
                            <h4>Store Owner</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            </div>
                        </div>
                        </div>{/*End testimonial item*/}

                        <div className="swiper-slide">
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                            <img src="/Medilab/assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
                            <h3>Matt Brandon</h3>
                            <h4>Freelancer</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            </div>
                        </div>
                        </div>{/*End testimonial item*/}

                        <div className="swiper-slide">
                        <div className="testimonial-wrap">
                            <div className="testimonial-item">
                            <img src="/Medilab/assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
                            <h3>John Larson</h3>
                            <h4>Entrepreneur</h4>
                            <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                            </p>
                            </div>
                        </div>
                        </div>{/**/}End testimonial item

                    </div>
                    <div className="swiper-pagination"></div>
                    </div>

                </div>
                </section>{/**/}End Testimonials Section

                {/**/} Gallery Section 
                <section id="gallery" className="gallery">
                    <div className="container">

                        <div className="section-title">
                        <h2>Gallery</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row g-0">

                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                            <a href="/Medilab/assets/img/gallery/gallery-1.jpg" className="galelry-lightbox">
                                <img src="/Medilab/assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid"/>
                            </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                            <a href="/Medilab/assets/img/gallery/gallery-2.jpg" className="galelry-lightbox">
                                <img src="/Medilab/assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid"/>
                            </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                            <a href="/Medilab/assets/img/gallery/gallery-3.jpg" className="galelry-lightbox">
                                <img src="/Medilab/assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid"/>
                            </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                            <a href="/Medilab/assets/img/gallery/gallery-4.jpg" className="galelry-lightbox">
                                <img src="/Medilab/assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid"/>
                            </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                            <a href="/Medilab/assets/img/gallery/gallery-5.jpg" className="galelry-lightbox">
                                <img src="/Medilab/assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid"/>
                            </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                            <a href="/Medilab/assets/img/gallery/gallery-6.jpg" className="galelry-lightbox">
                                <img src="/Medilab/assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid"/>
                            </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                            <a href="/Medilab/assets/img/gallery/gallery-7.jpg" className="galelry-lightbox">
                                <img src="/Medilab/assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid"/>
                            </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                            <a href="/Medilab/assets/img/gallery/gallery-8.jpg" className="galelry-lightbox">
                                <img src="/Medilab/assets/img/gallery/gallery-8.jpg" alt="" className="img-fluid"/>
                            </a>
                            </div>
                        </div>

                        </div>

                    </div>
                </section>{/*End Gallery Section*/}

                {/*Contact Section */} 
                <section id="contact" className="contact">

                <div className="container">

                    <div className="section-title">
                    <h2>Contact</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                </div>

                <div>
                    <iframe  style={{ border: "0", width:"100%", height: "350%"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" allowFullScreen></iframe>
                </div>

                <div className="container">
                    <div className="row mt-5">

                    <div className="col-lg-4">
                        <div className="info">
                        <div className="address">
                            <i className="bi bi-geo-alt"></i>
                            <h4>Location:</h4>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>

                        <div className="email">
                            <i className="bi bi-envelope"></i>
                            <h4>Email:</h4>
                            <p>info@example.com</p>
                        </div>

                        <div className="phone">
                            <i className="bi bi-phone"></i>
                            <h4>Call:</h4>
                            <p>+1 5589 55488 55s</p>
                        </div>

                        </div>

                    </div>
                </div>

                    <div className="col-lg-8 mt-5 mt-lg-0">
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                        </div>
                        <div className="my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div>


                </div>

              

                    </section>
               
                
                {/*End Contact Section*/}

            </main>
                {/*End #main*/}
    </React.Fragment>
    )
}