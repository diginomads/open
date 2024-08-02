import Image from 'next/image';

const projects = [
  { name: 'Appsmith', description: 'Build custom software on top of your data.' },
  { name: 'Aptabase', description: 'Analytics for Apps, open source, simple and privacy-friendly. SDKs for Swift, React Native, Electron, Flutter and many others.' },
  { name: 'Argos', description: 'Argos provides the developer tools to debug tests and detect visual regressions.' },
  { name: 'BoxyHQ', description: 'BoxyHQ\'s suite of APIs for security and privacy helps engineering teams build and ship compliant cloud applications faster.' },
  { name: 'ClassroomIO.com', description: 'ClassroomIO is a no-code tool that allows you build and scale your own teaching platform with ease.' },
  { name: 'Crowd.dev', description: 'Centralize community, product, and customer data to understand which companies are engaging with your open source project.' },
  { name: 'DevHunt', description: 'Find the best Dev Tools upvoted by the community every week.' },
  { name: 'Documentso', description: 'The Open-Source DocuSign Alternative. We aim to earn your trust by enabling you to self-host the platform and examine its inner workings.' },
  { name: 'dyrector.io', description: 'dyrector.io is an open-source continuous delivery & deployment platform with version management.' },
  { name: 'Erxes', description: 'The Open-Source HubSpot Alternative. A single XOS enables to create unique and life-changing experiences that work for all types of business.' },
  { name: 'Formbricks', description: 'Survey granular user segments at any point in the user journey. Gather up to 6x more insights with targeted micro-surveys. All open-source.' },
  { name: 'Firecamp', description: 'vscode for apis, open-source postman/insomnia alternative' },
  { name: 'Ghostfolio', description: 'Ghostfolio is a privacy-first, open source dashboard for your personal finances. Designed to simplify asset tracking and empower informed investment decisions.' },
  { name: 'GitWonk', description: 'GitWonk is an open-source technical documentation tool, designed and built focusing on the developer experience.' },
  { name: 'Hanko', description: 'Open-source authentication and user management for the passkey era. Integrated in minutes, for web and mobile apps.' },
  { name: 'Hook0', description: 'Open-Source Webhooks-as-a-service (WaaS) that makes it easy for developers to send webhooks.' },
  { name: 'HTMX', description: 'HTMX is a dependency-free JavaScript library that allows you to access AJAX, CSS Transitions, WebSockets, and Server Sent Events directly in HTML.' },
  { name: 'Inbox Zero', description: 'Inbox Zero makes it easy to clean up your inbox and reach inbox zero fast. It provides bulk newsletter unsubscribe, cold email blocking, email analytics, and AI automations.' },
  { name: 'Infisical', description: 'Open source, end-to-end encrypted platform that lets you securely manage secrets and configs across your team, devices, and infrastructure.' },
  { name: 'Keep', description: 'Open source alert management and AIOps platform.' },
  { name: 'Langfuse', description: 'Open source LLM engineering platform. Debug, analyze and iterate together.' },
  { name: 'Lost Pixel', description: 'Open source visual regression testing alternative to Percy & Chromatic.' },
  { name: 'Mockoon', description: 'Mockoon is the easiest and quickest way to design and run mock REST APIs.' },
  { name: 'Novu', description: 'The open-source notification infrastructure for developers. Simple components and APIs for managing all communication channels in one place.' },
  { name: 'OpenBB', description: 'Democratizing investment research through an open source financial ecosystem. The OpenBB Terminal allows everyone to perform investment research, from everywhere.' },
  { name: 'OpenStatus', description: 'Open-source monitoring platform with beautiful status pages.' },
  { name: 'Papermark', description: 'Open-Source Docsend Alternative to securely share documents with real-time analytics.' },
  { name: 'Prisma', description: 'Simplify working with databases. Build, optimize, and grow your app easily with an intuitive data model, type-safety, automated migrations, connection pooling, caching, and real-time db subscriptions.' },
  { name: 'Requestly', description: 'Makes frontend development cycle 10x faster with API Client, Mock Server, Intercept & Modify HTTP Requests and Session Replays.' },
  { name: 'Revert', description: 'The open-source unified API to build B2B integrations remarkably fast.' },
  { name: 'Rivet', description: 'Open-source solution to deploy, scale, and operate your multiplayer game.' },
  { name: 'Shelf.nu', description: 'Open Source Asset and Equipment tracking software that lets you create QR asset labels, manage and overview your assets across locations.' },
  { name: 'Sniffnet', description: 'Sniffnet is a network monitoring tool to help you easily keep track of your Internet traffic.' },
  { name: 'Spark.NET', description: 'The .NET Web Framework for Makers. Build production-ready, full-stack web applications fast without sweating the small stuff.' },
  { name: 'Tiledesk', description: 'The innovative open-source framework for developing LLM-enabled chatbots, Tiledesk empowers developers to create advanced, conversational AI agents.' },
  { name: 'Tolgee', description: 'Software localization from A to Z made really easy.' },
  { name: 'Trigger.dev', description: 'Create long-running Jobs directly in your codebase with features like API integrations, webhooks, scheduling, and delays.' },
  { name: 'Typebot', description: 'Typebot gives you powerful blocks to create unique chat experiences. Embed them anywhere on your apps and start collecting results like magic.' },
  { name: 'Twenty', description: 'A modern CRM offering the flexibility of open-source, advanced features and sleek design.' },
  { name: 'UnInbox', description: 'Modern email for teams and professionals. Bringing the best of email and messaging into a single, modern, and secure platform.' },
  { name: 'Unkey', description: 'An API authentication and authorization platform for scaling user-facing APIs. Create, verify, and manage low latency API keys in seconds.' },
  { name: 'Webiny', description: 'Open-source enterprise-grade serverless CMS. Own your data. Scale effortlessly. Customize everything.' },
  { name: 'Webstudio', description: 'Webstudio is an open source alternative to Webflow' }
];


export default function OpenSourceFriends() {
  return (
    <div className="py-12 px-4 ml-10 mr-10">
      <div className="max-w-full mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Open Source Friends</h2>
        <p className="text-center text-lg mb-10">Meet other projects whose code and culture is open</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-between h-full bg-gray-100">
              <div>
                <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
                <p className="mb-6">{project.description}</p>
              </div>
              <button className="bg-gray-200 text-gray-900 hover:bg-gray-300 transition-colors py-2 px-4 rounded self-start">Learn more</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
