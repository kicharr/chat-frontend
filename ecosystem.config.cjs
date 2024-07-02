module.exports = {
    type: 'module',
    apps: [
        {
            name: 'test',
            port: '8080',
            exec_mode: 'fork',
            script: './.output/server/index.mjs'
        }
    ]
}
