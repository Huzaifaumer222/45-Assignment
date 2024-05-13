function make_shirt1(size: string = "Large", message: string = "I love TypeScript") {
    console.log(`Size: ${size}, Message: ${message}`);
}

make_shirt1(); // Large shirt with default message
make_shirt1("Medium"); // Medium shirt with default message
make_shirt1("Small", "Hello, World!"); // Small shirt with custom message
