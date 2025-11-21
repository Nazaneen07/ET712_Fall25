import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Welcome to the World of Studio Ghibli</h1>
      <img src="/ghibli.png" alt="Ghibli" width="450" />
      
      <p>
        Studio Ghibli is one of the most famous animation studios in the world. 
        Founded in 1985 by Hayao Miyazaki and Isao Takahata, Ghibli films are 
        loved for their magical stories, beautiful hand-drawn art, and characters 
        full of heart. Many films explore themes like nature, courage, friendship, 
        and growing up.
      </p>
      
      <p>
        Some of the most famous films include <strong>My Neighbor Totoro</strong>, 
        <strong>Spirited Away</strong>, and <strong>Princess Mononoke</strong>. 
        Fans say watching Ghibli films feels like stepping into a dream full of 
        wonder and warmth.
      </p>

      <p>
        Studio Ghibli movies are also known for their attention to detail, the beauty 
        of nature, and memorable characters that leave a lasting impression.
      </p>

      <button
        style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}
        onClick={() => navigate("/thispagedoesnotexist")}
      >
        Test 404 Page
      </button>
    </div>
  );
}

export default Home;


