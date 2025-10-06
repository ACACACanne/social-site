This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Social Site Project
-----------------------------------------------------------------------------------------------------------------------------------------------

Brief:
SocialSite is a minimalist, privacy-conscious social platform built with Next.js, Tailwind CSS, and React. It allows users to create posts with images, preview uploads, and acknowledge privacy terms, all stored locally for fast prototyping. The UI is designed with a poetic, cosmic gradient and silhouette-inspired styling.


Features:
• 	Create posts with name, content, and image uploads
• 	Drag-and-drop file upload zone with previews
• 	Privacy Policy modal and checkbox validation
• 	LocalStorage-based post persistence
• 	Image rendering with base64 encoding
•   Navigation between Home and Add Post views
• 	Like button 
• 	Cosmic gradient UI with responsive Tailwind styling


Project Structure:

src/
├── app/
│   ├── add/            # Add Post page
│   │   └── page.js     # Renders Form component
│   ├── components/
│   │   └── Form.js     # Post creation form
│   └── page.js         # Home page with post feed
├── public/             # Static assets
├── styles/             # Global styles
└── README.md           # Project documentation


Architecture Diagram:

+---------------------+
|      Nav Bar        |
|  Gradient Header    |
+---------------------+
         ↓
+---------------------+
|      Home Page      |
|  - Post Feed        |
|  - Add Post Button  |
|  - LocalStorage     |
+---------------------+
         ↓
+---------------------+
|     Add Post Page   |
|  - Form.js          |
|  - Drag & Drop Zone |
|  - Privacy Modal    |
|  - Image Previews   |
|  - Save to Storage  |
+---------------------+
         ↓
+---------------------+
|     Like Button     |
|  - Local count      |
|  - Visual feedback  |
+---------------------+


Dependencies:
- Next.js
- React
- Tailwind CSS
- Heroicons
- React Toastify


Usage:
1. 	Create a post
2. 	Fill in your name and content
3. 	Upload images via drag-and-drop or file picker
4. 	Accept the Privacy Policy
5. 	Submit your post — it will appear on the Home page instantly


Like Button:
Eash post include a Like button with:
- Local count stored in LocalStorage
- Visual feedback (for example heart icon toggle)


Privacy:
This app includes a modal-based Privacy Policy and checkbox validation. No data is sent to external servers — all posts are stored locally in the browser.

Roadmap:
• 	[x] LocalStorage post persistence
• 	[x] Image upload and preview
• 	[x] Privacy modal
• 	[X] Like button with local count
• 	[X] Post deletion/editing
• 	[ ] Backend integration (optional)
• 	[ ] User authentication (optional)

Authors:
Aniko Vigh (ACACACanne)
Hamad Hussian (hhamad007)
khanalishba2001-pixel

-----------------------------------------------------------------------------------------------------------------------------------------------
Reflection: First Team Project - Social Site
-----------------------------------------------------------------------------------------------------------------------------------------------

This project marked our first collaborative experience as a development team, and it was both a rewarding and challenging journey. Building SocialSite, a minimalist social posting platform, taught us not only technical skills but also the importance of communication, coordination, and resilience.

Team Collaboration
Working as a team for the first time came with its own set of hurdles:
• 	Communication gaps: With different schedules, time zones, and working styles, aligning our efforts was often difficult.
• 	Task assignment: Defining clear roles and responsibilities took time, and we had to learn how to delegate effectively.
• 	Progress tracking: Staying on top of individual contributions and syncing updates required constant effort and adjustment.
Despite these challenges, we remained committed to the project and supported each other through every phase.

Deployment & Outcome
Despite the initial friction, we managed to:
• 	Finalize the core features
• 	Polish the UI with consistent styling
• 	Test and debug collaboratively
• 	Deploy the application on time
Each feature was carefully designed to reflect our shared vision: a clean, accessible, and emotionally resonant user experience.
The final result is a functional, visually engaging social platform that we’re proud to showcase. It reflects not only our technical growth but also our ability to overcome obstacles as a team.

Lessons Learned
• 	Clear communication is the backbone of any successful collaboration
• 	Early task planning and role definition prevent bottlenecks
• 	Empathy and flexibility go a long way in team dynamics
• 	Even under pressure, creativity and commitment can lead to great outcomes

Final Thoughts
This project was more than just code — it was a shared experience of learning, adapting, and creating something meaningful together. We’re excited to carry these lessons into future collaborations and continue building applications that blend functionality with emotional impact.