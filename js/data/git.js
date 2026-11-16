window.LANGS = window.LANGS || [];
window.LANGS.push({
  id: "git",
  order: 16,
  group: "Tools & DevOps",
  name: "Git",
  color: "#f05133",
  tagline: "Save the history of your project, undo mistakes and work together through GitHub.",
  level: "Beginner-friendly",
  usedFor: "version control, teamwork, backups, open source",
  comment: "#",
  kw: [],
  types: [],
  topics: [
    {
      id: "cheat",
      title: "Cheat sheet",
      text: "The commands you will use every day, on one screen. The usual routine is: change files, add, commit, push.",
      shell: true,
      code: `git status                       # what changed?
git add .                        # prepare all changes
git commit -m "Describe it"      # save a snapshot
git push                         # send to GitHub
git pull                         # get new changes
git log --oneline                # history, one line each
git diff                         # see what you changed`
    },
    {
      id: "setup",
      title: "Setup & run",
      text: "Install Git from git-scm.com (on Windows this also gives you Git Bash). Then tell Git who you are, once. Your name and email appear on every commit. Create a free account on github.com to keep your projects online.",
      shell: true,
      code: `git --version

git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global init.defaultBranch main

sudo apt install git     # Debian/Ubuntu
brew install git         # macOS
winget install Git.Git   # Windows`
    },
    {
      id: "first",
      title: "Your first repository",
      text: "A repository (repo) is a project folder that Git is watching. Make one with git init, or copy an existing one from GitHub with git clone. A commit is a saved snapshot with a short message that says what you changed.",
      shell: true,
      code: `mkdir my-project
cd my-project
git init                         # start watching this folder

echo "# My project" > README.md
git add README.md                # choose what goes in the snapshot
git commit -m "Add README"       # save it

git clone https://github.com/user/repo.git   # copy an existing repo`
    },
    {
      id: "daily",
      title: "Everyday workflow",
      text: "Check what changed with git status. Add only what you want in the snapshot, then commit it. Good commit messages are short and say what the commit does. The file .gitignore lists files Git should never track, like passwords or large build folders.",
      shell: true,
      code: `git status                       # red = changed, green = ready to commit
git diff                         # see the exact changes
git add index.html style.css     # add specific files
git commit -m "Fix the menu on phones"
git log --oneline                # review your history

# .gitignore example:
# node_modules/
# .env
# *.log`
    },
    {
      id: "branches",
      title: "Branches",
      text: "A branch is a separate line of work. Try a new idea on its own branch, so main stays working. When you are happy, merge the branch back. Merging can sometimes cause a conflict, when two people changed the same line. Git marks the place in the file, you choose what to keep, then you add and commit.",
      shell: true,
      code: `git branch                       # list branches
git switch -c new-menu           # create and move to a new branch
# ...edit files, add, commit...

git switch main                  # go back to main
git merge new-menu               # bring the work in
git branch -d new-menu           # delete the finished branch`
    },
    {
      id: "remote",
      title: "GitHub & remotes",
      text: "A remote is a copy of your repo on another computer, usually GitHub. Create an empty repo on github.com, connect it once, then push. Before you push, pull first, so you have the newest work. If Git says your push was rejected, pull and try again.",
      shell: true,
      code: `git remote add origin https://github.com/you/my-project.git
git push -u origin main          # first push (sets the default)

git pull                         # get the newest changes
git push                         # send your commits

git remote -v                    # show connected remotes`
    },
    {
      id: "undo",
      title: "Undoing mistakes",
      text: "Git makes it hard to lose work, but you must know the right command. Use restore to throw away changes you have not committed. Use revert to undo an old commit by making a new one, which is safe even after pushing. Be very careful with reset --hard, because it deletes your changes.",
      shell: true,
      code: `git restore notes.txt            # drop uncommitted changes in a file
git restore --staged notes.txt   # take a file out of the next commit

git revert abc1234               # undo a commit safely (new commit)
git commit --amend -m "New message"   # fix the last message (before pushing)

git reset --hard origin/main     # DANGER: match GitHub, delete local changes`
    },
    {
      id: "tips",
      title: "Key idea",
      text: "Commit often, in small steps, with clear messages. Each commit is a safe point you can return to. Never commit passwords or API keys. If you did, remove the key and create a new one, because the old one stays in the history.",
      shell: true,
      code: `git log --oneline --graph        # see the branches as a picture
git show abc1234                 # what did this commit change?
git stash                        # hide changes for later
git stash pop                    # bring them back

git status                       # when in doubt, run this first`
    }
  ]
});
