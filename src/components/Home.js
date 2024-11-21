import React, { useState,useEffect } from 'react';
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
//import OwlCarousel from 'react-owl-carousel';
export default function Home() {

	const [pname, setPname] = useState();
	const navigate = useNavigate();
	
	// Google Login
    const responseMessage = (response) => {

		axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response.credential}`, {
                        headers: {
                            Authorization: `Bearer ${response.credential}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((err) => console.log(err));

    };
    const errorMessage = (error) => {
        console.log(error);
    };
    // Google Login

    // const options = {
    //     responsive: {
    //       0: {
    //         items: 1,
    //       },
    //       400: {
    //         items: 1,
    //       },
    //       600: {
    //         items: 1,
    //       },
    //       700: {
    //         items: 1,
    //       },
    //       800: {
    //         items: 1,
    //       },
    //       1000: {
    //         items: 1,
    //       }
    //     },
    //     nav: true,
    //     dots: false
    //   }

const getvalue = (e)=>{
	setPname(e.target.value);
}
const searchp = ()=>{
	navigate(`/property/`+pname);
}

  return (
    <>

{/* <OwlCarousel loop margin={10} nav {...options}> */}
<div className="item" style={{backgroundImage:"url(images/bg_1.jpg)",height:"600px"}}>
        <div className="container" style={{ color:"#fff" }}>
          <div className="row no-gutters slider-text align-items-md-end align-items-center justify-content-end">
          <div className="col-md-6 text p-4 ftco-animate">
            <h1 className="mb-3">Florida 5, Pinecrest, FL</h1>
            <span className="location d-block mb-3"><i className="icon-my_location"></i> Melbourne, Vic 3004</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            
          </div>
        </div>
        </div>
      </div>
	  
      {/* <div className="item" style={{backgroundImage:"url(images/bg_2.jpg)"}}>
      	
        <div className="container" style={{ color:"#fff" }}>
          <div className="row no-gutters slider-text align-items-md-end align-items-center justify-content-end">
          <div className="col-md-6 text p-4 ftco-animate">
            <h1 className="mb-3">3015 Grand Avenue, CocoWalk</h1>
            <span className="location d-block mb-3"><i className="icon-my_location"></i> Melbourne, Vic 3004</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            
          </div>
        </div>
        </div>
      </div> */}
    {/* </OwlCarousel> */}

     {/* <section className="home-slider owl-carousel">
      <div className="slider-item" style={{backgroundImage:"url(images/bg_1.jpg)"}}>
      	<div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-md-end align-items-center justify-content-end">
          <div className="col-md-6 text p-4 ftco-animate">
            <h1 className="mb-3">Florida 5, Pinecrest, FL</h1>
            <span className="location d-block mb-3"><i className="icon-my_location"></i> Melbourne, Vic 3004</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <span className="price">$28,000</span>
            <Link to="/" className="btn-custom p-3 px-4 bg-primary">View Details <span className="icon-plus ml-1"></span></Link>
          </div>
        </div>
        </div>
      </div>

      <div className="slider-item" style={{backgroundImage:"url(images/bg_2.jpg)"}}>
      	<div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-md-end align-items-center justify-content-end">
          <div className="col-md-6 text p-4 ftco-animate">
            <h1 className="mb-3">3015 Grand Avenue, CocoWalk</h1>
            <span className="location d-block mb-3"><i className="icon-my_location"></i> Melbourne, Vic 3004</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <span className="price">$28,000</span>
            <Link to="/" className="btn-custom p-3 px-4 bg-primary">View Details <span className="icon-plus ml-1"></span></Link>
          </div>
        </div>
        </div>
      </div>
    </section> */}

    <section className="ftco-search">
    	<div className="container">
	    	<div className="row">
					<div className="col-md-12 search-wrap">
						{/* <h2 className="heading h5 d-flex align-items-center pr-4"><span className="ion-ios-search mr-3"></span> Search Property</h2> */}
						<form action="#" className="search-property" onSubmit={searchp}>
	        		<div className="row">
	        			<div className="col-md align-items-end">
	        				<div className="form-group">
	        					<label htmlFor="#">Keyword</label>
	          				<div className="form-field">
	          					<div className="icon"><span className="icon-pencil"></span></div>
			                <input type="text" className="form-control" placeholder="Search by Property Name" onChange={getvalue}/>
			              </div>
		              </div>
	        			</div>
	        			
	        		
                        <div className="col-md align-self-end">
	        				<div className="form-group">
	        					<div className="form-field">
			                <input type="submit" value="Search" className="form-control btn btn-primary"/>
			              </div>
		              </div>
	        			</div>
	        			
	        		</div>

	        		
	        	</form>
					</div>
	    	</div>
	    </div>
    </section>


    <section className="bg-light">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services py-4 d-block text-center">
              <div className="d-flex justify-content-center"><div className="icon"><span className="flaticon-pin"></span></div></div>
              <div className="media-body p-2 mt-2">
                <h3 className="heading mb-3">Find Places Anywhere In The World</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>      
          </div>
          <div className="col-md-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services py-4 d-block text-center">
              <div className="d-flex justify-content-center"><div className="icon"><span className="flaticon-detective"></span></div></div>
              <div className="media-body p-2 mt-2">
                <h3 className="heading mb-3">We Have Agents With Experience</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>    
          </div>
          <div className="col-md-3 d-flex align-sel Searchf-stretch ftco-animate">
            <div className="media block-6 services py-4 d-block text-center">
              <div className="d-flex justify-content-center"><div className="icon"><span className="flaticon-house"></span></div></div>
              <div className="media-body p-2 mt-2">
                <h3 className="heading mb-3">Buy &amp; Rent Modern Properties</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>      
          </div>
          <div className="col-md-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services py-4 d-block text-center">
              <div className="d-flex justify-content-center"><div className="icon"><span className="flaticon-purse"></span></div></div>
              <div className="media-body p-2 mt-2">
                <h3 className="heading mb-3">Making Money</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>      
          </div>
        </div>
      </div>
    </section>
    
    <section className="ftco-section ftco-properties">
    	<div className="container">
    		<div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
          	<span className="subheading">Recent Posts</span>
            <h2 className="mb-4">Recent Properties</h2>
          </div>
        </div>
    		<div className="row">
    			<div className="col-md-12">
    				<div className="properties-slider owl-carousel ftco-animate">
    					<div className="item">
		    				<div className="properties">
		    					<Link to="/" className="img d-flex justify-content-center align-items-center" style={{backgroundImage:"url(images/properties-1.jpg)"}}>
		    						<div className="icon d-flex justify-content-center align-items-center">
		    							<span className="icon-search2"></span>
		    						</div>
		    					</Link>
		    					<div className="text p-3">
		    						<span className="status sale">Sale</span>
		    						<div className="d-flex">
		    							<div className="one">
				    						<h3><Link to="/">North Parchmore Street</Link></h3>
				    						<p>Apartment</p>
			    						</div>
			    						<div className="two">
			    							<span className="price">$20,000</span>
		    							</div>
		    						</div>
		    					</div>
		    				</div>
	    				</div>
	    				<div className="item">
		    				<div className="properties">
		    					<Link to="/" className="img d-flex justify-content-center align-items-center" style={{backgroundImage:"url(images/properties-2.jpg)"}}>
		    						<div className="icon d-flex justify-content-center align-items-center">
		    							<span className="icon-search2"></span>
		    						</div>
		    					</Link>
		    					<div className="text p-3">
		    						<div className="d-flex">
		    							<span className="status rent">Rent</span>
		    							<div className="one">
				    						<h3><Link to="/">North Parchmore Street</Link></h3>
				    						<p>Apartment</p>
			    						</div>
			    						<div className="two">
			    							<span className="price">$2,000 <small>/ month</small></span>
		    							</div>
		    						</div>
		    					</div>
		    				</div>
	    				</div>
	    				<div className="item">
		    				<div className="properties">
		    					<Link to="/" className="img d-flex justify-content-center align-items-center" style={{backgroundImage:"url(images/properties-3.jpg)"}}>
		    						<div className="icon d-flex justify-content-center align-items-center">
		    							<span className="icon-search2"></span>
		    						</div>
		    					</Link>
		    					<div className="text p-3">
		    						<span className="status sale">Sale</span>
		    						<div className="d-flex">
		    							<div className="one">
				    						<h3><Link to="/">North Parchmore Street</Link></h3>
				    						<p>Apartment</p>
			    						</div>
			    						<div className="two">
			    							<span className="price">$20,000</span>
		    							</div>
		    						</div>
		    					</div>
		    				</div>
	    				</div>
	    				<div className="item">
		    				<div className="properties">
		    					<Link to="/" className="img d-flex justify-content-center align-items-center" style={{backgroundImage:"url(images/properties-4.jpg)"}}>
		    						<div className="icon d-flex justify-content-center align-items-center">
		    							<span className="icon-search2"></span>
		    						</div>
		    					</Link>
		    					<div className="text p-3">
		    						<span className="status sale">Sale</span>
		    						<div className="d-flex">
		    							<div className="one">
				    						<h3><Link to="/">North Parchmore Street</Link></h3>
				    						<p>Apartment</p>
			    						</div>
			    						<div className="two">
			    							<span className="price">$20,000</span>
		    							</div>
		    						</div>
		    					</div>
		    				</div>
	    				</div>
	    				<div className="item">
		    				<div className="properties">
		    					<Link to="/" className="img d-flex justify-content-center align-items-center" style={{backgroundImage:"url(images/properties-5.jpg)"}}>
		    						<div className="icon d-flex justify-content-center align-items-center">
		    							<span className="icon-search2"></span>
		    						</div>
		    					</Link>
		    					<div className="text p-3">
		    						<span className="status rent">Rent</span>
		    						<div className="d-flex">
		    							<div className="one">
				    						<h3><Link to="/">North Parchmore Street</Link></h3>
				    						<p>Apartment</p>
			    						</div>
			    						<div className="two">
			    							<span className="price">$900 <small>/ month</small></span>
		    							</div>
		    						</div>
		    					</div>
		    				</div>
	    				</div>
	    				<div className="item">
		    				<div className="properties">
		    					<Link to="/" className="img d-flex justify-content-center align-items-center" style={{backgroundImage:"url(images/properties-6.jpg)"}}>
		    						<div className="icon d-flex justify-content-center align-items-center">
		    							<span className="icon-search2"></span>
		    						</div>
		    					</Link>
		    					<div className="text p-3">
		    						<span className="status sale">Sale</span>
		    						<div className="d-flex">
		    							<div className="one">
				    						<h3><Link to="/">North Parchmore Street</Link></h3>
				    						<p>Apartment</p>
			    						</div>
			    						<div className="two">
			    							<span className="price">$20,000</span>
		    							</div>
		    						</div>
		    					</div>
		    				</div>
	    				</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </section>

    <section className="ftco-section bg-light">
    	<div className="container">
				<div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
          	<span className="subheading">Special Offers</span>
            <h2 className="mb-4">Most Recommended Properties</h2>
          </div>
        </div>    		
    	</div>
    	<div className="container-fluid">
    		<div className="row">
    			<div className="col-sm col-md-6 col-lg ftco-animate">
    				<div className="properties">
    					<Link to="/" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage:"url(images/properties-1.jpg)"}}>
    						<div className="icon d-flex justify-content-center align-items-center">
    							<span className="icon-search2"></span>
    						</div>
    					</Link>
    					<div className="text p-3">
    						<span className="status sale">Sale</span>
    						<div className="d-flex">
    							<div className="one">
		    						<h3><Link to="/">North Parchmore Street</Link></h3>
		    						<p>Apartment</p>
	    						</div>
	    						<div className="two">
	    							<span className="price">$20,000</span>
    							</div>
    						</div>
    						<p>Far far away, behind the word mountains, far from the countries</p>
    						<hr/>
    						<p className="bottom-area d-flex">
    							<span><i className="flaticon-selection"></i> 250sqft</span>
    							<span className="ml-auto"><i className="flaticon-bathtub"></i> 3</span>
    							<span><i className="flaticon-bed"></i> 4</span>
    						</p>
    					</div>
    				</div>
    			</div>
    			<div className="col-sm col-md-6 col-lg ftco-animate">
    				<div className="properties">
    					<Link to="/" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage:"url(images/properties-2.jpg)"}}>
    						<div className="icon d-flex justify-content-center align-items-center">
    							<span className="icon-search2"></span>
    						</div>
    					</Link>
    					<div className="text p-3">
    						<span className="status sale">Sale</span>
    						<div className="d-flex">
    							<div className="one">
		    						<h3><Link to="/">North Parchmore Street</Link></h3>
		    						<p>Apartment</p>
	    						</div>
	    						<div className="two">
	    							<span className="price">$20,000</span>
    							</div>
    						</div>
    						<p>Far far away, behind the word mountains, far from the countries</p>
    						<hr/>
    						<p className="bottom-area d-flex">
    							<span><i className="flaticon-selection"></i> 250sqft</span>
    							<span className="ml-auto"><i className="flaticon-bathtub"></i> 3</span>
    							<span><i className="flaticon-bed"></i> 4</span>
    						</p>
    					</div>
    				</div>
    			</div>
    			<div className="col-sm col-md-6 col-lg ftco-animate">
    				<div className="properties">
    					<Link to="/" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage:"url(images/properties-3.jpg)"}}>
    						<div className="icon d-flex justify-content-center align-items-center">
    							<span className="icon-search2"></span>
    						</div>
    					</Link>
    					<div className="text p-3">
    						<span className="status rent">Rent</span>
    						<div className="d-flex">
    							<div className="one">
		    						<h3><Link to="/">North Parchmore Street</Link></h3>
		    						<p>Apartment</p>
	    						</div>
	    						<div className="two">
	    							<span className="price">$800 <small>/ month</small></span>
    							</div>
    						</div>
    						<p>Far far away, behind the word mountains, far from the countries</p>
    						<hr/>
    						<p className="bottom-area d-flex">
    							<span><i className="flaticon-selection"></i> 250sqft</span>
    							<span className="ml-auto"><i className="flaticon-bathtub"></i> 3</span>
    							<span><i className="flaticon-bed"></i> 4</span>
    						</p>
    					</div>
    				</div>
    			</div>
    			<div className="col-sm col-md-6 col-lg ftco-animate">
    				<div className="properties">
    					<Link to="/" className="img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage:"url(images/properties-4.jpg)"}}>
    						<div className="icon d-flex justify-content-center align-items-center">
    							<span className="icon-search2"></span>
    						</div>
    					</Link>
    					<div className="text p-3">
    						<span className="status sale">Sale</span>
    						<div className="d-flex">
    							<div className="one">
		    						<h3><Link to="/">North Parchmore Street</Link></h3>
		    						<p>Apartment</p>
	    						</div>
	    						<div className="two">
	    							<span className="price">$20,000</span>
    							</div>
    						</div>
    						<p>Far far away, behind the word mountains, far from the countries</p>
    						<hr/>
    						<p className="bottom-area d-flex">
    							<span><i className="flaticon-selection"></i> 250sqft</span>
    							<span className="ml-auto"><i className="flaticon-bathtub"></i> 3</span>
    							<span><i className="flaticon-bed"></i> 4</span>
    						</p>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    </section>

    <section className="ftco-section ftco-counter img" id="section-counter" style={{backgroundImage:"url(images/bg_1.jpg)"}}>
    	<div className="container">
    		<div className="row justify-content-center mb-3 pb-3">
          <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
            <h2 className="mb-4">Some fun facts</h2>
          </div>
        </div>
    		<div className="row justify-content-center">
    			<div className="col-md-10">
		    		<div className="row">
		          <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
		            <div className="block-18 text-center">
		              <div className="text">
		                <strong className="number" data-number="9000">0</strong>
		                <span>Happy Customers</span>
		              </div>
		            </div>
		          </div>
		          <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
		            <div className="block-18 text-center">
		              <div className="text">
		                <strong className="number" data-number="10000">0</strong>
		                <span>Properties</span>
		              </div>
		            </div>
		          </div>
		          <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
		            <div className="block-18 text-center">
		              <div className="text">
		                <strong className="number" data-number="1000">0</strong>
		                <span>Agents</span>
		              </div>
		            </div>
		          </div>
		          <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
		            <div className="block-18 text-center">
		              <div className="text">
		                <strong className="number" data-number="100">0</strong>
		                <span>Awards</span>
		              </div>
		            </div>
		          </div>
		        </div>
	        </div>
        </div>
    	</div>
    </section>


    <section className="ftco-section testimony-section bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 ftco-animate">
          	<div className="row ftco-animate">
		          <div className="col-md-12">
		            <div className="carousel-testimony owl-carousel ftco-owl">
		              <div className="item">
		                <div className="testimony-wrap py-4 pb-5">
		                  <div className="user-img mb-4" style={{backgroundImage:"url(images/person_1.jpg)"}}>
		                    <span className="quote d-flex align-items-center justify-content-center">
		                      <i className="icon-quote-left"></i>
		                    </span>
		                  </div>
		                  <div className="text text-center">
		                    <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Clients</span>
		                  </div>
		                </div>
		              </div>
		              <div className="item">
		                <div className="testimony-wrap py-4 pb-5">
		                  <div className="user-img mb-4" style={{backgroundImage:"url(images/person_2.jpg)"}}>
		                    <span className="quote d-flex align-items-center justify-content-center">
		                      <i className="icon-quote-left"></i>
		                    </span>
		                  </div>
		                  <div className="text text-center">
		                    <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Agent</span>
		                  </div>
		                </div>
		              </div>
		              <div className="item">
		                <div className="testimony-wrap py-4 pb-5">
		                  <div className="user-img mb-4" style={{backgroundImage:"url(images/person_3.jpg)"}}>
		                    <span className="quote d-flex align-items-center justify-content-center">
		                      <i className="icon-quote-left"></i>
		                    </span>
		                  </div>
		                  <div className="text text-center">
		                    <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Client</span>
		                  </div>
		                </div>
		              </div>
		              <div className="item">
		                <div className="testimony-wrap py-4 pb-5">
		                  <div className="user-img mb-4" style={{backgroundImage:"url(images/person_1.jpg)"}}>
		                    <span className="quote d-flex align-items-center justify-content-center">
		                      <i className="icon-quote-left"></i>
		                    </span>
		                  </div>
		                  <div className="text text-center">
		                    <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Client</span>
		                  </div>
		                </div>
		              </div>
		              <div className="item">
		                <div className="testimony-wrap py-4 pb-5">
		                  <div className="user-img mb-4" style={{backgroundImage:"url(images/person_1.jpg)"}}>
		                    <span className="quote d-flex align-items-center justify-content-center">
		                      <i className="icon-quote-left"></i>
		                    </span>
		                  </div>
		                  <div className="text text-center">
		                    <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
		                    <p className="name">Roger Scott</p>
		                    <span className="position">Client</span>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
          </div>
        </div>
      </div>
    </section>


    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <span className="subheading">Read Articles</span>
            <h2>Recent Blog</h2>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-3 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <Link href="blog-single" className="block-20" style={{backgroundImage:"url(images/image_1.jpg)"}}>
              </Link>
              <div className="text mt-3 d-block">
                <h3 className="heading mt-3"><Link to="/">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
                <div className="meta mb-3">
                  <div><Link to="/">Dec 6, 2018</Link></div>
                  <div><Link to="/">Admin</Link></div>
                  <div><Link to="/" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <Link href="blog-single" className="block-20" style={{backgroundImage:"url(images/image_2.jpg)"}}>
              </Link>
              <div className="text mt-3">
                <h3 className="heading mt-3"><Link to="/">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
                <div className="meta mb-3">
                  <div><Link to="/">Dec 6, 2018</Link></div>
                  <div><Link to="/">Admin</Link></div>
                  <div><Link to="/" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <Link href="blog-single" className="block-20" style={{backgroundImage:"url(images/image_3.jpg)"}}>
              </Link>
              <div className="text mt-3">
                <h3 className="heading mt-3"><Link to="/">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
                <div className="meta mb-3">
                  <div><Link to="/">Dec 6, 2018</Link></div>
                  <div><Link to="/">Admin</Link></div>
                  <div><Link to="/" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-flex ftco-animate">
            <div className="blog-entry align-self-stretch">
              <Link href="blog-single" className="block-20" style={{backgroundImage:"url(images/image_4.jpg)"}}>
              </Link>
              <div className="text mt-3">
                <h3 className="heading mt-3"><Link to="/">Even the all-powerful Pointing has no control about the blind texts</Link></h3>
                <div className="meta mb-3">
                  <div><Link to="/">Dec 6, 2018</Link></div>
                  <div><Link to="/">Admin</Link></div>
                  <div><Link to="/" className="meta-chat"><span className="icon-chat"></span> 3</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
    </>
  )
}
