const path = require("path")


module.exports = {
    mode: 'development',
    entry: {
        taskList: './src/TaskList.js',
        quiz: './src/quiz.js',
        index: './src/index.js',
        signup: './src/signup.js',
        login: './src/login.js',
        profile: './src/profile.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js' // Use [name] placeholder for dynamic output filenames
    },
    watch: true,
    // Add module rules if needed
    // module: {
    //     rules: [
    //         // Add loaders for different file types
    //     ]
    }

