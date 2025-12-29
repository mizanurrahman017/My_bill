import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

      
        <div>
          <h2 className="text-2xl font-bold text-white">BillPay</h2>
          <p className="mt-4 text-sm text-slate-400">
            সহজে, দ্রুত এবং নিরাপদে আপনার সব ধরনের ইউটিলিটি বিল পরিশোধ করুন এক জায়গা থেকে।
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Bills</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Legal
          </h3>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} BillPay <br />
            All rights reserved.
          </p>
        </div>

      </div>

      
      <div className="border-t border-slate-700 text-center py-4 text-sm text-slate-500">
        Made with ❤️ for Assignment Project
      </div>
    </footer>
  );
};

export default Footer;
