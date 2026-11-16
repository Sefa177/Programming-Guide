window.LANGS = window.LANGS || [];
window.LANGS.push({
  id: "terminal",
  order: 15,
  group: "Tools & DevOps",
  name: "Terminal",
  color: "#4d5b6c",
  tagline: "Control your computer by typing commands: move around, manage files and run programs.",
  level: "Beginner-friendly",
  usedFor: "running tools, managing files, servers, automation",
  comment: "#",
  kw: [],
  types: [],
  topics: [
    {
      id: "cheat",
      title: "Cheat sheet",
      text: "The commands you will use every day, on one screen. The examples use the Linux, macOS and Git Bash style. On Windows PowerShell most of them work too, because it has the same short names (ls, cd, cat, mkdir...).",
      shell: true,
      code: `pwd                      # where am I?
ls                       # list files (ls -la shows hidden ones too)
cd projects              # go into a folder
cd ..                    # go up one folder
mkdir notes              # make a folder
touch a.txt              # make an empty file
cp a.txt b.txt           # copy
mv b.txt notes/          # move (or rename)
rm a.txt                 # delete (no recycle bin!)
cat a.txt                # show a file
clear                    # clean the screen`
    },
    {
      id: "setup",
      title: "Open a terminal",
      text: "Every system already has one. On Windows, open PowerShell or Windows Terminal from the Start menu. If you installed Git, Git Bash is also available and gives you the Linux-style commands. On macOS open the Terminal app. On Linux press Ctrl+Alt+T. Commands run when you press Enter.",
      shell: true,
      code: `# Windows: Start menu > "PowerShell" or "Git Bash"
# macOS:   Cmd+Space > "Terminal"
# Linux:   Ctrl+Alt+T

echo "Hello, World!"
whoami                   # your user name
date                     # the date and time`
    },
    {
      id: "navigate",
      title: "Moving around",
      text: "You are always inside a folder. pwd shows which one, ls shows what is in it and cd moves you. A path starting with / (or C:/ on Windows) is absolute. A path without it starts from where you are. The tilde (~) means your home folder. Press Tab to finish names for you, and the up arrow to bring back the last command.",
      shell: true,
      code: `pwd                      # /home/ada/projects
ls -la                   # long list, with hidden files
cd Documents             # relative path
cd ~                     # home folder
cd /c/Projects           # absolute path (Git Bash style)
cd ..                    # one level up
cd -                     # back to the previous folder`
    },
    {
      id: "files",
      title: "Working with files",
      text: "Create, copy, move and delete files and folders. mv is also how you rename. Be careful with rm: there is no recycle bin, deleted files are gone. Add -r to work on a whole folder, and read the command twice before pressing Enter.",
      shell: true,
      code: `mkdir -p app/src         # make folders (and parents)
touch app/src/main.py    # empty file
cp main.py backup.py     # copy a file
cp -r app app_copy       # copy a folder
mv backup.py old.py      # rename
mv old.py app/           # move
rm old.py                # delete a file
rm -r app_copy           # delete a folder and everything inside`
    },
    {
      id: "read",
      title: "Reading & searching",
      text: "Look inside files without opening an editor. cat prints a whole file, head and tail show the start and end, and less lets you scroll (press q to quit). grep searches for text inside files, and find searches for files by name.",
      shell: true,
      code: `cat notes.txt            # whole file
head -n 5 notes.txt      # first 5 lines
tail -n 5 notes.txt      # last 5 lines
tail -f app.log          # follow a file as it grows (Ctrl+C stops)
less notes.txt           # scroll with arrows, q to quit

grep "error" app.log     # lines containing "error"
grep -ri "todo" .        # search in every file, ignore capitals
find . -name "*.py"      # find files by name`
    },
    {
      id: "pipes",
      title: "Pipes & redirects",
      text: "Small commands become powerful when you connect them. The pipe sign | sends the output of one command into the next. > saves output into a file (replacing it) and >> adds to the end of a file.",
      shell: true,
      code: `ls | wc -l                       # how many files are here?
cat app.log | grep error | wc -l # count the error lines

echo "first" > list.txt          # create / replace the file
echo "second" >> list.txt        # add to the end
cat list.txt

history | grep git               # find a command you used before`
    },
    {
      id: "scripts",
      title: "Variables & scripts",
      text: "Put commands in a file and run them all at once. Save them in a .sh file (or .ps1 on PowerShell). In bash, set a variable with name=value (no spaces around the = sign) and read it with $name. chmod +x makes the file runnable.",
      shell: true,
      code: `# save this as hello.sh
#!/bin/bash
name="Ada"
echo "Hello, $name!"

for f in *.txt; do
  echo "Found $f"
done

# then in the terminal:
chmod +x hello.sh
./hello.sh`
    },
    {
      id: "tips",
      title: "Key idea",
      text: "Learn a few shortcuts and the terminal becomes fast. If you are stuck, add --help to a command, or read its manual with man. Ctrl+C stops a running command, and sudo runs a command as the administrator (Linux and macOS), so only use it when you understand the command.",
      shell: true,
      code: `ls --help                # short help
man ls                   # full manual (q to quit)

# Ctrl+C   stop the running command
# Ctrl+L   clear the screen
# Ctrl+R   search old commands
# Tab      finish names
# Up arrow previous command

sudo apt update          # run as administrator (Debian/Ubuntu)`
    }
  ]
});
