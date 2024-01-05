import React from 'react';
import ServiceCardItem from '../service-cards/ServiceCardItem';
import './ServicesCards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPlug, faBolt, faServer} from '@fortawesome/free-solid-svg-icons'

function ServicesCard() {
  return (
    <section className="services-section">
      <div className="services-section-container">
        <h2 className="services-title">Services</h2>
        <div className="services-cards-container">
          <ul className="service-cards">
            <ServiceCardItem
              imagesrc='/images/service2.jpg'
              iconsrc={faServer}
              title="Security Installations"
              text="Our electrical company specializes in comprehensive security installations. From access control and CCTV setups to alarm systems and smart locks, we expertly handle diverse security solutions. Count on our expertise for seamless installation and maintenance of intercoms, surveillance systems, and sophisticated locking mechanisms for homes and businesses. Trust us to ensure your safety with our reliable and efficient electrical services."
            />
            <ServiceCardItem
              imagesrc='/images/service3.jpg'
              iconsrc={faBolt}
              title="Electrical Maintenance"
              text="Our electrical company excels in electrical maintenance with extensive expertise gained over many years. We specialize in a range of electrical services, ensuring top-tier maintenance for homes, businesses, and industrial setups. Our seasoned team adeptly handles maintenance tasks, offering reliable solutions that guarantee safety, efficiency, and compliance with industry standards. Trust our experience to deliver dependable electrical maintenance solutions tailored to your specific needs."
            />
            <ServiceCardItem
              imagesrc='/images/service1.jpg'
              iconsrc={faPlug}
              title="Custom Lighting"
              text="Transform your space with our expert electrical services tailored for your office or home. Our team specializes in installing aesthetically pleasing lighting solutions that elevate ambiance and functionality. Whether it's creating a welcoming atmosphere for your home or optimizing productivity in your office, we carefully design and install lighting that suits your preferences and enhances the space. Trust us to bring illumination and style to your environment with our professional touch and commitment to delivering top-tier electrical solutions."
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ServicesCard;
