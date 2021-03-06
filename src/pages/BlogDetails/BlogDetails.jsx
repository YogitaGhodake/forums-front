import React, { Fragment } from 'react'
import Footer from '../../components/Header/Footer'
import Header from '../../components/Header/Header';

const BlogDetails = () => {
  return (
      <Fragment>
    <Header dark={false} />
    <section className="hero-area pattern-bg-2 bg-white shadow-sm overflow-hidden pt-50px pb-50px">
          <span className="stroke-shape stroke-shape-1" />
          <span className="stroke-shape stroke-shape-2" />
          <span className="stroke-shape stroke-shape-3" />
          <span className="stroke-shape stroke-shape-4" />
          <span className="stroke-shape stroke-shape-5" />
          <span className="stroke-shape stroke-shape-6" />
          <div className="container">
            <div className="hero-content">
              <ul className="breadcrumb-list pb-2">
                <li><a href="#">Home</a><span><svg xmlns="http://www.w3.org/2000/svg" height="19px" viewBox="0 0 24 24" width="19px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg></span></li>
                <li><a href="#">Digital design</a><span><svg xmlns="http://www.w3.org/2000/svg" height="19px" viewBox="0 0 24 24" width="19px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" /></svg></span></li>
                <li>Designers should always keep their users in mind</li>
              </ul>
              <h2 className="section-title">Designers should always keep their users in mind</h2>
              <div className="media media-card align-items-center shadow-none p-0 mb-0 rounded-0 mt-4 bg-transparent">
                <a href="#" className="media-img media-img--sm d-block mr-2 rounded-full">
                  <img src="assets/images/img-loading.png" data-src="assets/images/img1.jpg" alt="avatar" className="rounded-full lazy" />
                </a>
                <div className="media-body">
                  <h5 className="fs-14 fw-medium">By <a href="#">Arden Smith</a></h5>
                  <small className="meta d-block lh-20">
                    <span className="mr-2">Feb 25, 2021</span>
                    <span className="mr-2 fs-15">.</span>
                    <a href="#comments" className="page-scroll text-gray"><i className="la la-comment mr-1" />3</a>
                  </small>
                </div>
              </div>
            </div>{/* end hero-content */}
          </div>{/* end container */}
        </section>{/* end hero-area */}
        <section className="blog-area pt-80px pb-80px">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="card card-item">
                  <div className="card-body">
                    <p className="card-text pb-3">We want to make it easier to learn more about a question and highlight key facts about it ??? such as how popular the question is, how many people are interested in it, and who the audience is. To accomplish that, today we???re introducing Question Overview, a new section on the question page that will make it easier to find the most important information about a question and its audience. </p>
                    <p className="card-text pb-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum.</p>
                    <h4 className="pb-3 fs-22">Some real life examples</h4>
                    <div className="row">
                      <div className="col-lg-6">
                        <a href="assets/images/img6.jpg" className="gallery-item overflow-hidden mb-4" data-fancybox="gallery">
                          <img className="lazy" src="assets/images/img-loading.png" data-src="assets/images/img6.jpg" alt="review image" />
                        </a>
                      </div>{/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <a href="assets/images/img7.jpg" className="gallery-item overflow-hidden mb-4" data-fancybox="gallery">
                          <img className="lazy" src="assets/images/img-loading.png" data-src="assets/images/img7.jpg" alt="review image" />
                        </a>
                      </div>{/* end col-lg-6 */}
                    </div>{/* end row */}
                    <p className="card-text pb-3">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                    <p className="card-text pb-3">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                    <blockquote className="blockquote blockquote-box my-4">
                      <i className="la la-quote-right" />
                      <p className="pb-2">Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla.</p>
                      <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                    <p className="card-text pb-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    <hr className="border-top-gray" />
                    <h4 className="pb-3 fs-20 pt-2">Tags:</h4>
                    <div className="tags pb-3">
                      <a href="#" className="tag-link tag-link-md">analytics</a>
                      <a href="#" className="tag-link tag-link-md">computer</a>
                      <a href="#" className="tag-link tag-link-md">python</a>
                    </div>
                    <h4 className="pb-2 fs-20">Share:</h4>
                    <div className="social-icon-box">
                      <a className="mr-1 icon-element icon-element-xs shadow-sm text-gray hover-y d-inline-block" href="#" target="_blank" title="Share on Facebook">
                        <svg focusable="false" className="svg-inline--fa fa-facebook-f fa-w-10" width="15px" height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
                      </a>
                      <a className="mr-1 icon-element icon-element-xs shadow-sm text-gray hover-y d-inline-block" href="#" target="_blank" title="Share on Twitter">
                        <svg focusable="false" className="svg-inline--fa fa-twitter fa-w-16" width="15px" height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                      </a>
                      <a className="mr-1 icon-element icon-element-xs shadow-sm text-gray hover-y d-inline-block" href="#" target="_blank" title="Share on Linkedin">
                        <svg focusable="false" className="svg-inline--fa fa-linkedin fa-w-14" width="15px" height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                      </a>
                    </div>
                  </div>{/* end card-body */}
                </div>{/* end card */}
                <div className="card card-item">
                  <div className="card-body">
                    <h4 className="pb-3 fs-20">3 Comments</h4>
                    <ul className="comments-list pt-3" id="comments">
                      <li className="mb-3">
                        <div className="comment-avatar">
                          <img className="lazy" src="assets/images/img-loading.png" data-src="assets/images/img1.jpg" alt="avatar" />
                        </div>
                        <div className="comment-body pt-0">
                          <span className="comment-user text-black">Majed Badawi</span>
                          <span className="comment-separated">-</span>
                          <span className="comment-date text-gray">8 hours ago</span>
                          <p className="comment-text pt-1 pb-2 lh-22">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat cumque nihil impedit quo minus.</p>
                          <a href="#" className="comment-reply text-color hover-underline" data-toggle="modal" data-target="#replyModal"><i className="la la-reply mr-1" />Reply</a>
                        </div>
                      </li>
                      <li className="mb-3 comment-reply">
                        <div className="comment-avatar">
                          <img className="lazy" src="assets/images/img-loading.png" data-src="assets/images/img2.jpg" alt="avatar" />
                        </div>
                        <div className="comment-body pt-0">
                          <span className="comment-user text-black">Kevin Martin</span>
                          <span className="comment-separated">-</span>
                          <span className="comment-date text-gray">8 hours ago</span>
                          <p className="comment-text pt-1 pb-2 lh-22">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat cumque nihil impedit quo minus.</p>
                          <a href="#" className="comment-reply text-color hover-underline" data-toggle="modal" data-target="#replyModal"><i className="la la-reply mr-1" />Reply</a>
                        </div>
                      </li>
                      <li className="mb-3">
                        <div className="comment-avatar">
                          <img className="lazy" src="assets/images/img-loading.png" data-src="assets/images/img3.jpg" alt="avatar" />
                        </div>
                        <div className="comment-body pt-0">
                          <span className="comment-user text-black">Aaron Aiken</span>
                          <span className="comment-separated">-</span>
                          <span className="comment-date text-gray">8 hours ago</span>
                          <p className="comment-text pt-1 pb-2 lh-22">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat cumque nihil impedit quo minus.</p>
                          <a href="#" className="comment-reply text-color hover-underline" data-toggle="modal" data-target="#replyModal"><i className="la la-reply mr-1" />Reply</a>
                        </div>
                      </li>
                    </ul>
                  </div>{/* end card-body */}
                </div>{/* end card */}
                <form method="post" className="card card-item">
                  <div className="card-body row">
                    <div className="form-group col-lg-12">
                      <h4 className="fs-20">Leave a Reply</h4>
                      <p className="fs-14">Your email address will not be published. Required fields are marked *</p>
                    </div>{/* end form-group */}
                    <div className="form-group col-lg-6">
                      <label className="fs-13 text-black lh-20">Name</label>
                      <input className="form-control form--control" type="text" name="text" placeholder="Your name" />
                    </div>{/* end form-group */}
                    <div className="form-group col-lg-6">
                      <label className="fs-13 text-black lh-20">Email</label>
                      <input className="form-control form--control" type="email" name="email" placeholder="Your email" />
                    </div>{/* end form-group */}
                    <div className="form-group col-lg-12">
                      <label className="fs-13 text-black lh-20">Message</label>
                      <textarea className="form-control form--control" name="message" rows={5} placeholder="Your comment here..." defaultValue={""} />
                    </div>{/* end form-group */}
                    <div className="form-group col-lg-12 mb-0">
                      <div className="custom-control custom-checkbox fs-14 mb-3">
                        <input type="checkbox" className="custom-control-input" id="saveAll" />
                        <label className="custom-control-label custom--control-label" htmlFor="saveAll">Save my name and email in this browser for the next time I comment.</label>
                      </div>
                      <button className="btn theme-btn" type="submit">Post Comment </button>
                    </div>{/* end form-group */}
                  </div>{/* end card-body */}
                </form>
              </div>{/* end col-lg-8 */}
              <div className="col-lg-4">
                <div className="sidebar">
                  <div className="card card-item">
                    <div className="card-body">
                      <h3 className="fs-17 pb-3">Search blog</h3>
                      <div className="divider"><span /></div>
                      <form method="post" className="pt-4">
                        <div className="form-group mb-0">
                          <input className="form-control form--control form--control-bg-gray" type="text" name="search" placeholder="Type your search words..." />
                          <button className="form-btn" type="button"><i className="la la-search" /></button>
                        </div>
                      </form>
                    </div>
                  </div>{/* end card */}
                  <div className="card card-item">
                    <div className="card-body">
                      <h3 className="fs-17 pb-3">Categories</h3>
                      <div className="divider"><span /></div>
                      <div className="category-list pt-4">
                        <a href="#" className="cat-item d-flex align-items-center justify-content-between mb-3 hover-y">
                          <span className="cat-title">Technology</span>
                          <span className="cat-number">238</span>
                        </a>
                        <a href="#" className="cat-item d-flex align-items-center justify-content-between mb-3 hover-y">
                          <span className="cat-title">Project Management</span>
                          <span className="cat-number">238</span>
                        </a>
                        <a href="#" className="cat-item d-flex align-items-center justify-content-between mb-3 hover-y">
                          <span className="cat-title">Business</span>
                          <span className="cat-number">238</span>
                        </a>
                        <a href="#" className="cat-item d-flex align-items-center justify-content-between mb-3 hover-y">
                          <span className="cat-title">Digital design</span>
                          <span className="cat-number">238</span>
                        </a>
                      </div>
                    </div>
                  </div>{/* end card */}
                  <div className="card card-item">
                    <div className="card-body">
                      <h3 className="fs-17 pb-3">Trending Posts</h3>
                      <div className="divider"><span /></div>
                      <div className="sidebar-questions pt-3">
                        <div className="media media-card media--card media--card-2">
                          <div className="media-body">
                            <h5><a href="question-details.html">Using web3 to call precompile contract</a></h5>
                            <small className="meta">
                              <span className="pr-1">2 mins ago</span>
                              <span className="pr-1">. by</span>
                              <a href="#" className="author">Sudhir Kumbhare</a>
                            </small>
                          </div>
                        </div>{/* end media */}
                        <div className="media media-card media--card media--card-2">
                          <div className="media-body">
                            <h5><a href="question-details.html">Is it true while finding Time Complexity of the algorithm [closed]</a></h5>
                            <small className="meta">
                              <span className="pr-1">48 mins ago</span>
                              <span className="pr-1">. by</span>
                              <a href="#" className="author">wimax</a>
                            </small>
                          </div>
                        </div>{/* end media */}
                        <div className="media media-card media--card media--card-2">
                          <div className="media-body">
                            <h5><a href="question-details.html">image picker and store them into firebase with flutter</a></h5>
                            <small className="meta">
                              <span className="pr-1">1 hour ago</span>
                              <span className="pr-1">. by</span>
                              <a href="#" className="author">Antonin gavrel</a>
                            </small>
                          </div>
                        </div>{/* end media */}
                      </div>{/* end sidebar-questions */}
                    </div>
                  </div>{/* end card */}
                  <div className="card card-item">
                    <div className="card-body">
                      <h3 className="fs-17 pb-3">Trending Tags</h3>
                      <div className="divider"><span /></div>
                      <div className="tags pt-4">
                        <a href="#" className="tag-link tag-link-md">analytics</a>
                        <a href="#" className="tag-link tag-link-md">computer</a>
                        <a href="#" className="tag-link tag-link-md">python</a>
                        <a href="#" className="tag-link tag-link-md">java</a>
                        <a href="#" className="tag-link tag-link-md">swift</a>
                        <a href="#" className="tag-link tag-link-md">javascript</a>
                        <a href="#" className="tag-link tag-link-md">c#</a>
                        <a href="#" className="tag-link tag-link-md">html</a>
                        <a href="#" className="tag-link tag-link-md">machine-language</a>
                      </div>
                    </div>
                  </div>{/* end card */}
                  <div className="card card-item">
                    <div className="card-body">
                      <h3 className="fs-17 pb-3">Follow &amp; Connect</h3>
                      <div className="divider"><span /></div>
                      <div className="social-icon-box pt-3">
                        <a className="mr-1 icon-element icon-element-sm shadow-sm text-gray hover-y d-inline-block" href="#" target="_blank" title="Follow on Facebook">
                          <svg focusable="false" className="svg-inline--fa fa-facebook-f fa-w-10" width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
                        </a>
                        <a className="mr-1 icon-element icon-element-sm shadow-sm text-gray hover-y d-inline-block" href="#" target="_blank" title="Follow on Twitter">
                          <svg focusable="false" className="svg-inline--fa fa-twitter fa-w-16" width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                        </a>
                        <a className="mr-1 icon-element icon-element-sm shadow-sm text-gray hover-y d-inline-block" href="#" target="_blank" title="Follow on Linkedin">
                          <svg focusable="false" className="svg-inline--fa fa-linkedin fa-w-14" width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                        </a>
                        <a className="mr-1 icon-element icon-element-sm shadow-sm text-gray hover-y d-inline-block" href="#" target="_blank" title="Follow on Instagram">
                          <svg focusable="false" className="svg-inline--fa fa-instagram-square fa-w-14" width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" /></svg>
                        </a>
                      </div>
                    </div>
                  </div>{/* end card */}
                </div>{/* end sidebar */}
              </div>{/* end col-lg-4 */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>{/* end blog-area */}
        <section className="blog-area pt-80px pb-50px bg-gray">
          <div className="container">
            <h2 className="section-title fs-30">Related posts</h2>
            <div className="row mt-40px">
              <div className="col-lg-4">
                <div className="card card-item hover-y">
                  <a href="blog-single.html" className="card-img">
                    <img className="lazy" src="assets/images/img-loading.png" data-src="assets/images/img9.jpg" alt="Card image" />
                  </a>
                  <div className="card-body pt-0">
                    <a href="#" className="card-link">Digital design</a>
                    <h5 className="card-title fw-medium"><a href="blog-single.html">Designers should always keep their users in mind</a></h5>
                    <div className="media media-card align-items-center shadow-none p-0 mb-0 rounded-0 mt-4 bg-transparent">
                      <a href="#" className="media-img media-img--sm d-block mr-2 rounded-full">
                        <img src="assets/images/img1.jpg" alt="avatar" className="rounded-full" />
                      </a>
                      <div className="media-body">
                        <h5 className="fs-14 fw-medium">By <a href="#">Arden Smith</a></h5>
                        <small className="meta d-block lh-20">
                          <span>Feb 25, 2021</span>
                        </small>
                      </div>
                    </div>
                  </div>{/* end card-body */}
                </div>{/* end card */}
              </div>{/* end col-lg-4 */}
              <div className="col-lg-4">
                <div className="card card-item hover-y">
                  <a href="blog-single.html" className="card-img">
                    <img className="lazy" src="assets/images/img-loading.png" data-src="assets/images/img10.jpg" alt="Card image" />
                  </a>
                  <div className="card-body pt-0">
                    <a href="#" className="card-link">Project Management</a>
                    <h5 className="card-title fw-medium"><a href="blog-single.html">What You Can Learn About Managing Projects</a></h5>
                    <div className="media media-card align-items-center shadow-none p-0 mb-0 rounded-0 mt-4 bg-transparent">
                      <a href="#" className="media-img media-img--sm d-block mr-2 rounded-full">
                        <img src="assets/images/img2.jpg" alt="avatar" className="rounded-full" />
                      </a>
                      <div className="media-body">
                        <h5 className="fs-14 fw-medium">By <a href="#">Kevin Martin</a></h5>
                        <small className="meta d-block lh-20">
                          <span>Feb 25, 2021</span>
                        </small>
                      </div>
                    </div>
                  </div>{/* end card-body */}
                </div>{/* end card */}
              </div>{/* end col-lg-4 */}
              <div className="col-lg-4">
                <div className="card card-item hover-y">
                  <a href="blog-single.html" className="card-img">
                    <img className="lazy" src="assets/images/img-loading.png" data-src="assets/images/img11.jpg" alt="Card image" />
                  </a>
                  <div className="card-body pt-0">
                    <a href="#" className="card-link">Business</a>
                    <h5 className="card-title fw-medium"><a href="blog-single.html">Open space ??? new trend in office design</a></h5>
                    <div className="media media-card align-items-center shadow-none p-0 mb-0 rounded-0 mt-4 bg-transparent">
                      <a href="#" className="media-img media-img--sm d-block mr-2 rounded-full">
                        <img src="assets/images/img3.jpg" alt="avatar" className="rounded-full" />
                      </a>
                      <div className="media-body">
                        <h5 className="fs-14 fw-medium">By <a href="#">Tim Brooks</a></h5>
                        <small className="meta d-block lh-20">
                          <span>Feb 25, 2021</span>
                        </small>
                      </div>
                    </div>
                  </div>{/* end card-body */}
                </div>{/* end card */}
              </div>{/* end col-lg-4 */}
            </div>{/* end row */}
          </div>{/* end container */}
        </section>
        <Footer />
        </Fragment >
  );
};

export default BlogDetails;