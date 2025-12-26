import { motion } from 'framer-motion'

const features = [
    {
        id: 1,
        title: 'Noise Filter',
        description: 'Block ads & spam bots from cluttering your feed. See only what matters.',
        icon: (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
        ),
        gradient: 'from-blue-500 to-cyan-400',
        size: 'large'
    },
    {
        id: 2,
        title: 'One-Click Save',
        description: 'Download videos & threads locally with a single click. Never lose content again.',
        icon: (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
        ),
        gradient: 'from-emerald-500 to-teal-400',
        size: 'medium'
    },
    {
        id: 3,
        title: 'AI Insight',
        description: 'Powered by DeepSeek V3 to summarize long posts into concise, actionable takeaways.',
        icon: (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        gradient: 'from-violet-500 to-purple-400',
        size: 'medium'
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    }
}

function Features() {
    return (
        <section className="px-6 py-24">
            <div className="mx-auto max-w-5xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-bold md:text-4xl" style={{ color: 'var(--color-text-primary)' }}>
                        Everything you need to{' '}
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            reclaim your feed
                        </span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                        Powerful features designed to give you back control over your social media experience.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            variants={itemVariants}
                            className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] ${index === 0 ? 'lg:col-span-2 lg:row-span-1' : ''
                                }`}
                            style={{
                                background: 'var(--color-bg-card)',
                                border: '1px solid var(--color-border)'
                            }}
                        >
                            {/* Hover Gradient Overlay */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                            />

                            {/* Icon */}
                            <div
                                className={`mb-4 inline-flex rounded-xl p-3 bg-gradient-to-br ${feature.gradient}`}
                                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}
                            >
                                <span className="text-white">{feature.icon}</span>
                            </div>

                            {/* Content */}
                            <h3 className="mb-2 text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                                {feature.title}
                            </h3>
                            <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                                {feature.description}
                            </p>

                            {/* Decorative Corner */}
                            <div
                                className={`absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${feature.gradient} opacity-10 blur-2xl transition-opacity duration-300 group-hover:opacity-20`}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Features
