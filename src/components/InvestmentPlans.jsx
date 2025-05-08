import { ArrowForwardOutlined, KeyboardArrowDownOutlined, KeyboardArrowUpOutlined, TaskAltOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const tblData = [
    ['Minimum Investment', '₹10,000', '₹10,000', '₹5,000'],
    ['Return Rate', '6% quarterly', '6% quarterly', '5% quarterly'],
    ['Annual Return', 'Up to 26.25%', 'Up to 26.25%', 'Up to 21.55%'],
    ['Family Distribution', 'No', 'Yes (70:30)', 'Optional'],
    ['Profit Withdrawal', 'Quarterly', 'Quarterly', 'Quarterly/Annually'],
    ['Reinvestment Option', 'Yes', 'Yes', 'Yes'],
    ['Lock-in Period', '3 months', '3 months', '6 months'],
]

const plans = [
    {
        title: 'Quarterly Compounding',
        title2: 'Plan Overview',
        title3: 'Key Benefits',
        title4: 'Eligibility',
        title5: 'Investment Process',
        title6: 'Frequently Asked Questions',
        popular: true,
        que: "How is the quarterly interest calculated?",
        que2: "Can I withdraw my investment before the term ends?",
        que3: "Is there a maximum investment limit?",
        description: 'Our flagship plan with 6% quarterly returns through compounding interest.',
        description2: 'The Quarterly Compounding Plan is our flagship investment solution designed to maximize your returns through the power of compound interest. With a competitive 6% quarterly interest rate, your investment grows exponentially over time.',
        description3: 'The 6% quarterly interest is calculated on the principal amount plus any accumulated interest from previous quarters, creating a compounding effect.',
        description4: 'Yes, early withdrawals are possible after the minimum lock-in period of 3 months, subject to a nominal early withdrawal fee.',
        description5: 'The maximum investment amount is ₹10,00,000 (10 lakhs) per individual investor.',
        features: [
            '6% quarterly compounding returns',
            'Up to 26.25% annual returns',
            'Minimum investment: ₹10,000',
            'Quarterly profit distribution',
            'Reinvestment options available',
        ],
        features2: [
            "Higher returns through compounding",
            "Quarterly profit payouts",
            "Flexible investment duration",
            "No hidden fees or charges",
            "Transparent profit calculation",
        ],
        features3: [
            "Indian residents aged 18 years and above",
            "Valid PAN card and address proof",
            "Active bank account for transactions",
        ],
        features4: [
            "Register and complete KYC verification",
            "Choose your investment amount(min ₹10,000)",
            "Select investment duration(min 3 months)",
            "Make payment through secure gateway",
            "Track your investment growth in dashboard",
        ],
        color: 'bg-white',
        buttonColor: 'bg-teal-900',
        featuresColor: 'text-teal-900',
    },
    {
        title: 'Tree Family Plan',
        title2: 'Plan Overview',
        title3: 'Key Benefits',
        title4: 'Eligibility',
        title5: 'Investment Process',
        title6: 'Frequently Asked Questions',
        popular: true,
        que: "How is the profit distributed among family members?",
        que2: "Can I change my nominated family members?",
        que3: "Do family members need to create their own accounts?",
        description: 'Benefit your family with our unique profit distribution system.',
        description2: 'The Tree Family Plan is our innovative investment solution that allows you to share your investment returns with your family members. This plan follows the same quarterly compounding model but distributes the profits among your designated family members.',
        description3: '70% of the profit goes to the primary investor (Mukhiya), while 30% is distributed equally among the nominated family members (up to 5 members).',
        description4: 'Yes, you can update your nominated family members once every quarter through your dashboard.',
        description5: "No, family members don't need separate accounts. Their details are managed through the primary investor's account.",
        features: [
            '70% profits to main investor',
            '30% to family or dependents',
            'Up to 5 family members',
            'Collective financial growth',
            'Secure generational wealth',
        ],
        features2: [
            "Create financial security for your family",
            "Distribute wealth efficiently",
            "Tax-efficient profit sharing",
            "Teach financial responsibility to family members",
            "Build generational wealth",
        ],
        features3: [
            "Indian residents aged 18 years and above",
            "Valid PAN card and address proof",
            "Active bank account for transactions",
            "Up to 5 family members can be nominated",
        ],
        features4: [
            "Register and complete KYC verification",
            "Add family members with their details",
            "Choose your investment amount(min ₹10,000)",
            "Select investment duration(min 3 months)",
            "Make payment through secure gateway",
            "Track your family's investment growth in dashboard",
        ],
        color: 'bg-white',
        buttonColor: 'bg-yellow-600',
        featuresColor: 'text-yellow-600',
    },
    {
        title: 'Systematic Investment Plan',
        title2: 'Plan Overview',
        title3: 'Key Benefits',
        title4: 'Eligibility',
        title5: 'Investment Process',
        title6: 'Frequently Asked Questions',
        popular: true,
        que: "Can I change my SIP amount after starting?",
        que2: "What happens if I miss a SIP payment?",
        que3: "Is there a lock-in period for SIP investments?",
        description: 'A structured approach to long-term wealth creation with fixed returns.',
        description2: 'The Systematic Investment Plan (SIP) is designed for investors who prefer a disciplined approach to wealth creation. This plan allows you to invest a fixed amount regularly (monthly or quarterly) and benefit from the power of compounding over time.',
        description3: 'Yes, you can increase or decrease your SIP amount with a 30-day notice period.',
        description4: 'If you miss a payment, your SIP continues with the next scheduled payment. However, consistent missed payments may affect your overall returns.',
        description5: 'Yes, there is a minimum lock-in period of 6 months for SIP investments.',
        features: [
            'Risk-free investment',
            'Fixed return ratio',
            'Monthly investment options',
            'Flexible investment amounts',
            'Long-term wealth creation',
        ],
        features2: [
            "Disciplined investment approach",
            "Rupee cost averaging",
            "Lower investment entry point (₹5,000)",
            "Flexibility to increase investment amount",
            "Ideal for long-term financial goals",
        ],
        features3: [
            "Indian residents aged 18 years and above",
            "Valid PAN card and address proof",
            "Active bank account for auto-debit",
        ],
        features4: [
            "Register and complete KYC verification",
            "Set up your SIP amount(min ₹5,000)",
            "Choose frequency(monthly or quarterly)",
            "Set up auto - debit mandate",
            "Track your SIP growth in dashboard",
        ],
        color: 'bg-white',
        buttonColor: 'bg-teal-900',
        featuresColor: 'text-teal-900',
    },
];

function InvestmentPlans() {

    const [expandedItems, setExpandedItems] = useState({});

    const toggleExpand = (index) => {
        setExpandedItems((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <>
            <section className="bg-teal-900 text-white py-16 px-4 text-center">
                <h1 className="text-5xl font-bold mb-4">Investment Plans</h1>
                <p className="text-lg max-w-2xl mx-auto">
                    Choose from our range of investment options designed to meet your financial goals and secure your future.
                </p>
            </section>
            <section className="pattern-dots px-4 pt-14 pb-16">
                <h2 className="text-4xl font-bold text-teal-900 text-center mb-6">Our Investment Solutions</h2>
                <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
                    At MSV Infotech, we offer carefully designed investment plans that provide security, growth, and family benefits.
                </p>
                <div className="grid mx-10 sm:grid-cols-1 md:grid-cols-3">
                    {plans.map((plan, idx) => (
                        <div key={idx} className={`rounded-xl mx-auto shadow-md px-6 pt-8 pb-6 max-w-md ${plan.color} relative`}>
                            <div className={`absolute top-0 left-0 w-full h-2 ${plan.buttonColor} rounded-t-xl`}></div>

                            <span className="bg-yellow-600 text-white text-xs absolute top-3 right-2 px-2 py-1 mb-1 rounded">
                                POPULAR
                            </span>

                            <h3 className={`${plan.featuresColor} text-2xl font-bold mb-4`}>{plan.title}</h3>
                            <p className="text-gray-700 mb-6">{plan.description}</p>
                            <ul className="text-gray-700 space-y-3 mb-8">
                                {plan.features.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <TaskAltOutlined className={`${plan.featuresColor}`} /> <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => toggleExpand(idx)}
                                className="text-dark px-4 py-2 border border-solid border-gray-300 hover:bg-yellow-600 mb-3 rounded w-full flex justify-between items-center"
                            >
                                {expandedItems[idx] ? (
                                    <span className='mx-auto'>Show Less <KeyboardArrowUpOutlined /></span>
                                ) : (
                                    <span className='mx-auto'>Learn More <KeyboardArrowDownOutlined /></span>
                                )}
                            </button>

                            <button className={`${plan.buttonColor} text-white px-4 py-2 rounded w-full`}>
                                Start Investing
                            </button>

                            {expandedItems[idx] && (
                                <div className="text-sm text-dark mb-4">
                                    <hr className='my-6' />
                                    {/* Extra details here as-is... */}
                                    {/* ... (your full details code remains unchanged) */}
                                    <h3 className={`text-lg font-bold mb-4`}>{plan.title2}</h3>
                                    <p className="text-gray-700 mb-6 text-base">{plan.description2}</p>
                                    <h3 className={`text-lg font-bold mb-4`}>{plan.title3}</h3>
                                    <ul className="text-gray-700 space-y-3 mb-8">
                                        {plan.features2.map((feat, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <TaskAltOutlined className={`${plan.featuresColor} text-base`} /> <span className='text-base'>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <h3 className={`text-lg font-bold mb-4`}>{plan.title4}</h3>
                                    <ul className="text-gray-700 space-y-3 mb-8">
                                        {plan.features3.map((feat, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <TaskAltOutlined className={`${plan.featuresColor} text-base`} /> <span className='text-base'>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <h3 className={`text-lg font-bold mb-4`}>{plan.title5}</h3>
                                    <ul className="text-gray-700 space-y-3 mb-8">
                                        {plan.features4.map((feat, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className={`font-bold text-base`}>{i + 1}.</span>
                                                <span className='text-base'>{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <h3 className={`text-lg font-bold mb-6`}>{plan.title6}</h3>
                                    <p className="text-dark mb-2 text-base font-semibold">{plan.que}</p>
                                    <p className="text-gray-700 mb-4 text-base">{plan.description3}</p>
                                    <p className="text-dark mb-2 text-base font-semibold">{plan.que2}</p>
                                    <p className="text-gray-700 mb-4 text-base">{plan.description4}</p>
                                    <p className="text-dark mb-2 text-base font-semibold">{plan.que3}</p>
                                    <p className="text-gray-700 mb-4 text-base">{plan.description5}</p>

                                    <button className={`${plan.buttonColor} text-white mt-3 px-4 py-2 rounded w-full`}>
                                        Start Investing <ArrowForwardOutlined />
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className="pattern-diagonal py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-10 text-teal-900">Plan Comparison</h2>
                    <div className="overflow-x-auto">
                        <table className="border-0 min-w-full border-gray-200 text-center text-sm md:text-base">
                            <thead>
                                <tr className="bg-teal-900 text-white">
                                    <th className="p-4 text-left">Features</th>
                                    <th className="p-4">Quarterly Compounding</th>
                                    <th className="p-4">Tree Family Plan</th>
                                    <th className="p-4">Systematic Investment</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                {tblData.map(([feature, col1, col2, col3], idx) => {
                                    const isTransparent = idx % 2 !== 0;
                                    return (
                                        <tr
                                            key={idx}
                                            className={`border-b border-gray-200 ${isTransparent ? 'bg-white' : 'bg-transparent'}`}
                                        >
                                            <td className={`p-4 font-semibold text-left ${isTransparent ? 'bg-white' : 'bg-transparent'}`}>
                                                {feature}
                                            </td>
                                            <td className="p-4">{col1}</td>
                                            <td className="p-4">{col2}</td>
                                            <td className="p-4">{col3}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className='py-16'>
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">
                    Calculate Your Returns
                    </h2>
                    <p className="text-gray-600 mb-8">
                    Use our investment calculator to see how your money can grow with MSV Infotech's quarterly compounding model.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to={"/calculator"} className="border hover:scale-105 hover:bg-teal-800 px-6 py-2 rounded-md font-semibold bg-teal-900 text-white transition inline-flex items-center justify-center gap-2">
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

export default InvestmentPlans
