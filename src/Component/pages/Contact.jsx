import React from 'react';
import Header from '../../Header';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Contact() {
  const handleSubmit = () =>{

  }

  const handleInputChange = () => {

  }
  return (
    <>
        <Header/>
    
        <section className='contact-section' style={{margin:100}}>
          <Container fluid>
              <div className='row justify-content-center'>
                  <div id='Col' className='col-md-10'>
                    <div className='wrapper'>
                      <div id='Row' className='row no-gutters'>
                        <div className='col-md-6'>
                          <div className='contact-wrap w-100 p-lg-5 p-4'>
                              <h3 className='mb-4'>Envoie-nous un message</h3>
                              <form id='contactForm' className='contactForm' onSubmit={handleSubmit}>
                                <div className='row'>
                                  <div className='col-md-12'>
                                    <div className='form-group'>
                                      <input
                                      type='text'
                                      className='form-control'
                                      name='name'
                                      placeholder='Entrez votre nom complet'
                                      onChange={handleInputChange}
                                      />
                                    </div>
                                  </div>
                                  <div className='col-md-12'>
                                    <div className='form-group'>
                                      <input
                                      type='email'
                                      className='form-control'
                                      name='email'
                                      placeholder='Entrez votre email'
                                      onChange={handleInputChange}
                                      />
                                    </div>
                                  </div>
                                  <div className='col-md-12'>
                                    <div className='form-group'>
                                      <input
                                      type='text'
                                      className='form-control'
                                      name='subject'
                                      placeholder='Subject'
                                      onChange={handleInputChange}
                                      />
                                    </div>
                                  </div>
                                  <div className='col-md-12'>
                                    <div className='form-group'>
                                      <textarea
                                      type='text'
                                      className='form-control'
                                      name='message'
                                      placeholder='Entrez votre message'
                                      onChange={handleInputChange}
                                      ></textarea>
                                    </div>
                                  </div>
                                  <div className='col-md-12'>
                                    <div className='form-group'>
                                      <input type='submit' value='Envoyer votre message'  className='btn btn-primary'/>
                                    </div>
                                  </div>
                                </div>
                              </form>
                          </div>

                        </div>
                        <div className='col-md-6 d-flex align-items-stretch'>
                          <div className='info-wrap w-100 p-lg-5 p-4 img position-relative w-100'>
                            <h3>Contactez-nous</h3>
                            <p className='mb-4'>Nous sommes ouverts à toute suggestion ou simplement pour discuter</p>
                            <div className='dbox w-100 d-flex align-items-start'>
                              <div className='icon d-flex align-items-center justify-content-center'>
                                <span className='fa fa-map-marker'></span>

                              </div>
                              <div className='text pl-3'>
                                <p>
                                  <span>Adresse:</span> Macory Zone4, Abidjan 
                                </p>
                              </div>

                            </div>
                            <div className='dbox w-100 d-flex align-items-start'>
                              <div className='icon d-flex align-items-center justify-content-center'>
                                <span className='fa fa-phone'></span>

                              </div>
                              <div className='text pl-3'>
                                <p>
                                  <span>Phone:</span> +225 0712068137
                                </p>
                              </div>

                            </div>
                            <div className='dbox w-100 d-flex align-items-start'>
                              <div className='icon d-flex align-items-center justify-content-center'>
                                <span className='fa fa-paper-plane'></span>

                              </div>
                              <div className='text pl-3'>
                                <p>
                                  <span>Email:</span>
                                  <Link href='/mimishop' >mimishop.com</Link>
                                </p>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

          </Container>
            
        </section>
    </>
  )
}

export default Contact;