import React from "react";
import { useRef, useEffect } from "react";

const InfoModal = ({ closeFunc, isOpen, projectObject }) => {


  const modal = useRef(true);

  useEffect(() => {
    document.addEventListener("click", (event) => {
      if (event.target == modal){
        console.log(event.AT_TARGET);
      }
    });
  }, []);

  return (
    projectObject && (
      <div className={`${isOpen ? "" : "hidden"}`}>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 p-4">
          <div
            ref={modal}
            className="relative bg-white w-full max-w-md max-h-[90vh] rounded-xl p-6 overflow-y-auto"
          >
            {/* Cerrar */}
            <button
              onClick={closeFunc}
              className="absolute top-3 right-3 bg-red-600 text-white w-9 h-9 flex items-center justify-center rounded-lg font-bold"
            >
              X
            </button>

            {/* Título */}
            <h3 className="text-2xl font-bold mb-4 text-center">
              {projectObject.title}
            </h3>

            {/* Imagen */}
            <img
              className="w-full rounded-md mb-4"
              src={`https://raw.githubusercontent.com/GzaJai/portfolio/main/public/images/${projectObject.image}.png`}
              alt=""
            />

            {/* Texto */}
            <p className="mb-3">{projectObject.description}</p>
            <p className="mb-6">{projectObject.long_description}</p>

            {/* Botón */}
            <a
              href={projectObject.url}
              target="_blank"
              className="block text-center p-3 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-600"
            >
              Visit the page!
            </a>
          </div>
        </div>

      </div>
    )
  );
};

export default InfoModal;
