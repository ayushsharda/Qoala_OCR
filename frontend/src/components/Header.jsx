import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
      <Container className='c1'>
        <h1 className="navbar-brand text-center" style={{ color: '#fff', fontFamily: 'arial', fontSize: '1.5rem' }}>
         OCR Assignment by Ayush Sharda
        </h1>
      </Container>
    </Navbar>
  );
}

export default Header;
