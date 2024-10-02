import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import AddIcon from "@mui/icons-material/Add";
// import Accordion from "../Accordion/accordion";

function Faqs() {
  const faqData = [
    {
      title: "What types of startups does Aarog Plus invest in?",
      text: "We primarily invest in early-stage technology startups with innovative solutions that have the potential to disrupt industries. We focus on ventures with strong leadership teams and scalable business models that align with our vision of creating lasting impact.",
    },
    {
      title: "How does Aarog Plus support startups beyond funding?",
      text: "Apart from financial investment, we provide strategic guidance, mentorship, and access to our extensive network of industry experts and partners. We also offer operational support, market insights, and help with branding and scaling strategies.",
    },
    {
      title: "What is Aarog Plus' investment process?",
      text: "Our process begins with understanding your vision and evaluating your business model. We then work closely with you to assess market fit and growth potential. Once aligned, we offer personalized support and a tailored roadmap to help you achieve your business goals.",
    },
  ];
  return (
    <div className="faqs" id="faqs">
      <div className="head-container">
        <h1>FAQs</h1>
      </div>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <Accordion key={index}>
            <AccordionItem
              header={
                <div className="accordion-header">
                  <span>{item.title}</span>
                  <AddIcon />
                </div>
              }
            >
              <p>{item.text}</p>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
