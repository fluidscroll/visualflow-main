
## Tasks for James upon recieving Github Colloborater Invitation

------------------------------------------------------------------------------

## Part 1: Setting up your local environment


### Step 1: Accept GitHub Invitation

1. **Check email** for GitHub collaboration invitation
2. **Click the invitation link** in the email
3. **Accept the invitation** on GitHub
4. **Verify access** - you should now see the repository in your GitHub account


### Step 2: Set Up Git Configuration in Docker Container


1. **Start your Docker container** (as you normally do for development)

2. **Enter the container** and navigate to the project directory:
   ```bash
   # If not already inside the container
   docker exec -it [container-name] /bin/bash
   # or
   docker exec -it [container-name] /bin/sh
   ```

3. **Configure Git with your identity** (inside the container):
   ```bash
   git config --global user.name "Your Full Name"
   git config --global user.email "your-email@example.com"
   ```
   
   > **Important**: Use the same email associated with your GitHub account

4. **Verify current Git configuration**:
   ```bash
   git config --list
   ```


### Step 3: Set Up GitHub Authentication


You have two options for authentication. **Choose Option A (Personal Access Token) - it's easier**:

#### Option A: Personal Access Token (Recommended)

1. **Create a Personal Access Token on GitHub**:
   - Go to GitHub → Click your profile picture → **Settings**
   - Scroll to bottom of left sidebar → **Developer settings**
   - Click **Personal access tokens** → **Tokens (classic)**
   - Click **Generate new token** → **Generate new token (classic)**
   - Set expiration (recommend 90 days or custom)
   - Select scopes: Check **"repo"** (gives full repository access)
   - Click **Generate token**
   - **Copy the token immediately** (you won't see it again)

2. **Test authentication** (inside Docker container):
   ```bash
   git remote -v
   # Should show your repository URL
   ```

3. **When you first push**, Git will prompt for credentials:
   - **Username**: Your GitHub username
   - **Password**: Paste your Personal Access Token (not your GitHub password)


### Step 4: Start Your Docker Environment


1. **Navigate to the project directory** on your Mac (where you received the project files)

2. **Start the development container**:
   ```bash
   # Start the development environment
   docker compose up nextjs-dev
   
   # Or run in background
   docker compose up -d nextjs-dev
   ```

3. **Enter the running container**:
   ```bash
   # Open a shell inside the container
   docker compose exec nextjs-dev /bin/bash
   ```


### Step 5: Verify Repository Access


1. **Check current repository status** (inside Docker container):
   ```bash
   git status
   git remote -v
   git log --oneline -5
   ```

2. **Pull latest changes** to ensure you have the most recent version:
   ```bash
   git pull origin main
   ```


### Step 6: Making and Pushing Changes


#### Development Workflow (Inside Docker Container)

1. **Start the development server** (inside container):
   ```bash
   npm run dev
   # Development server runs on http://localhost:3000
   ```

2. **Make your code changes** using your preferred editor
   - **Important**: You can edit files either:
     - From inside the container, OR  
     - On your Mac using any editor (VS Code, etc.) - changes sync automatically!
   - Test your changes: Visit `http://localhost:3000`

3. **Stage your changes** (inside container):
   ```bash
   git add .
   # Or for specific files:
   git add path/to/specific/file.tsx
   ```

3. **Commit your changes**:
   ```bash
   git commit -m "Descriptive message about your changes"
   ```
   
   > **Good commit message examples**:
   > - "Update hero section styling and add responsive design"
   > - "Fix navigation menu mobile breakpoint"
   > - "Add contact form validation"

4. **Push changes to GitHub**:
   ```bash
   git push origin main
   ```
   
   > **If using Personal Access Token**: Enter GitHub username and token when prompted

5. **Verify deployment**:
   - Changes will automatically deploy to Vercel
   - Check the live site in a few minutes


### Step 7: Best Practices for Collaboration


#### Starting Your Work Session
```bash
# Navigate to project directory
cd /path/to/your/project

# Start development container
docker compose up -d nextjs-dev

# Enter container for Git operations
docker compose exec nextjs-dev /bin/bash

# Always pull latest changes first
git pull origin main

# Start development server
npm run dev
```

#### Regular Workflow
```bash
# Check what files have changed (inside container)
git status

# View differences
git diff

# Stage and commit
git add .
git commit -m "Clear description of changes"

# Push to repository
git push origin main
```

#### Ending Your Work Session
```bash
# Stop the development server (Ctrl+C)
# Exit container shell
exit

# Stop containers
docker compose down
```

#### If You Encounter Issues

1. **Authentication Failed**:
   ```bash
   # Clear cached credentials
   git config --global --unset credential.helper
   # Try push again - you'll be prompted for fresh credentials
   git push origin main
   ```

2. **Permission Denied**:
   - Verify you accepted the GitHub invitation
   - Check that you're using the correct GitHub username/email
   - Ensure your Personal Access Token has "repo" permissions

3. **Merge Conflicts**:
   ```bash
   # Pull latest changes
   git pull origin main
   # Resolve conflicts in your editor
   # Then commit the resolution
   git add .
   git commit -m "Resolve merge conflicts"
   git push origin main
   ```

------------------------------------------------------------------------------

## Part 2: Verification Steps


### Verification
1. Visit your GitHub profile - the repository should appear in "Repositories"
2. After pushing, check the repository on GitHub to see your commits

---

## Troubleshooting Common Issues

### Issue: "Repository not found" or "Permission denied"
**Solution**: 
- Ensure GitHub invitation was accepted
- Verify you're using correct repository URL
- Check Git remote configuration: `git remote -v`

### Issue: Authentication keeps failing
**Solution**:
- If using Personal Access Token: Ensure token has "repo" permissions
- Try clearing cached credentials: `git config --global --unset credential.helper`
- Regenerate Personal Access Token if needed

### Issue: Changes not appearing in Docker
**Solution**:
- Ensure Docker volume is properly mounted to project directory
- Restart Docker container if needed
- Verify you're editing files in the correct mounted directory


---

## Quick Reference Commands

```bash
# Essential Git commands for daily use
git status                    # Check current status
git pull origin main         # Get latest changes
git add .                    # Stage all changes
git commit -m "message"      # Commit changes
git push origin main         # Push to GitHub
git log --oneline -10        # View recent commits
git diff                     # See current changes
```

---