import { Target, RefreshCw, Users, BadgeCheck } from 'lucide-react';

export function WhyThisWorks() {
    const reasons = [
        {
            icon: Target,
            text: 'Tight targeting beats high volume',
        },
        {
            icon: RefreshCw,
            text: 'Follow-ups create most replies',
        },
        {
            icon: Users,
            text: 'Decision-makers respond to relevance, not hype',
        },
    ];

    return (
        <section className="py-12 sm:py-16 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1.5 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-600/20 mb-4">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    <span>Our Reason</span>
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Why This Works
                    </h2>
                </div>
                <div className="mx-auto mt-16 max-w-3xl">
                    <div className="space-y-6 ">
                        {reasons.map((reason, index) => {
                        const Icon = reason.icon;
                        return (
                            <div key={index} className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all duration-300">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                                    <Icon className="h-6 w-6 text-primary-600" />
                                </div>
                                <p className="text-lg font-medium text-gray-900">{reason.text}</p>
                            </div>
                        );
                        })}
                    </div>
                    <div className="mt-12 text-center rounded-2xl bg-primary-600 p-8 text-white hover:shadow-lg hover:border-primary-200 transition-all duration-300">
                        <p className="text-xl font-semibold">We don't sell "leads".</p>
                        <p className="mt-2 text-lg text-primary-100">
                            We deliver conversations that turn into revenue.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
