import PortfolioList from './portfolioList';
import ProjectModal from './ProjectModal';
import { useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { webPortfolio, contentPortfolio } from "../../data"

export default function Portfolio() {
  const [selected, setSelected] = useState("web")
  const [data, setData] = useState([])
  const [modalShow, setModalShow] = useState(false);
  const [currentProject, setCurrentProject] = useState();
  const list = [
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "content",
      title: "Small Web Apps",
    }
  ]
  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webPortfolio)
        break
      case "content":
        setData(contentPortfolio)
        break
      default:
        setData(webPortfolio)
    }
  }, [selected])
  return (
    <Container fluid="xl" className='portfolio d-flex flex-column justify-content-center align-items-center py-5 mt-5' id='portfolio'>
      <h1>PORTFOLIO</h1>
      <ul className="d-flex">
        {list.map((item, index) => <PortfolioList key={index} title={item.title} active={selected === item.id}
          setSelected={setSelected}
          id={item.id}
        />)
        }
      </ul>
      <div className="project-container d-flex flex-wrap justify-content-center justify-content-md-between align-items-center px-3">
        {data.map((d, index) => (
          <div className="item shadow d-flex justify-content-center align-items-center mb-3" key={index}>
            <img src={d.img} alt="" />
            <Button variant="link"
              className="text-white text-decoration-none"
              onClick={
                () => {
                  setModalShow(true)
                  setCurrentProject(d)
                }}>
              VIEW PROJECT
            </Button>
          </div>
        ))
        }
      </div>
      <ProjectModal project={currentProject} show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  )
}
