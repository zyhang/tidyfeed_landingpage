import { useState } from 'react'
import { motion } from 'framer-motion'

function Hero() {
    const [email, setEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email) return

        setIsSubmitting(true)

        // Log to console (ready for Loops.so integration)
        console.log('📧 Waitlist signup:', email)

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800))

        setIsSubmitting(false)
        setIsSubmitted(true)
        setEmail('')
    }

    return (
        <section className="relative px-6 pt-32 pb-24 md:pt-40 md:pb-32">
            <div className="mx-auto max-w-4xl text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
                    style={{
                        background: 'rgba(99, 102, 241, 0.1)',
                        border: '1px solid rgba(99, 102, 241, 0.2)'
                    }}
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
                    </span>
                    <span className="text-sm font-medium text-indigo-300">Coming Soon</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
                    style={{ color: 'var(--color-text-primary)' }}
                >
                    Tidy up your social feed.{' '}
                    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Keep the gems.
                    </span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mx-auto mt-6 max-w-2xl text-lg md:text-xl"
                    style={{ color: 'var(--color-text-secondary)' }}
                >
                    The all-in-one browser extension to block ads, download content, and summarize threads with AI.
                </motion.p>

                {/* Email Form */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    onSubmit={handleSubmit}
                    className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
                >
                    {!isSubmitted ? (
                        <>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="flex-1 rounded-xl px-5 py-3.5 text-base outline-none transition-all duration-200 placeholder:text-zinc-500"
                                style={{
                                    background: 'var(--color-bg-card)',
                                    border: '1px solid var(--color-border)',
                                    color: 'var(--color-text-primary)'
                                }}
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="rounded-xl px-6 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
                                style={{
                                    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                    boxShadow: '0 4px 24px rgba(99, 102, 241, 0.35)'
                                }}
                            >
                                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                            </button>
                        </>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5"
                            style={{
                                background: 'rgba(34, 197, 94, 0.1)',
                                border: '1px solid rgba(34, 197, 94, 0.2)'
                            }}
                        >
                            <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-green-400 font-medium">You're on the list! 🎉</span>
                        </motion.div>
                    )}
                </motion.form>

                {/* Social Proof */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-4 text-sm"
                    style={{ color: 'var(--color-text-secondary)' }}
                >
                    Join 500+ early adopters already on the waitlist
                </motion.p>
            </div>
        </section>
    )
}

export default Hero
