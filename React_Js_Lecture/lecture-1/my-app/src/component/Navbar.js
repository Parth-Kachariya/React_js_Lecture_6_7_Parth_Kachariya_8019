import Navbar from "./Navbar";

function Apps() {
  return (
    <>
      <Navbars />
      <Navbars />
    </>
  );
}

function Navbars (){
  return (
    <>
      <h1>This is Navbar Component</h1>
      <a href="/">Home</a> |<a href="/about">About</a> |
      <a href="/contact">Contact</a>
    </>
  );
};
export default Apps;

/*
npx create-react-app my-app
cd my-app
npm start
git remote add origin 
https://github.com/Parth-Kachariya/React_js_Lecture_6_7_Parth_Kachariya_8019.git

*/