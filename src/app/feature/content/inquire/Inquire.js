import React from 'react';
import './Inquire.css';
// import JoelReginoPhoto from '../../../../assets/images/joelregino.jpg';
import ReLogo from '../../../../assets/images/re-logo-official.png';



export default class Inquire extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="inquireStatment">
                            Are you ready to construct with us? Get in touch
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <img src={ReLogo} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <div class="engineerName">
                                    Joel M. Regino, CE, RMP
                                </div>
                                <div class="contactDetailsBlock">
                                    <div class="contactDetailsStatement">
                                    CONTACT DETAILS
                                    </div>

                                    <div class="contactDetails" >
                                    +639771671644 / +639091559133
                                    </div>
                                    
                                    <div class="contactEmail">
                                    reginoengineering@gmail.com
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                       
                        
                    </div>
                    <div class="col">  
                        <div class="card">
                            <div class="card-body">
                                <div class="emailForm">
                                    <form>
                                        <div class="mb-3">
                                            <label for="firstName" class="form-label">First Name</label>
                                            <input type="text" class="form-control" id="firstName" aria-describedby="input your first name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="lastName" class="form-label">Last Name</label>
                                            <input type="text" class="form-control" id="lastName" aria-describedby="input your last name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="emailaddress" class="form-label">Email Address</label>
                                            <input type="email" class="form-control" id="emailaddress" aria-describedby="input your enail address" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="message" class="form-label">Message</label>
                                            <textarea class="form-control" id="message" aria-describedby="enter message" />
                                        </div>
                                        {/* <div class="mb-3 form-check">
                                            <canvas id="captcha">captcha text</canvas>
                                            <input id="textBox" type="text" name="text" />
                                            <button id="refreshButton" type="submit"> </button>
                                        </div> */}
                    
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}