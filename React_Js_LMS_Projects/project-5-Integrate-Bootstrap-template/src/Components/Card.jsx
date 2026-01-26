import React from 'react'
import Button from 'react-bootstrap/esm/Button'

const Card = () => {
    return (
        <div className="container my-5">
            <div className="row g-4">
                {["Ui / Ux Design", "Web Development", "Project Deployment"].map((item, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card shadow-lg card_hover">
                            <div className="card-body">
                                <h5 className="card-title">{item}</h5>
                                <p className="card-text">
                                    Professional {item.toLowerCase()} services using modern tools.
                                </p>
                                <Button variant="primary">Learn More</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card
