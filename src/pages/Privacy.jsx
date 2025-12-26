import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Privacy() {
    return (
        <>
            <div className="gradient-bg" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative min-h-screen flex flex-col"
            >
                <main className="flex-1 px-6 py-16">
                    <div className="mx-auto max-w-3xl">
                        {/* Back Link */}
                        <Link 
                            to="/"
                            className="inline-flex items-center gap-2 text-sm mb-8 transition-colors duration-200 hover:text-indigo-400"
                            style={{ color: 'var(--color-text-secondary)' }}
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Home
                        </Link>

                        {/* Privacy Policy Content */}
                        <article className="prose prose-invert max-w-none">
                            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                Privacy Policy
                            </h1>
                            <p className="text-sm mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                                Last Updated: December 26, 2025
                            </p>

                            <div className="space-y-8" style={{ color: 'var(--color-text-primary)' }}>
                                <section>
                                    <h2 className="text-xl font-semibold mb-3 text-indigo-400">Introduction</h2>
                                    <p style={{ color: 'var(--color-text-secondary)' }}>
                                        TidyFeed ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our Chrome Extension.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold mb-3 text-indigo-400">Information We Collect</h2>
                                    <p className="mb-3" style={{ color: 'var(--color-text-secondary)' }}>
                                        TidyFeed is designed with privacy in mind. We collect minimal information necessary to provide our services:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--color-text-secondary)' }}>
                                        <li><strong>User Preferences:</strong> Your settings and preferences are stored locally on your device using Chrome's local storage. This data never leaves your browser.</li>
                                        <li><strong>Content for Summarization:</strong> When you use our AI summarization feature, the content you choose to summarize is sent to the DeepSeek API for processing.</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold mb-3 text-indigo-400">How We Use Your Information</h2>
                                    <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--color-text-secondary)' }}>
                                        <li><strong>Local Storage:</strong> To remember your preferences and settings across browser sessions.</li>
                                        <li><strong>AI Summarization:</strong> Content sent to DeepSeek API is used solely to generate summaries. We do not store this content on our servers.</li>
                                        <li><strong>Ad Blocking:</strong> All ad blocking operations are performed client-side on your browser. No browsing data is transmitted to external servers for this feature.</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold mb-3 text-indigo-400">Data Sharing</h2>
                                    <div className="p-4 rounded-lg mb-4" style={{ backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
                                        <p className="font-semibold text-green-400 mb-2">🔒 We do NOT sell your data.</p>
                                        <p style={{ color: 'var(--color-text-secondary)' }}>
                                            Your personal data, browsing history, and preferences are never sold to third parties.
                                        </p>
                                    </div>
                                    <p style={{ color: 'var(--color-text-secondary)' }}>
                                        The only data shared externally is the content you explicitly choose to summarize, which is sent to DeepSeek's API. This data is processed in accordance with <a href="https://www.deepseek.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline">DeepSeek's Privacy Policy</a>.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold mb-3 text-indigo-400">Data Storage & Security</h2>
                                    <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--color-text-secondary)' }}>
                                        <li><strong>Local Storage Only:</strong> All user preferences and settings are stored locally in your browser using Chrome's storage API.</li>
                                        <li><strong>No External Databases:</strong> We do not maintain external databases containing your personal information.</li>
                                        <li><strong>Encryption:</strong> Data sent to the DeepSeek API for summarization is transmitted over secure HTTPS connections.</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold mb-3 text-indigo-400">Third-Party Services</h2>
                                    <p className="mb-3" style={{ color: 'var(--color-text-secondary)' }}>
                                        TidyFeed uses the following third-party service:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--color-text-secondary)' }}>
                                        <li><strong>DeepSeek API:</strong> Used for AI-powered content summarization. When you request a summary, the relevant content is sent to DeepSeek's servers for processing. Please review <a href="https://www.deepseek.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline">DeepSeek's Privacy Policy</a> for information on how they handle data.</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold mb-3 text-indigo-400">Your Rights</h2>
                                    <p className="mb-3" style={{ color: 'var(--color-text-secondary)' }}>You have the right to:</p>
                                    <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--color-text-secondary)' }}>
                                        <li><strong>Access:</strong> View all data stored by the extension in your browser's local storage.</li>
                                        <li><strong>Delete:</strong> Clear all extension data by uninstalling TidyFeed or clearing your browser's local storage.</li>
                                        <li><strong>Opt-out:</strong> Disable the AI summarization feature to prevent any content from being sent to external APIs.</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold mb-3 text-indigo-400">Changes to This Policy</h2>
                                    <p style={{ color: 'var(--color-text-secondary)' }}>
                                        We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last Updated" date at the top of this page. We encourage you to review this Privacy Policy periodically.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-xl font-semibold mb-3 text-indigo-400">Contact Us</h2>
                                    <p style={{ color: 'var(--color-text-secondary)' }}>
                                        If you have any questions about this Privacy Policy, please contact us at:{' '}
                                        <a href="mailto:privacy@tidyfeed.app" className="text-indigo-400 hover:text-indigo-300 underline">
                                            privacy@tidyfeed.app
                                        </a>
                                    </p>
                                </section>
                            </div>
                        </article>
                    </div>
                </main>

                {/* Simple Footer */}
                <footer
                    className="px-6 py-8"
                    style={{ borderTop: '1px solid var(--color-border)' }}
                >
                    <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
                        <div className="flex items-center gap-3">
                            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                                TidyFeed
                            </Link>
                            <span style={{ color: 'var(--color-text-secondary)' }} className="text-sm">
                                © 2025 TidyFeed. All rights reserved.
                            </span>
                        </div>
                    </div>
                </footer>
            </motion.div>
        </>
    )
}

export default Privacy
