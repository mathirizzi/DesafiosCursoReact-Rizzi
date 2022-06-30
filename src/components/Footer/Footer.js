import {Container, Row, Col, Form, ListGroup} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHashtag, faMessage} from '@fortawesome/free-solid-svg-icons';
export default function Footer () {
    const instagramIcon = <FontAwesomeIcon icon={faHashtag} />
  const whatsappIcon = <FontAwesomeIcon icon={faMessage} />
  return (
    <footer className="footer ">
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={8} lg={4}>
          </Col>
        </Row>
        
        <Row lg={12}>
            <Col lg={3}>
                <h2>Nuestra oficina</h2>
                <ListGroup as="ul">
      <ListGroup.Item as="li" >
        Telefono: 011 4842-1769
      </ListGroup.Item>
      <ListGroup.Item as="li">Correo electronico: traume@gmail.com</ListGroup.Item>
      <ListGroup.Item as="li">
        Direccion: Martín Miguens 7534, Villa Bosch, Provincia de Buenos Aires
      </ListGroup.Item>
    </ListGroup>
            </Col>
    
    <Col lg={6}>
    <Form>
        <h2>Contactate con nosotros</h2>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre y apellido</Form.Label>
        <Form.Control type="text" placeholder="Escribi tu nombre y apellido" />
        <Form.Label>Correo electronico</Form.Label>
        <Form.Control type="email" placeholder="tunombre@gmail.com" />
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Escribinos tu consulta</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    </Col>

    <Col lg={3}>
        <h2>Redes Sociales</h2>
          <div className="redes">
              <span>{instagramIcon}</span>
              <span>{whatsappIcon}</span>
          </div>
    </Col>

    </Row>

      </Container>
    </footer>
  )
}