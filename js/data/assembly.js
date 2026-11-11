window.LANGS = window.LANGS || [];
window.LANGS.push({
  id: "assembly",
  order: 8,
  name: "Assembly",
  color: "#6e7681",
  tagline: "Talk to the processor almost directly. These examples are x86-64 for Linux (NASM syntax).",
  level: "Advanced",
  usedFor: "boot code, drivers, reverse engineering, learning how CPUs work",
  ext: ".asm",
  comment: ";",
  ci: true,
  kw: ["mov", "add", "sub", "mul", "div", "inc", "dec", "cmp", "jmp", "je", "jne", "jz", "jnz", "jl", "jg", "jge", "jle", "call", "ret", "push", "pop", "syscall", "xor", "lea", "loop", "global", "section", "db", "equ", "resb", "dq", "dd"],
  types: ["rax", "rbx", "rcx", "rdx", "rsi", "rdi", "rsp", "rbp", "eax", "ebx", "ecx", "edx", "al", "r8", "r9", "r10", "_start", "len", "msg", "byte", "qword"],
  topics: [
    {
      id: "setup",
      title: "Setup & run",
      text: "Install NASM (the assembler) and a linker (ld, part of binutils). Assemble your file into an object file, link it, and run. On Windows, use WSL to follow along.",
      shell: true,
      code: "sudo apt install nasm binutils   # Debian/Ubuntu\nnasm -f elf64 hello.asm -o hello.o\nld hello.o -o hello\n./hello"
    },
    {
      id: "hello",
      title: "Hello, World",
      text: "There is no print function. You ask the Linux kernel to do it with a system call: put the call number and arguments in registers, then run syscall. Call 1 is write, call 60 is exit.",
      code: "section .data\n    msg db \"Hello, World!\", 10      ; 10 = newline\n    len equ $ - msg                 ; length of msg\n\nsection .text\n    global _start\n\n_start:\n    mov rax, 1          ; syscall number: write\n    mov rdi, 1          ; file descriptor 1 = screen\n    mov rsi, msg        ; address of the text\n    mov rdx, len        ; how many bytes\n    syscall\n\n    mov rax, 60         ; syscall number: exit\n    xor rdi, rdi        ; exit code 0\n    syscall"
    },
    {
      id: "variables",
      title: "Variables & types",
      text: "The CPU has a few very fast storage slots called registers (rax, rbx, rcx, rdx and more). Larger data lives in memory, where you reserve and name it yourself. There are no real types, only sizes: db is 1 byte, dd is 4 bytes, dq is 8 bytes.",
      code: "section .data\n    age   dd 36            ; 4-byte number in memory\n    big   dq 1000000       ; 8-byte number\n    greet db \"Hi\", 0        ; bytes of text\n\nsection .text\n    global _start\n_start:\n    mov rax, 5             ; put 5 in register rax\n    mov ebx, [age]         ; read 4 bytes from memory\n    add rax, rbx           ; rax = rax + rbx"
    },
    {
      id: "control",
      title: "Control flow",
      text: "There is no if or for. You compare two values with cmp, which sets flags, then jump to a label depending on the result (je equal, jne not equal, jl less, jg greater). A loop is a label plus a jump back.",
      code: "    mov rcx, 3             ; counter\nagain:\n    ; ...do the work here...\n    dec rcx                ; counter = counter - 1\n    jnz again              ; jump if not zero: repeat\n\n    cmp rax, 10\n    jl smaller             ; jump if rax < 10\n    ; ...rax is 10 or more...\n    jmp done\nsmaller:\n    ; ...rax is less than 10...\ndone:"
    },
    {
      id: "functions",
      title: "Functions",
      text: "call jumps to a label and remembers where to come back to. ret returns there. By the System V convention on Linux, the first arguments go in rdi, rsi, rdx and the result comes back in rax.",
      code: "add_two:                   ; rdi = a, rsi = b\n    mov rax, rdi\n    add rax, rsi           ; result in rax\n    ret\n\n_start:\n    mov rdi, 2\n    mov rsi, 3\n    call add_two           ; rax is now 5"
    },
    {
      id: "collections",
      title: "Collections",
      text: "An array is just several values stored one after another. You find item number i by adding i times the item size to the start address.",
      code: "section .data\n    nums dd 10, 20, 30     ; three 4-byte numbers\n\nsection .text\n_start:\n    mov eax, [nums]        ; first item: 10\n    mov ebx, [nums + 4]    ; second item: 20 (each is 4 bytes)\n    mov ecx, [nums + 8]    ; third item: 30\n    add eax, ebx\n    add eax, ecx           ; eax = 60"
    },
    {
      id: "errors",
      title: "Error handling",
      text: "Nothing is built in. System calls report failure by returning a negative number in rax, and the program must check it. A common habit is to exit with a non-zero code on failure.",
      code: "    mov rax, 2             ; syscall: open\n    mov rdi, filename\n    xor rsi, rsi           ; read-only\n    syscall\n\n    cmp rax, 0\n    jl failed              ; negative = error\n    ; ...file opened, rax is the file descriptor...\n    jmp finish\nfailed:\n    mov rax, 60\n    mov rdi, 1             ; exit code 1 = failure\n    syscall\nfinish:"
    },
    {
      id: "tips",
      title: "Key idea",
      text: "Assembly is one-to-one with the machine instructions of one CPU family, so x86-64 code will not run on an ARM phone or an Apple Silicon Mac. The stack, pointed to by rsp, is where push and pop temporarily save values.",
      code: "    push rax               ; save rax on the stack\n    mov rax, 99            ; use rax for something else\n    pop rax                ; restore the old value"
    }
  ]
});
