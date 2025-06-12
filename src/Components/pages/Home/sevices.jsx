import React from 'react';
import './BusinessVerticals.css'; // Assuming you have some CSS for styling



function BusinessVerticals() {
  const verticalsData = [
    {
      alt: 'Roadside Assistance',
      src: "https://static.vecteezy.com/system/resources/previews/012/919/707/original/auto-towing-car-using-a-truck-with-roadside-assistance-service-in-template-hand-drawn-cartoon-flat-background-illustration-vector.jpg",
      text: 'RSA',
    },
    {
      alt: 'car & bike doorstep services',
      src: DoorstepServicesSVG,
      text: 'Doorstep Services',
    },
    {
      alt: 'car & bike accessories fitment',
      src: TelematicsSVG,
      text: 'Accessories Fitment',
    },
    {
      alt: 'extended warranty',
      src: ExtendedWarrantySVG,
      text: 'Extended Warranty',
    },
    {
      alt: 'telematic installation',
      src: OneGHTFYSVG,
      text: 'Telematic Installation',
    },
  ];

  return (
    <div id="businessVerticals">
      <div className="businessVerticals_section mx-auto">
        <div className="businessVerticals_head">
          <h3>ReadyAssist Business Verticals</h3>
          <p>
            ReadyAssist offers comprehensive after-sales support services that
            cater to the entire vehicle ownership cycle in the automobile segment. Our range of services is tailored to
            meet the needs of individuals and corporate customers alike. Below, you'll find an overview of
            some of the key services we provide.
          </p>
        </div>
        <div className="businessVerticals_card_section">
          {verticalsData.map((vertical, index) => (
            <div className="businessVerticals_card" key={index}>
              <img alt={vertical.alt} src={vertical.src} />
              <p>{vertical.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BusinessVerticals;