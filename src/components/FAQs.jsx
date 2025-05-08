import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FAQs() {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const faqData = [
        {
            id: 'panel1',
            question: 'What is the minimum investment amount?',
            answer: 'The minimum investment amount with MSV Infotech is ₹10,000. There is no upper limit, allowing you to invest according to your financial capacity and goals.'
        },
        {
            id: 'panel2',
            question: 'How does the quarterly compounding work?',
            answer: "Our quarterly compounding model provides a 6% return every quarter on your investment. This means that each quarter, your returns are added to your principal amount, and the next quarter's returns are calculated on this increased amount. This creates an accelerating growth curve for your investment."
        },
        {
            id: 'panel3',
            question: 'What is the Tree Family distribution system?',
            answer: 'The Tree Family system is our unique profit distribution model where 70% of the profits go to the main investor (Mukhiya) and 30% is distributed among family members or dependents. You can designate up to 5 family members who will receive an equal share of this 30%. This system helps create generational wealth and financial security for your loved ones.'
        },
        {
            id: 'panel4',
            question: 'How secure is my investment?',
            answer: 'At MSV Infotech, security is our top priority. Our investment plans are designed to be risk-free with a fixed return ratio. We maintain strict compliance with all regulatory requirements and employ robust security measures to protect your investments.'
        },
        {
            id: 'panel5',
            question: 'Can I withdraw my investment before the term ends?',
            answer: 'Yes, you can withdraw your investment before the term ends, subject to our early withdrawal policy. Early withdrawals may incur a nominal processing fee. We recommend discussing your specific situation with our financial advisors to understand the implications.'
        },
        {
            id: 'panel6',
            question: 'How often will I receive reports on my investment?',
            answer: 'We provide quarterly reports detailing your investment performance, including profits earned, compounding effects, and family distributions if applicable. You can also access your investment dashboard anytime through our online portal or mobile app.'
        },
        {
            id: 'panel7',
            question: 'What happens if I want to add more to my investment?',
            answer: 'You can add to your existing investment at any time. Additional investments will be treated as separate investments with their own quarterly compounding cycle, or you can choose to merge them with your existing investment.'
        },
        {
            id: 'panel8',
            question: 'How are the returns taxed?',
            answer: 'The tax implications of your investment returns depend on your individual tax situation and applicable tax laws. We recommend consulting with a tax professional regarding your specific circumstances. MSV Infotech provides all necessary documentation for tax filing purposes.'
        },
        {
            id: 'panel9',
            question: 'Can I change my designated family members?',
            answer: 'Yes, you can change your designated family members for the Tree Family distribution system. Changes will take effect from the next quarter after the request is processed. Please contact our customer service team to make these changes.'
        },
        {
            id: 'panel10',
            question: 'What happens to my investment in case of my demise?',
            answer: "In the unfortunate event of an investor's demise, the investment and future returns are transferred to the nominated beneficiary as per the details provided during registration. We have a streamlined process to ensure a smooth transition during such difficult times."
        },
    ];

    return (
        <>
            <section className="bg-teal-900 text-white py-20 px-4 text-center">
                <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
                <p className="text-lg max-w-2xl mx-auto">
                    Find answers to common questions about MSV Infotech's investment plans, processes, and services.
                </p>
            </section>
            <section className='pattern-dots' style={{ padding: "20px 0 45px" }}>
                <div className='max-w-4xl mx-auto' style={{ padding: "16px 24px" }}>
                    {faqData.map(({ id, question, answer }) => (
                        <Accordion
                            key={id}
                            expanded={expanded === id}
                            onChange={handleChange(id)}
                            className="mt-5 border"
                            sx={{ borderRadius: "8px", padding: "4px 0" }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`${id}-content`}
                                id={`${id}-header`}
                                className='hover:underline hover:bg-gray-50'
                            >
                                <Typography component="span" sx={{ fontWeight: "600", fontFamily: "Poppins" }}>{question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails className='no-underline' sx={{ fontFamily: "Poppins", fontSize: "14px", color: "#374151" }}>
                                {answer}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </section>
            <section className='pattern-diagonal py-16'>
                <div className="bg-white shadow-md rounded-xl p-8 text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Still Have Questions?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Our team is here to help you with any questions or concerns you may have about our investment plans.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-teal-900 text-white px-6 py-2 rounded-md font-semibold hover:bg-teal-800 transition">
                            Contact Us
                        </button>
                        <Link to={"/calculator"} className="border border-gray-300 text-teal-900 px-6 py-2 rounded-md font-semibold hover:bg-teal-900 hover:text-white transition inline-flex items-center justify-center gap-2">
                            Try Our Calculator
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

        </>
    );
}

export default FAQs;
