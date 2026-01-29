import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ServiceCard = (props) => {

  return (
    <>
      {
        props.data.map((e, key) => {
          console.log("hello ", key + 1);
          return (
            <div key={key} className="card_hover">
              <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" className='image' src={e.img} />
                <Card.Body>
                  <Card.Title className='fw-bold fs-3 py-1'>{e.title}</Card.Title>
                  <Card.Text className='fs-7 lh-xl py-2'>
                    {e.desc}
                  </Card.Text>
                  <Button variant="primary py-2 px-4 fw-bold">More</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })
      }
    </>

  );
};

export default ServiceCard;
