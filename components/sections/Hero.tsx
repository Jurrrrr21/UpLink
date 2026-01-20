import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
    const CALENDLY_URL = "https://calendly.com/romel-uplnk/strategy-call"

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white pb-12 sm:pb-16">
            {/* Animated gradient orbs - enhanced */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary-200/30 blur-3xl animate-pulse" />
                <div className="absolute top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary-300/20 blur-3xl animate-pulse" style={{ animationDelay: '700ms' }} />
                <div className="absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-primary-100/40 blur-3xl" />
            </div>

            {/* Enhanced grid pattern overlay */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px]" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24">
                {/* Main content wrapper - logo left, content right */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20 xl:gap-24">
                    {/* Logo on the left - vertically centered with animation */}
                    <div className="flex-shrink-0 animate-fade-in">
                        <div className="text-5xl font-bold sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight">
                            <span className="text-primary drop-shadow-sm">Up</span>
                            <span className="text-gray-900 drop-shadow-sm">Lnk</span>
                        </div>
                    </div>

                    {/* Everything else on the right */}
                    <div className="flex-1 space-y-8 animate-fade-in-up">
                        {/* Badge */}
                        <div className="flex justify-end">
                            <div className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-5 py-2.5 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-600/20 shadow-sm backdrop-blur-sm">
                                <Sparkles className="h-4 w-4 animate-pulse" />
                                <span>Trusted by IT consulting teams</span>
                            </div>
                        </div>

                        {/* Main headline with gradient text */}
                        <h1 className="text-4xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                            <span className="block text-gray-900 mb-2">We Turn IT Expertise Into</span>
                            <span className="block bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 bg-clip-text text-transparent drop-shadow-sm">
                                Booked Sales Conversations
                            </span>
                        </h1>

                        {/* Subheadline with better spacing and styling */}
                        <div className="space-y-4 max-w-2xl">
                            <p className="text-lg leading-relaxed text-gray-600 sm:text-xl">
                                We help IT & tech consulting firms book consistent meetings with decision-makers using targeted outbound.
                            </p>
                            <p className="text-lg font-semibold text-gray-900 sm:text-xl border-l-4 border-primary-500 pl-4">
                                No ads. No SDRs. Just conversations that convert.
                            </p>
                        </div>

                        {/* CTA with enhanced styling */}
                        <div className="flex flex-col items-start gap-3 pt-4">
                            <Button 
                                asChild
                                size="lg" 
                                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-12 py-7 text-lg font-semibold shadow-2xl shadow-primary-500/25 hover:shadow-2xl hover:shadow-primary-600/40 transition-all duration-300 hover:scale-105 group rounded-xl"
                                
                            >
                                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                                    Book a free strategy call
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </a>
                            </Button>
                            <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
                                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                15 minutes. Clear yes or no.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Social proof numbers - enhanced with cards */}
                <div className="mx-auto max-w-4xl mt-12 sm:mt-16 lg:mt-24">
                    <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
                        <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <p className="text-2xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-br from-primary-600 to-primary-700 bg-clip-text text-transparent">10-15</p>
                            <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-gray-600">Meetings/month</p>
                        </div>
                        <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <p className="text-2xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-br from-primary-600 to-primary-700 bg-clip-text text-transparent">3-5</p>
                            <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-gray-600">Days to start</p>
                        </div>
                        <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                            <p className="text-2xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-br from-primary-600 to-primary-700 bg-clip-text text-transparent">$5k+</p>
                            <p className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-gray-600">Avg deal size</p>
                        </div>
                    </div>
                </div>


                {/* Bottom text - enhanced */}
                <div className="mx-auto mt-12 max-w-2xl text-center"> 
                    <p className="text-sm text-gray-600 bg-gray-50/50 backdrop-blur-sm rounded-full px-6 py-3 inline-block border border-gray-100">
                        Built for consultants selling cloud, cybersecurity, ERP, and managed IT services.
                    </p>
                </div>
            </div>
        </section>
    );
}
