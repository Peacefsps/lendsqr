import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import backarrow from './backarrow.svg';
import avatarone from './avatarone.svg';
import markedstar from './markedstar.svg';
import star from './star.svg';
import './GeneralPage.css';
import Line from './Line.svg';
import divider from './divider.svg'


export default function GeneralPage() {
    return (
      <div className="GeneralPage">
        <NavBar />
        <div className="section">
          <SideBar />
          <div className="generalbox">
            <div className="mb-3 first-div mt-3">
              <span>
                <img src={backarrow} alt="backarrow" /> Back to Users
              </span>
            </div>
            <div className="second-div d-flex justify-content-between">
              <div>
                <h2>User Details</h2>
              </div>
              <div>
                <button className="blacklist-btn">BLACKLIST USER</button>
                <button className="activate-btn">ACTIVATE USER</button>
              </div>
            </div>
            <div className="third-div">
              <div className="d-flex third-div-one align-items-center">
                <img src={avatarone} alt="avatarone" />
                <div>
                  <h5>Grace Effiom</h5>
                  <small>LSQFf587g90</small>
                </div>
                <img src={Line} alt="Line" />
                <div className="users-star">
                  <p>User's Tier</p>
                  <span>
                    <img src={markedstar} alt="markedstar" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </span>
                </div>
                <img src={Line} alt="Line" />
                <div className="amt-details">
                  <p>#200,000.00</p>
                  <small>9912345678/Providus Bank</small>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <button className="active">General Details</button>
                <button>Documents</button>
                <button>Bank Details</button>
                <button>Loans</button>
                <button>Savings</button>
                <button>App and System</button>
              </div>
            </div>
            <div className="fourth-div">
              <div>
                <h3>Personal Information</h3>
                <div className="row">
                  <div className="col-3">
                    <h5>FULL NAME</h5>
                    <p>Grace Effiom</p>
                  </div>
                  <div className="col-3">
                    <h5>PHONE NUMBER</h5>
                    <p>07060780933</p>
                  </div>
                  <div className="col-3">
                    <h5>EMAIL ADDRESS</h5>
                    <p>grace@gmail.com</p>
                  </div>
                  <div className="col-3">
                    <h5>BVN</h5>
                    <p>07060780933</p>
                  </div>
                  <div className="col-3">
                    <h5>GENDER</h5>
                    <p>Female</p>
                  </div>
                  <div className="col-3">
                    <h5>MARITAL STATUS</h5>
                    <p>Single</p>
                  </div>
                  <div className="col-3">
                    <h5>CHILDREN</h5>
                    <p>None</p>
                  </div>
                  <div className="col-3">
                    <h5>TYPE OF RESIDENCE</h5>
                    <p>Parent's Apartment</p>
                  </div>
                </div>
                <img src={divider} alt="divider" />
                <div>
                  <h3>Education and Employment</h3>
                  <div className="row">
                    <div className="col-3">
                      <h5>LEVEL OF EDUCATION</h5>
                      <p>B.Sc</p>
                    </div>
                    <div className="col-3">
                      <h5>EMPLOYMENT STATUS</h5>
                      <p>Employed</p>
                    </div>
                    <div className="col-3">
                      <h5>SECTOR OF EMPLOYMENT</h5>
                      <p>FinTech</p>
                    </div>
                    <div className="col-3">
                      <h5>DURATION OF EMPLOYMENT</h5>
                      <p>2 years</p>
                    </div>
                    <div className="col-3">
                      <h5>OFFICE EMAIL</h5>
                      <p>Grace@lendsqr.com</p>
                    </div>
                    <div className="col-3">
                      <h5>MONTHLY INCOME</h5>
                      <p>#200,000.00 - #400,000.00</p>
                    </div>
                    <div className="col-3">
                      <h5>LOAN REPAYMENT</h5>
                      <p>40,000</p>
                    </div>
                  </div>
                </div>
                <img src={divider} alt="divider" />
                <div>
                  <h3>Socials</h3>
                  <div className="row">
                    <div className="col-3">
                      <h5>TWITTER</h5>
                      <p>@grace_effiom</p>
                    </div>
                    <div className="col-3">
                      <h5>FACEBOOK</h5>
                      <p>Grace Effiom</p>
                    </div>
                    <div className="col-3">
                      <h5>INSTAGRAM</h5>
                      <p>@grace_effiom</p>
                    </div>
                  </div>
                </div>
                <img src={divider} alt="divider" />
                <div>
                  <h3>Guarantor</h3>
                  <div className="row">
                    <div className="col-3">
                      <h5>FULL NAME</h5>
                      <p>Debby Ogana</p>
                    </div>
                    <div className="col-3">
                      <h5>PHONE NUMBER</h5>
                      <p>070060780922</p>
                    </div>
                    <div className="col-3">
                      <h5>EMAIL ADDRESS</h5>
                      <p>debby@gmail.com</p>
                    </div>
                    <div className="col-3">
                      <h5>RELATIONSHIP</h5>
                      <p>Sister</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}