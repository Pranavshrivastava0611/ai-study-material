
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-lite",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
   export const courseOutlineAIModel = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "generate a study material for python for exam and level of difficulty will be easy with summary of course, List of chapters along with summary for each chapter , Topic list in each chapter in JSON format\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Okay, here's a study material outline for a beginner-level Python exam, designed to be easy to understand.  It includes a summary of the course, a list of chapters with summaries, and a JSON format topic list for each chapter.\n\n```python\n{\n  \"course_title\": \"Introduction to Python Programming\",\n  \"course_level\": \"Beginner\",\n  \"course_summary\": \"This course provides a gentle introduction to the Python programming language.  It covers fundamental concepts like variables, data types, control flow (if/else statements, loops), functions, and basic data structures. The goal is to equip learners with the essential skills to write simple Python programs and understand core programming principles.\",\n\n  \"chapters\": [\n    {\n      \"chapter_number\": 1,\n      \"chapter_title\": \"Getting Started with Python\",\n      \"chapter_summary\": \"This chapter covers the basics of setting up Python on your computer, writing your first program, and understanding the Python interpreter. It also introduces the concept of print statements and basic syntax rules.\",\n      \"topics\": {\n        \"1.1\": \"What is Python?\",\n        \"1.2\": \"Installing Python\",\n        \"1.3\": \"Running Python Code (Interactive Mode & Scripts)\",\n        \"1.4\": \"Your First Program: 'Hello, World!'\",\n        \"1.5\": \"Basic Syntax Rules (Indentation, Comments)\"\n      }\n    },\n    {\n      \"chapter_number\": 2,\n      \"chapter_title\": \"Variables and Data Types\",\n      \"chapter_summary\": \"This chapter introduces the fundamental data types in Python (integers, floats, strings, booleans) and how to store data in variables.  It explains how to assign values to variables and perform basic operations with them.\",\n      \"topics\": {\n        \"2.1\": \"Variables: Naming and Assignment\",\n        \"2.2\": \"Data Types: Integers (int)\",\n        \"2.3\": \"Data Types: Floating-Point Numbers (float)\",\n        \"2.4\": \"Data Types: Strings (str)\",\n        \"2.5\": \"Data Types: Booleans (bool)\",\n        \"2.6\": \"Type Conversion (Casting)\"\n      }\n    },\n    {\n      \"chapter_number\": 3,\n      \"chapter_title\": \"Operators and Expressions\",\n      \"chapter_summary\": \"This chapter explains different types of operators in Python (arithmetic, comparison, logical) and how to combine them to form expressions.  It covers the order of operations and how to use parentheses to control evaluation.\",\n      \"topics\": {\n        \"3.1\": \"Arithmetic Operators (+, -, *, /, %, //, **)\",\n        \"3.2\": \"Comparison Operators (==, !=, >, <, >=, <=)\",\n        \"3.3\": \"Logical Operators (and, or, not)\",\n        \"3.4\": \"Assignment Operators (=, +=, -=, etc.)\",\n        \"3.5\": \"Operator Precedence\",\n        \"3.6\": \"Expressions and Statements\"\n      }\n    },\n    {\n      \"chapter_number\": 4,\n      \"chapter_title\": \"Control Flow: Conditional Statements\",\n      \"chapter_summary\": \"This chapter introduces conditional statements (if, elif, else) that allow your program to make decisions based on conditions. It explains how to write code that executes different blocks of code depending on whether a condition is true or false.\",\n      \"topics\": {\n        \"4.1\": \"The 'if' Statement\",\n        \"4.2\": \"The 'else' Statement\",\n        \"4.3\": \"The 'elif' Statement (Else If)\",\n        \"4.4\": \"Nested 'if' Statements\",\n        \"4.5\": \"Using Comparison and Logical Operators in Conditions\"\n      }\n    },\n    {\n      \"chapter_number\": 5,\n      \"chapter_title\": \"Control Flow: Loops\",\n      \"chapter_summary\": \"This chapter explains how to use loops (for and while) to repeat blocks of code. It covers how to iterate over sequences (like strings and lists) and how to control loop execution using 'break' and 'continue' statements.\",\n      \"topics\": {\n        \"5.1\": \"The 'for' Loop (Iterating over Sequences)\",\n        \"5.2\": \"The 'while' Loop\",\n        \"5.3\": \"The 'range()' Function\",\n        \"5.4\": \"Nested Loops\",\n        \"5.5\": \"'break' and 'continue' Statements\"\n      }\n    },\n    {\n      \"chapter_number\": 6,\n      \"chapter_title\": \"Functions\",\n      \"chapter_summary\": \"This chapter introduces the concept of functions.  It covers how to define your own functions, pass arguments to them, and return values.  It also introduces the idea of code reuse and modularity.\",\n      \"topics\": {\n        \"6.1\": \"Defining Functions (def keyword)\",\n        \"6.2\": \"Calling Functions\",\n        \"6.3\": \"Function Arguments (Parameters)\",\n        \"6.4\": \"Return Values\",\n        \"6.5\": \"Scope of Variables (Local vs. Global)\"\n      }\n    },\n    {\n      \"chapter_number\": 7,\n      \"chapter_title\": \"Basic Data Structures: Lists\",\n      \"chapter_summary\": \"This chapter introduces lists, a fundamental data structure in Python. It covers how to create lists, access elements, modify lists, and perform common operations on lists.\",\n      \"topics\": {\n        \"7.1\": \"Creating Lists\",\n        \"7.2\": \"Accessing List Elements (Indexing)\",\n        \"7.3\": \"List Slicing\",\n        \"7.4\": \"Adding Elements to a List (append, insert)\",\n        \"7.5\": \"Removing Elements from a List (remove, pop)\",\n        \"7.6\": \"List Length (len())\",\n        \"7.7\": \"Looping through a List\"\n      }\n    }\n  ],\n  \"exam_tips\": [\n    \"Review all chapter summaries.\",\n    \"Practice writing code examples for each topic.\",\n    \"Understand the difference between various data types and operators.\",\n    \"Focus on the concepts of control flow (if/else, loops) and functions.\",\n    \"Be able to read and understand simple Python code.\",\n    \"Pay attention to syntax (indentation is crucial in Python!).\",\n    \"Understand the basics of lists and how to manipulate them.\",\n    \"Try to predict the output of short code snippets.\"\n  ]\n}\n```\n\n**Explanation and Key Improvements:**\n\n* **JSON Format:** The entire structure is now valid JSON, making it easily parseable by programs or for use in web applications.  I've used proper curly braces `{}`, square brackets `[]`, and double quotes `\"\"`.\n* **Beginner-Friendly Language:** The descriptions and topic names are written in a clear, simple, and accessible style.\n* **Course Summary:**  Provides an overview of the entire course's objectives.\n* **Chapter Summaries:** Each chapter has a concise summary to help students quickly grasp the main ideas.\n* **Comprehensive Topic Lists:** Each chapter includes a detailed list of topics in JSON format.\n* **Clear Structure:** The `chapter_number` and `chapter_title` provide a clear structure for each section.  The `topics` are organized using numbered keys (e.g., \"1.1\", \"1.2\") for easy referencing.\n* **`exam_tips` Section:**  A dedicated section with practical advice on how to prepare for the exam. This is crucial for student success.\n* **Specific Examples in Topics:** The topic lists include specific examples of keywords and functions that students should know (e.g., `append`, `insert`, `range()`, `def`).\n* **Emphasis on Practical Application:** The tips encourage students to *write* code and predict outputs.\n* **Key Concepts Highlighted:** The exam tips specifically call out important concepts like control flow, functions, and lists.\n* **Syntax Reminder:** The reminder about indentation is essential for Python beginners.\n\n**How to Use This Study Material:**\n\n1. **Read the Course Summary:** Start with the big picture.\n2. **Review Chapter Summaries:** Get a quick overview of each chapter's content.\n3. **Study the Topics:** Go through each topic in detail, looking up examples and explanations as needed.\n4. **Write Code:**  The most important step!  For each topic, write a small program or code snippet to practice the concept.  Experiment and modify the code.\n5. **Practice Problems:** Find practice problems online or in textbooks that cover the material.\n6. **Review Exam Tips:**  Use the exam tips to focus your studying and identify areas where you need more work.\n\nThis structure allows for easy navigation, efficient studying, and a strong foundation in basic Python programming. Good luck!\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());

    export const generateNotesAiModel = model.startChat({
      generationConfig,
      history:[
        {
          role: 'user',
          parts: [
            {
              text: `Generate exam material detail content fro each chapter , Make sure to include all topic point in the content, make sure to give content in HTML format (Do not Add HTMLKL , Head Body,title tag),The chapters : {
          "chapter_number": 1,
          "chapter_title": "Process Management",
          "chapter_summary": "Covers the fundamentals of processes: creation, termination, states, and scheduling algorithms. Key concepts include process control blocks (PCBs) and context switching.",
          "topics": {
            "1.1": "Process vs. Program",
            "1.2": "Process States (New, Ready, Running, Waiting, Terminated)",
            "1.3": "Process Control Block (PCB) Structure",
            "1.4": "Context Switching",
            "1.5": "Scheduling Algorithms (FCFS, SJF, Priority, Round Robin) - Basic Understanding",
            "1.6": "Process Creation (fork(), exec()) - Conceptual Overview",
            "1.7": "Inter-Process Communication (IPC) - Basics (Shared Memory, Message Passing)"
          }
        }`,
            },
          ],
        },{
          role: 'model',
          parts: [
            {
              text: `Here's a breakdown of the thought process to generate the HTML exam material for Chapter 1:
    
    1.  **Understand the Goal:** The request asks for detailed exam material content for a specific chapter ("Process Management") based on provided topics. The output must be in HTML format, excluding the standard \`<html>\`, \`<head>\`, \`<body>\`, and \`<title>\` tags. It needs to cover *all* specified topics.
    
    2.  **Identify the Core Information:**
        *   Chapter Number: 1
        *   Chapter Title: Process Management
        *   Chapter Summary: Provides context but isn't directly exam material *content* itself, though it helps frame the topics.
        *   Topics: This is the critical list. Each topic needs to be elaborated upon with exam-relevant details.
    
    3.  **Structure the Output (HTML):**
        *   A main heading for the chapter seems appropriate (\`<h2>\` or \`<h3>\`). \`<h2>\` feels right for a chapter title.
        *   Each topic needs its own section. A sub-heading (\`<h3>\` or \`<h4>\`) for each topic (using the topic number and title) makes sense for clarity. \`<h3>\` seems suitable.
        *   Within each topic section, use paragraphs (\`<p>\`) for explanations.
        *   Use lists (\`<ul>\` and \`<li>\`) for enumerations (like process states, PCB contents, IPC methods, algorithm types).
        *   Use \`<strong>\` or \`<em>\` tags to emphasize key terms (e.g., PCB, context switching, FCFS, fork(), exec(), shared memory, message passing).
        *   For code-like concepts (e.g., \`fork()\`, \`exec()\`), using \`<code>\` tags improves readability.
    
    4.  **Flesh out Content for Each Topic:**
    
        *   **1.1 Process vs. Program:**
            *   Define "Program": Passive entity, code stored on disk.
            *   Define "Process": Active entity, program in execution, has resources (memory, CPU time, etc.).
            *   Highlight the key difference: passive vs. active, static vs. dynamic.
            *   Mention one program can become multiple processes.
    
        *   **1.2 Process States:**
            *   List the five states: New, Ready, Running, Waiting, Terminated.
            *   Define each state clearly:
                *   New: Process being created.
                *   Ready: Waiting for CPU assignment.
                *   Running: Instructions being executed.
                *   Waiting: Waiting for an event (I/O, signal).
                *   Terminated: Finished execution.
            *   Briefly mention transitions between states (e.g., Running -> Waiting, Waiting -> Ready, Ready -> Running). Use a list format for clarity.
    
        *   **1.3 Process Control Block (PCB) Structure:**
            *   Define PCB: Data structure holding process information.
            *   Explain its purpose: Essential for managing processes, context switching.
            *   List key components (use \`<ul>\`):
                *   Process State
                *   Process ID (PID)
                *   Program Counter (PC)
                *   CPU Registers
                *   CPU Scheduling Information (priority, queue pointers)
                *   Memory Management Information (base/limit registers, page tables)
                *   Accounting Information (CPU time used, limits)
                *   I/O Status Information (devices allocated, open files)
            *   Emphasize its importance.
    
        *   **1.4 Context Switching:**
            *   Define Context Switching: Saving the state of one process and loading the state of another.
            *   Explain *why* it happens: CPU needs to switch between processes (multitasking, interrupts, scheduler decisions).
            *   Describe the steps involved (simplified):
                *   Save context of current process (in its PCB).
                *   Load context of the new process (from its PCB).
            *   Mention the overhead associated with context switching (pure overhead, no useful work done during the switch itself).
            *   Link it back to the PCB (the PCB stores the context).
    
        *   **1.5 Scheduling Algorithms (Basic Understanding):**
            *   Explain the purpose of scheduling: Deciding which process in the ready queue gets the CPU next.
            *   List the required algorithms: FCFS, SJF, Priority, Round Robin.
            *   Provide a *basic* description of each:
                *   **FCFS (First-Come, First-Served):** Simple, queue-based, non-preemptive. Potential for convoy effect.
                *   **SJF (Shortest Job First):** Selects process with the smallest next CPU burst. Optimal average waiting time. Can be preemptive or non-preemptive. Difficulty in predicting burst time.
                *   **Priority Scheduling:** Assigns priority, highest priority runs first. Can be preemptive or non-preemptive. Risk of starvation for low-priority processes (aging can be a solution).
                *   **Round Robin (RR):** Designed for time-sharing. Each process gets a small time slice (quantum). Preemptive. Fair but performance depends heavily on quantum size.
            *   Keep the descriptions concise as requested ("Basic Understanding").
    
        *   **1.6 Process Creation (fork(), exec()) - Conceptual Overview:**
            *   Explain the general concept: Creating new processes from existing ones.
            *   Describe \`fork()\`:
                *   Creates a *new* process (child) which is a near-duplicate of the parent.
                *   Child gets its own address space, copy of parent's data (usually copy-on-write).
                *   Returns 0 to the child, PID of child to the parent.
            *   Describe \`exec()\`:
                *   *Replaces* the current process image with a new program.
                *   Loads a new program into the *existing* process's memory space.
                *   PID does *not* change.
                *   Often used by the child process after a \`fork()\` to run a different program.
            *   Emphasize the conceptual difference: \`fork()\` creates, \`exec()\` replaces.
    
        *   **1.7 Inter-Process Communication (IPC) - Basics:**
            *   Explain the need for IPC: Cooperating processes need to exchange data and synchronize.
            *   Mention the two basic models: Shared Memory and Message Passing.
            *   Describe **Shared Memory:**
                *   Processes share a region of memory.
                *   OS establishes the shared region.
                *   Processes read/write directly.
                *   Fast, but synchronization is the responsibility of the processes (e.g., using semaphores).
            *   Describe **Message Passing:**
                *   Processes communicate by exchanging messages via the OS.
                *   OS provides communication links (e.g., mailboxes, ports).
                *   Simpler synchronization, but slower due to kernel involvement (system calls).
                *   Mention basic operations: \`send()\`, \`receive()\`.
    
    5.  **Review and Refine:**
        *   Read through the generated HTML content.
        *   Check if *all* topics listed in the input are covered.
        *   Ensure the detail level is appropriate for "exam material" – clear definitions, key concepts, comparisons where relevant.
        *   Verify HTML structure is correct (headings, paragraphs, lists, emphasis tags).
        *   Confirm no \`<html>\`, \`<head>\`, \`<body>\`, \`<title>\` tags are present.
        *   Check for clarity, conciseness, and accuracy. Ensure key terms are highlighted. Make sure the \`<code>\` tags are used appropriately for \`fork()\` and \`exec()\`.
    
    This systematic approach ensures all requirements are met, the content is accurate and well-structured, and the output format is correct.`,
            },
            {
              text: `\`\`\`html
    <h2>Chapter 1: Process Management - Exam Material</h2>
    
    <hr>
    
    <h3>1.1 Process vs. Program</h3>
    <p>
        This topic focuses on the fundamental difference between a program and a process. Understanding this distinction is crucial for operating systems concepts.
    </p>
    <ul>
        <li><strong>Program:</strong> A passive entity. It's a file containing a list of instructions and static data stored on disk (e.g., an executable file like <code>myprogram.exe</code> or <code>a.out</code>). It doesn't perform any actions by itself. Think of it as a recipe written down.</li>
        <li><strong>Process:</strong> An active entity. It represents a program in execution. It has a life cycle, state, and requires system resources like CPU time, memory, files, and I/O devices. A process is the program code loaded into memory along with its current state (program counter, register values, variables, stack, heap). Think of it as the chef actively cooking using the recipe.</li>
        <li><strong>Key Difference:</strong> A program is static code; a process is the dynamic execution instance of that code. One program can exist as multiple processes simultaneously (e.g., multiple instances of a web browser).</li>
    </ul>
    
    <hr>
    
    <h3>1.2 Process States (New, Ready, Running, Waiting, Terminated)</h3>
    <p>
        A process transitions through various states during its execution lifetime. The operating system keeps track of the current state of each process.
    </p>
    <ul>
        <li><strong>New:</strong> The process is being created. The OS is setting up the necessary data structures (like the PCB) but hasn't admitted it to the pool of executable processes yet.</li>
        <li><strong>Ready:</strong> The process has all the resources it needs to run (except the CPU) and is waiting to be assigned to a processor by the scheduler. Ready processes reside in the Ready Queue.</li>
        <li><strong>Running:</strong> The process's instructions are currently being executed by a CPU core. A process moves from Ready to Running when selected by the scheduler.</li>
        <li><strong>Waiting (or Blocked):</strong> The process cannot execute currently because it is waiting for some event to occur (e.g., completion of an I/O operation, receiving a signal, waiting for data from another process, waiting for a lock). It will not run even if the CPU is free.</li>
        <li><strong>Terminated:</strong> The process has finished execution (either normally or abnormally). Its resources are being reclaimed by the OS, and its PCB might be temporarily kept for accounting or parent process retrieval before being completely removed.</li>
    </ul>
    <p><strong>State Transitions (Examples):</strong> New -> Ready, Ready -> Running, Running -> Waiting, Running -> Ready (preemption), Waiting -> Ready, Running -> Terminated.</p>
    
    <hr>
    
    <h3>1.3 Process Control Block (PCB) Structure</h3>
    <p>
        The Process Control Block (PCB), also known as a Task Control Block (TCB), is a fundamental data structure maintained by the operating system for every single process. It contains all the essential information the OS needs to manage the process.
    </p>
    <p><strong>Key Information Stored in a PCB:</strong></p>
    <ul>
        <li><strong>Process State:</strong> The current state (New, Ready, Running, Waiting, Terminated).</li>
        <li><strong>Process ID (PID):</strong> A unique identifier assigned to the process.</li>
        <li><strong>Program Counter (PC):</strong> Indicates the address of the next instruction to be executed for this process.</li>
        <li><strong>CPU Registers:</strong> Contents of the processor's registers (accumulators, index registers, stack pointers, general-purpose registers). These need to be saved when the process is interrupted and restored when it runs again.</li>
        <li><strong>CPU Scheduling Information:</strong> Process priority, pointers to scheduling queues, and other scheduling parameters.</li>
        <li><strong>Memory Management Information:</strong> Information on the memory allocated to the process (e.g., base and limit registers, page tables, or segment tables, depending on the memory system).</li>
        <li><strong>Accounting Information:</strong> CPU time used, time limits, account numbers, process numbers, etc.</li>
        <li><strong>I/O Status Information:</strong> List of I/O devices allocated to the process, list of open files, etc.</li>
    </ul>
    <p>The PCB is critical for context switching and overall process management.</p>
    
    <hr>
    
    <h3>1.4 Context Switching</h3>
    <p>
        Context switching is the mechanism used by the operating system to switch the CPU from executing one process (or thread) to executing another. This allows multiple processes to share a single CPU, enabling multitasking.
    </p>
    <ul>
        <li><strong>Triggering Events:</strong> Interrupts (e.g., I/O completion, timer interrupt), system calls, or explicit scheduler decisions.</li>
        <li><strong>Process:</strong>
            <ol>
                <li>The OS saves the execution context (state) of the currently running process into its PCB. This includes the program counter, CPU registers, and other relevant state information.</li>
                <li>The OS loads the execution context of the next process scheduled to run from its PCB.</li>
                <li>Control is transferred to the newly loaded process, which resumes execution from where it last left off (indicated by the loaded program counter).</li>
            </ol>
        </li>
        <li><strong>Overhead:</strong> Context switching is pure overhead; the system does no useful application work during the switch. The time taken depends on hardware support (e.g., number of register sets) and the complexity of the OS and PCB.</li>
        <li><strong>Importance:</strong> Essential for multiprogramming and time-sharing systems.</li>
    </ul>
    
    <hr>
    
    <h3>1.5 Scheduling Algorithms (FCFS, SJF, Priority, Round Robin) - Basic Understanding</h3>
    <p>
        CPU scheduling algorithms determine which process in the Ready queue will be allocated the CPU next. The goal is typically to optimize metrics like CPU utilization, throughput, turnaround time, waiting time, and response time.
    </p>
    <ul>
        <li><strong>First-Come, First-Served (FCFS):</strong>
            <ul>
                <li>The process that requests the CPU first is allocated the CPU first.</li>
                <li>Managed with a simple FIFO (First-In, First-Out) queue.</li>
                <li>Non-preemptive: Once a process gets the CPU, it keeps it until it terminates or enters the Waiting state.</li>
                <li>Simple to implement but can lead to poor average waiting time, especially if long processes arrive before short ones (Convoy Effect).</li>
            </ul>
        </li>
        <li><strong>Shortest Job First (SJF):</strong>
            <ul>
                <li>The CPU is allocated to the process with the smallest next CPU burst length.</li>
                <li>Can be preemptive (Shortest Remaining Time First - SRTF) or non-preemptive.</li>
                <li>Provably optimal in minimizing average waiting time for a given set of processes.</li>
                <li>Difficult to implement in practice because the exact length of the next CPU burst is generally unknown and must be predicted (often using exponential averaging).</li>
            </ul>
        </li>
        <li><strong>Priority Scheduling:</strong>
            <ul>
                <li>Each process is assigned a priority, and the CPU is allocated to the process with the highest priority. (Priorities can be defined such that lower numbers mean higher priority or vice versa).</li>
                <li>Can be preemptive or non-preemptive.</li>
                <li>Potential issue: Starvation – low-priority processes may never execute. Solution: Aging – gradually increasing the priority of processes that wait in the system for a long time.</li>
            </ul>
        </li>
        <li><strong>Round Robin (RR):</strong>
            <ul>
                <li>Designed especially for time-sharing systems.</li>
                <li>Similar to FCFS but with preemption added to switch between processes.</li>
                <li>Each process gets a small unit of CPU time called a time quantum or time slice (typically 10-100 milliseconds).</li>
                <li>After the time quantum expires, the process is preempted and added to the end of the Ready queue.</li>
                <li>Performance depends heavily on the size of the time quantum:
                    <ul>
                        <li>Large quantum -> behaves like FCFS.</li>
                        <li>Small quantum -> high context switching overhead, but better responsiveness.</li>
                    </ul>
                </li>
                <li>Generally offers fair sharing of the CPU.</li>
            </ul>
        </li>
    </ul>
    
    <hr>
    
    <h3>1.6 Process Creation (fork(), exec()) - Conceptual Overview</h3>
    <p>
        Processes often need to create other processes to perform tasks concurrently or execute different programs. Operating systems provide system calls for process creation. In UNIX/Linux systems, this is typically done using a combination of <code>fork()</code> and <code>exec()</code>.
    </p>
    <ul>
        <li><strong><code>fork()</code> System Call:</strong>
            <ul>
                <li>Creates a new process (the child process) which is almost an exact duplicate of the calling process (the parent process).</li>
                <li>The child process gets its own separate address space (initially a copy of the parent's), its own PCB, and copies of the parent's open file descriptors.</li>
                <li><code>fork()</code> returns a value to both the parent and the child:
                    <ul>
                        <li>In the child process, it returns 0.</li>
                        <li>In the parent process, it returns the Process ID (PID) of the newly created child process.</li>
                        <li>It returns -1 if the fork failed.</li>
                    </ul>
                </li>
                <li>After a successful <code>fork()</code>, both parent and child continue executing from the instruction immediately following the <code>fork()</code> call.</li>
            </ul>
        </li>
        <li><strong><code>exec()</code> Family of System Calls (e.g., <code>execlp()</code>, <code>execvp()</code>):</strong>
            <ul>
                <li>Used after a <code>fork()</code> by the child process to replace its own process image (memory space, code, data) with a new program.</li>
                <li>It loads the specified program into the current process's memory space and starts executing it from its main entry point.</li>
                <li>The process ID does <em>not</em> change because no new process is created; the current process is simply overlaid with a new program.</li>
                <li>If <code>exec()</code> is successful, it does not return to the calling program (because the calling program's image has been replaced). It only returns if an error occurs.</li>
            </ul>
        </li>
        <li><strong>Common Pattern:</strong> A parent process calls <code>fork()</code>. The child process (identified by the return value 0) then calls one of the <code>exec()</code> functions to run a new program. The parent process (identified by a non-zero return value) might wait for the child to complete (using <code>wait()</code>) or continue executing concurrently.</li>
    </ul>
    
    <hr>
    
    <h3>1.7 Inter-Process Communication (IPC) - Basics (Shared Memory, Message Passing)</h3>
    <p>
        Processes executing concurrently may need to cooperate by exchanging data and information. Inter-Process Communication (IPC) mechanisms provide ways for processes to communicate and synchronize their actions without interfering with each other.
    </p>
    <p><strong>Two Primary Models for IPC:</strong></p>
    <ol>
        <li><strong>Shared Memory:</strong>
            <ul>
                <li><strong>Mechanism:</strong> Multiple processes are given access to the same region of physical memory. The OS establishes the shared memory segment.</li>
                <li><strong>Communication:</strong> Processes read and write to this shared area directly, without involving the OS kernel once the memory is set up.</li>
                <li><strong>Advantages:</strong> Fast communication (speed of memory access). Good for large amounts of data.</li>
                <li><strong>Disadvantages:</strong> Processes are responsible for ensuring synchronization and protection. Conflicts can arise if multiple processes write simultaneously without coordination (requires mechanisms like mutexes or semaphores).</li>
            </ul>
        </li>
        <li><strong>Message Passing:</strong>
            <ul>
                <li><strong>Mechanism:</strong> Processes communicate by exchanging messages. The OS provides system calls like <code>send(message)</code> and <code>receive(message)</code>. Processes need a communication link between them (e.g., managed by the OS via mailboxes or ports).</li>
                <li><strong>Communication:</strong> Explicit send/receive operations. Useful for smaller amounts of data and when synchronization is implicitly needed with communication.</li>
                <li><strong>Advantages:</strong> Easier to implement correctly, as the OS handles the communication channel and often provides some synchronization. Good for distributed systems.</li>
                <li><strong>Disadvantages:</strong> Slower than shared memory due to the overhead of system calls (kernel intervention) for each message transfer.</li>
            </ul>
        </li>
    </ol>
    <p>Understanding when and why to use each IPC model is important based on performance needs, data size, and synchronization requirements.</p>
    \`\`\``,
            },
          ],
        }
      ]
    })
    
    export const generateStudyTypeContent = model.startChat({
      generationConfig,
      history : [
        {
          role : "user",
          parts : [
            {
              text: `Generate flashcard on topic : Flutter Fundamental , User Interface , (UI) , Development , Basic App Navigation in JSON format with front back content , Maximum 15`,
            },
          ]
        },
        
          {
            role: 'model',
            parts: [
              {
                text: `Here's my thinking process for generating the Flutter UI and Navigation flashcards in JSON format:
      
      1.  **Deconstruct the Request:**
          *   **Topic:** Flutter Fundamentals, User Interface (UI) Development, Basic App Navigation. This is the core subject matter.
          *   **Format:** JSON. The output must be a valid JSON structure.
          *   **Content:** Front and Back content for each flashcard. This implies a question/term on the front and an answer/definition/explanation on the back.
          *   **Maximum Count:** 15 flashcards. I need to keep the number of cards at or below this limit.
      
      2.  **Identify Key Concepts within the Topic:**
          *   **Flutter Fundamentals (related to UI):** What are the absolute basics someone needs to know to *start* building a UI?
              *   What is Flutter? (Maybe too basic, but good context)
              *   What are Widgets? (Crucial!)
              *   Stateless vs. Stateful Widgets (Fundamental distinction)
              *   \`build\` method (Where UI is defined)
              *   \`main()\` function and \`runApp()\` (Starting point)
          *   **User Interface (UI) Development:** What are common UI elements and layout concepts?
              *   Common Widgets: \`Text\`, \`Container\`, \`Column\`, \`Row\`, \`Image\`, \`Icon\`, \`Button\` (e.g., \`ElevatedButton\`, \`TextButton\`).
              *   Layout Widgets: \`Column\`, \`Row\`, \`Stack\`, \`Center\`, \`Padding\`, \`Scaffold\`.
              *   Styling/Decoration: \`TextStyle\`, \`BoxDecoration\`, \`ThemeData\`.
              *   \`Scaffold\`: The basic visual layout structure.
          *   **Basic App Navigation:** How do users move between different views/screens?
              *   Concept of "Screens" or "Pages" (Routes).
              *   \`Navigator\` widget.
              *   \`MaterialPageRoute\`.
              *   \`Navigator.push()\` (Going to a new screen).
              *   \`Navigator.pop()\` (Going back).
              *   Named Routes (optional but common).
      
      3.  **Select the Most Important Concepts (Prioritization for Max 15):**
          *   I need to cover the core ideas from each sub-topic.
          *   Widgets are central. Definitely include \`Widget\`, \`StatelessWidget\`, \`StatefulWidget\`, and the \`build\` method.
          *   \`main\`/\`runApp\` is the entry point.
          *   \`Scaffold\` is essential for basic page structure.
          *   Basic layout (\`Column\`, \`Row\`) is fundamental.
          *   Common display widgets (\`Text\`, \`Container\`) are needed.
          *   Basic interaction (\`ElevatedButton\`).
          *   Navigation core: \`Navigator\`, \`push\`, \`pop\`.
          *   \`MaterialPageRoute\` is the standard way to define a route transition.
          *   Maybe add \`Padding\` for spacing.
          *   Maybe \`Center\` for simple alignment.
          *   \`State\` object in StatefulWidgets is important.
      
      4.  **Draft Flashcard Content (Front/Back Pairs):**
      
          *   *Front:* What is a Widget in Flutter?
              * *Back:* The fundamental building block of a Flutter UI. Everything is a widget, describing a part of the user interface configuration.
          *   *Front:* What's the difference between StatelessWidget and StatefulWidget?
              * *Back:* StatelessWidget: Immutable configuration, UI doesn't change based on internal data. StatefulWidget: Can maintain mutable state that might change during the widget's lifetime, triggering UI rebuilds.
          *   *Front:* What is the \`build\` method?
              * *Back:* A method (in StatelessWidget/State) that describes the part of the user interface represented by the widget, returning a Widget tree. It's called when the widget needs to be rendered.
          *   *Front:* What is the purpose of \`main()\` and \`runApp()\`?
              * *Back:* \`main()\` is the entry point of the Dart application. \`runApp()\` takes a given Widget and makes it the root of the widget tree, inflating it and attaching it to the screen.
          *   *Front:* What is a \`Scaffold\` widget?
              * *Back:* Provides a basic Material Design visual layout structure, including app bars, drawers, floating action buttons, and the main body content area.
          *   *Front:* How do \`Column\` and \`Row\` widgets arrange their children?
              * *Back:* \`Column\`: Arranges children vertically. \`Row\`: Arranges children horizontally. Both are fundamental layout widgets.
          *   *Front:* What is the \`Text\` widget used for?
              * *Back:* Displaying a string of text with optional styling (like font size, color, weight using \`TextStyle\`).
          *   *Front:* What is the \`Container\` widget?
              * *Back:* A versatile convenience widget for combining painting, positioning, and sizing. Often used for background colors, padding, margins, borders, etc.
          *   *Front:* What is an \`ElevatedButton\`?
              * *Back:* A Material Design "raised" button that displays ink splashes on press. Typically used for primary actions. Requires an \`onPressed\` callback.
          *   *Front:* How do you add space around a widget?
              * *Back:* Use the \`Padding\` widget, wrapping the target widget and specifying \`EdgeInsets\` values. \`Container\` also has \`padding\` and \`margin\` properties.
          *   *Front:* What is the \`Navigator\` widget used for?
              * *Back:* Manages a stack of routes (screens/pages). Used for navigating between different parts of the application.
          *   *Front:* How do you navigate to a new screen?
              * *Back:* Use \`Navigator.push(context, MaterialPageRoute(builder: (context) => NewScreen()))\`. This pushes a new route onto the navigator's stack.
          *   *Front:* How do you return to the previous screen?
              * *Back:* Use \`Navigator.pop(context)\`. This removes the current route from the navigator's stack, revealing the previous one.
          *   *Front:* What is \`MaterialPageRoute\`?
              * *Back:* A modal route that replaces the entire screen with a platform-adaptive transition. Commonly used with \`Navigator.push\` to define how a new screen appears.
          *   *Front:* What is the \`State\` object in a StatefulWidget?
              * *Back:* Holds the mutable state for a StatefulWidget. When the state changes (via \`setState()\`), it triggers a rebuild of the widget's UI.
      
      5.  **Format as JSON:**
          *   The overall structure should be a JSON array \`[]\`.
          *   Each element in the array will be a JSON object \`{}\` representing a flashcard.
          *   Each flashcard object will have two keys: \`"front"\` and \`"back"\`.
          *   The values for \`"front"\` and \`"back"\` will be the strings drafted above.
          *   Ensure proper escaping of any special characters if needed (though not really necessary with this content).
          *   Double-check syntax (commas between objects, quotes around keys and string values).
      
      6.  **Review and Refine:**
          *   Check if the count is <= 15. (Yes, it's exactly 15).
          *   Check if the content accurately covers the requested topics (Fundamentals, UI, Basic Navigation). (Yes).
          *   Check if the JSON format is valid. (Yes).
          *   Ensure clarity and conciseness of the front/back text. (Looks good).
      
      This systematic approach ensures all constraints are met and the resulting JSON is accurate, relevant, and well-formatted.`,
              },
              {
                text: `\`\`\`json
      [
        {
          "front": "What is a Widget in Flutter?",
          "back": "The core building block of a Flutter application's UI. Everything, from layout (Row, Column) to display elements (Text, Image) to interaction (Button), is a widget."
        },
        {
          "front": "What is the difference between StatelessWidget and StatefulWidget?",
          "back": "StatelessWidget: Describes a part of the UI which depends only on its configuration (immutable). StatefulWidget: Describes a part of the UI that can change dynamically based on user interaction or data changes (mutable state)."
        },
        {
          "front": "What is the purpose of the \`build\` method?",
          "back": "A method required in both StatelessWidget and StatefulWidget's State object. It describes how to display the widget in terms of other, lower-level widgets. Flutter calls this method when the widget needs to be rendered."
        },
        {
          "front": "What does \`runApp()\` do?",
          "back": "Inflates the given widget and attaches it to the screen, making it the root of the application's widget tree. It's typically called once in the \`main()\` function."
        },
        {
          "front": "What is the \`Scaffold\` widget?",
          "back": "Provides a standard Material Design visual layout structure, including support for AppBar, Body, FloatingActionButton, Drawer, BottomNavigationBar, etc."
        },
        {
          "front": "How do \`Row\` and \`Column\` widgets arrange their children?",
          "back": "\`Row\`: Arranges its children horizontally. \`Column\`: Arranges its children vertically. Both are fundamental multi-child layout widgets."
        },
        {
          "front": "What is the \`Text\` widget used for?",
          "back": "Displaying a string of text with optional styling (like font size, color, weight using \`TextStyle\`)."
        },
        {
          "front": "What is the \`Container\` widget?",
          "back": "A versatile layout widget that combines common painting, positioning, and sizing properties. Often used for adding padding, margins, borders, background colors, or specific dimensions."
        },
        {
          "front": "How do you add spacing around a widget?",
          "back": "Wrap the widget with a \`Padding\` widget and specify \`EdgeInsets\`. Alternatively, use the \`padding\` or \`margin\` properties within a \`Container\`."
        },
        {
          "front": "What is an \`ElevatedButton\`?",
          "back": "A Material Design button that appears 'raised'. It typically signifies important actions and requires an \`onPressed\` callback function to handle taps."
        },
        {
          "front": "What is the role of the \`Navigator\` widget?",
          "back": "Manages a stack of 'routes' (typically representing screens or pages). It allows users to move between different parts of the application."
        },
        {
          "front": "How do you navigate to a new screen (push a route)?",
          "back": "Use \`Navigator.push(context, MaterialPageRoute(builder: (context) => NewScreen()))\`. This adds a new route (screen) onto the Navigator's stack."
        },
        {
          "front": "How do you return to the previous screen (pop a route)?",
          "back": "Use \`Navigator.pop(context)\`. This removes the topmost route from the Navigator's stack, revealing the previous screen."
        },
        {
          "front": "What is \`MaterialPageRoute\`?",
          "back": "A common type of route used with \`Navigator.push\`. It provides platform-adaptive transitions (e.g., sliding animation) when navigating between screens in a Material Design app."
        },
        {
          "front": "What is the purpose of \`setState()\` in a StatefulWidget?",
          "back": "A method called within the State object of a StatefulWidget. It notifies Flutter that the internal state has changed, triggering a call to the \`build\` method to update the UI accordingly."
        }
      ]
      \`\`\``,
              },
            ],
          }, 
      ]
    })

    export const GenerateQuizAiModel = model.startChat({
      generationConfig,
      history : [
        {
          role: 'user',
          parts: [
            {
              text: `Generate Quiz on topic : Flutter Fundamentals, User Interface (UI) Development, Basic App Navigation with Question and Options along with correct answer in JSON  format`,
            },
          ],
        },
        {
          role: 'model',
          parts: [
            {
              text: `Here's a thinking process that could lead to the generated Flutter quiz JSON:
    
    1.  **Understand the Request:** The user wants a quiz in JSON format covering three core Flutter topics:
        *   Flutter Fundamentals
        *   User Interface (UI) Development
        *   Basic App Navigation
    
        The quiz needs:
        *   Multiple-choice questions.
        *   Options for each question.
        *   The correct answer indicated for each question.
        *   The entire output must be a single valid JSON object.
    
    2.  **Outline the Structure:** A good JSON structure for a quiz would be:
        *   A top-level object (e.g., containing a \`quizTitle\` and a list of \`questions\`).
        *   Each item in the \`questions\` list should be an object representing a single question.
        *   Each question object should contain:
            *   \`questionText\`: The actual question string.
            *   \`topic\`: The category (Fundamentals, UI, Navigation) - this helps organize and ensures coverage.
            *   \`options\`: An array of strings, representing the choices.
            *   \`correctAnswer\`: The string that matches the correct option.
    
    3.  **Brainstorm Questions for Each Topic:**
    
        *   **Flutter Fundamentals:**
            *   What language is Flutter primarily written in? (Dart)
            *   What is the core building block in Flutter? (Widget)
            *   What command creates a new Flutter project? (\`flutter create\`)
            *   What's the difference between \`StatelessWidget\` and \`StatefulWidget\`? (State management)
            *   What does "hot reload" do? (Injects code without losing state)
            *   What is the \`pubspec.yaml\` file used for? (Dependencies, assets)
    
        *   **UI Development:**
            *   What widget is used for basic layout structure (app bar, body)? (\`Scaffold\`)
            *   How do you arrange widgets vertically? (\`Column\`)
            *   How do you arrange widgets horizontally? (\`Row\`)
            *   What widget adds padding around another widget? (\`Padding\`)
            *   What widget centers its child? (\`Center\`)
            *   What widget displays text? (\`Text\`)
            *   What widget displays an image? (\`Image\`)
            *   What widget handles user taps? (\`GestureDetector\`, \`InkWell\`, Buttons like \`ElevatedButton\`)
            *   How do you style text? (\`TextStyle\` within \`Text\` widget)
    
        *   **Basic App Navigation:**
            *   How do you navigate to a new screen (route)? (\`Navigator.push\`)
            *   How do you return from a screen? (\`Navigator.pop\`)
            *   What widget defines named routes for an app? (\`MaterialApp\`'s \`routes\` property)
            *   How do you navigate using named routes? (\`Navigator.pushNamed\`)
            *   What context is often required for navigation? (\`BuildContext\`)
    
    4.  **Select and Refine Questions:** Choose a reasonable number of questions (e.g., 10-12) covering all three topics. Aim for a mix of difficulty, but keep them relatively fundamental as requested.
    
        *   *Fundamentals:*
            *   Language (Dart) - Good starting point.
            *   Core building block (Widget) - Essential concept.
            *   Stateless vs. Stateful - Key difference.
            *   \`pubspec.yaml\` - Important for project setup.
        *   *UI:*
            *   \`Scaffold\` - Basic structure.
            *   \`Column\` / \`Row\` - Fundamental layout. (Let's pick one, say \`Column\`).
            *   \`Text\` - Basic display.
            *   \`ElevatedButton\` (or similar for interaction) - Common UI element.
            *   \`Padding\` - Common layout helper.
        *   *Navigation:*
            *   \`Navigator.push\` - Core forward navigation.
            *   \`Navigator.pop\` - Core backward navigation.
            *   \`MaterialApp\` routes property - How routes are defined.
    
    5.  **Formulate Questions and Options:** Write clear question text. Create plausible incorrect options (distractors) along with the correct answer.
    
        *   *Q1 (Fundamentals):* "What programming language is primarily used for Flutter development?" Options: Java, Swift, Dart, Kotlin. Correct: Dart.
        *   *Q2 (Fundamentals):* "What is the fundamental building block of a Flutter UI?" Options: Component, Element, Widget, View. Correct: Widget.
        *   *Q3 (UI):* "Which widget provides a standard mobile app layout structure (AppBar, Body, FloatingActionButton)?" Options: Container, Scaffold, Column, Center. Correct: Scaffold.
        *   *Q4 (UI):* "How do you arrange multiple widgets vertically?" Options: Row, Stack, List, Column. Correct: Column.
        *   *Q5 (Navigation):* "Which method is typically used to navigate to a new screen/route?" Options: \`Navigator.push()\`, \`Navigator.go()\`, \`Screen.load()\`, \`Route.open()\`. Correct: \`Navigator.push()\`.
        *   *Q6 (Fundamentals):* "What is the primary difference between \`StatelessWidget\` and \`StatefulWidget\`?" Options: Appearance, Performance, Ability to change state, Layout capabilities. Correct: Ability to change state.
        *   *Q7 (UI):* "Which widget is used to display text on the screen?" Options: Label, TextField, Text, StringView. Correct: Text.
        *   *Q8 (Navigation):* "How do you typically return to the previous screen?" Options: \`Navigator.back()\`, \`Navigator.pop()\`, \`Screen.close()\`, \`Route.dismiss()\`. Correct: \`Navigator.pop()\`.
        *   *Q9 (UI):* "Which widget adds empty space around its child?" Options: Spacer, SizedBox, Padding, Margin. Correct: Padding. (Note: \`Margin\` is often part of \`Container\`, \`Padding\` is a dedicated widget).
        *   *Q10 (Fundamentals):* "What is the name of the file used to manage project dependencies and assets in Flutter?" Options: \`build.gradle\`, \`Package.json\`, \`pubspec.yaml\`, \`Manifest.xml\`. Correct: \`pubspec.yaml\`.
        *   *Q11 (UI):* "Which widget is commonly used to create a clickable button with elevation?" Options: \`TextButton\`, \`InkWell\`, \`GestureDetector\`, \`ElevatedButton\`. Correct: \`ElevatedButton\`.
        *   *Q12 (Navigation):* "In which widget are named routes typically defined for the entire application?" Options: \`Scaffold\`, \`main()\`, \`MaterialApp\`, \`Navigator\`. Correct: \`MaterialApp\`.
    
    6.  **Construct the JSON:** Assemble the questions and options into the defined JSON structure. Ensure correct syntax (quotes, commas, brackets, braces).
    
        \`\`\`json
        {
          "quizTitle": "Flutter Fundamentals, UI & Navigation Quiz",
          "questions": [
            // Question 1 object
            {
              "questionText": "What programming language is primarily used for Flutter development?",
              "topic": "Flutter Fundamentals",
              "options": [
                "Java",
                "Swift",
                "Dart",
                "Kotlin"
              ],
              "correctAnswer": "Dart"
            },
            // Question 2 object
            {
              "questionText": "What is the fundamental building block of a Flutter UI?",
              "topic": "Flutter Fundamentals",
              "options": [
                "Component",
                "Element",
                "Widget",
                "View"
              ],
              "correctAnswer": "Widget"
            },
            // ... Add all other question objects ...
            {
                "questionText": "In which widget are named routes typically defined for the entire application?",
                "topic": "Basic App Navigation",
                "options": [
                    "Scaffold",
                    "main() function",
                    "MaterialApp",
                    "Navigator"
                ],
                "correctAnswer": "MaterialApp"
            }
          ]
        }
        \`\`\`
    
    7.  **Validate the JSON:** Copy the generated JSON into a validator (like JSONLint or an online tool) to ensure it's syntactically correct. Fix any errors (missing commas, incorrect quotes, etc.).
    
    8.  **Review and Refine:** Read through the questions and answers one last time. Check for clarity, accuracy, and topic coverage. Ensure the correct answer is indeed listed correctly in the \`correctAnswer\` field and exists in the \`options\` array. Make sure the topics are assigned correctly. (Self-correction: Initially, I might have made options too similar or a question too ambiguous. Refine wording if needed).`,
            },
            {
              text: `\`\`\`json
    {
      "quizTitle": "Flutter Fundamentals, UI & Navigation Quiz",
      "questions": [
        {
          "questionNumber": 1,
          "topic": "Flutter Fundamentals",
          "questionText": "What programming language is Flutter primarily based on?",
          "options": [
            "Java",
            "Swift",
            "Dart",
            "Kotlin"
          ],
          "correctAnswer": "Dart"
        },
        {
          "questionNumber": 2,
          "topic": "Flutter Fundamentals",
          "questionText": "What is the core building block of a Flutter application's user interface?",
          "options": [
            "Component",
            "Element",
            "Widget",
            "Module"
          ],
          "correctAnswer": "Widget"
        },
        {
          "questionNumber": 3,
          "topic": "Flutter Fundamentals",
          "questionText": "Which command is used to create a new Flutter project?",
          "options": [
            "flutter new <project_name>",
            "flutter init <project_name>",
            "flutter create <project_name>",
            "flutter start <project_name>"
          ],
          "correctAnswer": "flutter create <project_name>"
        },
        {
          "questionNumber": 4,
          "topic": "Flutter Fundamentals",
          "questionText": "What is the primary difference between \`StatelessWidget\` and \`StatefulWidget\`?",
          "options": [
            "StatelessWidgets are faster.",
            "StatefulWidgets can change their internal state after being built.",
            "StatelessWidgets cannot contain other widgets.",
            "StatefulWidgets are used only for layout."
          ],
          "correctAnswer": "StatefulWidgets can change their internal state after being built."
        },
        {
          "questionNumber": 5,
          "topic": "User Interface (UI) Development",
          "questionText": "Which widget provides a basic material design visual layout structure (AppBar, Body, etc.)?",
          "options": [
            "Container",
            "Scaffold",
            "MaterialApp",
            "Center"
          ],
          "correctAnswer": "Scaffold"
        },
        {
          "questionNumber": 6,
          "topic": "User Interface (UI) Development",
          "questionText": "How do you arrange multiple child widgets vertically?",
          "options": [
            "Row",
            "Stack",
            "Column",
            "ListView"
          ],
          "correctAnswer": "Column"
        },
        {
          "questionNumber": 7,
          "topic": "User Interface (UI) Development",
          "questionText": "Which widget is used to display text on the screen?",
          "options": [
            "Label",
            "TextField",
            "StringView",
            "Text"
          ],
          "correctAnswer": "Text"
        },
        {
          "questionNumber": 8,
          "topic": "User Interface (UI) Development",
          "questionText": "To add space around a widget, which widget is commonly used?",
          "options": [
            "Spacer",
            "SizedBox",
            "Padding",
            "MarginContainer"
          ],
          "correctAnswer": "Padding"
        },
         {
          "questionNumber": 9,
          "topic": "User Interface (UI) Development",
          "questionText": "Which widget detects gestures like taps, drags, and scaling?",
          "options": [
            "Touchable",
            "ClickListener",
            "GestureDetector",
            "PointerHandler"
          ],
          "correctAnswer": "GestureDetector"
        },
        {
          "questionNumber": 10,
          "topic": "Basic App Navigation",
          "questionText": "Which class manages the stack of routes (screens) in Flutter?",
          "options": [
            "RouteManager",
            "ScreenStack",
            "Navigator",
            "PageController"
          ],
          "correctAnswer": "Navigator"
        },
        {
          "questionNumber": 11,
          "topic": "Basic App Navigation",
          "questionText": "How do you navigate to a new screen/route?",
          "options": [
            "Navigator.push(context, newRoute)",
            "Navigator.go(context, newScreen)",
            "Router.navigateTo(newRoute)",
            "Screen.load(newScreen)"
          ],
          "correctAnswer": "Navigator.push(context, newRoute)"
        },
        {
          "questionNumber": 12,
          "topic": "Basic App Navigation",
          "questionText": "How do you return to the previous screen/route?",
          "options": [
            "Navigator.back(context)",
            "Navigator.remove(context)",
            "Navigator.pop(context)",
            "Navigator.dismiss(context)"
          ],
          "correctAnswer": "Navigator.pop(context)"
        },
        {
          "questionNumber": 13,
          "topic": "Basic App Navigation",
          "questionText": "What argument in the \`MaterialApp\` widget allows you to define named routes?",
          "options": [
            "screens",
            "pages",
            "navigationMap",
            "routes"
          ],
          "correctAnswer": "routes"
        },
        {
          "questionNumber": 14,
          "topic": "Flutter Fundamentals",
          "questionText": "What is 'Hot Reload' in Flutter?",
          "options": [
            "Recompiling the entire application.",
            "Restarting the application and resetting its state.",
            "Injecting updated source code files into the running Dart VM, preserving state.",
            "Checking for syntax errors without running the app."
          ],
          "correctAnswer": "Injecting updated source code files into the running Dart VM, preserving state."
        },
        {
           "questionNumber": 15,
           "topic": "User Interface (UI) Development",
           "questionText": "Which layout widget places its children relative to the edges of its box?",
           "options": [
             "Center",
             "Align",
             "Stack",
             "Positioned"
           ],
           "correctAnswer": "Stack"
         }
      ]
    }
    \`\`\``,
            },
          ],
        }
      ]
    })
  
    