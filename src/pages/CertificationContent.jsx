import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CertificationBanner from "./../components/certification/CertificationBanner";
import LearningCard from "./../components/certification/LearningCard";
import learningModuleImg from "../assets/learning_module.png";
import certificationBanner from "../assets/certification_banner.png";
import software_arquitectureImg from "../assets/software_arquitecture.png";
import operating_systemsImg from "../assets/operating_systems.png";

const CertificationContent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { title = "Default Title", description = "Default Description" } = location.state || {};

  const learningModules = [
    {
      title: "Basis of the computer",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      slides: 10,
      tags: ["Basic", "Present"],
      imageUrl: learningModuleImg,
    },
    {
      title: "Software Architecture",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      slides: 10,
      tags: ["Basic", "Present"],
      imageUrl: software_arquitectureImg,
    },
    {
      title: "Operating Systems",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      slides: 10,
      tags: ["Basic", "Present"],
      imageUrl: operating_systemsImg,
    },
  ];

  return (
    <div className="flex">

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Banner */}
        <CertificationBanner
          title={title}
          subtitle={description}
          backgroundImage={certificationBanner}
          className="mb-6"
        />

        {/* LearningCard list */}
        <div className="space-y-4">
          {learningModules.map((module, index) => (
            <div
              key={index}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() =>
                navigate("/module-details", {
                  state: {
                    title: module.title,
                    description: module.description,
                    slides: module.slides,
                    tags: module.tags,
                    imageUrl: module.imageUrl, // Pasar la imagen al destino
                  },
                })
              }
            >
              <LearningCard
                title={module.title}
                description={module.description}
                slides={module.slides}
                tags={module.tags}
                imageUrl={module.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationContent;
