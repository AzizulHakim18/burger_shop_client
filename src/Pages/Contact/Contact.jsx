import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your message has been sent!');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    return (
        <div>
            <section className="bg-gray-50 py-16" id="contact">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-gray-900 animate__animated animate__fadeInDown">Get In Touch</h2>
                    <p className="text-center text-gray-600 mt-4 animate__animated animate__fadeInDown">
                        We're happy to hear from you! Drop us a message below.
                    </p>
                    <div className="mt-10 flex flex-col md:flex-row gap-8 justify-between items-center animate__animated animate__zoomIn">
                        <div className="w-full md:w-1/2 bg-white p-8 shadow-lg rounded-lg transition-all duration-300 hover:shadow-2xl">
                            <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
                            <div className="flex flex-col space-y-4 mt-4">
                                <div className="flex items-center space-x-4">
                                    <FontAwesomeIcon icon={faPhone} className="text-red-500" />
                                    <p className="text-gray-600">(123) 456-7890</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-red-500" />
                                    <p className="text-gray-600">support@burgerbliss.com</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500" />
                                    <p className="text-gray-600">123 Burger Lane, Food City, USA</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg">
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="4"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-red-500 text-white py-2 px-4 rounded-md shadow hover:bg-red-700 transition-all duration-300 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-red-400"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-16" id="faq">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-gray-900 animate__animated animate__fadeInDown">Frequently Asked Questions</h2>
                    <div className="mt-8 space-y-4">
                        <div className="border-b border-gray-200 pb-4">
                            <h3 className="text-xl font-semibold">What is your refund policy?</h3>
                            <p className="mt-2 text-gray-600">
                                If you're unsatisfied with your purchase, we offer refunds within 30 days. Just reach out to us with your order number.
                            </p>
                        </div>
                        <div className="border-b border-gray-200 pb-4">
                            <h3 className="text-xl font-semibold">Can I customize my burger?</h3>
                            <p className="mt-2 text-gray-600">
                                Yes! You can fully customize your burger when ordering online or in-store.
                            </p>
                        </div>
                        <div className="border-b border-gray-200 pb-4">
                            <h3 className="text-xl font-semibold">Do you offer delivery services?</h3>
                            <p className="mt-2 text-gray-600">
                                Yes, we offer delivery through multiple partners like Uber Eats, DoorDash, and Grubhub.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <h3 className="text-2xl font-semibold text-center mb-4">Find Us on Google Maps</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093646!2d144.95373631558967!3d-37.81627944210544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x8044b441!2s123%20Burger%20Lane!5e0!3m2!1sen!2sus!4v1633094691952!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-lg border shadow-lg"
                ></iframe>
            </div>

        </div>
    );
};

export default Contact;