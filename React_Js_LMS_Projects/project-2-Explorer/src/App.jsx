import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="heading">PR-2-Explorer</h1>
      <div className="App">
        <Card
          com="amazon"
          role="web developer"
          name="ajay sharma"
          img="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png"
        />
        <Card
          com="meesho"
          role="software developer"
          name="raj parekh"
          img="https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/meesho-logo-app-icon.png"
        />
        <Card
          com="Flipkart"
          role="software Engineer"
          name="sachin yadav"
          img="https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/flipkart-logo-app-icon.png"
        />
      </div>
    </>
  );
}

export default App;
