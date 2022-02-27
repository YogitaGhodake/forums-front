import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Header/Footer';
import HeaderLight from '../../components/Header/HeaderLight';

const UsersPage = () => {

    return (
        <div>
            <HeaderLight />
            <section class="question-area pt-40px pb-40px">
                <div class="container">
                    <div class="filters pb-3">
                        <div class="d-flex flex-wrap align-items-center justify-content-between pb-3">
                            <h3 class="fs-22 fw-medium">Users</h3>
                            <Link to="/askquestion" class="btn theme-btn theme-btn-sm">Ask Question</Link>
                        </div>
                        <div class="d-flex flex-wrap align-items-center justify-content-between">
                            <form method="post" class="mr-3 w-25">
                                <div class="form-group">
                                    <input class="form-control form--control form-control-sm h-auto lh-34" type="text" name="search" placeholder="Filter by user" />
                                    <button class="form-btn" type="button"><i class="la la-search"></i></button>
                                </div>
                            </form>
                            <div class="btn-group btn--group mb-3" role="group" aria-label="Filter button group">
                                <Link to="#" class="btn active">Reputation</Link>
                                <Link to="#" class="btn">New users</Link>
                                <Link to="#" class="btn">Votes</Link>
                                <Link to="#" class="btn">Editors</Link>
                                <Link to="#" class="btn">Moderators</Link>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end filters --> */}
                    <div class="row">
                        <div class="col-lg-3 responsive-column-half">
                            <div class="media media-card p-3">
                                <a href="user-profile.html" class="media-img d-inline-block flex-shrink-0">
                                    <img src="assets/images/company-logo.png" alt="company logo" />
                                </a>
                                <div class="media-body">
                                    <h5 class="fs-16 fw-medium"><a href="user-profile.html">Sector labs</a></h5>
                                    <small class="meta d-block lh-24 pb-1"><span>New York, United States</span></small>
                                    <p class="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                                </div>
                                {/* <!-- end media-body --> */}
                            </div>
                            {/* <!-- end media --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="media media-card p-3">
                                <a href="user-profile.html" class="media-img d-inline-block flex-shrink-0">
                                    <img src="assets/images/company-logo2.png" alt="company logo" />
                                </a>
                                <div class="media-body">
                                    <h5 class="fs-16 fw-medium"><a href="user-profile.html">Barmar</a></h5>
                                    <small class="meta d-block lh-24 pb-1"><span>New York, United States</span></small>
                                    <p class="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                                </div>
                                {/* <!-- end media-body --> */}
                            </div>
                            {/* <!-- end media --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="media media-card p-3">
                                <a href="user-profile.html" class="media-img d-inline-block flex-shrink-0">
                                    <img src="assets/images/company-logo.png" alt="company logo" />
                                </a>
                                <div class="media-body">
                                    <h5 class="fs-16 fw-medium"><a href="user-profile.html">CertainPerformance</a></h5>
                                    <small class="meta d-block lh-24 pb-1"><span>New York, United States</span></small>
                                    <p class="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                                </div>
                                {/* <!-- end media-body --> */}
                            </div>
                            {/* <!-- end media --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="media media-card p-3">
                                <a href="user-profile.html" class="media-img d-inline-block flex-shrink-0">
                                    <img src="assets/images/company-logo2.png" alt="company logo" />
                                </a>
                                <div class="media-body">
                                    <h5 class="fs-16 fw-medium"><a href="user-profile.html">mck</a></h5>
                                    <small class="meta d-block lh-24 pb-1"><span>New York, United States</span></small>
                                    <p class="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                                </div>
                                {/* <!-- end media-body --> */}
                            </div>
                            {/* <!-- end media --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="media media-card p-3">
                                <a href="user-profile.html" class="media-img d-inline-block flex-shrink-0">
                                    <img src="assets/images/company-logo3.jpg" alt="company logo" />
                                </a>
                                <div class="media-body">
                                    <h5 class="fs-16 fw-medium"><a href="user-profile.html">LoicTheAztec</a></h5>
                                    <small class="meta d-block lh-24 pb-1"><span>New York, United States</span></small>
                                    <p class="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                                </div>
                                {/* <!-- end media-body --> */}
                            </div>
                            {/* <!-- end media --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="media media-card p-3">
                                <a href="user-profile.html" class="media-img d-inline-block flex-shrink-0">
                                    <img src="assets/images/company-logo4.png" alt="company logo" />
                                </a>
                                <div class="media-body">
                                    <h5 class="fs-16 fw-medium"><a href="user-profile.html">Günter Zöchbauer</a></h5>
                                    <small class="meta d-block lh-24 pb-1"><span>New York, United States</span></small>
                                    <p class="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                                </div>
                                {/* <!-- end media-body --> */}
                            </div>
                            {/* <!-- end media --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="media media-card p-3">
                                <a href="user-profile.html" class="media-img d-inline-block flex-shrink-0">
                                    <img src="assets/images/company-logo.png" alt="company logo" />
                                </a>
                                <div class="media-body">
                                    <h5 class="fs-16 fw-medium"><a href="user-profile.html">Suragch</a></h5>
                                    <small class="meta d-block lh-24 pb-1"><span>New York, United States</span></small>
                                    <p class="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                                </div>
                                {/* <!-- end media-body --> */}
                            </div>
                            {/* <!-- end media --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="media media-card p-3">
                                <a href="user-profile.html" class="media-img d-inline-block flex-shrink-0">
                                    <img src="assets/images/company-logo2.png" alt="company logo" />
                                </a>
                                <div class="media-body">
                                    <h5 class="fs-16 fw-medium"><a href="user-profile.html">Martijn Pieters</a></h5>
                                    <small class="meta d-block lh-24 pb-1"><span>New York, United States</span></small>
                                    <p class="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                                </div>
                                {/* <!-- end media-body --> */}
                            </div>
                            {/* <!-- end media --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="media media-card p-3">
                                <a href="user-profile.html" class="media-img d-inline-block flex-shrink-0">
                                    <img src="assets/images/company-logo3.jpg" alt="company logo" />
                                </a>
                                <div class="media-body">
                                    <h5 class="fs-16 fw-medium"><a href="user-profile.html">Frank van Puffelen</a></h5>
                                    <small class="meta d-block lh-24 pb-1"><span>New York, United States</span></small>
                                    <p class="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                                </div>
                                {/* <!-- end media-body --> */}
                            </div>
                            {/* <!-- end media --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="media media-card p-3">
                                <a href="user-profile.html" class="media-img d-inline-block flex-shrink-0">
                                    <img src="assets/images/company-logo4.png" alt="company logo" />
                                </a>
                                <div class="media-body">
                                    <h5 class="fs-16 fw-medium"><a href="user-profile.html">Igor Goyda</a></h5>
                                    <small class="meta d-block lh-24 pb-1"><span>New York, United States</span></small>
                                    <p class="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                                </div>
                                {/* <!-- end media-body --> */}
                            </div>
                            {/* <!-- end media --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="media media-card p-3">
                                <a href="user-profile.html" class="media-img d-inline-block flex-shrink-0">
                                    <img src="assets/images/company-logo.png" alt="company logo" />
                                </a>
                                <div class="media-body">
                                    <h5 class="fs-16 fw-medium"><a href="user-profile.html">Sector labs</a></h5>
                                    <small class="meta d-block lh-24 pb-1"><span>New York, United States</span></small>
                                    <p class="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                                </div>
                                {/* <!-- end media-body --> */}
                            </div>
                            {/* <!-- end media --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="media media-card p-3">
                                <a href="user-profile.html" class="media-img d-inline-block flex-shrink-0">
                                    <img src="assets/images/company-logo2.png" alt="company logo" />
                                </a>
                                <div class="media-body">
                                    <h5 class="fs-16 fw-medium"><a href="user-profile.html">Barmar</a></h5>
                                    <small class="meta d-block lh-24 pb-1"><span>New York, United States</span></small>
                                    <p class="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                                </div>
                                {/* <!-- end media-body --> */}
                            </div>
                            {/* <!-- end media --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="media media-card p-3">
                                <a href="user-profile.html" class="media-img d-inline-block flex-shrink-0">
                                    <img src="assets/images/company-logo.png" alt="company logo" />
                                </a>
                                <div class="media-body">
                                    <h5 class="fs-16 fw-medium"><a href="user-profile.html">CertainPerformance</a></h5>
                                    <small class="meta d-block lh-24 pb-1"><span>New York, United States</span></small>
                                    <p class="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                                </div>
                                {/* <!-- end media-body --> */}
                            </div>
                            {/* <!-- end media --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="media media-card p-3">
                                <a href="user-profile.html" class="media-img d-inline-block flex-shrink-0">
                                    <img src="assets/images/company-logo2.png" alt="company logo" />
                                </a>
                                <div class="media-body">
                                    <h5 class="fs-16 fw-medium"><a href="user-profile.html">mck</a></h5>
                                    <small class="meta d-block lh-24 pb-1"><span>New York, United States</span></small>
                                    <p class="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                                </div>
                                {/* <!-- end media-body --> */}
                            </div>
                            {/* <!-- end media --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="media media-card p-3">
                                <a href="user-profile.html" class="media-img d-inline-block flex-shrink-0">
                                    <img src="assets/images/company-logo3.jpg" alt="company logo" />
                                </a>
                                <div class="media-body">
                                    <h5 class="fs-16 fw-medium"><a href="user-profile.html">LoicTheAztec</a></h5>
                                    <small class="meta d-block lh-24 pb-1"><span>New York, United States</span></small>
                                    <p class="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                                </div>
                                {/* <!-- end media-body --> */}
                            </div>
                            {/* <!-- end media --> */}
                        </div>
                        {/* 
            <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="media media-card p-3">
                                <a href="user-profile.html" class="media-img d-inline-block flex-shrink-0">
                                    <img src="assets/images/company-logo4.png" alt="company logo" />
                                </a>
                                <div class="media-body">
                                    <h5 class="fs-16 fw-medium"><a href="user-profile.html">Günter Zöchbauer</a></h5>
                                    <small class="meta d-block lh-24 pb-1"><span>New York, United States</span></small>
                                    <p class="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                                </div>
                                {/* <!-- end media-body --> */}
                            </div>
                            {/* <!-- end media --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="media media-card p-3">
                                <a href="user-profile.html" class="media-img d-inline-block flex-shrink-0">
                                    <img src="assets/images/company-logo.png" alt="company logo" />
                                </a>
                                <div class="media-body">
                                    <h5 class="fs-16 fw-medium"><a href="user-profile.html">Suragch</a></h5>
                                    <small class="meta d-block lh-24 pb-1"><span>New York, United States</span></small>
                                    <p class="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                                </div>
                                {/* <!-- end media-body --> */}
                            </div>
                            {/* <!-- end media --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="media media-card p-3">
                                <a href="user-profile.html" class="media-img d-inline-block flex-shrink-0">
                                    <img src="assets/images/company-logo2.png" alt="company logo" />
                                </a>
                                <div class="media-body">
                                    <h5 class="fs-16 fw-medium"><a href="user-profile.html">Martijn Pieters</a></h5>
                                    <small class="meta d-block lh-24 pb-1"><span>New York, United States</span></small>
                                    <p class="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                                </div>
                                {/* <!-- end media-body --> */}
                            </div>
                            {/* <!-- end media --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="media media-card p-3">
                                <a href="user-profile.html" class="media-img d-inline-block flex-shrink-0">
                                    <img src="assets/images/company-logo3.jpg" alt="company logo" />
                                </a>
                                <div class="media-body">
                                    <h5 class="fs-16 fw-medium"><a href="user-profile.html">Frank van Puffelen</a></h5>
                                    <small class="meta d-block lh-24 pb-1"><span>New York, United States</span></small>
                                    <p class="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                                </div>
                                {/* <!-- end media-body --> */}
                            </div>
                            {/* <!-- end media --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                        <div class="col-lg-3 responsive-column-half">
                            <div class="media media-card p-3">
                                <a href="user-profile.html" class="media-img d-inline-block flex-shrink-0">
                                    <img src="assets/images/company-logo4.png" alt="company logo" />
                                </a>
                                <div class="media-body">
                                    <h5 class="fs-16 fw-medium"><a href="user-profile.html">Igor Goyda</a></h5>
                                    <small class="meta d-block lh-24 pb-1"><span>New York, United States</span></small>
                                    <p class="fw-medium fs-15 text-black-50 lh-18">1,200</p>
                                </div>
                                {/* <!-- end media-body --> */}
                            </div>
                            {/* <!-- end media --> */}
                        </div>
                        {/* <!-- end col-lg-3 --> */}
                    </div>
                    {/* <!-- end row --> */}
                    <div class="pager pt-20px">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination generic-pagination pr-1">
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true"><i class="la la-arrow-left"></i></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">4</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true"><i class="la la-arrow-right"></i></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <p class="fs-13 pt-2">Showing 1-20 of 50,577 results</p>
                    </div>
                </div>
                {/* <!-- end container --> */}
            </section>
            <Footer />
        </div>
    );
};

export default UsersPage;