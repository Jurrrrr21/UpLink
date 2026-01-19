import { CheckCircle2, Shield, DollarSign } from 'lucide-react';

export function Pricing() {
    return (
        <section className="py-12 sm:py-16 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center ">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1.5 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-600/20 mb-4">
                    <DollarSign className="h-3.5 w-3.5" />
                    <span>Our Price</span>
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Pricing
                    </h2>
                </div>
                <div className="mx-auto mt-16 max-w-2xl">
                    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg sm:p-10 hover:shadow-lg hover:border-primary-200 transition-all duration-300">
                        <div className="text-center">
                            <p className="text-base font-semibold text-primary-600">Simple & Transparent</p>
                            <p className="mt-4 flex items-baseline justify-center gap-x-2">
                                <span className="text-5xl font-bold tracking-tight text-gray-900">$3,000</span>
                                <span className="text-base font-semibold text-gray-600">/ month</span>
                            </p>
                            <div className="mt-6 space-y-2 text-center">
                                <p className="text-gray-600 flex items-center justify-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary-600" />
                                Month-to-month
                                </p>
                                <p className="text-gray-600 flex items-center justify-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-primary-600" />
                                No long-term contracts
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 rounded-2xl bg-primary-50 p-6">
                            <div className="flex items-start gap-3">
                                <Shield className="h-6 w-6 text-primary-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-gray-900">Guarantee</h4>
                                    <p className="mt-2 text-sm text-gray-700">
                                        If we don't book a minimum number of qualified meetings, we work free until we do.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
