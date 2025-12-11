# Code & Dependencies Setup Guide - For James


# Using Docker for Visualflow Website


Setup Instructions For James


Prerequisites

Install Docker Desktop from https://www.docker.com/products/docker-desktop/

Download VS Code from https://code.visualstudio.com/ and install

Install Git 
if not already installed - See next step
if installed, skip next step to "Getting Started"

######################################

If Git not installed:

### 1.1 Install Homebrew (Package Manager)
Homebrew makes it easy to install development tools on Mac.

Open up VS Code

Once in VS Code, open your terminal - (menu) Terminal/New Terminal OR ctrl + `
Your terminal should open in your system user directory, e.g. (base) Glen-R@Mac ~ %


```bash (this refers to the standard terminal shell so anything within the bash quotes is a bash terminal command to be run)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After installation, restart your terminal or run:
```bash
source ~/.zshrc
```

### 1.2 Install Git
```bash
brew install git
```

Verify installation:
```bash
git --version
```

######################################

Getting Started

Ensure to start up Docker Desktop

Open up VS Code

Once in VS Code, open your terminal - (menu) Terminal/New Terminal OR ctrl + `
Your terminal should open in your system user directory, e.g. (base) Glen-R@Mac ~ %


# Clone the Git repository from GitHub
```bash
git clone https://github.com/Glen-R-L/visualflow.git

cd visualflow
```

# Start development environment
```bash
npm run docker:dev
```

# Or alternatively:
```bash
docker-compose up nextjs-dev
```

The application should be available at http://localhost:3000


Development Workflow

# Start development
```bash
npm run docker:dev
```

# Stop development
```bash
npm run docker:dev-down
```

# Rebuild if package.json changes
```bash
npm run docker:dev-build
```

# View logs
```bash
docker-compose logs nextjs-dev
```

# Access container shell
```bash
docker-compose exec nextjs-dev sh
```

Production Testing

Build and run production version
```bash
npm run docker:prod
```

Access at http://localhost:3001


# Troubleshooting

Common Issues

Port already in use:

Stop all containers
```bash
docker-compose down
```

Or kill specific port
```bash
lsof -ti:3000 | xargs kill -9
```

Container won't start:

Check Docker Desktop is running


# View detailed logs
```bash
docker-compose logs nextjs-dev
```

# Rebuild completely
```bash
docker-compose down

docker-compose build --no-cache

npm run docker:dev
```

Changes not reflected:

Make sure Docker Desktop file sharing is enabled for your project directory.


Out of disk space:

Clean up Docker resources
```bash
npm run docker:clean
```

# Or manually
```bash
docker system prune -af --volumes
```



Benefits of This Docker Setup

Consistent Environment: Same Node.js version and dependencies across all machines
No Local Dependencies: No need for Node.js/npm to be installed
Hot Reloading: Development container supports live code changes
Production Testing: Easy to test production builds locally
Easy Cleanup: Remove all traces with simple commands
Vercel Compatible: Should work seamlessly with our existing Vercel deployment