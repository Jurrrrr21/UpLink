import { XCircle, ArrowRight } from 'lucide-react';

export function Problem() {
    const problems = [
        'Referrals are unpredictable.',
        'Inbound is inconsistent.',
        'Hiring SDRs is expensive and slow.',
    ];

    return (
        <section className="relative py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/4 h-[250px] w-[250px] rounded-full bg-red-100/30 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 h-[250px] w-[250px] rounded-full bg-gray-200/40 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    {/* Header */}
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20 mb-4">
                            <XCircle className="h-3.5 w-3.5" />
                            <span>The Challenge</span>
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl leading-tight">
                            Great Consultants Don't Always Have{' '}
                            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 bg-clip-text text-transparent">
                                Great Pipelines
                            </span>
                        </h2>
                    </div>

                    {/* Problems Grid - More Compact */}
                    <div className="mt-10 grid gap-3">
                        {problems.map((problem, index) => (
                            <div 
                                key={index} 
                                className="group relative flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-red-200 transition-all duration-300"
                            >
                                <div className="flex-shrink-0">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 ring-2 ring-red-100/50 group-hover:bg-red-100 transition-colors">
                                        <XCircle className="h-5 w-5 text-red-500" />
                                    </div>
                                </div>
                                <p className="text-base font-medium text-gray-900">{problem}</p>
                            </div>
                        ))}
                    </div>

                    {/* Compact Divider */}
                    <div className="mt-8 flex justify-center">
                        <ArrowRight className="h-5 w-5 text-primary-500" />
                    </div>

                    {/* Solution Statement - More Compact */}
                    <div className="mt-8 text-center">
                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-primary-50 rounded-xl blur-lg opacity-60" />
                            <div className="relative bg-gradient-to-br from-white to-primary-50/30 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary-100">
                                <p className="text-base sm:text-lg leading-relaxed text-gray-900 font-semibold">
                                    We fix that by creating a{' '}
                                    <span className="text-primary-600">reliable outbound motion</span>{' '}
                                    that puts the right buyers on your calendar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
