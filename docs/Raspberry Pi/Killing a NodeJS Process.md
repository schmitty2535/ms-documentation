---
sidebar_position: 1
---

# Killing a NodeJS Process

## Background
When running a NodeJS application using `sudo node app.js` through a ssh connection, the process will continue to run even after the ssh connection is closed. This can happen if the ssh application is closed, the ssh client computer falls asleep, or if it looses network connection. This can be a problem if you reconnect and try to run the same application again. You will get an error that look like the following:

```bash
node:events:491
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE: address already in use :::5000
    at Server.setupListenHandle [as _listen2] (node:net:1463:16)
    at listenInCluster (node:net:1511:12)
    at Server.listen (node:net:1599:7)
    at Object.<anonymous> (/home/pi/app.js:867:10)
    at Module._compile (node:internal/modules/cjs/loader:1191:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1245:10)
    at Module.load (node:internal/modules/cjs/loader:1069:32)
    at Function.Module._load (node:internal/modules/cjs/loader:904:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:22:47
Emitted 'error' event on Server instance at:
    at emitErrorNT (node:net:1490:8)
    at processTicksAndRejections (node:internal/process/task_queues:83:21) {
  code: 'EADDRINUSE',
  errno: -98,
  syscall: 'listen',
  address: '::',
  port: 5000
}

```

## Solution
TO kill the process, follow the steps below:

1. Run the following command to find the process ID (PID) of the process:
    ```bash
    sudo lsof -i :PORT
    ```
   Replace PORT with the port number listed in the error message.
   :::tip
      `Error: listen EADDRINUSE: address already in use :::5000` so the port is 5000
   :::
2. The output will look like the following:
    ```bash
    COMMAND   PID USER  FD  TYPE  DEVICE  SIZE/OFF  NODE NAME
    node    12345 pi    3u  IPv6  12345        0t0   TCP *:5000 (LISTEN)
   ```
3. Kill the process using the PID
    ```bash
    sudo kill -9 PID
    ```
   Replace PID with the PID from the previous step. For this example the PID is 12345.
   :::tip
   The following commands may also be useful for depending on the situation:
   `kill -9 pid`
   `killall -9 app-name`
   `sudo kill -9 pid`
   `sudo killall -9 app-name`
   :::


