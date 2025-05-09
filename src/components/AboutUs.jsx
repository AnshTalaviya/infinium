import React from 'react'
import img1 from "../assets/images/business-concept-with-team-close-up.jpg"
import img2 from "../assets/images/millennial-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-night-office.jpg"
import img3 from "../assets/images/businessman-big-office.jpg"
import img4 from "../assets/images/business-partners-handshake-global-corporate-with-technology-concept.jpg"
import img5 from "../assets/images/rajeshsarma.jpg"
import img6 from "../assets/images/aniketvarma.jpg"
import img7 from "../assets/images/rahulmehta.jpg"
import img8 from "../assets/images/anjalidesai.jpg"
import { FaBullseye } from "react-icons/fa";
import { TaskAltOutlined } from '@mui/icons-material'
import { IoMdTrendingUp } from 'react-icons/io'
import { LuAward } from 'react-icons/lu'


const coreValues = [
    {
        title: "Transparency",
        text: "We believe in complete transparency in all our operations, from fee structures to investment strategies."
    },
    {
        title: "Security",
        text: "We prioritize the security of our investors’ funds through risk-free investment models and robust systems."
    },
    {
        title: "Family-Oriented",
        text: "Our unique Tree Family system ensures that your investment benefits not just you, but your entire family."
    },
    {
        title: "Innovation",
        text: "We continuously innovate our investment models and technology to provide the best returns and user experience."
    }
]

const teamMembers = [
    {
        name: 'Rajesh Sharma',
        title: 'CEO & Founder',
        description:
            'With over 15 years of experience in finance and investment management, leading our team with vision and expertise.',
        img: img5,
    },
    {
        name: 'Aniket Verma',
        title: 'Chief Financial Officer',
        description:
            'With over 15 years of experience in finance and investment management, leading our team with vision and expertise.',
        img: img6,
    },
    {
        name: 'Rahul Mehta',
        title: 'Chief Investment Officer',
        description:
            'With over 15 years of experience in finance and investment management, leading our team with vision and expertise.',
        img: img7,
    },
    {
        name: 'Anjali Desai',
        title: 'Head of Client Relations',
        description:
            'With over 15 years of experience in finance and investment management, leading our team with vision and expertise.',
        img: img8,
    },
];

function AboutUs() {
    return (
        <>
            <section className="bg-teal-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">About Infinium Finance Solution</h1>
                <p className="text-base sm:text-lg max-w-3xl mx-auto">
                    A forward-thinking investment solutions company dedicated to offering secure, structured, and profitable financial growth plans for individuals and families.
                </p>
            </section>

            <section className="pattern-dots py-12 sm:py-16 px-4 sm:px-6 lg:px-16 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Text Section */}
                    <div className="my-auto">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-900 mb-6">Our Story</h2>
                        <p className="text-gray-700 mb-6 text-sm sm:text-base">
                            INFINIUM Finance Solution was founded in 2025 with a clear vision: to make secure and profitable investments accessible to everyone. Our founders recognized that traditional investment options were often complex, risky, or inaccessible to the average person.
                        </p>
                        <p className="text-gray-700 mb-6 text-sm sm:text-base">
                            Drawing on decades of combined experience in finance and technology, they developed a unique investment model based on quarterly compounding and family-oriented distribution. This approach has helped thousands of investors achieve their financial goals while securing their family's future.
                        </p>
                        <p className="text-gray-700 text-sm sm:text-base">
                            Today, INFINIUM Finance Solution stands as a trusted name in the investment industry, known for our transparency, reliability, and consistent returns. Our commitment to our investors' success remains our top priority as we continue to innovate and expand our services.
                        </p>
                    </div>

                    {/* Image Grid Section */}
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src={img1}
                            alt="Team Collaboration"
                            className="rounded-lg shadow-md object-cover w-full h-48 sm:h-64"
                        />
                        <img
                            src={img2}
                            alt="Analytics"
                            className="rounded-lg shadow-md object-cover w-full h-48 sm:h-64 mt-8 sm:mt-14"
                        />
                        <img
                            src={img3}
                            alt="Office View"
                            className="rounded-lg shadow-md object-cover w-full h-48 sm:h-64"
                        />
                        <img
                            src={img4}
                            alt="Partnership"
                            className="rounded-lg shadow-md object-cover w-full h-48 sm:h-64 mt-8 sm:mt-14"
                        />
                    </div>
                </div>
            </section>

            <section className="pattern-dots py-12 sm:py-16 px-4 sm:px-6 lg:px-16 bg-gray-50 text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-900 mb-6">
                        Our Mission & Values
                    </h2>
                    <p className="text-gray-700 mb-12 max-w-2xl mx-auto text-sm sm:text-base">
                        At INFINIUM Finance Solution, we're guided by a clear mission and strong values that shape everything we do.
                    </p>

                    {/* Mission, Vision, Commitment Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16">
                        <div className="bg-white border-t-4 border-teal-900 rounded-lg px-6 py-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition">
                            <FaBullseye className="p-3 mx-auto text-teal-900 text-5xl sm:text-6xl mb-4 bg-gray-200 rounded-full" />
                            <h3 className="font-semibold text-lg sm:text-xl mb-2">Our Mission</h3>
                            <p className="text-gray-600 text-sm sm:text-base">
                                To empower individuals and families to achieve financial security through transparent, accessible, and profitable investment solutions.
                            </p>
                        </div>
                        <div className="bg-white border-t-4 border-yellow-600 rounded-lg px-6 py-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition">
                            <IoMdTrendingUp className="p-3 mx-auto text-yellow-600 text-5xl sm:text-6xl mb-4 bg-gray-200 rounded-full" />
                            <h3 className="font-semibold text-lg sm:text-xl mb-2">Our Vision</h3>
                            <p className="text-gray-600 text-sm sm:text-base">
                                To become the most trusted investment partner for families across India, helping them build generational wealth and financial freedom.
                            </p>
                        </div>
                        <div className="bg-white border-t-4 border-teal-900 rounded-lg px-6 py-8 shadow-md hover:shadow-lg hover:-translate-y-1 transition">
                            <LuAward className="p-3 mx-auto text-teal-900 text-5xl sm:text-6xl mb-4 bg-gray-200 rounded-full" />
                            <h3 className="font-semibold text-lg sm:text-xl mb-2">Our Commitment</h3>
                            <p className="text-gray-600 text-sm sm:text-base">
                                We are committed to maintaining the highest standards of integrity, transparency, and customer service in everything we do.
                            </p>
                        </div>
                    </div>

                    {/* Core Values Section */}
                    <h3 className="text-xl sm:text-2xl font-semibold text-teal-900 mb-8">Our Core Values</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                        {coreValues.map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-4">
                                <span className="bg-gray-200 rounded-full mt-1 p-2">
                                    <TaskAltOutlined className="text-teal-900 text-xl sm:text-2xl" />
                                </span>
                                <div className='text-start'>
                                    <h4 className="font-semibold text-base sm:text-lg mb-2">{item.title}</h4>
                                    <p className="text-gray-600 text-sm sm:text-base">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6 font-bold text-teal-900">Our Leadership Team</h2>
                        <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                            Meet the experienced professionals who lead INFINIUM Finance Solution and drive our mission forward.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition"
                            >
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-56 sm:h-64 lg:h-72 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg sm:text-xl mb-1 font-semibold text-gray-800">{member.name}</h3>
                                    <p className="text-teal-700 font-medium text-sm sm:text-md mb-3">{member.title}</p>
                                    <p className="text-gray-600 text-sm">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs
