function Footer() {
    return (
        <footer
            className="px-6 py-8"
            style={{ borderTop: '1px solid var(--color-border)' }}
        >
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
                {/* Logo & Copyright */}
                <div className="flex items-center gap-3">
                    <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        TidyFeed
                    </span>
                    <span style={{ color: 'var(--color-text-secondary)' }} className="text-sm">
                        © 2025 TidyFeed. All rights reserved.
                    </span>
                </div>

                {/* Links */}
                <div className="flex items-center gap-6">
                    <a
                        href="#"
                        className="text-sm transition-colors duration-200 hover:text-indigo-400"
                        style={{ color: 'var(--color-text-secondary)' }}
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="https://x.com/tidyfeed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm transition-colors duration-200 hover:text-indigo-400"
                        style={{ color: 'var(--color-text-secondary)' }}
                    >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
