"use client";

import React, { useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PrismicRichText } from "./PrismicRichText";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentHeight = useRef();
  return (
    <div className="wrapper">
      <button
        className={`question-container ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <p className="question-content">{question}</p>
        <RiArrowDropDownLine className={`arrow ${isOpen ? "active" : ""}`} />
      </button>

      <div
        ref={contentHeight}
        className="answer-container"
        style={
          isOpen
            ? { height: contentHeight.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="pb-3">
          <PrismicRichText field={answer} />
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="relative">
      <div className="accordion-container mx-auto">
        {data?.map((item, index) => {
          console.log(item.serviceDescription);

          return (
            <AccordionItem
              key={index}
              question={item.serviceTitle}
              answer={item.serviceDescription}
              isOpen={activeIndex === index}
              onClick={() => handleItemClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
