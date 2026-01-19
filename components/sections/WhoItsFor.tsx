import { CheckCircle2, XCircle, Component } from 'lucide-react';

export function WhoItsFor() {
    const designedFor = [
        'IT & tech consulting firms',
        'Cloud, cybersecurity, ERP, MSPs',
        'B2B services with $5k+ engagements',
        'Teams that close deals over calls',
    ];

    const notFor = [
        'Low-ticket services',
        'B2C or local repair shops',
        'Firms without a defined offer',
    ];

    return (
        <section className="py-12 sm:py-16 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1.5 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-600/20 mb-4">
                    <Component className="h-3.5 w-3.5" />
                    <span>Our Design</span>
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Designed For
                    </h2>
                </div>
                <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Designed For */}
                    <div className="rounded-2xl border border-gray-200 p-8 bg-primary-50/50 hover:shadow-lg hover:border-primary-200 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                            <CheckCircle2 className="h-6 w-6 text-primary-600" />
                            Perfect Fit
                        </h3>
                        <ul className="mt-6 space-y-4">
                            {designedFor.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Not For */}
                    <div className="rounded-2xl border border-gray-200 p-8 bg-gray-50 hover:shadow-lg hover:border-primary-200 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2 ">
                            <XCircle className="h-6 w-6 text-gray-400" />
                            Not For
                        </h3>
                        <ul className="mt-6 space-y-4">
                            {notFor.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <XCircle className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-600">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-sm text-gray-500 italic">
                            (This actually increases trust.)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
