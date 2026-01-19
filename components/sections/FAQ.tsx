'use client';

import { useState } from 'react';
import { ChevronDown, FileQuestionMark } from 'lucide-react';

export function FAQ() {
    const faqs = [
        {
            question: 'How fast can we start?',
            answer: 'Usually within 3–5 business days.',
        },
        {
            question: 'Do you close deals for us?',
            answer: 'No — we book qualified meetings. You close.',
        },
        {
            question: 'What do you need from us?',
            answer: 'A clear offer, ICP, and access to a calendar.',
        },
        {
            question: 'Will this replace referrals?',
            answer: 'No — it stabilizes pipeline when referrals slow down.',
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-12 sm:py-16 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1.5 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-600/20 mb-4">
                    <FileQuestionMark className="h-3.5 w-3.5" />
                    <span>FAQ</span>
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                </div>
                <div className="mx-auto mt-16 max-w-3xl">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="rounded-lg border border-gray-200 bg-white overflow-hidden hover:shadow-lg hover:border-primary-200 transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex w-full items-center justify-between p-6 text-left"
                            >
                                <span className="text-lg font-semibold text-gray-900">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`h-5 w-5 text-gray-500 transition-transform ${
                                    openIndex === index ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            {openIndex === index && (
                            <div className="px-6 pb-6">
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                            )}
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
