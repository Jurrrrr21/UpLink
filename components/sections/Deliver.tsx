import { CheckCircle2, Target } from 'lucide-react';

export function Deliver() {
    const deliverables = [
        '10–15 qualified sales meetings per month',
        'Conversations with real decision-makers',
        'Booked directly into your calendar',
    ];

    return (
        <section className="relative py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-1/4 h-[200px] w-[200px] rounded-full bg-primary-100/30 blur-3xl" />
                <div className="absolute bottom-0 left-1/4 h-[200px] w-[200px] rounded-full bg-primary-200/20 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    {/* Header */}
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1.5 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-600/20 mb-4">
                            <Target className="h-3.5 w-3.5" />
                            <span>Our Deliverables</span>
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                            What We <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 bg-clip-text text-transparent">Deliver</span>
                        </h2>
                    </div>

                    {/* Deliverables - Compact Cards */}
                    <div className="mt-8 grid gap-3">
                        {deliverables.map((item, index) => (
                            <div 
                                key={index} 
                                className="group flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-200 transition-all duration-300"
                            >
                                <div className="flex-shrink-0">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 ring-2 ring-primary-100/50 group-hover:bg-primary-100 transition-colors">
                                        <CheckCircle2 className="h-5 w-5 text-primary-600" />
                                    </div>
                                </div>
                                <p className="text-base sm:text-lg text-gray-900 font-medium">{item}</p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA Box - More Compact */}
                    <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-primary-50 rounded-xl blur-lg opacity-60" />
                            <div className="relative rounded-xl bg-gradient-to-br from-primary-50 to-primary-100/50 p-6 shadow-lg border border-primary-200">
                                <p className="text-base sm:text-lg text-gray-900 font-bold">You focus on closing.</p>
                                <p className="mt-2 text-sm sm:text-base text-gray-700">
                                    We handle targeting, outreach, follow-ups, and booking.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
