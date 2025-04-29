# Yunus Inspire

![Yunus Inspire Logo](https://placeholder.svg?height=100&width=300&text=Yunus+Inspire)

## Overview

Yunus Inspire is an open source web platform dedicated to empowering Bangladeshi students with free access to quality educational resources in technology, programming, and innovation. Inspired by the legacy of Nobel Laureate Professor Muhammad Yunus, our mission is to transform education in Bangladesh by making high-quality learning accessible to all.

## Repository

**GitHub Repository:** [https://github.com/MJ-AHMAD/yunus.git](https://github.com/MJ-AHMAD/yunus.git)

## Deployment

This project is deployed on Vercel. You can view the live site at:

[https://yunus-inspire.vercel.app](https://yunus-inspire.vercel.app) (Example URL, replace with actual URL)

[![Deployed with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMJ-AHMAD%2Fyunus.git)

## Features

- **Free Courses**: Comprehensive courses in programming, technology, and innovation
- **Interactive Learning Tools**: Code editors, quizzes, and hands-on projects
- **Community Support**: Discussion forums, events, and networking opportunities
- **Learning Resources**: Video tutorials, downloadable PDFs, and reference materials
- **Success Stories**: Showcasing student achievements and career transitions

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Language**: TypeScript
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MJ-AHMAD/yunus.git
   cd yunus
```

2. Install dependencies:

```shellscript
npm install
# or
yarn install
```


3. Run the development server:

```shellscript
npm run dev
# or
yarn dev
```


4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.


## Project Structure

```
yunus-inspire/
├── app/                  # Next.js App Router pages
│   ├── about/            # About page
│   ├── community/        # Community page
│   ├── contact/          # Contact page
│   ├── courses/          # Courses page
│   ├── resources/        # Resources page
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable components
│   ├── ui/               # UI components from shadcn/ui
│   ├── course-card.tsx   # Course card component
│   ├── feature-card.tsx  # Feature card component
│   ├── footer.tsx        # Footer component
│   ├── header.tsx        # Header component
│   └── hero.tsx          # Hero component
├── public/               # Static assets
└── ...                   # Config files
```

## Pages

- **Home**: Landing page with hero section, features, and course previews
- **About**: Information about the organization, mission, and team
- **Courses**: List of available courses with details
- **Resources**: Learning tools, video tutorials, and downloadable materials
- **Community**: Discussion board, events, and success stories
- **Contact**: Contact form and information


## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```

# Example environment variables

NEXT_PUBLIC_SITE_URL=[https://yunus-inspire.vercel.app](https://yunus-inspire.vercel.app)
```

## Deployment on Vercel

This project is optimized for deployment on Vercel. To deploy your own instance:

1. Fork the repository
2. Create a new project on [Vercel](https://vercel.com)
3. Connect your GitHub account and select the forked repository
4. Configure environment variables if needed
5. Deploy


## Contributing

We welcome contributions to improve Yunus Inspire! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


### Contribution Guidelines

- Follow the code style of the project
- Write clean, maintainable code
- Add comments where necessary
- Update documentation for significant changes
- Test your changes thoroughly


## Open Source

This project is open source and welcomes community contributions. We believe in the power of collaborative development to create better educational resources for everyone.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Professor Muhammad Yunus for the inspiration
- All contributors and volunteers
- The open-source community for the amazing tools and libraries


## Contact

- Email: [support@yunusinspire.org](mailto:support@yunusinspire.org)
- Website: [yunusinspire.org](https://yunusinspire.org)
- GitHub: [https://github.com/MJ-AHMAD/yunus](https://github.com/MJ-AHMAD/yunus)
```
