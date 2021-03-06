import React,{Fragment} from 'react';
import Footer from '../../components/Header/Footer';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';


const CareersPage = () => {
  return (
            <Fragment>
                <Header dark={false} />
             
              <section className="hero-area pattern-bg-2 bg-white shadow-sm overflow-hidden pt-30px pb-30px">
                <span className="stroke-shape stroke-shape-1" />
                <span className="stroke-shape stroke-shape-2" />
                <span className="stroke-shape stroke-shape-3" />
                <span className="stroke-shape stroke-shape-4" />
                <span className="stroke-shape stroke-shape-5" />
                <span className="stroke-shape stroke-shape-6" />
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-5">
                      <div className="hero-content py-5">
                        <h3 className="fs-19 fw-medium pb-3">Careers</h3>
                        <h2 className="section-title fs-40 pb-3 lh-55">Start your career with <span className="text-color">Nova Forums</span></h2>
                        <p className="section-desc pb-4">Join us! Let’s build the next big thing together. At Nova Forums, you’ll work with talented, like-minded individuals, inspired to change people’s lives by making things work on a global level.</p>
                        <a href="#jobs" className="btn theme-btn page-scroll">Explore open jobs <i className="la la-arrow-down ml-1" /></a>
                      </div>{/* end hero-content */}
                    </div>{/* end col-lg-5 */}
                    <div className="col-lg-5 ml-auto">
                      <div className="video-box">
                        <img className="w-100 rounded-rounded lazy" src="assets/images/img-loading.png" data-src="assets/images/img5.jpg" alt="video image" />
                        <div className="video-content text-center">
                          <Link className="icon-element icon-element-lg hover-y mx-auto" to="https://www.youtube.com/watch?v=GlrxcuEDyF8" data-fancybox title="Play Video">
                            <svg width={24} height={24} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 58.752 58.752" xmlSpace="preserve">
                              <path fill="#0d233e" d="M52.524,23.925L12.507,0.824c-1.907-1.1-4.376-1.097-6.276,0C4.293,1.94,3.088,4.025,3.088,6.264v46.205
                                                      c0,2.24,1.204,4.325,3.131,5.435c0.953,0.555,2.042,0.848,3.149,0.848c1.104,0,2.192-0.292,3.141-0.843l40.017-23.103
                                                      c1.936-1.119,3.138-3.203,3.138-5.439C55.663,27.134,54.462,25.05,52.524,23.925z M49.524,29.612L9.504,52.716
                                                      c-0.082,0.047-0.18,0.052-0.279-0.005c-0.084-0.049-0.137-0.142-0.137-0.242V6.263c0-0.1,0.052-0.192,0.14-0.243
                                                      c0.042-0.025,0.09-0.038,0.139-0.038c0.051,0,0.099,0.013,0.142,0.038l40.01,23.098c0.089,0.052,0.145,0.147,0.145,0.249
                                                      C49.663,29.47,49.611,29.561,49.524,29.612z" />
                            </svg>
                          </Link>
                          <p className="mt-2 badge badge-light">Watch our video</p>
                        </div>
                      </div>
                    </div>{/* end col-lg-5 */}
                  </div>{/* end row */}
                </div>{/* end container */}
              </section>{/* end hero-area */}
              {/*======================================
              END HERO AREA
      ======================================*/}
              {/* ================================
               START CTA AREA
      ================================= */}
              <section className="cta-area pt-60px pb-30px">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4 responsive-column-half">
                      <div className="info-box px-3">
                        <div className="icon-element mb-4 shadow-sm rounded-rounded">
                          <span className="info-number">1</span>
                          <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 0 24 24" width="35px" fill="#8C43FF"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" /></svg>
                        </div>
                        <div className="info-body">
                          <h3 className="fs-18 pb-3 fw-bold">Register Your Account</h3>
                          <p>This is just a simple text made for this unique and awesome template.</p>
                        </div>
                      </div>{/* end info-box */}
                    </div>{/* end col-lg-4 */}
                    <div className="col-lg-4 responsive-column-half">
                      <div className="info-box px-3">
                        <div className="icon-element mb-4 shadow-sm rounded-rounded">
                          <span className="info-number">2</span>
                          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="35px" viewBox="0 0 24 24" width="35px" fill="#28d5a7"><g><rect fill="none" height={24} width={24} /></g><g><path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z" /></g></svg>
                        </div>
                        <div className="info-body">
                          <h3 className="fs-18 pb-3 fw-bold">Upload Your Resume</h3>
                          <p>This is just a simple text made for this unique and awesome template.</p>
                        </div>
                      </div>{/* end info-box */}
                    </div>{/* end col-lg-4 */}
                    <div className="col-lg-4 responsive-column-half">
                      <div className="info-box px-3">
                        <div className="icon-element mb-4 shadow-sm rounded-rounded">
                          <span className="info-number">3</span>
                          <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 0 24 24" width="35px" fill="#f9b851"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z" /></svg>
                        </div>
                        <div className="info-body">
                          <h3 className="fs-18 pb-3 fw-bold">Apply for Dream Job</h3>
                          <p>This is just a simple text made for this unique and awesome template.</p>
                        </div>
                      </div>{/* end info-box */}
                    </div>{/* end col-lg-4 */}
                  </div>{/* end row */}
                </div>{/* end container */}
              </section>{/* end cta-area */}
              {/* ================================
               END CTA AREA
      ================================= */}
              {/* ================================
               START ABOUT AREA
      ================================= */}
              <section className="about-area pb-120px">
                <div className="container">
                  <div className="about-box bg-white shadow-md rounded-rounded px-5 pt-40px pb-60px">
                    <div className="about-content pb-90px text-center">
                      <h2 className="section-title pb-3">Who are we?</h2>
                      <p className="section-desc w-75 mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur hic repellat sint. Consequuntur dolores facilis in ipsa nulla obcaecati quis vero! Aliquid amet aperiam autem beatae commodi doloribus eveniet excepturi fuga magni natus neque perferendis perspiciatis quia, quis, ratione rem sequi, tempora tempore voluptate voluptatum. Ad aliquid amet autem, deserunt earum et expedita hic iure maiores obcaecati quia quod ullam!</p>
                    </div>{/* end about-content */}
                    <hr className="border-top-gray" />
                    <div className="info-box-wrap pt-60px">
                      <div className="text-center">
                        <h2 className="section-title pb-3">How we work at Nova Forums</h2>
                        <p className="section-desc w-75 mx-auto">Only by cohesively working together can we continue to make it happen, make it easy, and make it right. We do our best to consistently make Nova Forums the best place where our team members have ever worked… because we work here too!</p>
                      </div>
                      <div className="row pt-50px">
                        <div className="col-lg-4 responsive-column-half">
                          <div className="info-box px-3 text-center">
                            <div className="icon-element icon-element-lg mb-4 shadow-sm mx-auto">
                              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="40px" viewBox="0 0 24 24" width="40px" fill="#CC08E9"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><path d="M17,10c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2H7C5.9,3,5,3.9,5,5v3c0,1.1,0.9,2,2,2h1v2H7c-1.1,0-2,0.9-2,2v7h2v-3h10v3h2v-7 c0-1.1-0.9-2-2-2h-1v-2H17z M7,8V5h10v3H7z M17,16H7v-2h10V16z M14,12h-4v-2h4V12z" /></g></svg>
                            </div>
                            <div className="info-body">
                              <h3 className="fs-18 pb-3 fw-bold">Remote friendly</h3>
                              <p>This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                            </div>
                          </div>
                        </div>{/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column-half">
                          <div className="info-box px-3 text-center">
                            <div className="icon-element icon-element-lg mb-4 shadow-sm mx-auto">
                              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#FF8C2A"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                            </div>
                            <div className="info-body">
                              <h3 className="fs-18 pb-3 fw-bold">We love what we do</h3>
                              <p>This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                            </div>
                          </div>
                        </div>{/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column-half">
                          <div className="info-box px-3 text-center">
                            <div className="icon-element icon-element-lg mb-4 shadow-sm mx-auto">
                              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="40px" viewBox="0 0 24 24" width="40px" fill="#70ef5c"><g><rect fill="none" height={24} width={24} /></g><g><g /><g><path d="M16.67,13.13C18.04,14.06,19,15.32,19,17v3h4v-3C23,14.82,19.43,13.53,16.67,13.13z" /><path d="M15,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4c-0.47,0-0.91,0.1-1.33,0.24C14.5,5.27,15,6.58,15,8s-0.5,2.73-1.33,3.76 C14.09,11.9,14.53,12,15,12z" /><path d="M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2 S7,9.1,7,8C7,6.9,7.9,6,9,6z" /><path d="M9,13c-2.67,0-8,1.34-8,4v3h16v-3C17,14.34,11.67,13,9,13z M15,18H3l0-0.99C3.2,16.29,6.3,15,9,15s5.8,1.29,6,2V18z" /></g></g></svg>
                            </div>
                            <div className="info-body">
                              <h3 className="fs-18 pb-3 fw-bold">We are customer-focused</h3>
                              <p>This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                            </div>
                          </div>
                        </div>{/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column-half">
                          <div className="info-box px-3 text-center">
                            <div className="icon-element icon-element-lg mb-4 shadow-sm mx-auto">
                              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#307CF3"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" /></svg>
                            </div>
                            <div className="info-body">
                              <h3 className="fs-18 pb-3 fw-bold">We love making things work</h3>
                              <p>This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                            </div>
                          </div>
                        </div>{/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column-half">
                          <div className="info-box px-3 text-center">
                            <div className="icon-element icon-element-lg mb-4 shadow-sm mx-auto">
                              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="40px" viewBox="0 0 24 24" width="40px" fill="#385499"><g><rect fill="none" height={24} width={24} /></g><g><path d="M6.05,8.05c-2.73,2.73-2.73,7.17,0,9.9C7.42,19.32,9.21,20,11,20s3.58-0.68,4.95-2.05C19.43,14.47,20,4,20,4 S9.53,4.57,6.05,8.05z M14.54,16.54C13.59,17.48,12.34,18,11,18c-0.89,0-1.73-0.25-2.48-0.68c0.92-2.88,2.62-5.41,4.88-7.32 c-2.63,1.36-4.84,3.46-6.37,6c-1.48-1.96-1.35-4.75,0.44-6.54C9.21,7.72,14.04,6.65,17.8,6.2C17.35,9.96,16.28,14.79,14.54,16.54z" /></g></svg>
                            </div>
                            <div className="info-body">
                              <h3 className="fs-18 pb-3 fw-bold">We’re flexible and resilient</h3>
                              <p>This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                            </div>
                          </div>
                        </div>{/* end col-lg-4 */}
                        <div className="col-lg-4 responsive-column-half">
                          <div className="info-box px-3 text-center">
                            <div className="icon-element icon-element-lg mb-4 shadow-sm mx-auto">
                              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="40px" viewBox="0 0 24 24" width="40px" fill="#39A1F2"><g><rect fill="none" height={24} width={24} /></g><g><g><g><g><path d="M16,13c3.09-2.81,6-5.44,6-7.7C22,3.45,20.55,2,18.7,2c-1.04,0-2.05,0.49-2.7,1.25C15.34,2.49,14.34,2,13.3,2 C11.45,2,10,3.45,10,5.3C10,7.56,12.91,10.19,16,13z M13.3,4c0.44,0,0.89,0.21,1.18,0.55L16,6.34l1.52-1.79 C17.81,4.21,18.26,4,18.7,4C19.44,4,20,4.56,20,5.3c0,1.12-2.04,3.17-4,4.99c-1.96-1.82-4-3.88-4-4.99C12,4.56,12.56,4,13.3,4z" /><path d="M19,16h-2c0-1.2-0.75-2.28-1.87-2.7L8.97,11H1v11h6v-1.44l7,1.94l8-2.5v-1C22,17.34,20.66,16,19,16z M3,20v-7h2v7H3z M13.97,20.41L7,18.48V13h1.61l5.82,2.17C14.77,15.3,15,15.63,15,16c0,0-1.99-0.05-2.3-0.15l-2.38-0.79l-0.63,1.9l2.38,0.79 c0.51,0.17,1.04,0.26,1.58,0.26H19c0.39,0,0.74,0.23,0.9,0.56L13.97,20.41z" /></g></g></g></g></svg>
                            </div>
                            <div className="info-body">
                              <h3 className="fs-18 pb-3 fw-bold">We embrace diversity and inclusion</h3>
                              <p>This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                            </div>
                          </div>
                        </div>{/* end col-lg-4 */}
                      </div>{/* end row */}
                    </div>{/* end info-box-wrap */}
                  </div>{/* end about-box */}
                </div>{/* end container */}
              </section>{/* end about-area */}
              {/* ================================
               END ABOUT AREA
      ================================= */}
              {/* ================================
               START FUNFACT AREA
      ================================= */}
              <section className="funfact-area pb-120px">
                <div className="container">
                  <div className="counter-box">
                    <div className="row">
                      <div className="col-lg-4 responsive-column-half">
                        <div className="media media-card p-0 shadow-none rounded-0 bg-transparent counter-item mb-0 justify-content-center align-items-center">
                          <div className="mr-3">
                            <h5 className="fs-85 fw-bold">125</h5>
                          </div>
                          <div className="media-body flex-inherit">
                            <p className="lh-22 text-black">
                              employees <br />
                              from more <br />
                              than,...
                            </p>
                          </div>
                        </div>
                      </div>{/* end col-lg-4 */}
                      <div className="col-lg-4 responsive-column-half">
                        <div className="media media-card p-0 shadow-none rounded-0 bg-transparent counter-item mb-0 justify-content-center align-items-center">
                          <div className="mr-3">
                            <h5 className="fs-85 fw-bold">29</h5>
                          </div>
                          <div className="media-body flex-inherit">
                            <p className="lh-22 text-black">
                              countries <br />
                              around the world. <br />
                              Who speak,...
                            </p>
                          </div>
                        </div>
                      </div>{/* end col-lg-4 */}
                      <div className="col-lg-4 responsive-column-half">
                        <div className="media media-card p-0 shadow-none rounded-0 bg-transparent counter-item mb-0 justify-content-center align-items-center">
                          <div className="mr-3">
                            <h5 className="fs-85 fw-bold">31</h5>
                          </div>
                          <div className="media-body flex-inherit">
                            <p className="lh-22 text-black">
                              languages <br />
                              spoken every day <br />
                              at Nova Forums.
                            </p>
                          </div>
                        </div>
                      </div>{/* end col-lg-4 */}
                    </div>{/* end row */}
                  </div>{/* end counter-box */}
                </div>{/* end container */}
              </section>{/* end funfact-area */}
              {/* ================================
               END FUNFACT AREA
      ================================= */}
              {/* ================================
               START GALLERY AREA
      ================================= */}
              <section className="gallery-area pb-120px">
                <h2 className="section-title fs-40 pb-60px text-center">Inside of Nova Forums</h2>
                <div className="gallery-carousel owl-carousel owl-theme owl-action-styled">
                  <div className="carousel-card">
                    <img src="assets/images/img6.jpg" alt="gallery-image" />
                  </div>{/* end carousel-card */}
                  <div className="carousel-card">
                    <img src="assets/images/img7.jpg" alt="gallery-image" />
                  </div>{/* end carousel-card */}
                  <div className="carousel-card">
                    <img src="assets/images/img8.jpg" alt="gallery-image" />
                  </div>{/* end carousel-card */}
                  <div className="carousel-card">
                    <img src="assets/images/img9.jpg" alt="gallery-image" />
                  </div>{/* end carousel-card */}
                  <div className="carousel-card">
                    <img src="assets/images/img10.jpg" alt="gallery-image" />
                  </div>{/* end carousel-card */}
                  <div className="carousel-card">
                    <img src="assets/images/img11.jpg" alt="gallery-image" />
                  </div>{/* end carousel-card */}
                </div>{/* end owl-carousel */}
              </section>{/* end gallery-area */}
              {/* ================================
               END GALLERY AREA
      ================================= */}
              {/* ================================
               START BENEFITS AREA
      ================================= */}
              <section className="benefits-area pb-90px">
                <div className="container">
                  <div className="text-center">
                    <h2 className="section-title pb-3">Perks &amp; Benefits</h2>
                    <p className="section-desc w-75 mx-auto">We do our best to make Nova Forums an upside-heavy place of work. Because keeping good people happy is not only the right thing to do, it’s good business, too.</p>
                  </div>
                  <div className="row pt-50px">
                    <div className="col-lg-4 responsive-column-half">
                      <div className="card card-item hover-y">
                        <div className="card-body">
                          <div className="icon-element icon-element-lg bg-1 shadow-none">
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12zm-2-9H8v2h11V8zm0 4H8v2h11v-2zM7 8H5v2h2V8zm0 4H5v2h2v-2z" /></svg>
                          </div>
                          <h5 className="card-title pt-4 pb-2">Remote-friendly</h5>
                          <p className="card-text">This is just a simple text made for this unique and awesome template, you can easily edit it as you want.</p>
                        </div>{/* end card-body */}
                      </div>{/* end card */}
                    </div>{/* end col-lg-4 */}
                    <div className="col-lg-4 responsive-column-half">
                      <div className="card card-item hover-y">
                        <div className="card-body">
                          <div className="icon-element icon-element-lg bg-2 shadow-none">
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" /><circle cx={16} cy={12} r="1.5" /></svg>
                          </div>
                          <h5 className="card-title pt-4 pb-2">Competitive Salary</h5>
                          <p className="card-text">This is just a simple text made for this unique and awesome template, you can easily edit it as you want.</p>
                        </div>{/* end card-body */}
                      </div>{/* end card */}
                    </div>{/* end col-lg-4 */}
                    <div className="col-lg-4 responsive-column-half">
                      <div className="card card-item hover-y">
                        <div className="card-body">
                          <div className="icon-element icon-element-lg bg-3 shadow-none">
                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="40px" viewBox="0 0 24 24" width="40px" fill="#ffffff"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><path d="M16,7.08c0,1.77-0.84,3.25-2,3.82V21h-2V10.9c-1.16-0.57-2-2.05-2-3.82C10.01,4.83,11.35,3,13,3C14.66,3,16,4.83,16,7.08z M17,3v18h2v-8h2V7C21,5.24,19.76,3,17,3z M8.28,3c-0.4,0-0.72,0.32-0.72,0.72V7H6.72V3.72C6.72,3.32,6.4,3,6,3 S5.28,3.32,5.28,3.72V7H4.44V3.72C4.44,3.32,4.12,3,3.72,3S3,3.32,3,3.72V9c0,1.1,0.9,2,2,2v10h2V11c1.1,0,2-0.9,2-2V3.72 C9,3.32,8.68,3,8.28,3z" /></g></svg>
                          </div>
                          <h5 className="card-title pt-4 pb-2">Healthy Foods</h5>
                          <p className="card-text">This is just a simple text made for this unique and awesome template, you can easily edit it as you want.</p>
                        </div>{/* end card-body */}
                      </div>{/* end card */}
                    </div>{/* end col-lg-4 */}
                    <div className="col-lg-4 responsive-column-half">
                      <div className="card card-item hover-y">
                        <div className="card-body">
                          <div className="icon-element icon-element-lg bg-4 shadow-none">
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" /></svg>
                          </div>
                          <h5 className="card-title pt-4 pb-2">Annual company retreat</h5>
                          <p className="card-text">This is just a simple text made for this unique and awesome template, you can easily edit it as you want.</p>
                        </div>{/* end card-body */}
                      </div>{/* end card */}
                    </div>{/* end col-lg-4 */}
                    <div className="col-lg-4 responsive-column-half">
                      <div className="card card-item hover-y">
                        <div className="card-body">
                          <div className="icon-element icon-element-lg bg-5 shadow-none">
                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="40px" viewBox="0 0 24 24" width="40px" fill="#ffffff"><g><rect fill="none" height={24} width={24} /></g><g><g><g><g><path d="M16,13c3.09-2.81,6-5.44,6-7.7C22,3.45,20.55,2,18.7,2c-1.04,0-2.05,0.49-2.7,1.25C15.34,2.49,14.34,2,13.3,2 C11.45,2,10,3.45,10,5.3C10,7.56,12.91,10.19,16,13z M13.3,4c0.44,0,0.89,0.21,1.18,0.55L16,6.34l1.52-1.79 C17.81,4.21,18.26,4,18.7,4C19.44,4,20,4.56,20,5.3c0,1.12-2.04,3.17-4,4.99c-1.96-1.82-4-3.88-4-4.99C12,4.56,12.56,4,13.3,4z" /><path d="M19,16h-2c0-1.2-0.75-2.28-1.87-2.7L8.97,11H1v11h6v-1.44l7,1.94l8-2.5v-1C22,17.34,20.66,16,19,16z M3,20v-7h2v7H3z M13.97,20.41L7,18.48V13h1.61l5.82,2.17C14.77,15.3,15,15.63,15,16c0,0-1.99-0.05-2.3-0.15l-2.38-0.79l-0.63,1.9l2.38,0.79 c0.51,0.17,1.04,0.26,1.58,0.26H19c0.39,0,0.74,0.23,0.9,0.56L13.97,20.41z" /></g></g></g></g></svg>
                          </div>
                          <h5 className="card-title pt-4 pb-2">Special Allowance &amp; Bonuses</h5>
                          <p className="card-text">This is just a simple text made for this unique and awesome template, you can easily edit it as you want.</p>
                        </div>{/* end card-body */}
                      </div>{/* end card */}
                    </div>{/* end col-lg-4 */}
                    <div className="col-lg-4 responsive-column-half">
                      <div className="card card-item hover-y">
                        <div className="card-body">
                          <div className="icon-element icon-element-lg bg-6 shadow-none">
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                          </div>
                          <h5 className="card-title pt-4 pb-2">Paid &amp; Unpaid Time-off</h5>
                          <p className="card-text">This is just a simple text made for this unique and awesome template, you can easily edit it as you want.</p>
                        </div>{/* end card-body */}
                      </div>{/* end card */}
                    </div>{/* end col-lg-4 */}
                  </div>{/* end row */}
                </div>{/* end container */}
              </section>{/* end benefits-area */}
              {/* ================================
               END BENEFITS AREA
      ================================= */}
              {/* ================================
               START RECRUITING AREA
      ================================= */}
              <section className="recruiting-area pb-90px overflow-hidden">
                <div className="container position-relative">
                  <div className="recruiting-heading">
                    <h2 className="section-title fs-40 pb-60px">Our recruiting <br /> process</h2>
                  </div>{/* end recruiting-heading */}
                  <div className="recruiting-carousel owl-carousel owl-theme owl-action-styled owl--action-styled">
                    <div className="carousel-card">
                      <div className="info-box px-3">
                        <div className="icon-element mb-4 shadow-sm rounded-rounded">
                          <span className="info-number">1</span>
                          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="35px" viewBox="0 0 24 24" width="35px" fill="#8C43FF"><g><rect fill="none" height={24} width={24} /></g><g><g><path d="M10,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S6,5.79,6,8C6,10.21,7.79,12,10,12z M10,6c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2 S8,9.1,8,8C8,6.9,8.9,6,10,6z" /><path d="M4,18c0.22-0.72,3.31-2,6-2c0-0.7,0.13-1.37,0.35-1.99C7.62,13.91,2,15.27,2,18v2h9.54c-0.52-0.58-0.93-1.25-1.19-2H4z" /><path d="M19.43,18.02C19.79,17.43,20,16.74,20,16c0-2.21-1.79-4-4-4s-4,1.79-4,4c0,2.21,1.79,4,4,4c0.74,0,1.43-0.22,2.02-0.57 c0.93,0.93,1.62,1.62,2.57,2.57L22,20.59C20.5,19.09,21.21,19.79,19.43,18.02z M16,18c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2 C18,17.1,17.1,18,16,18z" /></g></g></svg>
                        </div>
                        <div className="info-body">
                          <h3 className="fs-18 pb-3 fw-bold">Reviews</h3>
                          <p>This is just a simple text made for this unique and awesome template, you can easily edit it as you want.</p>
                        </div>
                      </div>
                    </div>{/* end carousel-card */}
                    <div className="carousel-card">
                      <div className="info-box px-3">
                        <div className="icon-element mb-4 shadow-sm rounded-rounded">
                          <span className="info-number">2</span>
                          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="35px" viewBox="0 0 24 24" width="35px" fill="#28d5a7"><rect fill="none" height={24} width={24} /><g><path d="M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14 c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14 c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9 c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61C18,15.21,17.32,14.13,16.24,13.65z M8.07,16 c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69H8.07z M12,8 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8 M12,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3 C15,7.34,13.66,6,12,6L12,6z" /></g></svg>
                        </div>
                        <div className="info-body">
                          <h3 className="fs-18 pb-3 fw-bold">Team interviews</h3>
                          <p>This is just a simple text made for this unique and awesome template, you can easily edit it as you want.</p>
                        </div>
                      </div>
                    </div>{/* end carousel-card */}
                    <div className="carousel-card">
                      <div className="info-box px-3">
                        <div className="icon-element mb-4 shadow-sm rounded-rounded">
                          <span className="info-number">3</span>
                          <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 0 24 24" width="35px" fill="#f9b851"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z" /></svg>
                        </div>
                        <div className="info-body">
                          <h3 className="fs-18 pb-3 fw-bold">Project challenge</h3>
                          <p>This is just a simple text made for this unique and awesome template, you can easily edit it as you want.</p>
                        </div>
                      </div>
                    </div>{/* end carousel-card */}
                    <div className="carousel-card">
                      <div className="info-box px-3">
                        <div className="icon-element mb-4 shadow-sm rounded-rounded">
                          <span className="info-number">4</span>
                          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="35px" viewBox="0 0 24 24" width="35px" fill="#CC08E9"><rect fill="none" height={24} width={24} /><g><path d="M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14 c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14 c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9 c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61C18,15.21,17.32,14.13,16.24,13.65z M8.07,16 c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69H8.07z M12,8 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8 M12,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3 C15,7.34,13.66,6,12,6L12,6z" /></g></svg>
                        </div>
                        <div className="info-body">
                          <h3 className="fs-18 pb-3 fw-bold">Final interviews</h3>
                          <p>This is just a simple text made for this unique and awesome template, you can easily edit it as you want.</p>
                        </div>
                      </div>
                    </div>{/* end carousel-card */}
                    <div className="carousel-card">
                      <div className="info-box px-3">
                        <div className="icon-element mb-4 shadow-sm rounded-rounded">
                          <span className="info-number">5</span>
                          <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 0 24 24" width="35px" fill="#FF8C2A"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" /></svg>
                        </div>
                        <div className="info-body">
                          <h3 className="fs-18 pb-3 fw-bold">Checks</h3>
                          <p>This is just a simple text made for this unique and awesome template, you can easily edit it as you want.</p>
                        </div>
                      </div>
                    </div>{/* end carousel-card */}
                    <div className="carousel-card">
                      <div className="info-box px-3">
                        <div className="icon-element mb-4 shadow-sm rounded-rounded">
                          <span className="info-number">6</span>
                          <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 0 24 24" width="35px" fill="#307CF3"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-10.06L14.06 11l1.06-1.06L16.18 11l1.06-1.06-2.12-2.12L13 9.94zm-4.12 0L9.94 11 11 9.94 8.88 7.82 6.76 9.94 7.82 11l1.06-1.06zM12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" /></svg>
                        </div>
                        <div className="info-body">
                          <h3 className="fs-18 pb-3 fw-bold">Offer</h3>
                          <p>This is just a simple text made for this unique and awesome template, you can easily edit it as you want.</p>
                        </div>
                      </div>
                    </div>{/* end carousel-card */}
                  </div>{/* end owl-carousel */}
                </div>{/* end container */}
              </section>{/* end recruiting-area */}
              {/* ================================
               END RECRUITING AREA
      ================================= */}
              {/* ================================
               START JOBS AREA
      ================================= */}
              <section className="jobs-area bg-gray section--padding" id="jobs">
                <div className="container position-relative">
                  <div className="text-center">
                    <h2 className="section-title fs-40">Available positions</h2>
                  </div>
                  <div className="jobs-list pt-60px">
                    <a href="career-details.html" className="media media-card align-items-center hover-s">
                      <div className="icon-element mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#0d233e"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z" /></svg>
                      </div>
                      <div className="media-body">
                        <h5 className="pb-1 fs-20">Senior Database Administrator (DBA)</h5>
                        <p className="text-gray fw-medium">Remote</p>
                      </div>
                      <span className="text-underline fs-18 text-black fw-medium">Show detail <i className="la la-arrow-right ml-1" /></span>
                    </a>{/* end media */}
                    <a href="career-details.html" className="media media-card align-items-center hover-s">
                      <div className="icon-element mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#0d233e"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z" /></svg>
                      </div>
                      <div className="media-body">
                        <h5 className="pb-1 fs-20">Rollout Manager</h5>
                        <p className="text-gray fw-medium">Remote in EMEA</p>
                      </div>
                      <span className="text-underline fs-18 text-black fw-medium">Show detail <i className="la la-arrow-right ml-1" /></span>
                    </a>{/* end media */}
                    <a href="career-details.html" className="media media-card align-items-center hover-s">
                      <div className="icon-element mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#0d233e"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z" /></svg>
                      </div>
                      <div className="media-body">
                        <h5 className="pb-1 fs-20">AWS Infrastructure Engineer</h5>
                        <p className="text-gray fw-medium">Remote, EMEA/Asia</p>
                      </div>
                      <span className="text-underline fs-18 text-black fw-medium">Show detail <i className="la la-arrow-right ml-1" /></span>
                    </a>{/* end media */}
                    <a href="career-details.html" className="media media-card align-items-center hover-s">
                      <div className="icon-element mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#0d233e"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z" /></svg>
                      </div>
                      <div className="media-body">
                        <h5 className="pb-1 fs-20">Testing and Deployment Engineer</h5>
                        <p className="text-gray fw-medium">Remote, EMEA/Asia</p>
                      </div>
                      <span className="text-underline fs-18 text-black fw-medium">Show detail <i className="la la-arrow-right ml-1" /></span>
                    </a>{/* end media */}
                    <a href="career-details.html" className="media media-card align-items-center hover-s">
                      <div className="icon-element mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#0d233e"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z" /></svg>
                      </div>
                      <div className="media-body">
                        <h5 className="pb-1 fs-20">New Business Manager</h5>
                        <p className="text-gray fw-medium">Middle East &amp; North Africa (Remote)</p>
                      </div>
                      <span className="text-underline fs-18 text-black fw-medium">Show detail <i className="la la-arrow-right ml-1" /></span>
                    </a>{/* end media */}
                    <a href="career-details.html" className="media media-card align-items-center hover-s">
                      <div className="icon-element mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#0d233e"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z" /></svg>
                      </div>
                      <div className="media-body">
                        <h5 className="pb-1 fs-20">Junior Communications Assistant</h5>
                        <p className="text-gray fw-medium">Remote</p>
                      </div>
                      <span className="text-underline fs-18 text-black fw-medium">Show detail <i className="la la-arrow-right ml-1" /></span>
                    </a>{/* end media */}
                    <a href="career-details.html" className="media media-card align-items-center hover-s">
                      <div className="icon-element mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#0d233e"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z" /></svg>
                      </div>
                      <div className="media-body">
                        <h5 className="pb-1 fs-20">Product Manager - Portal</h5>
                        <p className="text-gray fw-medium">Remote</p>
                      </div>
                      <span className="text-underline fs-18 text-black fw-medium">Show detail <i className="la la-arrow-right ml-1" /></span>
                    </a>{/* end media */}
                  </div>{/* end jobs-list */}
                </div>{/* end container */}
              </section>{/* end jobs-area */}
              {/* ================================
               END JOBS AREA
      ================================= */}
              {/* ================================
               START CTA AREA
      ================================= */}
              <section className="cta-area pt-80px pb-80px">
                <div className="container">
                  <div className="cta-heading media align-items-center justify-content-center">
                    <img src="assets/images/undraw-questions.svg" alt="undraw-questions" className="undraw-illustration mr-5" />
                    <div className="media-body flex-inherit">
                      <h2 className="section-title pb-3">Didn't find the perfect role for you?</h2>
                      <p className="section-desc pb-4">We may be able to find the role that matches your skill set perfectly. Tell us about you and we would
                        <br /> love to get in touch with you shortly.</p>
                      <Link to="/contact" className="btn theme-btn">Apply Here <i className="la la-arrow-right icon ml-1" /></Link>
                    </div>
                  </div>{/* end cta-heading */}
                </div>{/* end container */}
              </section>
              <Footer />
            </Fragment>
  );
};

export default CareersPage