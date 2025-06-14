import React, { useState } from 'react';
import './Provider.css'; // For styling your form

export const Provider = () => {
  // State to hold all form data
  const [formData, setFormData] = useState({
    companyName: '',
    contactPersonName: '',
    contactPersonEmail: '',
    contactPersonPhone: '',
    location: '',
    operationalAreas: '',
    rsaServices: [], // Array to hold selected RSA services
    doorstepServices: [], // Array to hold selected Doorstep services
    accessoriesFitment: [], // Array to hold selected Accessories Fitment options
    extendedWarrantyOffered: 'no', // 'yes' or 'no'
    extendedWarrantyBrands: '',
    authorizedServiceCenter: 'no', // 'yes' or 'no'
    telematicsServices: [], // Array to hold selected Telematics services
    operatingHours: '',
    teamSize: '',
    yearsInBusiness: '',
    certifications: '',
    serviceCapacity: '',
    paymentMethods: [], // Array to hold selected payment methods
    agreedToTerms: false,
    declarationAgreed: false,
  });

  // Handler for text input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handler for checkbox group changes (e.g., for services)
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => {
      const currentArray = prevData[name];
      if (checked) {
        return { ...prevData, [name]: [...currentArray, value] };
      } else {
        return { ...prevData, [name]: currentArray.filter((item) => item !== value) };
      }
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the formData to your backend server
    // For demonstration, we'll just log it to the console.
    console.log('Form Submitted!', formData);

    // You would likely send this data using fetch or axios to an API endpoint:
    // fetch('/api/register-provider', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    //   alert('Registration successful!');
    //   // Optionally reset form or redirect
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    //   alert('Registration failed. Please try again.');
    // });
  };

  return (
    <div className="provider-registration-container">
      <div className="provider-registration-content">
        <h1>Become a ReadyAssist Service Provider</h1>
        <p>
          We're always looking to expand our network of trusted service partners across India. If you're a professional
          or a business offering high-quality automotive after-sales services, we invite you to join the ReadyAssist family.
        </p>
        <p>
          Please fill out the form below to tell us more about your expertise and the services you offer.
        </p>

        <form onSubmit={handleSubmit} className="provider-form">
          <fieldset>
            <legend>1. Essential Provider Information</legend>
            <div className="form-group">
              <label htmlFor="companyName">Provider/Company Name *</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactPersonName">Contact Person Name *</label>
              <input
                type="text"
                id="contactPersonName"
                name="contactPersonName"
                value={formData.contactPersonName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactPersonEmail">Contact Person Email *</label>
              <input
                type="email"
                id="contactPersonEmail"
                name="contactPersonEmail"
                value={formData.contactPersonEmail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactPersonPhone">Contact Person Phone Number *</label>
              <input
                type="tel"
                id="contactPersonPhone"
                name="contactPersonPhone"
                value={formData.contactPersonPhone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location (City, State/Province, Country) *</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="operationalAreas">Operational Areas (e.g., specific pin codes, regions) *</label>
              <textarea
                id="operationalAreas"
                name="operationalAreas"
                value={formData.operationalAreas}
                onChange={handleChange}
                rows="3"
                required
              ></textarea>
            </div>
          </fieldset>

          <fieldset>
            <legend>2. Business Verticals and Sub-Services</legend>

            <h4>Roadside Assistance (RSA)</h4>
            <div className="form-group checkbox-group">
              <label>Which of the following RSA sub-services do you provide? *</label>
              <label>
                <input
                  type="checkbox"
                  name="rsaServices"
                  value="Flat Tyre Assistance"
                  checked={formData.rsaServices.includes('Flat Tyre Assistance')}
                  onChange={handleCheckboxChange}
                />
                Flat Tyre Assistance
              </label>
              <label>
                <input
                  type="checkbox"
                  name="rsaServices"
                  value="Battery Jumpstart"
                  checked={formData.rsaServices.includes('Battery Jumpstart')}
                  onChange={handleCheckboxChange}
                />
                Battery Jumpstart
              </label>
              <label>
                <input
                  type="checkbox"
                  name="rsaServices"
                  value="Minor On-Spot Repairs"
                  checked={formData.rsaServices.includes('Minor On-Spot Repairs')}
                  onChange={handleCheckboxChange}
                />
                Minor On-Spot Repairs
              </label>
              <label>
                <input
                  type="checkbox"
                  name="rsaServices"
                  value="Fuel Delivery"
                  checked={formData.rsaServices.includes('Fuel Delivery')}
                  onChange={handleCheckboxChange}
                />
                Fuel Delivery
              </label>
              <label>
                <input
                  type="checkbox"
                  name="rsaServices"
                  value="Towing"
                  checked={formData.rsaServices.includes('Towing')}
                  onChange={handleCheckboxChange}
                />
                Towing (to nearest workshop/preferred location)
              </label>
              <label>
                <input
                  type="checkbox"
                  name="rsaServices"
                  value="Accident Assistance"
                  checked={formData.rsaServices.includes('Accident Assistance')}
                  onChange={handleCheckboxChange}
                />
                Accident Assistance
              </label>
              <label>
                <input
                  type="checkbox"
                  name="rsaServices"
                  value="Key Lockout Services"
                  checked={formData.rsaServices.includes('Key Lockout Services')}
                  onChange={handleCheckboxChange}
                />
                Key Lockout Services
              </label>
              {/* Add "Other" if needed */}
            </div>

            <h4>Doorstep Services</h4>
            <div className="form-group checkbox-group">
              <label>Which of the following Doorstep Services do you offer? *</label>
              <label>
                <input
                  type="checkbox"
                  name="doorstepServices"
                  value="General Service"
                  checked={formData.doorstepServices.includes('General Service')}
                  onChange={handleCheckboxChange}
                />
                General Service (Oil Change, Filter Replacement)
              </label>
              <label>
                <input
                  type="checkbox"
                  name="doorstepServices"
                  value="Brake Inspection & Repair"
                  checked={formData.doorstepServices.includes('Brake Inspection & Repair')}
                  onChange={handleCheckboxChange}
                />
                Brake Inspection & Repair
              </label>
              <label>
                <input
                  type="checkbox"
                  name="doorstepServices"
                  value="AC Service"
                  checked={formData.doorstepServices.includes('AC Service')}
                  onChange={handleCheckboxChange}
                />
                AC Service
              </label>
              <label>
                <input
                  type="checkbox"
                  name="doorstepServices"
                  value="Detailing & Washing"
                  checked={formData.doorstepServices.includes('Detailing & Washing')}
                  onChange={handleCheckboxChange}
                />
                Detailing & Washing
              </label>
              <label>
                <input
                  type="checkbox"
                  name="doorstepServices"
                  value="Diagnostics & Troubleshooting"
                  checked={formData.doorstepServices.includes('Diagnostics & Troubleshooting')}
                  onChange={handleCheckboxChange}
                />
                Diagnostics & Troubleshooting
              </label>
              <label>
                <input
                  type="checkbox"
                  name="doorstepServices"
                  value="Minor Electrical Repairs"
                  checked={formData.doorstepServices.includes('Minor Electrical Repairs')}
                  onChange={handleCheckboxChange}
                />
                Minor Electrical Repairs
              </label>
              {/* Add "Other" if needed */}
            </div>

            <h4>Accessories Fitment</h4>
            <div className="form-group checkbox-group">
              <label>Which types of accessories do you fit? *</label>
              <label>
                <input
                  type="checkbox"
                  name="accessoriesFitment"
                  value="Basic Accessories"
                  checked={formData.accessoriesFitment.includes('Basic Accessories')}
                  onChange={handleCheckboxChange}
                />
                Basic Accessories (e.g., floor mats, seat covers)
              </label>
              <label>
                <input
                  type="checkbox"
                  name="accessoriesFitment"
                  value="Infotainment Systems"
                  checked={formData.accessoriesFitment.includes('Infotainment Systems')}
                  onChange={handleCheckboxChange}
                />
                Infotainment Systems
              </label>
              <label>
                <input
                  type="checkbox"
                  name="accessoriesFitment"
                  value="Security Systems"
                  checked={formData.accessoriesFitment.includes('Security Systems')}
                  onChange={handleCheckboxChange}
                />
                Security Systems
              </label>
              <label>
                <input
                  type="checkbox"
                  name="accessoriesFitment"
                  value="Lighting Upgrades"
                  checked={formData.accessoriesFitment.includes('Lighting Upgrades')}
                  onChange={handleCheckboxChange}
                />
                Lighting Upgrades
              </label>
              <label>
                <input
                  type="checkbox"
                  name="accessoriesFitment"
                  value="Performance Accessories"
                  checked={formData.accessoriesFitment.includes('Performance Accessories')}
                  onChange={handleCheckboxChange}
                />
                Performance Accessories
              </label>
              {/* Add "Other" if needed */}
            </div>

            <h4>Extended Warranty</h4>
            <div className="form-group">
              <label>Do you offer extended warranty services for vehicles? *</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="extendedWarrantyOffered"
                    value="yes"
                    checked={formData.extendedWarrantyOffered === 'yes'}
                    onChange={handleChange}
                    required
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="extendedWarrantyOffered"
                    value="no"
                    checked={formData.extendedWarrantyOffered === 'no'}
                    onChange={handleChange}
                    required
                  />
                  No
                </label>
              </div>
            </div>
            {formData.extendedWarrantyOffered === 'yes' && (
              <>
                <div className="form-group">
                  <label htmlFor="extendedWarrantyBrands">Which brands/manufacturers' extended warranties do you service/support?</label>
                  <textarea
                    id="extendedWarrantyBrands"
                    name="extendedWarrantyBrands"
                    value={formData.extendedWarrantyBrands}
                    onChange={handleChange}
                    rows="2"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Are you an authorized service center for any specific brands related to extended warranties?</label>
                  <div>
                    <label>
                      <input
                        type="radio"
                        name="authorizedServiceCenter"
                        value="yes"
                        checked={formData.authorizedServiceCenter === 'yes'}
                        onChange={handleChange}
                      />
                      Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="authorizedServiceCenter"
                        value="no"
                        checked={formData.authorizedServiceCenter === 'no'}
                        onChange={handleChange}
                      />
                      No
                    </label>
                  </div>
                </div>
              </>
            )}

            <h4>Telematic Installation</h4>
            <div className="form-group checkbox-group">
              <label>Which telematics services do you specialize in? *</label>
              <label>
                <input
                  type="checkbox"
                  name="telematicsServices"
                  value="GPS Tracking Device Installation"
                  checked={formData.telematicsServices.includes('GPS Tracking Device Installation')}
                  onChange={handleCheckboxChange}
                />
                GPS Tracking Device Installation
              </label>
              <label>
                <input
                  type="checkbox"
                  name="telematicsServices"
                  value="Fleet Management System Installation"
                  checked={formData.telematicsServices.includes('Fleet Management System Installation')}
                  onChange={handleCheckboxChange}
                />
                Fleet Management System Installation
              </label>
              <label>
                <input
                  type="checkbox"
                  name="telematicsServices"
                  value="OBD-II Device Installation"
                  checked={formData.telematicsServices.includes('OBD-II Device Installation')}
                  onChange={handleCheckboxChange}
                />
                OBD-II Device Installation
              </label>
              <label>
                <input
                  type="checkbox"
                  name="telematicsServices"
                  value="Dash Cam Installation"
                  checked={formData.telematicsServices.includes('Dash Cam Installation')}
                  onChange={handleCheckboxChange}
                />
                Dash Cam Installation
              </label>
              <label>
                <input
                  type="checkbox"
                  name="telematicsServices"
                  value="IoT Device Integration"
                  checked={formData.telematicsServices.includes('IoT Device Integration')}
                  onChange={handleCheckboxChange}
                />
                IoT Device Integration
              </label>
              {/* Add "Other" if needed */}
            </div>
          </fieldset>

          <fieldset>
            <legend>3. Operational Details</legend>
            <div className="form-group">
              <label htmlFor="operatingHours">Operating Hours/Days (e.g., Mon-Sat, 9 AM - 6 PM) *</label>
              <input
                type="text"
                id="operatingHours"
                name="operatingHours"
                value={formData.operatingHours}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="teamSize">Team Size (Number of Technicians/Staff) *</label>
              <input
                type="number"
                id="teamSize"
                name="teamSize"
                value={formData.teamSize}
                onChange={handleChange}
                min="1"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="yearsInBusiness">Years in Business *</label>
              <input
                type="number"
                id="yearsInBusiness"
                name="yearsInBusiness"
                value={formData.yearsInBusiness}
                onChange={handleChange}
                min="0"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="certifications">Any Certifications/Licenses (e.g., Authorized service center for...) </label>
              <textarea
                id="certifications"
                name="certifications"
                value={formData.certifications}
                onChange={handleChange}
                rows="2"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="serviceCapacity">Service Capacity (e.g., how many vehicles can you service daily for doorstep/RSA?) *</label>
              <input
                type="text"
                id="serviceCapacity"
                name="serviceCapacity"
                value={formData.serviceCapacity}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group checkbox-group">
              <label>Payment Methods Accepted *</label>
              <label>
                <input
                  type="checkbox"
                  name="paymentMethods"
                  value="Cash"
                  checked={formData.paymentMethods.includes('Cash')}
                  onChange={handleCheckboxChange}
                />
                Cash
              </label>
              <label>
                <input
                  type="checkbox"
                  name="paymentMethods"
                  value="Card"
                  checked={formData.paymentMethods.includes('Card')}
                  onChange={handleCheckboxChange}
                />
                Card (Credit/Debit)
              </label>
              <label>
                <input
                  type="checkbox"
                  name="paymentMethods"
                  value="UPI"
                  checked={formData.paymentMethods.includes('UPI')}
                  onChange={handleCheckboxChange}
                />
                UPI
              </label>
              <label>
                <input
                  type="checkbox"
                  name="paymentMethods"
                  value="Online Transfer"
                  checked={formData.paymentMethods.includes('Online Transfer')}
                  onChange={handleCheckboxChange}
                />
                Online Transfer
              </label>
              {/* Add "Other" if needed */}
            </div>
          </fieldset>

          <fieldset>
            <legend>4. Terms and Declaration</legend>
            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="agreedToTerms"
                  checked={formData.agreedToTerms}
                  onChange={handleChange}
                  required
                />
                I agree to the <a href="/terms-conditions" target="_blank" rel="noopener noreferrer">ReadyAssist Provider Terms and Conditions</a>. *
              </label>
            </div>
            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="declarationAgreed"
                  checked={formData.declarationAgreed}
                  onChange={handleChange}
                  required
                />
                I declare that the information provided above is accurate and complete to the best of my knowledge. *
              </label>
            </div>
          </fieldset>

          <button type="submit" className="submit-button">Register Now</button>
        </form>
      </div>
    </div>
  );
};