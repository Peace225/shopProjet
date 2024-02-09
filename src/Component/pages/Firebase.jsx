
const firebaseConfig = {
    apiKey: "AIzaSyAbymaNKNjJGQqn2vaHk61TwfFOucSMN-k",
    authDomain: "contact-form-6b3e3.firebaseapp.com",
    projectId: "contact-form-6b3e3",
    storageBucket: "contact-form-6b3e3.appspot.com",
    messagingSenderId: "831196495394",
    appId: "1:831196495394:web:8a088d934b6a46cb47547b"
  };

  <section id='contact' className='block contact-block login template d-flex justify-content-center align-items-center  vh-80 bg-Success' style={{margin:100}}>
            <Container fluid>
                <div className='row justify-content-center'>
                <div className='title-holder'>
                      <h2>Contactez-nous</h2>
                        <div className='subtitle'> Connectez-vous avec nous! </div>
                  </div>
                  <Form className='contact-from' >
                    <Row className='row justify-content-center no-gutters'>
                      <Col sm={4}>
                        <Form.Control type='text' placeholder="Entrez votre nom complet" required />
                      </Col>
                      <Col sm={4}>
                        <Form.Control type='email' placeholder="Entrez votre email" required/>
                      </Col>
                      <Col sm={4}>
                        <Form.Control type='tel' placeholder="Entrez votre numéro de téléphone" required/>
                      </Col>
                    </Row>
                    <Row>
                        <Col sm={10}>
                        <Form.Control as="textarea" placeholder="Entrez votre message" required/>

                        </Col>
                      </Row>
                      <div className='btn-holder'>
                        <Button type="submit">Submit</Button>

                      </div>
                  </Form>


                </div>
              
            </Container>
         </section>   
