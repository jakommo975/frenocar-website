module.exports = {
    apps: [
        {
            name: 'frenocar-website',
            script: 'pnpm',
            args: 'start --port 3001',
            cwd: __dirname,
            instances: 1,
            exec_mode: 'fork',
            env: {
                NODE_ENV: 'production',
                PORT: 3000
            },
            max_memory_restart: '512M',
            log_date_format: 'YYYY-MM-DD HH:mm:ss',
            merge_logs: true
        }
    ]
};
