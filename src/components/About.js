import React from 'react';
import { Link } from "react-router-dom";

export default function About() {
    return (
        <>
            <section className="ftco-section ftc-no-pb">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: "url(images/about.jpg)"}}>
                            <Link to="https://vimeo.com/45830194" className="icon popup-vimeo d-flex justify-content-center align-items-center">
                                <span className="icon-play"></span>
                            </Link>
                        </div>
                        <div className="col-md-7 wrap-about pb-md-5 ftco-animate">
                            <div className="heading-section heading-section-wo-line mb-5 pl-md-5">
                                <div className="pl-md-5 ml-md-5">
                                    <span className="subheading">Company Overview</span>
                                    <h2 className="mb-4">Learned about the Law</h2>
                                </div>
                            </div>
                            <div className="pl-md-5 ml-md-5 mb-5">
                                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                <p><Link to="#" className="btn-custom">Learn More <span className="ion-ios-arrow-forward"></span></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
