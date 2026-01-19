import Accordion from 'react-bootstrap/Accordion'
const Accordions = () => {
    return (
        <Accordion defaultActiveKey="0" className='mt-5 '>
            <Accordion.Item eventKey="0">
                <Accordion.Header className="border rounded-3">what is react js ?</Accordion.Header>
                <Accordion.Body className='bg-secondary text-white fw-semibold'>
                    React JS is a JavaScript library used for building user interfaces, especially for single-page applications. It allows developers to create fast and interactive web applications by breaking the UI into small, reusable components. React uses a Virtual DOM to efficiently update only the parts of the page that change, which improves performance. It also uses JSX, a syntax that lets developers write HTML inside JavaScript, making the code easier to understand and maintain. React follows a one-way data flow, which helps keep applications predictable and easier to debug. It was developed by Facebook (Meta) and is widely used by many popular websites and applications today.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header className="border rounded-2" >Key features of React JS:</Accordion.Header>
                <Accordion.Body className='bg-secondary text-white fw-semibold'>
                    1.Component-based {<br />}

                    UI is divided into small, independent parts called components {<br />}

                    Example: Header, Footer, Button, Form{<br />}{<hr />}

                    2.Reusable components{<br />}

                    Write once, use multiple times{<br />}

                    Saves time and reduces code duplication{<br />}{<hr />}

                    3.Virtual DOM{<br />}

                    React updates a virtual copy of the DOM first{<br />}

                    Only the changed parts are updated in the real DOM{<br />}

                    This makes apps faster{<br />}{<hr />}

                    4.JSX{<br />}

                    Allows writing HTML inside JavaScript{<br />}{<hr />}

                    5.One-way data flow{<br />}

                    Data flows from parent to child components{<br />}

                    Makes the code more predictable and easier to debug{<br />}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

    )
}

export default Accordions
