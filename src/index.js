const args = process.argv.slice(2);
const usernameArg = args.find((arg) => arg.startsWith("--username="));
const username = usernameArg ? usernameArg.split("=")[1] : "User";

console.log(`Welcome to the File Manager, ${username}!`);

const exitHandler = (isCtrlC = false) => {
    const newline = isCtrlC ? "\n" : "";
    console.log(
        `${newline}Thank you for using File Manager, ${username}, goodbye!`
    );
    process.exit();
};

process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    const trimmedData = data.trim();

    if (trimmedData === ".exit") {
        exitHandler();
    }
});

process.on("SIGINT", () => {
    exitHandler(true);
});
