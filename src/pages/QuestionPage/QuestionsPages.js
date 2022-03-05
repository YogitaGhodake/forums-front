import React, { Fragment, useEffect, useState} from 'react';
import { Link } from 'react-router-dom'; 
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getTopPosts} from '../../redux/posts/posts.actions';
import PostItem from '../../components/PostItem/PostItem.component';
import LinkButton from '../../components/LinkButton/LinkButton.component';
import HeaderLight from '../../../src/components2/Header/HeaderLight';
import Footer from '../../../src/components2/Header/Footer';
import Pagination from '../../components/Pagination/Pagination.component';

// import Spinner from '../../components/Spinner/Spinner.component';

const itemsPerPage = 12;
const showInline = 5;

const QuestionsPage = ({getTopPosts, post: {posts, loading}}) => {
    useEffect(() => {
      getTopPosts();
    }, [getTopPosts]);
  
    const [currentPosts, setCurrentPosts] = useState([]);
  
    const handlePaginationChange = (currentPage) => {
      setCurrentPosts(posts.slice((currentPage - 1) * itemsPerPage, (currentPage - 1) * itemsPerPage + itemsPerPage));
    };

    return loading || posts === null ? (
        <></> // <Spinner type='page' width='75px' height='200px' />
      ) : (
        <Fragment>
        <HeaderLight />
            <div className="question-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 pr-0">
                            <div className="sidebar position-sticky top-0 pt-40px">
                                <ul className="generic-list-item generic-list-item-highlight fs-15">
                                    <li className="lh-26"><Link to="/"><i className="la la-home mr-1 text-black"></i> Home</Link></li>
                                    <li className="lh-26 active"><Link to="/questions"><i className="la la-globe mr-1 text-black"></i> Questions</Link></li>
                                    <li className="lh-26"><Link to="/tags"><i className="la la-tags mr-1 text-black"></i> Tags</Link></li>
                                    <li className="lh-26"><Link to="/users"><i className="la la-user mr-1 text-black"></i> Users</Link></li>
                                    <li className="lh-26"><Link to="/badges"><i className="la la-id-badge mr-1 text-black"></i> Badges</Link></li>
                                    <li className="lh-26"><Link to="/categorylist"><i className="la la-sort mr-1 text-black"></i> Categories</Link></li>
                                    <li className="lh-26"><Link to="/joblist"><i className="la la-mouse mr-1 text-black"></i> Jobs</Link></li>
                                    <li className="lh-26"><Link to="/companies"><i className="la la-briefcase mr-1 text-black"></i> Companies</Link></li>
                                </ul>
                            </div>
                            {/* <!-- end sidebar --> */}
                        </div>
                        {/* <!-- end col-lg-2 --> */}
                        <div className="col-lg-7 px-0">
                            <div id='mainbar' className="question-main-bar border-left border-left-gray pt-40px pb-40px">
                                <div className="filters pb-4 pl-3">
                                    <div className="d-flex flex-wrap align-items-center justify-content-between pb-3">
                                        <h3 className="fs-22 fw-medium">All Questions</h3>
                                         {/* <div className='questions-btn'> */}
                                        {/* <LinkButton className="btn theme-btn theme-btn-sm"
                                            text={'Ask Question'}
                                            link={'/askquestion'} */}
                                            
                                            {/* // type={'s-btn__primary'}
                                            />   */}
                                          <Link to="/add/question" className="btn theme-btn theme-btn-sm">Ask Question</Link> 
                                    {/* </div> */}
                                    </div>
                                    <div className="d-flex flex-wrap align-items-center justify-content-between questions-tabs">
                                    <span>
                                        {new Intl.NumberFormat('en-IN').format(posts.length)} questions
                                    </span>
                                        <div className="filter-option-box w-20">
                                            <select className="custom-select">
                                                <option value="newest" value="selected">Newest </option>
                                                <option value="featured">Bountied (390)</option>
                                                <option value="frequent">Frequent </option>
                                                <option value="votes">Votes </option>
                                                <option value="active">Active </option>
                                                <option value="unanswered">Unanswered </option>
                                            </select>
                                        </div>
                                        {/* <!-- end filter-option-box --> */}
                                    </div>

                                </div>
                                 <div className="questions">
                                <div className="">
                                {/* <div className="votes text-center votes-2"> */}
                                <div className="questions">
                                        {currentPosts.map((post) => (
                                            <PostItem key={post.id} post={post} />
                                        ))}
                                        </div>
                                        <Pagination
                                        total={posts.length}
                                        elementsPerPage={itemsPerPage}
                                        showInline={showInline}
                                        handlePaginationChange={(currentPage) => handlePaginationChange(currentPage)}
                                        hideOnSinglePage={true}
                                        />
                                </div>
                                {/* </div> */}
                                </div>
                                
                                {/* <!-- end filters --> */}
                                <div className="questions-snippet border-top border-top-gray">
                                    <div className="media media-card rounded-0 shadow-none mb-0 bg-transparent p-3 border-bottom border-bottom-gray">
                                        <div className="votes text-center votes-2">
                                            <div className="vote-block">
                                                <span className="vote-counts d-block text-center pr-0 lh-20 fw-medium">3</span>
                                                <span className="vote-text d-block fs-13 lh-18">votes</span>
                                            </div>
                                            <div className="answer-block answered my-2">
                                                <span className="answer-counts d-block lh-20 fw-medium">3</span>
                                                <span className="answer-text d-block fs-13 lh-18">answers</span>
                                            </div>
                                            <div className="view-block">
                                                <span className="view-counts d-block lh-20 fw-medium">12</span>
                                                <span className="view-text d-block fs-13 lh-18">views</span>
                                            </div>
                                        </div>
                                        <div className="media-body ">
                                            <h5 className="mb-2 fw-medium"><a href="question-details.html">Bootstrap select pass value with disabled</a></h5>
                                            <p className="mb-2 truncate lh-20 fs-15">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                            <div className="tags">
                                                <a href="#" className="tag-link">javascript</a>
                                                <a href="#" className="tag-link">bootstrap-4</a>
                                                <a href="#" className="tag-link">jquery</a>
                                                <a href="#" className="tag-link">select</a>
                                            </div>
                                            <div className="media media-card user-media align-items-center px-0 border-bottom-0 pb-0">
                                                <a href="user-profile.html" className="media-img d-block">
                                                    <img src="assets/images/img3.jpg" alt="avatar" />
                                                </a>
                                                <div className="media-body d-flex flex-wrap align-items-center justify-content-between">
                                                    <div>
                                                        <h5 className="pb-1"><a href="user-profile.html">Arden Smith</a></h5>
                                                        <div className="stats fs-12 d-flex align-items-center lh-18">
                                                            <span className="text-black pr-2" title="Reputation score">224</span>
                                                            <span className="pr-2 d-inline-flex align-items-center" title="Gold badge"><span className="ball gold"></span>16</span>
                                                            <span className="pr-2 d-inline-flex align-items-center" title="Silver badge"><span className="ball silver"></span>93</span>
                                                            <span className="pr-2 d-inline-flex align-items-center" title="Bronze badge"><span className="ball"></span>136</span>
                                                        </div>
                                                    </div>
                                                    <small className="meta d-block text-right">
                                                        <span className="text-black d-block lh-18">asked</span>
                                                        <span className="d-block lh-18 fs-12">6 hours ago</span>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- end media --> */}
                                    <div className="media media-card rounded-0 shadow-none mb-0 bg-transparent p-3 border-bottom border-bottom-gray">
                                        <div className="votes text-center votes-2">
                                            <div className="vote-block">
                                                <span className="vote-counts d-block text-center pr-0 lh-20 fw-medium">3</span>
                                                <span className="vote-text d-block fs-13 lh-18">votes</span>
                                            </div>
                                            <div className="answer-block answered-accepted my-2">
                                                <span className="answer-counts d-block lh-20 fw-medium">3</span>
                                                <span className="answer-text d-block fs-13 lh-18">answers</span>
                                            </div>
                                            <div className="view-block">
                                                <span className="view-counts d-block lh-20 fw-medium">12</span>
                                                <span className="view-text d-block fs-13 lh-18">views</span>
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            <h5 className="mb-2 fw-medium"><a href="question-details.html">Bootstrap select pass value with disabled</a></h5>
                                            <p className="mb-2 truncate lh-20 fs-15">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                            <div className="tags">
                                                <a href="#" className="tag-link">javascript</a>
                                                <a href="#" className="tag-link">bootstrap-4</a>
                                                <a href="#" className="tag-link">jquery</a>
                                                <a href="#" className="tag-link">select</a>
                                            </div>
                                            <div className="media media-card user-media align-items-center px-0 border-bottom-0 pb-0">
                                                <a href="user-profile.html" className="media-img d-block">
                                                    <img src="assets/images/img3.jpg" alt="avatar" />
                                                </a>
                                                <div className="media-body d-flex flex-wrap align-items-center justify-content-between">
                                                    <div>
                                                        <h5 className="pb-1"><a href="user-profile.html">Arden Smith</a></h5>
                                                        <div className="stats fs-12 d-flex align-items-center lh-18">
                                                            <span className="text-black pr-2" title="Reputation score">224</span>
                                                            <span className="pr-2 d-inline-flex align-items-center" title="Gold badge"><span className="ball gold"></span>16</span>
                                                            <span className="pr-2 d-inline-flex align-items-center" title="Silver badge"><span className="ball silver"></span>93</span>
                                                            <span className="pr-2 d-inline-flex align-items-center" title="Bronze badge"><span className="ball"></span>136</span>
                                                        </div>
                                                    </div>
                                                    <small className="meta d-block text-right">
                                                        <span className="text-black d-block lh-18">asked</span>
                                                        <span className="d-block lh-18 fs-12">6 hours ago</span>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- end media --> */}
                                    <div className="media media-card rounded-0 shadow-none mb-0 bg-transparent p-3 border-bottom border-bottom-gray">
                                        <div className="votes text-center votes-2">
                                            <div className="vote-block">
                                                <span className="vote-counts d-block text-center pr-0 lh-20 fw-medium">3</span>
                                                <span className="vote-text d-block fs-13 lh-18">votes</span>
                                            </div>
                                            <div className="answer-block my-2">
                                                <span className="answer-counts d-block lh-20 fw-medium">0</span>
                                                <span className="answer-text d-block fs-14 lh-18">answer</span>
                                            </div>
                                            <div className="view-block">
                                                <span className="view-counts d-block lh-20 fw-medium">12</span>
                                                <span className="view-text d-block fs-13 lh-18">views</span>
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            <h5 className="mb-2 fw-medium"><a href="question-details.html">Bootstrap select pass value with disabled</a></h5>
                                            <p className="mb-2 truncate lh-20 fs-15">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                            <div className="tags">
                                                <a href="#" className="tag-link">javascript</a>
                                                <a href="#" className="tag-link">bootstrap-4</a>
                                                <a href="#" className="tag-link">jquery</a>
                                                <a href="#" className="tag-link">select</a>
                                            </div>
                                            <div className="media media-card user-media align-items-center px-0 border-bottom-0 pb-0">
                                                <a href="user-profile.html" className="media-img d-block">
                                                    <img src="assets/images/img3.jpg" alt="avatar" />
                                                </a>
                                                <div className="media-body d-flex flex-wrap align-items-center justify-content-between">
                                                    <div>
                                                        <h5 className="pb-1"><a href="user-profile.html">Arden Smith</a></h5>
                                                        <div className="stats fs-12 d-flex align-items-center lh-18">
                                                            <span className="text-black pr-2" title="Reputation score">224</span>
                                                            <span className="pr-2 d-inline-flex align-items-center" title="Gold badge"><span className="ball gold"></span>16</span>
                                                            <span className="pr-2 d-inline-flex align-items-center" title="Silver badge"><span className="ball silver"></span>93</span>
                                                            <span className="pr-2 d-inline-flex align-items-center" title="Bronze badge"><span className="ball"></span>136</span>
                                                        </div>
                                                    </div>
                                                    <small className="meta d-block text-right">
                                                        <span className="text-black d-block lh-18">asked</span>
                                                        <span className="d-block lh-18 fs-12">6 hours ago</span>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end questions-snippet --> */}
                                <div className="pager pt-30px px-3">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination generic-pagination pr-1">
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true"><i className="la la-arrow-left"></i></span>
                                                    <span className="sr-only">Previous</span>
                                                </a>
                                            </li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true"><i className="la la-arrow-right"></i></span>
                                                    <span className="sr-only">Next</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <p className="fs-13 pt-2">Showing 1-10 results of 50,577 questions</p>
                                </div>
                            </div>
                            {/* <!-- end question-main-bar --> */}
                        </div>
                        {/* <!-- end col-lg-7 --> */}
                        <div className="col-lg-3">
                            <div className="sidebar pt-40px">
                                <div className="card card-item">
                                    <div className="card-body">
                                        <h3 className="fs-17 pb-3">Related Questions</h3>
                                        <div className="divider"><span></span></div>
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
                                            </div>
                                            {/* <!-- end media --> */}
                                            <div className="media media-card media--card media--card-2">
                                                <div className="media-body">
                                                    <h5><a href="question-details.html">Is it true while finding Time Complexity of the algorithm [closed]</a></h5>
                                                    <small className="meta">
                                                        <span className="pr-1">48 mins ago</span>
                                                        <span className="pr-1">. by</span>
                                                        <a href="#" className="author">wimax</a>
                                                    </small>
                                                </div>
                                            </div>
                                            {/* <!-- end media --> */}
                                            <div className="media media-card media--card media--card-2">
                                                <div className="media-body">
                                                    <h5><a href="question-details.html">image picker and store them into firebase with flutter</a></h5>
                                                    <small className="meta">
                                                        <span className="pr-1">1 hour ago</span>
                                                        <span className="pr-1">. by</span>
                                                        <a href="#" className="author">Antonin gavrel</a>
                                                    </small>
                                                </div>
                                            </div>
                                            {/* <!-- end media --> */}
                                        </div>
                                        {/* <!-- end sidebar-questions --> */}
                                    </div>
                                </div>
                                {/* <!-- end card --> */}
                                <div className="card card-item">
                                    <div className="card-body">
                                        <h3 className="fs-17 pb-3">Related Tags</h3>
                                        <div className="divider"><span></span></div>
                                        <div className="tags pt-4">
                                            <div className="tag-item">
                                                <a href="#" className="tag-link tag-link-md">analytics</a>
                                                <span className="item-multiplier fs-13">
                                                    <span>×</span>
                                                    <span>32924</span>
                                                </span>
                                            </div>
                                            {/* <!-- end tag-item --> */}
                                            <div className="tag-item">
                                                <a href="#" className="tag-link tag-link-md">computer</a>
                                                <span className="item-multiplier fs-13">
                                                    <span>×</span>
                                                    <span>32924</span>
                                                </span>
                                            </div>
                                            {/* <!-- end tag-item --> */}
                                            <div className="tag-item">
                                                <a href="#" className="tag-link tag-link-md">python</a>
                                                <span className="item-multiplier fs-13">
                                                    <span>×</span>
                                                    <span>32924</span>
                                                </span>
                                            </div>
                                            {/* <!-- end tag-item --> */}
                                            <div className="tag-item">
                                                <a href="#" className="tag-link tag-link-md">javascript</a>
                                                <span className="item-multiplier fs-13">
                                                    <span>×</span>
                                                    <span>32924</span>
                                                </span>
                                            </div>
                                            {/* <!-- end tag-item --> */}
                                            <div className="tag-item">
                                                <a href="#" className="tag-link tag-link-md">c#</a>
                                                <span className="item-multiplier fs-13">
                                                    <span>×</span>
                                                    <span>32924</span>
                                                </span>
                                            </div>
                                            {/* <!-- end tag-item --> */}
                                            <div className="collapse" id="showMoreTags">
                                                <div className="tag-item">
                                                    <a href="#" className="tag-link tag-link-md">java</a>
                                                    <span className="item-multiplier fs-13">
                                                        <span>×</span>
                                                        <span>32924</span>
                                                    </span>
                                                </div>
                                                {/* <!-- end tag-item --> */}
                                                <div className="tag-item">
                                                    <a href="#" className="tag-link tag-link-md">swift</a>
                                                    <span className="item-multiplier fs-13">
                                                        <span>×</span>
                                                        <span>32924</span>
                                                    </span>
                                                </div>
                                                {/* <!-- end tag-item --> */}
                                                <div className="tag-item">
                                                    <a href="#" className="tag-link tag-link-md">html</a>
                                                    <span className="item-multiplier fs-13">
                                                        <span>×</span>
                                                        <span>32924</span>
                                                    </span>
                                                </div>
                                                {/* <!-- end tag-item --> */}
                                                <div className="tag-item">
                                                    <a href="#" className="tag-link tag-link-md">angular</a>
                                                    <span className="item-multiplier fs-13">
                                                        <span>×</span>
                                                        <span>32924</span>
                                                    </span>
                                                </div>
                                                {/* <!-- end tag-item --> */}
                                                <div className="tag-item">
                                                    <a href="#" className="tag-link tag-link-md">flutter</a>
                                                    <span className="item-multiplier fs-13">
                                                        <span>×</span>
                                                        <span>32924</span>
                                                    </span>
                                                </div>
                                                {/* <!-- end tag-item --> */}
                                                <div className="tag-item">
                                                    <a href="#" className="tag-link tag-link-md">machine-language</a>
                                                    <span className="item-multiplier fs-13">
                                                        <span>×</span>
                                                        <span>32924</span>
                                                    </span>
                                                </div>
                                                {/* <!-- end tag-item --> */}
                                            </div>
                                            {/* <!-- end collapse --> */}
                                            <a className="collapse-btn fs-13" data-toggle="collapse" href="#showMoreTags" role="button" aria-expanded="false" aria-controls="showMoreTags">
                                                <span className="collapse-btn-hide">Show more<i className="la la-angle-down ml-1 fs-11"></i></span>
                                                <span className="collapse-btn-show">Show less<i className="la la-angle-up ml-1 fs-11"></i></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- end card --> */}
                                <div className="ad-card">
                                    <h4 className="text-gray text-uppercase fs-13 pb-3 text-center">Advertisements</h4>
                                    <div className="ad-banner mb-4 mx-auto">
                                        <span className="ad-text">290x500</span>
                                    </div>
                                </div>
                                {/* <!-- end ad-card --> */}
                            </div>
                            {/* <!-- end sidebar --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                    </div>
                    {/* <!-- end row --> */}
                </div>
                {/* <!-- end container --> */}
            </div>
            <Footer />
        </Fragment>
    );
};

QuestionsPage.propTypes = {
    getTopPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    post: state.post,
  });

  export default connect(mapStateToProps, { getTopPosts })(QuestionsPage);