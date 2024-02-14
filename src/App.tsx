import './App.css';
import { Navbar } from './components/nav-bar';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="MainHero">
        <div className="heroText">Global Biomeservices</div>
      </div>
      <div className="content">
        <div className="Horizontal">
          <div className="horiText">
            <div className="horiTextHeader">
              <h2>Team at GBS</h2>
            </div>
            Extended teams GBS is committed to building and maintaining
            exceptional relationships with our clients and candidates. We have
            successfully helped many companies identify, interview and on-board
            talented professionals at all levels. We have strategy-insight
            driven methods to source professionals for the entire gamut of IT
            including excellently fitting Cloud Engineers, Project Managers,
            Business Analysts, Infrastructure Engineers and brilliant Techies
            for all verticals. We have Passionate and genuinely experienced
            software professionals with very high skill sets and competencies to
            take up any given tasks. GBS prioritizes on genuineness of our
            resources and provide them with equal opportunity to learn, grow and
            succeed For Employers We provide the right skills at the right
            price, right when you need it. We will provide you with top quality
            aspirants, tailored for your company needs and environment, allowing
            you to interview a select candidate and bring them on-board.We are
            provide resource to work onsite and remotely We recruit for your
            needs Our recruiting process is designed to find associates who can
            add business value in your organization from day one.
          </div>
          <img
            src="https://cropx.com/wp-content/uploads/2022/12/iStock-1372936676.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
