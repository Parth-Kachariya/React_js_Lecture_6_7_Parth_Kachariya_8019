const ServiceCard = ({ title }) => {
  return (
    <div className="col-md-4">
      <div className="card shadow mb-4">
        <div className="card-body text-center">
          <h5>{title}</h5>
          <p>Professional service with best quality.</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
