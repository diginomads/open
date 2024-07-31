import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="space-y-8 md:mr-12">
            <div className="flex items-center space-x-2">
              <h2 className="text-2xl font-bold">Cal®</h2>
            </div>
            <p className="text-gray-400 text-sm">
              Cal.com® and Cal® are registered trademarks of Cal.com, Inc. All rights reserved.
            </p>
            <div className="text-gray-400 text-sm">
              Our mission is to connect a billion people by 2031 through calendar scheduling.
            </div>
            <div className="mt-4">
              <button className="bg-gray-800 text-white py-2 px-4 rounded">English</button>
            </div>
          </div>
          <div className="mt-12 md:mt-0 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Solutions</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Self-hosted</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">SaaS Hosting</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Docs</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Cal.ai – AI Phone Agent</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Enterprise</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Platform</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Cal.com Atoms</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Unified Calendar API</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Desktop App</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">FAQ</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Enterprise API</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Github</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Docker</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Use Cases</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Sales</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Marketing</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Talent Acquisition</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Customer Support</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Higher Education</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Telehealth</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Professional Services</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Hiring Marketplace</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Human Resources</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Tutoring</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">C-suite</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Law</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Blog</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Merch Store</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Open Startup</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Teams</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Embed</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Recurring events</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Developers</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Routing Forms</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Workflows</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">App Store</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Requires confirmation</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Payments</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Video Conferencing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Jobs</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">About</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Support</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Privacy</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Terms</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">License</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Security</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Changelog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Compare To</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Calendly</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">ChiliPiper</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Acuity</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Nylas</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Savvycal</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Cronofy</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Timekit</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">YouCanBook.Me</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Meetingbird</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Hubspot Scheduler</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Doodle</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Woven</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">Harmonizely</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-gray-100">TidyCal</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
