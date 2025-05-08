import { FmdGoodOutlined, MailOutlined, PhoneOutlined, QueryBuilderOutlined } from '@mui/icons-material'
import React from 'react'

function Contact() {
    return (
        <>
            <section className="bg-teal-900 text-white py-20 px-4 text-center">
                <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg max-w-2xl mx-auto">
                    Have questions or need assistance? Our team is here to help you with your investment journey.
                </p>
            </section>
            <section className="pattern-dots py-16 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Form */}
                    <div>
                        <h2 className="text-4xl font-bold text-teal-900 mb-6">Get in Touch</h2>
                        <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

                        <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Your Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input type="tel" placeholder="+91 1234567890" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Subject</label>
                                    <input type="text" placeholder="Investment Inquiry" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Your Message</label>
                                <textarea placeholder="How can we help you?" rows="4" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-500" />
                            </div>
                            <button type="submit" className="w-full bg-teal-900 text-white py-2 px-4 rounded-md font-semibold hover:bg-teal-800 transition flex justify-center items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 19.5L21.5 12 2.5 4.5v6l13 1.5-13 1.5v6z" />
                                </svg>
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold text-teal-900 mb-6">Contact Information</h2>
                        <p className="text-gray-600 mb-8">
                            You can reach out to us through any of the following channels or visit our office during business hours.
                        </p>

                        <div className="space-y-6">
                            {/* Office */}
                            <div className="bg-white shadow-md hover:-translate-y-1 rounded-lg p-6 flex items-start gap-4">
                                <div className="text-teal-900 p-2" style={{ background: "rgba(9, 61, 62,0.2", borderRadius: "50%" }}>
                                    <FmdGoodOutlined />
                                </div>
                                <div>
                                    <h4 className="font-bold">Our Office</h4>
                                    <p>MSV Infotech Pvt. Ltd.<br />123 Financial District<br />Mumbai, Maharashtra<br />India</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="bg-white shadow-md hover:-translate-y-1 rounded-lg p-6 flex items-start gap-4">
                                <div className="text-teal-900 p-2" style={{ background: "rgba(9, 61, 62,0.2", borderRadius: "50%" }}>
                                    <PhoneOutlined />
                                </div>
                                <div>
                                    <h4 className="font-bold">Phone</h4>
                                    <p>+91 1234567890<br />+91 9876543210 (Customer Support)</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="bg-white shadow-md hover:-translate-y-1 rounded-lg p-6 flex items-start gap-4">
                                <div className="text-teal-900 p-2" style={{ background: "rgba(9, 61, 62,0.2", borderRadius: "50%" }}>
                                    <MailOutlined />
                                </div>
                                <div>
                                    <h4 className="font-bold">Email</h4>
                                    <p>info@msvinfotech.com<br />support@msvinfotech.com</p>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="bg-white shadow-md hover:-translate-y-1 rounded-lg p-6 flex items-start gap-4">
                                <div className="text-teal-900 p-2" style={{ background: "rgba(9, 61, 62,0.2", borderRadius: "50%" }}>
                                    <QueryBuilderOutlined />
                                </div>
                                <div>
                                    <h4 className="font-bold">Business Hours</h4>
                                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM <br />Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gray-100 py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-teal-900 mb-8">Find Us</h2>

                    <div className="mx-auto w-full max-w-4xl aspect-[16/7] bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 text-md">
                        Interactive Map Would Be Displayed Here
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact
