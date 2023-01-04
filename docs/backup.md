---
sidebar_position: 1
---

# Rsync Backup Commands

See how I use **rsync** for backup.

## Overview of Rsync

Rsync is a utility for efficiently transferring and synchronizing files across computer systems. It is commonly used for backing up data, synchronizing files between devices, and transferring large files between computers. rsync uses a delta-transfer algorithm, which means that it only transfers the portions of files that have changed, rather than transferring the entire file every time. This makes it very efficient at transferring files, especially over a network. The rsync utility is available on a wide variety of operating systems, including Linux, Unix, Mac OS, and Windows.

You can learn more about rsync at the **[Rsync man page](https://linux.die.net/man/1/rsync)**.

### Why Rsync?

- I chose to use **rsync** because of its ability to process only new and updated files. This feature makes it ideal for use when backing up data monthly, weekly, and even daily. Another feature is rsync's handling of the process being stopped mid-execution. The last feature that I like is its compatibility with different operating systems, and it's pre-instillation on most Linux distributions.


## Rsync Commands


### Arguments
- -h, --human-readable: output numbers in a human-readable format
- --progress: show progress during transfer
- --stats: give some file-transfer stats
- -t, --times: preserve modification times
- g, --group: preserve group
- -o, --owner: preserve owner (super-user only)
- -p, --perms: preserve permissions
- -l, --links: copy symlinks as symlinks
- -D, --devices: preserve device files (super-user only)
- -u, --update: skip files that are newer on the receiver
- --delete-after: receiver deletes after transfer, not before



