# pm2

```ruby
# 普通 General
$ npm install pm2 -g            # 安装 PM2
$ pm2 start app.js              # 启动，守护进程，自动重启应用程序 Start, Daemonize and auto-restart application (Node)
$ pm2 start app.py              # 启动，守护进程，自动重启python应用程序 Start, Daemonize and auto-restart application (Python)
$ pm2 start npm -- start        # 启动，守护进程，自动重启node应用程序 Start, Daemonize and auto-restart Node application

# 集群模式 (只支持node进程) Cluster Mode (Node.js only)
$ pm2 start app.js -i 4         # 在集群模式下，启动4个应用程序实例  Start 4 instances of application in cluster mode
                                # 同时，将网络请求，负载均衡到每个应用实例  it will load balance network queries to each app
$ pm2 reload all                # 0秒重启所有应用 Zero Second Downtime Reload
$ pm2 scale [app-name] 10       # 将应用进程调整到10 Scale Cluster app to 10 process

# 进程监控 Scale Cluster app to 10 process
$ pm2 list                      # 列出所有用PM2启动的进程 List all processes started with PM2
$ pm2 monit                     # 显示每个应用占用的cpu和内存 Display memory and cpu usage of each app
$ pm2 show [app-name]           # 显示某个进程的所有信息 Show all informations about application

# 日志管理 Log management
$ pm2 logs                      # 显示所有应用的日志  Display logs of all apps
$ pm2 logs [app-name]           # 显示某个应用的日志 Display logs for a specific app
$ pm2 logs --json               # json化日志 Logs in JSON format
$ pm2 flush
$ pm2 reloadLogs

# 进程状态管理 Process State Management
$ pm2 start app.js --name="api" # 启动一个应用并命名为api。 Start application and name it "api"
$ pm2 start app.js -- -a 34     # 启动一个应用，并传递“-a 34”的参数。 Start app and pass option "-a 34" as argument
$ pm2 start app.js --watch      # 重启一个应用，当文件改变的时候。Restart application on file change
$ pm2 start script.sh           # 启动一个bash脚本。Start bash script
$ pm2 start app.json            # 启动在app.json中声明的所有应用。Start all applications declared in app.json
$ pm2 reset [app-name]          # 重置所有计数器。Reset all counters
$ pm2 stop all                  # 停止所有应用。Stop all apps
$ pm2 stop 0                    # 停止id 为0的应用。Stop process with id 0
$ pm2 restart all               # 重启所有应用。Restart all apps
$ pm2 gracefulReload all        # 在集群模式下，平稳的重加载所有应用。Graceful reload all apps in cluster mode
$ pm2 delete all                # 杀掉所有应用。Kill and delete all apps
$ pm2 delete 0                  # 杀掉id为0的进程。Delete app with id 0

# 启动／引导管理 Startup/Boot management
$ pm2 startup                   # 检测init系统，在启动时生成和配置pm2。Detect init system, generate and configure pm2 boot on startup
$ pm2 save                      # 保存当前进程列表。Save current process list
$ pm2 resurrect                 # 恢复以前保存的进程。Restore previously save processes
$ pm2 unstartup                 # 停用和删除启动系统。Disable and remove startup system
$ pm2 update                    # 保存进程，终止PM2并恢复进程。Save processes, kill PM2 and restore processes
$ pm2 generate                  # 生成样本json配置文件。Generate a sample json configuration file

# 部署 Deployment
$ pm2 deploy app.json prod setup    # 设置“生产环境”远程服务器。 Setup "prod" remote server
$ pm2 deploy app.json prod          # 更新“生产环境”远程服务器。 Update "prod" remote server
$ pm2 deploy app.json prod revert 2 # 将“生产环境”远程服务器恢复2。Revert "prod" remote server by 2

# 模块系统 Module system
$ pm2 module:generate [name]    # 生成名称为[name]的示例模块。Generate sample module with name [name]
$ pm2 install pm2-logrotate     # 安装模块（这里是日志循环系统）。Install module (here a log rotation system)
$ pm2 uninstall pm2-logrotate   # 卸载模块。Uninstall module
$ pm2 publish                   # 增量版本，git push和npm发布。Increment version, git push and npm publish
```
