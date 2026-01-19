import { Target, Send, Calendar, Zap } from 'lucide-react';

export function HowItWorks() {
    const steps = [
        {
            icon: Target,
            number: '1',
            title: 'Define Your ICP',
            description: 'We align on your ideal buyer, deal size, and industries.',
        },
        {
            icon: Send,
            number: '2',
            title: 'Run Targeted Outbound',
            description: 'Personalized email + LinkedIn outreach to decision-makers.',
        },
        {
            icon: Calendar,
            number: '3',
            title: 'Book Meetings',
            description: 'We qualify interest and book meetings directly to your calendar.',
        },
    ];

    return (
        <section className="relative py-12 sm:py-16 bg-gradient-to-b from-white to-primary-50 overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 h-[200px] w-[200px] rounded-full bg-primary-200/20 blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 h-[200px] w-[200px] rounded-full bg-primary-100/30 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1.5 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-600/20 mb-4">
                        <Zap className="h-3.5 w-3.5" />
                        <span>Simple Process</span>
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                        How It <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 bg-clip-text text-transparent">Works</span>
                    </h2>
                </div>

                <div className="mx-auto mt-10 max-w-5xl">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={step.number} className="relative">
                                    <div className="group flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300 hover:-translate-y-1">
                                        {/* Number badge */}
                                        <div className="relative">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-700 text-white text-lg font-bold shadow-lg shadow-primary-500/30 group-hover:shadow-xl group-hover:shadow-primary-500/40 transition-shadow">
                                                {step.number}
                                            </div>
                                            {/* Connecting line for desktop */}
                                            {index < steps.length - 1 && (
                                                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent -translate-y-1/2" style={{ width: 'calc(100% + 1.5rem)' }} />
                                            )}
                                        </div>
                                        
                                        {/* Icon */}
                                        <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 group-hover:bg-primary-100 transition-colors">
                                            <Icon className="h-7 w-7 text-primary-600" />
                                        </div>
                                        
                                        {/* Content */}
                                        <h3 className="mt-4 text-lg font-semibold text-gray-900">
                                            {step.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom CTA - More Compact */}
                    <div className="mt-10 text-center">
                        <div className="relative inline-block">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-primary-50 rounded-xl blur-lg opacity-60" />
                            <div className="relative bg-gradient-to-br from-white to-primary-50/30 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-primary-100">
                                <p className="text-base sm:text-lg font-semibold text-gray-900">Minimal lift from your team.</p>
                                <p className="text-base sm:text-lg font-semibold text-primary-600">Predictable output every month.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
