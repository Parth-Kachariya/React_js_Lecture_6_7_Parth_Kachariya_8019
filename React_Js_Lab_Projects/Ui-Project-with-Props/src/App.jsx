import Section1 from "./Components/Section-1/Section1";

const App = () => {
  const users = [
    {
      image:
        "https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Sunlit forest path inviting calm steps through vibrant green trees under a peaceful, golden morning sky.",
      tag: "forest calm",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Cloud-dappled blue sky over hills blending soft colors in tranquil harmony, embracing nature’s gentle beauty.",
      tag: "sky hills",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Vast desert dunes melting into the horizon, whispering timeless tales under glowing sunlit warmth.",
      tag: "desert vast",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Elegant mountain lodge perched against snowy peaks, shining crisp winter serenity with cozy charm.",
      tag: "mountain snow",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661590850278-9a4d2f6116d3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Golden beach waves crash onto warm sand at sunset, radiating light and relaxing serene energy.",
      tag: "beach sunset",
    },
    {
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Vibrant city street alive with glowing lights and energetic crowds celebrating the heart of nightlife.",
      tag: "city vibrant",
    },
  ];

  return (
    <div className="max-w-8xl mx-auto p-4  ">
      <Section1 user={users} />
    </div>
  );
};

export default App;
