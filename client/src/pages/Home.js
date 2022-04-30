import React, {useState, useEffect}  from "react";
import DefaultLayout from "../components/DefaultLayout";
import templateimg from "../resources/templates/template_1.png";
import template2img from "../resources/templates/template_2.png";
import template3img from "../resources/templates/template_3.png";
import "../resources/templates.css";
import { useNavigate } from "react-router-dom";

import Modal from "../components/Modal"

function Home() {

  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();



  const show_about = () => {
    let currentModalOpen = modalOpen
    
    setModalOpen(!currentModalOpen)
    const localStorage_data  =JSON.stringify(false)
    localStorage.setItem("show_about",localStorage_data );
  }

  useEffect(() => {
    const shouldModalOpen = JSON.parse(localStorage.getItem("show_about"));
    setModalOpen(shouldModalOpen)
    
  }, []);

  const templates = [
    {
      title: "Simple Resume",
      image: templateimg,
    },
    {
      title: "Highlighted Sections Resume",
      image: template2img,
    },
    {
      title: "colorful  Resume",
      image: template3img,
    },
  ];
  return (
    <div>

      {modalOpen ? 
        (<Modal setOpenModal={show_about} />)
      :
      
      (
        <DefaultLayout>
      <div className="row home">
      <button onClick={show_about} >How to use</button>
        {templates.map((template, index) => {
          return (
            <div className="col-md-4">
              <div className="template">
                <img
                  src={template.image}
                  height="400"
                  alt=""
                  style={{ width: "100%" }}
                />
                <div className="text">
                  <p>{template.title}</p>
                  <button onClick={() => navigate(`/templates/${index + 1}`)}>
                    TRY
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
     
    </DefaultLayout>


      )
      
      
      }
      
    
    </div>
  );
}

export default Home;
