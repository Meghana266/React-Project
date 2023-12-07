//SellPropertyForm.jsx
import React from 'react';
import './SellPropertyForm.css';
import { connect } from 'react-redux';

const SellPropertyForm = () => {

  const handleSubmit = async(event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const contact = formData.get('contact');
    const category = formData.get('category');
    const price = formData.get('price');
    const details = formData.get('details');
    const image = formData.get('image');

    try {
      const response = await fetch('http://localhost:5000/api/sellProperty', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name,contact,category,price,details }),
      });

      if (response.ok) {
        console.log("Uploaded")
      } 
      else {
        console.error('Failed to Upload');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    const newProperty = {
      id: Date.now(),
      type: category,
      image,
      price,
      features: [details],
    };

    //Reset the form
    event.target.reset();
  };

  return (
    <div className="sell-property-container">
      <h1 className='sell'>Sell Property</h1>
      <form className="property-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact No:</label>
          <input type="tel" id="contact" name="contact" required />
         </div>
         <div className="form-group">
           <label htmlFor="category">Category:</label>
           <select id="category" name="category" required>
             <option value="house">House</option>
             <option value="apartment">Apartment</option>
             <option value="land">Land</option>
           </select>
         </div>
         <div className="form-group">
           <label htmlFor="price">Price:</label>
           <input type="number" id="price" name="price" required />
         </div>
         <div className="form-group">
           <label htmlFor="details">Property Details:</label>
           <textarea id="details" name="details" required />
         </div>
         <div className="form-group">
           <label htmlFor="image">Upload Image:</label>
           <input type="file" id="image" name="image" accept="image/*" />
         </div>
         <button className="c1" type="submit">Post</button>
       </form>
     </div>
  );
};

const mapStateToProps = (state) => ({
  properties: state.properties,
});

export default connect(mapStateToProps,)(SellPropertyForm);