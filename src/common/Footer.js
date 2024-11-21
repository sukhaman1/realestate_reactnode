import React from 'react';
import { Link } from "react-router-dom";

export default function footer() {
  return (
    <>
      <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Royalestate</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li className="ftco-animate"><Link to="#"><span className="icon-twitter"></span></Link></li>
                  <li className="ftco-animate"><Link to="#"><span className="icon-facebook"></span></Link></li>
                  <li className="ftco-animate"><Link to="#"><span className="icon-instagram"></span></Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Buy</h2>
                <ul className="list-unstyled">
                  <li><Link to="#" className="py-2 d-block">Home For Sale</Link></li>
                  <li><Link to="#" className="py-2 d-block">Open Houses</Link></li>
                  <li><Link to="#" className="py-2 d-block">New Listing</Link></li>
                  <li><Link to="#" className="py-2 d-block">Recently Reduce</Link></li>
                  <li><Link to="#" className="py-2 d-block">Off-Market Homes</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Sell</h2>
                <ul className="list-unstyled">
                  <li><Link to="#" className="py-2 d-block">Sell Your Home</Link></li>
                  <li><Link to="#" className="py-2 d-block">Get A Home Valuation</Link></li>
                  <li><Link to="#" className="py-2 d-block">Local Home Prices</Link></li>
                  <li><Link to="#" className="py-2 d-block">Guides &amp; Rules</Link></li>
                  <li><Link to="#" className="py-2 d-block">Others</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                    <li><Link to="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></Link></li>
                    <li><Link to="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">

              <p>All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
