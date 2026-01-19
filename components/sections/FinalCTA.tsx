'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Cross } from 'lucide-react';

export function FinalCTA() {
    const handleClick = () => {
        window.open('https://calendly.com/romel-uplnk/strategy-call', '_blank');
        /* replace with window.open('CALENDLYLINK', '_blank') */
    };
    return (
        <section id="contact" className="py-12 sm:py-16 bg-gradient-to-b from-white to-primary-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1.5 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-600/20 mb-4">
                        <Cross className="h-3.5 w-3.5" />
                        <span>Join Us</span>
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Ready For a More Predictable Pipeline?
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Book a short call and we'll map a simple outbound plan for your firm.
                    </p>
                    <div className="mt-10 flex flex-col items-center gap-4">
                        <Button 
                            size="lg" 
                            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-6 text-lg group"
                            onClick={handleClick}
                        >
                            Book a free strategy call
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <p className="text-sm text-gray-500">If it's not a fit, we'll tell you.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
