import React from 'react';

const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center frex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <a href="/terms" className="hover:underline cursor-pointer">
                    Terms and conditions
                </a>
                <p>|</p>
                <a href="/privacy" className="hover:underline cursor-pointer">
                    Privacy Policy
                </a>
            </div>

            <div className="flex gap-3">
                <a href="https://github.com/NevenDog" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2"/>
                </a>
                <a href="https://www.behance.net/nevendev" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src="/assets/behance.svg" alt="behance" className="w-1/2 h-1/2"/>
                </a>
                <a href="https://www.instagram.com/tato.vering/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2"/>
                </a>
            </div>

            <p className="text-white-500">© 2024 Neven. Dog with dementia.</p>
        </section>
    )
}

export default Footer