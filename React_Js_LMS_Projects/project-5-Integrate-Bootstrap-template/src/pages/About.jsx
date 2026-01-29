import Table from 'react-bootstrap/Table';
const About = () => {
  return (
    <div className="container my-5">
      <Table striped responsive="sm" className='table'>
        <thead>
          <tr className='tr'>
            <th>No.</th>
            <th>Service</th>
            <th>Faculty Name</th>
            <th>Degree</th>
            <th>Std Language / Skills</th>
            <th>Experience (Years)</th>
          </tr>
        </thead>
        <tbody>
          <tr className='tr'>
            <td>1</td>
            <td>Web Design</td>
            <td>Rahul Sharma</td>
            <td>B.Tech (IT)</td>
            <td>HTML, CSS, Bootstrap, UI/UX</td>
            <td>5</td>
          </tr>
          <tr className='tr'>
            <td>2</td>
            <td>React Development</td>
            <td>Anjali Patel</td>
            <td>MCA</td>
            <td>JavaScript, React.js, Redux, API</td>
            <td>4</td>
          </tr>
          <tr className='tr'>
            <td>3</td>
            <td>Cyber Security</td>
            <td>Vikram Singh</td>
            <td>B.Sc (Cyber Security)</td>
            <td>Networking, Ethical Hacking, Linux</td>
            <td>6</td>
          </tr>
          <tr className='tr'>
            <td>4</td>
            <td>Web Design</td>
            <td>Pooja Mehta</td>
            <td>B.Des</td>
            <td>Figma, Photoshop, HTML, CSS</td>
            <td>3</td>
          </tr>
          <tr className='tr'>
            <td>5</td>
            <td>React Development</td>
            <td>Amit Verma</td>
            <td>B.Tech (CS)</td>
            <td>React.js, JavaScript, Tailwind, Git</td>
            <td>5</td>
          </tr>
          <tr className='tr'>
            <td>6</td>
            <td>Cyber Security</td>
            <td>Neha Joshi</td>
            <td>M.Tech (Cyber Security)</td>
            <td>Penetration Testing, Kali Linux, SIEM</td>
            <td>7</td>
          </tr>
          <tr className='tr'>
            <td>7</td>
            <td>Web Design</td>
            <td>Sandeep Kumar</td>
            <td>BCA</td>
            <td>HTML, CSS, JavaScript, Responsive Design</td>
            <td>4</td>
          </tr>
          <tr className='tr'>
            <td>8</td>
            <td>React Development</td>
            <td>Kavita Shah</td>
            <td>MCA</td>
            <td>React.js, Next.js, REST API, GitHub</td>
            <td>6</td>
          </tr>
        </tbody>
      </Table>


    </div>
  );
};


export default About;
