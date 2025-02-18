export const questions = [
    // Digital Electronics (15 questions)
    {
        id: 1,
        question: "What is the binary representation of decimal number 25?",
        answers: [
            { id: "a", text: "11001" },
            { id: "b", text: "10011" },
            { id: "c", text: "10101" },
            { id: "d", text: "11010" },
        ],
        correctAnswer: "a",
    },
    {
        id: 2,
        question: "Which logic gate performs the NOT operation?",
        answers: [
            { id: "a", text: "AND gate" },
            { id: "b", text: "OR gate" },
            { id: "c", text: "Inverter" },
            { id: "d", text: "NAND gate" },
        ],
        correctAnswer: "c",
    },
    {
        id: 3,
        question: "What is the output of an XOR gate when both inputs are 1?",
        answers: [
            { id: "a", text: "0" },
            { id: "b", text: "1" },
            { id: "c", text: "Undefined" },
            { id: "d", text: "Floating" },
        ],
        correctAnswer: "a",
    },
    {
        id: 4,
        question: "Which flip-flop is used as a basic memory element in sequential circuits?",
        answers: [
            { id: "a", text: "SR flip-flop" },
            { id: "b", text: "D flip-flop" },
            { id: "c", text: "JK flip-flop" },
            { id: "d", text: "T flip-flop" },
        ],
        correctAnswer: "b",
    },
    {
        id: 5,
        question: "What is the purpose of a multiplexer?",
        answers: [
            { id: "a", text: "To combine multiple inputs into one output" },
            { id: "b", text: "To split one input into multiple outputs" },
            { id: "c", text: "To store data" },
            { id: "d", text: "To perform arithmetic operations" },
        ],
        correctAnswer: "a",
    },
    {
        id: 6,
        question: "How many bits are needed to represent 16 different states?",
        answers: [
            { id: "a", text: "2" },
            { id: "b", text: "4" },
            { id: "c", text: "8" },
            { id: "d", text: "16" },
        ],
        correctAnswer: "b",
    },
    {
        id: 7,
        question: "What is the decimal equivalent of the binary number 1010?",
        answers: [
            { id: "a", text: "8" },
            { id: "b", text: "10" },
            { id: "c", text: "12" },
            { id: "d", text: "14" },
        ],
        correctAnswer: "b",
    },
    {
        id: 8,
        question: "Which of the following is not a basic logic gate?",
        answers: [
            { id: "a", text: "AND" },
            { id: "b", text: "OR" },
            { id: "c", text: "NOT" },
            { id: "d", text: "XOR" },
        ],
        correctAnswer: "d",
    },
    {
        id: 9,
        question: "What is the function of a decoder in digital circuits?",
        answers: [
            { id: "a", text: "To convert binary to decimal" },
            { id: "b", text: "To convert decimal to binary" },
            { id: "c", text: "To select one of many input lines and direct it to a single output line" },
            { id: "d", text: "To select one of many output lines based on a combination of inputs" },
        ],
        correctAnswer: "d",
    },
    {
        id: 10,
        question: "What is the output of an AND gate when one input is 0 and the other is 1?",
        answers: [
            { id: "a", text: "0" },
            { id: "b", text: "1" },
            { id: "c", text: "Undefined" },
            { id: "d", text: "Floating" },
        ],
        correctAnswer: "a",
    },
    {
        id: 11,
        question: "Which of the following represents the hexadecimal number system?",
        answers: [
            { id: "a", text: "Base 2" },
            { id: "b", text: "Base 8" },
            { id: "c", text: "Base 10" },
            { id: "d", text: "Base 16" },
        ],
        correctAnswer: "d",
    },
    {
        id: 12,
        question: "What is the purpose of a shift register?",
        answers: [
            { id: "a", text: "To add binary numbers" },
            { id: "b", text: "To store and shift data" },
            { id: "c", text: "To convert analog to digital" },
            { id: "d", text: "To amplify signals" },
        ],
        correctAnswer: "b",
    },
    {
        id: 13,
        question: "Which logic gate is known as the universal gate?",
        answers: [
            { id: "a", text: "AND" },
            { id: "b", text: "OR" },
            { id: "c", text: "NAND" },
            { id: "d", text: "XOR" },
        ],
        correctAnswer: "c",
    },
    {
        id: 14,
        question: "What is the purpose of a Karnaugh map (K-map)?",
        answers: [
            { id: "a", text: "To design flip-flops" },
            { id: "b", text: "To simplify Boolean expressions" },
            { id: "c", text: "To convert decimal to binary" },
            { id: "d", text: "To analyze timing diagrams" },
        ],
        correctAnswer: "b",
    },
    {
        id: 15,
        question: "What is the maximum number that can be represented by an 8-bit binary number?",
        answers: [
            { id: "a", text: "128" },
            { id: "b", text: "255" },
            { id: "c", text: "256" },
            { id: "d", text: "512" },
        ],
        correctAnswer: "b",
    },

    // C Programming (15 questions)
    {
        id: 16,
        question: "What is the correct way to declare a pointer in C?",
        answers: [
            { id: "a", text: "int x*;" },
            { id: "b", text: "int *x;" },
            { id: "c", text: "int:x;" },
            { id: "d", text: "int ^x;" },
        ],
        correctAnswer: "b",
    },
    {
        id: 17,
        question: "Which operator is used for dynamic memory allocation in C?",
        answers: [
            { id: "a", text: "new" },
            { id: "b", text: "malloc" },
            { id: "c", text: "alloc" },
            { id: "d", text: "create" },
        ],
        correctAnswer: "b",
    },
    {
        id: 18,
        question: "What is the size of int data type in C?",
        answers: [
            { id: "a", text: "2 bytes" },
            { id: "b", text: "4 bytes" },
            { id: "c", text: "8 bytes" },
            { id: "d", text: "Depends on the compiler and system" },
        ],
        correctAnswer: "d",
    },
    {
        id: 19,
        question: "Which of the following is not a valid variable name in C?",
        answers: [
            { id: "a", text: "_variable" },
            { id: "b", text: "variable123" },
            { id: "c", text: "123variable" },
            { id: "d", text: "variable_name" },
        ],
        correctAnswer: "c",
    },
    {
        id: 20,
        question: "What is the purpose of the 'sizeof' operator in C?",
        answers: [
            { id: "a", text: "To determine the size of a variable or data type" },
            { id: "b", text: "To allocate memory" },
            { id: "c", text: "To define the scope of a variable" },
            { id: "d", text: "To convert between data types" },
        ],
        correctAnswer: "a",
    },
    {
        id: 21,
        question: "Which header file is required for input/output operations in C?",
        answers: [
            { id: "a", text: "<stdlib.h>" },
            { id: "b", text: "<math.h>" },
            { id: "c", text: "<stdio.h>" },
            { id: "d", text: "<string.h>" },
        ],
        correctAnswer: "c",
    },
    {
        id: 22,
        question: "What is the correct way to define a constant in C?",
        answers: [
            { id: "a", text: "const int MAX = 100;" },
            { id: "b", text: "#define MAX 100" },
            { id: "c", text: "Both A and B" },
            { id: "d", text: "Neither A nor B" },
        ],
        correctAnswer: "c",
    },
    {
        id: 23,
        question: "Which of the following is used to terminate a do-while loop in C?",
        answers: [
            { id: "a", text: "break;" },
            { id: "b", text: "exit;" },
            { id: "c", text: "continue;" },
            { id: "d", text: "return;" },
        ],
        correctAnswer: "a",
    },
    {
        id: 24,
        question: "What is the purpose of the 'static' keyword when used with a local variable?",
        answers: [
            { id: "a", text: "To make the variable global" },
            { id: "b", text: "To preserve the variable's value between function calls" },
            { id: "c", text: "To allocate memory dynamically" },
            { id: "d", text: "To declare a constant variable" },
        ],
        correctAnswer: "b",
    },
    {
        id: 25,
        question: "Which of the following is not a valid storage class specifier in C?",
        answers: [
            { id: "a", text: "auto" },
            { id: "b", text: "register" },
            { id: "c", text: "static" },
            { id: "d", text: "dynamic" },
        ],
        correctAnswer: "d",
    },
    {
        id: 26,
        question: "What is the purpose of the 'void' keyword in C?",
        answers: [
            { id: "a", text: "To declare a variable" },
            { id: "b", text: "To indicate that a function does not return a value" },
            { id: "c", text: "To create an empty pointer" },
            { id: "d", text: "Both B and C" },
        ],
        correctAnswer: "d",
    },
    {
        id: 27,
        question: "Which operator is used to access the address of a variable in C?",
        answers: [
            { id: "a", text: "&" },
            { id: "b", text: "*" },
            { id: "c", text: "->" },
            { id: "d", text: "." },
        ],
        correctAnswer: "a",
    },
    {
        id: 28,
        question: "What is the correct way to declare a function pointer in C?",
        answers: [
            { id: "a", text: "int func(int, int);" },
            { id: "b", text: "int (*func)(int, int);" },
            { id: "c", text: "int *func(int, int);" },
            { id: "d", text: "func(int, int) -> int;" },
        ],
        correctAnswer: "b",
    },
    {
        id: 29,
        question: "Which of the following is not a valid escape sequence in C?",
        answers: [
            { id: "a", text: "\\n" },
            { id: "b", text: "\\t" },
            { id: "c", text: "\\v" },
            { id: "d", text: "\\p" },
        ],
        correctAnswer: "d",
    },
    {
        id: 30,
        question: "What is the purpose of the 'union' keyword in C?",
        answers: [
            { id: "a", text: "To create an array" },
            { id: "b", text: "To define a new data type" },
            { id: "c", text: "To share memory between different data types" },
            { id: "d", text: "To declare a constant" },
        ],
        correctAnswer: "c",
    },

    // Computer Architecture (15 questions)
    {
        id: 31,
        question: "What is the function of the ALU in a CPU?",
        answers: [
            { id: "a", text: "Memory management" },
            { id: "b", text: "Input/Output control" },
            { id: "c", text: "Arithmetic and logical operations" },
            { id: "d", text: "Interrupt handling" },
        ],
        correctAnswer: "c",
    },
    {
        id: 32,
        question: "What is cache memory?",
        answers: [
            { id: "a", text: "Virtual memory" },
            { id: "b", text: "Secondary storage" },
            { id: "c", text: "Fast memory between CPU and main memory" },
            { id: "d", text: "Primary memory" },
        ],
        correctAnswer: "c",
    },
    {
        id: 33,
        question: "Which of the following is not a type of CPU register?",
        answers: [
            { id: "a", text: "Accumulator" },
            { id: "b", text: "Program Counter" },
            { id: "c", text: "Stack Pointer" },
            { id: "d", text: "Hard Drive" },
        ],
        correctAnswer: "d",
    },
    {
        id: 34,
        question: "What is the purpose of pipelining in CPU design?",
        answers: [
            { id: "a", text: "To increase clock speed" },
            { id: "b", text: "To increase instruction throughput" },
            { id: "c", text: "To reduce power consumption" },
            { id: "d", text: "To increase cache size" },
        ],
        correctAnswer: "b",
    },
    {
        id: 35,
        question: "What is the purpose of the Memory Management Unit (MMU)?",
        answers: [
            { id: "a", text: "To perform arithmetic operations" },
            { id: "b", text: "To handle interrupts" },
            { id: "c", text: "To translate virtual addresses to physical addresses" },
            { id: "d", text: "To control input/output operations" },
        ],
        correctAnswer: "c",
    },
    {
        id: 36,
        question: "Which of the following is not a type of computer bus?",
        answers: [
            { id: "a", text: "Data bus" },
            { id: "b", text: "Address bus" },
            { id: "c", text: "Control bus" },
            { id: "d", text: "Arithmetic bus" },
        ],
        correctAnswer: "d",
    },
    {
        id: 37,
        question: "What is the purpose of the Program Counter (PC) register?",
        answers: [
            { id: "a", text: "To store intermediate results of calculations" },
            { id: "b", text: "To keep track of the next instruction to be executed" },
            { id: "c", text: "To store the status of the CPU" },
            { id: "d", text: "To manage interrupts" },
        ],
        correctAnswer: "b",
    },
    {
        id: 38,
        question: "What is the difference between RISC and CISC architectures?",
        answers: [
            { id: "a", text: "RISC uses simple instructions, CISC uses complex instructions" },
            { id: "b", text: "RISC uses more registers, CISC uses fewer registers" },
            { id: "c", text: "RISC has a larger instruction set, CISC has a smaller instruction set" },
            { id: "d", text: "RISC is slower, CISC is faster" },
        ],
        correctAnswer: "a",
    },
    {
        id: 39,
        question: "What is the purpose of the stack in computer architecture?",
        answers: [
            { id: "a", text: "To store global variables" },
            { id: "b", text: "To manage function calls and local variables" },
            { id: "c", text: "To perform arithmetic operations" },
            { id: "d", text: "To handle interrupts" },
        ],
        correctAnswer: "b",
    },
    {
        id: 40,
        question: "What is the function of the Control Unit in a CPU?",
        answers: [
            { id: "a", text: "To perform arithmetic operations" },
            { id: "b", text: "To manage memory" },
            { id: "c", text: "To coordinate the activities of other units in the CPU" },
            { id: "d", text: "To handle input/output operations" },
        ],
        correctAnswer: "c",
    },
    {
        id: 41,
        question: "What is the purpose of the Instruction Register (IR)?",
        answers: [
            { id: "a", text: "To store the address of the next instruction" },
            { id: "b", text: "To hold the instruction currently being executed" },
            { id: "c", text: "To store intermediate results of calculations" },
            { id: "d", text: "To manage interrupts" },
        ],
        correctAnswer: "b",
    },
    {
        id: 42,
        question: "What is the von Neumann architecture?",
        answers: [
            { id: "a", text: "A type of RISC architecture" },
            { id: "b", text: "A type of CISC architecture" },
            { id: "c", text: "An architecture where program and data share the same memory" },
            { id: "d", text: "An architecture with separate program and data memories" },
        ],
        correctAnswer: "c",
    },
    {
        id: 43,
        question: "What is the purpose of the DMA (Direct Memory Access) controller?",
        answers: [
            { id: "a", text: "To perform arithmetic operations" },
            { id: "b", text: "To manage virtual memory" },
            { id: "c", text: "To allow I/O devices to transfer data directly to/from memory" },
            { id: "d", text: "To execute instructions" },
        ],
        correctAnswer: "c",
    },
    {
        id: 44,
        question: "What is the difference between SRAM and DRAM?",
        answers: [
            { id: "a", text: "SRAM is slower, DRAM is faster" },
            { id: "b", text: "SRAM requires refresh, DRAM doesn't" },
            { id: "c", text: "SRAM is cheaper, DRAM is more expensive" },
            { id: "d", text: "SRAM doesn't require refresh, DRAM requires refresh" },
        ],
        correctAnswer: "d",
    },
    {
        id: 45,
        question: "What is the purpose of the branch predictor in modern CPUs?",
        answers: [
            { id: "a", text: "To predict the outcome of conditional branches" },
            { id: "b", text: "To manage memory allocation" },
            { id: "c", text: "To handle interrupts" },
            { id: "d", text: "To perform floating-point calculations" },
        ],
        correctAnswer: "a",
    },

    // Basic Web Design (15 questions)
    {
        id: 46,
        question: "What does HTML stand for?",
        answers: [
            { id: "a", text: "Hyper Text Markup Language" },
            { id: "b", text: "High Tech Modern Language" },
            { id: "c", text: "Hyper Transfer Markup Language" },
            { id: "d", text: "Home Tool Markup Language" },
        ],
        correctAnswer: "a",
    },
    {
        id: 47,
        question: "Which CSS property is used to change the text color?",
        answers: [
            { id: "a", text: "text-color" },
            { id: "b", text: "font-color" },
            { id: "c", text: "color" },
            { id: "d", text: "text-style" },
        ],
        correctAnswer: "c",
    },
    {
        id: 48,
        question: "What is the correct HTML element for the largest heading?",
        answers: [
            { id: "a", text: "<heading>" },
            { id: "b", text: "<h6>" },
            { id: "c", text: "<head>" },
            { id: "d", text: "<h1>" },
        ],
        correctAnswer: "d",
    },
    {
        id: 49,
        question: "Which of the following is not a valid CSS selector?",
        answers: [
            { id: "a", text: "#id" },
            { id: "b", text: ".class" },
            { id: "c", text: "*element" },
            { id: "d", text: "element" },
        ],
        correctAnswer: "c",
    },
    {
        id: 50,
        question: "What does CSS stand for?",
        answers: [
            { id: "a", text: "Creative Style Sheets" },
            { id: "b", text: "Cascading Style Sheets" },
            { id: "c", text: "Computer Style Sheets" },
            { id: "d", text: "Colorful Style Sheets" },
        ],
        correctAnswer: "b",
    },
    {
        id: 51,
        question: "Which HTML tag is used to define an unordered list?",
        answers: [
            { id: "a", text: "<ol>" },
            { id: "b", text: "<list>" },
            { id: "c", text: "<ul>" },
            { id: "d", text: "<li>" },
        ],
        correctAnswer: "c",
    },
    {
        id: 52,
        question: "What is the correct way to comment out multiple lines in CSS?",
        answers: [
            { id: "a", text: "// This is a comment //" },
            { id: "b", text: "/* This is a comment */" },
            { id: "c", text: "<!-- This is a comment -->" },
            { id: "d", text: "# This is a comment #" },
        ],
        correctAnswer: "b",
    },
    {
        id: 53,
        question: "Which of the following is not a valid way to specify a color in CSS?",
        answers: [
            { id: "a", text: "rgb(255, 0, 0)" },
            { id: "b", text: "#FF0000" },
            { id: "c", text: "red" },
            { id: "d", text: "color(255, 0, 0)" },
        ],
        correctAnswer: "d",
    },
    {
        id: 54,
        question: "What is the purpose of the HTML <meta> tag?",
        answers: [
            { id: "a", text: "To define a metadata about an HTML document" },
            { id: "b", text: "To create a navigation menu" },
            { id: "c", text: "To define a table in HTML" },
            { id: "d", text: "To include external CSS files" },
        ],
        correctAnswer: "a",
    },
    {
        id: 55,
        question: "Which CSS property is used to control the space between elements?",
        answers: [
            { id: "a", text: "spacing" },
            { id: "b", text: "margin" },
            { id: "c", text: "padding" },
            { id: "d", text: "border" },
        ],
        correctAnswer: "b",
    },
    {
        id: 56,
        question: "What is the purpose of the HTML <a> tag?",
        answers: [
            { id: "a", text: "To define a paragraph" },
            { id: "b", text: "To create a hyperlink" },
            { id: "c", text: "To add an image" },
            { id: "d", text: "To create a table" },
        ],
        correctAnswer: "b",
    },
    {
        id: 57,
        question: "Which of the following is not a valid CSS positioning method?",
        answers: [
            { id: "a", text: "static" },
            { id: "b", text: "relative" },
            { id: "c", text: "absolute" },
            { id: "d", text: "dynamic" },
        ],
        correctAnswer: "d",
    },
    {
        id: 58,
        question: "What is the purpose of the CSS 'box-sizing' property?",
        answers: [
            { id: "a", text: "To control the size of text boxes" },
            { id: "b", text: "To define how the total width and height of an element is calculated" },
            { id: "c", text: "To create boxes around elements" },
            { id: "d", text: "To control the spacing between boxes" },
        ],
        correctAnswer: "b",
    },
    {
        id: 59,
        question: "Which HTML5 tag is used to specify a footer for a document or section?",
        answers: [
            { id: "a", text: "<bottom>" },
            { id: "b", text: "<section>" },
            { id: "c", text: "<footer>" },
            { id: "d", text: "<end>" },
        ],
        correctAnswer: "c",
    },
    {
        id: 60,
        question: "What is the purpose of CSS media queries?",
        answers: [
            { id: "a", text: "To embed media files in a webpage" },
            { id: "b", text: "To create responsive designs that adapt to different screen sizes" },
            { id: "c", text: "To query a database for media files" },
            { id: "d", text: "To optimize images for web" },
        ],
        correctAnswer: "b",
    },

    // Python (15 questions)
    {
        id: 61,
        question: "What is the correct way to create a list in Python?",
        answers: [
            { id: "a", text: "list = []" },
            { id: "b", text: "list = {}" },
            { id: "c", text: "list = ()" },
            { id: "d", text: "list = <<>>" },
        ],
        correctAnswer: "a",
    },
    {
        id: 62,
        question: "Which of the following is not a Python data type?",
        answers: [
            { id: "a", text: "int" },
            { id: "b", text: "float" },
            { id: "c", text: "char" },
            { id: "d", text: "bool" },
        ],
        correctAnswer: "c",
    },
    {
        id: 63,
        question: "What is the correct way to start an if statement in Python?",
        answers: [
            { id: "a", text: "if (x > y)" },
            { id: "b", text: "if x > y:" },
            { id: "c", text: "if x > y then" },
            { id: "d", text: "if (x > y):" },
        ],
        correctAnswer: "b",
    },
    {
        id: 64,
        question: "Which of the following is used to define a function in Python?",
        answers: [
            { id: "a", text: "func" },
            { id: "b", text: "define" },
            { id: "c", text: "def" },
            { id: "d", text: "function" },
        ],
        correctAnswer: "c",
    },
    {
        id: 65,
        question: "What is the output of print(2 ** 3)?",
        answers: [
            { id: "a", text: "6" },
            { id: "b", text: "8" },
            { id: "c", text: "9" },
            { id: "d", text: "16" },
        ],
        correctAnswer: "b",
    },
    {
        id: 66,
        question: "Which of the following is used to handle exceptions in Python?",
        answers: [
            { id: "a", text: "try-except" },
            { id: "b", text: "try-catch" },
            { id: "c", text: "if-else" },
            { id: "d", text: "for-in" },
        ],
        correctAnswer: "a",
    },
    {
        id: 67,
        question: "What is the purpose of the 'self' parameter in Python class methods?",
        answers: [
            { id: "a", text: "To refer to the current instance of the class" },
            { id: "b", text: "To create a new instance of the class" },
            { id: "c", text: "To define a static method" },
            { id: "d", text: "To access class variables" },
        ],
        correctAnswer: "a",
    },
    {
        id: 68,
        question: "What does the 'len()' function do in Python?",
        answers: [
            { id: "a", text: "Returns the largest item in an iterable" },
            { id: "b", text: "Returns the smallest item in an iterable" },
            { id: "c", text: "Returns the length of an object" },
            { id: "d", text: "Returns the type of an object" },
        ],
        correctAnswer: "c",
    },
    {
        id: 69,
        question: "Which of the following is used to import a module in Python?",
        answers: [
            { id: "a", text: "include" },
            { id: "b", text: "import" },
            { id: "c", text: "using" },
            { id: "d", text: "require" },
        ],
        correctAnswer: "b",
    },
    {
        id: 70,
        question: "What is the purpose of the 'pass' statement in Python?",
        answers: [
            { id: "a", text: "To skip the rest of the code in a loop" },
            { id: "b", text: "To define an empty function or class" },
            { id: "c", text: "To raise an exception" },
            { id: "d", text: "To return a value from a function" },
        ],
        correctAnswer: "b",
    },
    {
        id: 71,
        question: "Which of the following is used to remove whitespace from the beginning and end of a string?",
        answers: [
            { id: "a", text: "strip()" },
            { id: "b", text: "trim()" },
            { id: "c", text: "clean()" },
            { id: "d", text: "remove()" },
        ],
        correctAnswer: "a",
    },
    {
        id: 72,
        question: "What is the purpose of the 'range()' function in Python?",
        answers: [
            { id: "a", text: "To create a list of numbers" },
            { id: "b", text: "To find the range of a list" },
            { id: "c", text: "To sort a list of numbers" },
            { id: "d", text: "To round a number to the nearest integer" },
        ],
        correctAnswer: "a",
    },
    {
        id: 73,
        question: "Which of the following is used to open a file in Python?",
        answers: [
            { id: "a", text: "open()" },
            { id: "b", text: "read()" },
            { id: "c", text: "file()" },
            { id: "d", text: "load()" },
        ],
        correctAnswer: "a",
    },
    {
        id: 74,
        question: "What is the purpose of the 'lambda' keyword in Python?",
        answers: [
            { id: "a", text: "To create a class" },
            { id: "b", text: "To define a small anonymous function" },
            { id: "c", text: "To import a module" },
            { id: "d", text: "To create a loop" },
        ],
        correctAnswer: "b",
    },
    {
        id: 75,
        question: "Which of the following is used to add an element to the end of a list in Python?",
        answers: [
            { id: "a", text: "append()" },
            { id: "b", text: "extend()" },
            { id: "c", text: "insert()" },
            { id: "d", text: "add()" },
        ],
        correctAnswer: "a",
    },

    // Operating System (15 questions)
    {
        id: 76,
        question: "What is a deadlock in operating systems?",
        answers: [
            { id: "a", text: "When a process is terminated" },
            { id: "b", text: "When two or more processes wait indefinitely for each other" },
            { id: "c", text: "When CPU is idle" },
            { id: "d", text: "When memory is full" },
        ],
        correctAnswer: "b",
    },
    {
        id: 77,
        question: "What is virtual memory?",
        answers: [
            { id: "a", text: "Physical RAM" },
            { id: "b", text: "Cache memory" },
            { id: "c", text: "Extension of physical memory using disk space" },
            { id: "d", text: "ROM" },
        ],
        correctAnswer: "c",
    },
    {
        id: 78,
        question: "Which scheduling algorithm is based on the principle of first come, first served?",
        answers: [
            { id: "a", text: "Round Robin" },
            { id: "b", text: "Shortest Job First" },
            { id: "c", text: "Priority Scheduling" },
            { id: "d", text: "FCFS" },
        ],
        correctAnswer: "d",
    },
    {
        id: 79,
        question: "What is the purpose of a semaphore in operating systems?",
        answers: [
            { id: "a", text: "To manage file systems" },
            { id: "b", text: "To control access to shared resources" },
            { id: "c", text: "To allocate CPU time" },
            { id: "d", text: "To manage network connections" },
        ],
        correctAnswer: "b",
    },
    {
        id: 80,
        question: "Which of the following is not a state of a process?",
        answers: [
            { id: "a", text: "Ready" },
            { id: "b", text: "Running" },
            { id: "c", text: "Waiting" },
            { id: "d", text: "Executing" },
        ],
        correctAnswer: "d",
    },
    {
        id: 81,
        question: "What is the purpose of paging in memory management?",
        answers: [
            { id: "a", text: "To reduce external fragmentation" },
            { id: "b", text: "To increase CPU utilization" },
            { id: "c", text: "To manage file systems" },
            { id: "d", text: "To handle interrupts" },
        ],
        correctAnswer: "a",
    },
    {
        id: 82,
        question: "What is the difference between preemptive and non-preemptive scheduling?",
        answers: [
            { id: "a", text: "Preemptive scheduling allows interruption of running processes, non-preemptive doesn't" },
            { id: "b", text: "Preemptive scheduling is slower than non-preemptive" },
            { id: "c", text: "Non-preemptive scheduling uses more CPU time" },
            { id: "d", text: "There is no difference" },
        ],
        correctAnswer: "a",
    },
    {
        id: 83,
        question: "What is thrashing in operating systems?",
        answers: [
            { id: "a", text: "A type of malware" },
            { id: "b", text: "Excessive paging, leading to performance degradation" },
            { id: "c", text: "A method of disk defragmentation" },
            { id: "d", text: "A scheduling algorithm" },
        ],
        correctAnswer: "b",
    },
    {
        id: 84,
        question: "What is the purpose of a device driver?",
        answers: [
            { id: "a", text: "To manage file systems" },
            { id: "b", text: "To control hardware devices" },
            { id: "c", text: "To allocate memory" },
            { id: "d", text: "To schedule processes" },
        ],
        correctAnswer: "b",
    },
    {
        id: 85,
        question: "What is the difference between a process and a thread?",
        answers: [
            { id: "a", text: "Processes share memory, threads don't" },
            { id: "b", text: "Threads are faster than processes" },
            { id: "c", text: "Processes are independent execution units, threads share resources" },
            { id: "d", text: "There is no difference" },
        ],
        correctAnswer: "c",
    },
    {
        id: 86,
        question: "What is the purpose of the fork() system call?",
        answers: [
            { id: "a", text: "To create a new process" },
            { id: "b", text: "To terminate a process" },
            { id: "c", text: "To allocate memory" },
            { id: "d", text: "To change process priority" },
        ],
        correctAnswer: "a",
    },
    {
        id: 87,
        question: "What is the role of the scheduler in an operating system?",
        answers: [
            { id: "a", text: "To manage file systems" },
            { id: "b", text: "To allocate CPU time to processes" },
            { id: "c", text: "To handle network connections" },
            { id: "d", text: "To manage memory" },
        ],
        correctAnswer: "b",
    },
    {
        id: 88,
        question: "What is the purpose of a file system in an operating system?",
        answers: [
            { id: "a", text: "To manage processes" },
            { id: "b", text: "To allocate CPU time" },
            { id: "c", text: "To organize and manage files on storage devices" },
            { id: "d", text: "To handle network protocols" },
        ],
        correctAnswer: "c",
    },
    {
        id: 89,
        question: "What is the difference between internal and external fragmentation?",
        answers: [
            { id: "a", text: "Internal fragmentation occurs within allocated memory blocks, external occurs between them" },
            { id: "b", text: "External fragmentation is more severe than internal" },
            { id: "c", text: "Internal fragmentation only occurs in virtual memory" },
            { id: "d", text: "There is no difference" },
        ],
        correctAnswer: "a",
    },
    {
        id: 90,
        question: "What is the purpose of demand paging in virtual memory systems?",
        answers: [
            { id: "a", text: "To increase CPU utilization" },
            { id: "b", text: "To reduce the amount of I/O necessary to run programs" },
            { id: "c", text: "To manage file systems" },
            { id: "d", text: "To handle interrupts" },
        ],
        correctAnswer: "b",
    },

    // Software Engineering (10 questions)
    {
        id: 91,
        question: "What is the waterfall model?",
        answers: [
            { id: "a", text: "Iterative development model" },
            { id: "b", text: "Sequential development model" },
            { id: "c", text: "Agile development model" },
            { id: "d", text: "Spiral development model" },
        ],
        correctAnswer: "b",
    },
    {
        id: 92,
        question: "What is unit testing?",
        answers: [
            { id: "a", text: "Testing the complete system" },
            { id: "b", text: "Testing individual components" },
            { id: "c", text: "Testing user interface" },
            { id: "d", text: "Testing integration" },
        ],
        correctAnswer: "b",
    },
    {
        id: 93,
        question: "What is the purpose of version control systems?",
        answers: [
            { id: "a", text: "To track changes in source code over time" },
            { id: "b", text: "To compile source code" },
            { id: "c", text: "To debug programs" },
            { id: "d", text: "To design user interfaces" },
        ],
        correctAnswer: "a",
    },
    {
        id: 94,
        question: "What is the difference between black box and white box testing?",
        answers: [
            { id: "a", text: "Black box testing is faster than white box testing" },
            { id: "b", text: "White box testing requires knowledge of internal code structure, black box doesn't" },
            { id: "c", text: "Black box testing is more thorough than white box testing" },
            { id: "d", text: "There is no difference" },
        ],
        correctAnswer: "b",
    },
    {
        id: 95,
        question: "What is the purpose of a UML diagram?",
        answers: [
            { id: "a", text: "To write code" },
            { id: "b", text: "To visualize system design" },
            { id: "c", text: "To test software" },
            { id: "d", text: "To manage project timelines" },
        ],
        correctAnswer: "b",
    },
    {
        id: 96,
        question: "What is refactoring in software engineering?",
        answers: [
            { id: "a", text: "Adding new features to software" },
            { id: "b", text: "Restructuring existing code without changing its external behavior" },
            { id: "c", text: "Fixing bugs in software" },
            { id: "d", text: "Completely rewriting software from scratch" },
        ],
        correctAnswer: "b",
    },
    {
        id: 97,
        question: "What is the purpose of continuous integration?",
        answers: [
            { id: "a", text: "To automate the process of software delivery" },
            { id: "b", text: "To design user interfaces" },
            { id: "c", text: "To manage project timelines" },
            { id: "d", text: "To write documentation" },
        ],
        correctAnswer: "a",
    },
    {
        id: 98,
        question: "What is the difference between functional and non-functional requirements?",
        answers: [
            { id: "a", text: "Functional requirements are more important than non-functional requirements" },
            {
                id: "b",
                text: "Functional requirements describe what the system should do, non-functional describe how the system should behave",
            },
            { id: "c", text: "Non-functional requirements are not necessary for software development" },
            { id: "d", text: "There is no difference" },
        ],
        correctAnswer: "b",
    },
    {
        id: 99,
        question: "What is the purpose of a use case diagram?",
        answers: [
            { id: "a", text: "To show the structure of a database" },
            { id: "b", text: "To illustrate the interactions between a system and its users" },
            { id: "c", text: "To display the internal workings of a system" },
            { id: "d", text: "To manage project timelines" },
        ],
        correctAnswer: "b",
    },
    {
        id: 100,
        question: "What is the primary goal of software engineering?",
        answers: [
            { id: "a", text: "To write code quickly" },
            { id: "b", text: "To create visually appealing user interfaces" },
            { id: "c", text: "To develop high-quality, maintainable, and efficient software" },
            { id: "d", text: "To maximize profits for software companies" },
        ],
        correctAnswer: "c",
    },
]

