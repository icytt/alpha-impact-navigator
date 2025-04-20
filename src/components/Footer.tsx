"use client"

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#f6fbf8] border-t border-gray-200 pt-16 pb-8 mt-24 rounded-b-3xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-10">
          {/* Brand & Social */}
          <div>
            <div className="font-bold text-xl mb-4">GreenAlpha</div>
            <p className="text-gray-600 mb-6">Empowering you to invest in a sustainable future while tracking your environmental and social impact.</p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-[#4CAF50]">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-[#4CAF50]">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.59-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 11.5 9.03c0 .34.04.67.1.99C7.72 9.86 4.1 8.13 1.67 5.15c-.37.63-.58 1.36-.58 2.14 0 1.48.75 2.78 1.9 3.54-.7-.02-1.36-.21-1.94-.53v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.12 2.94 3.99 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 24 4.59a8.48 8.48 0 0 1-2.54.7z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-[#4CAF50]">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25A5.25 5.25 0 1 1 6.75 12 5.25 5.25 0 0 1 12 6.75zm0 1.5A3.75 3.75 0 1 0 15.75 12 3.75 3.75 0 0 0 12 8.25zm5.5-.5a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/></svg>
              </a>
            </div>
          </div>
          {/* About */}
          <div>
            <div className="font-bold mb-4">About</div>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="#">About GreenAlpha</Link></li>
              <li><Link href="#">Our Team</Link></li>
              <li><Link href="#">Mission & Values</Link></li>
              <li><Link href="#">Careers</Link></li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <div className="font-bold mb-4">Resources</div>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="#">Investment FAQs</Link></li>
              <li><Link href="#">Impact Reports</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Learning Center</Link></li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <div className="font-bold mb-4">Support</div>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">Help Center</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-200" />
        <div className="text-center text-gray-500 text-sm space-y-2">
          <div>© 2025 GreenAlpha. All rights reserved.</div>
          <div>Empowering sustainable investments for a better future.</div>
        </div>
      </div>
    </footer>
  )
}
