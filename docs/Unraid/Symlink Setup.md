---
sidebar_position: 1
---

# Unraid User Scripts Plugin - Symlink Setup

## CA User Scripts

**CA User Scripts**[^1] is an Unraid plugin that provides a GUI for managing custom bash scripts. Scripts created using this plugin will be persistent across power cycles and will be executed at the specified interval or event. 

The following schedules are available.

- Hourly
- Daily
- Weekly
- Monthly
- At Startup of Array
- At Stopping of Array
- At First Array Start Only
- Custom Cron Schedule

## Symlink Setup Script

The following script was created in order to create a series of symlinks when the Unraid array is brought online. The script's schedule is set to "At Startup of Array".

```bash
#!/bin/bash

# Declare an associative array where each key is the symlink path and its value is the target path
declare -A SYMLINK_MAP=(
    ["/path/to/first/symlink"]="/path/to/first/target"
    ["/path/to/second/symlink"]="/path/to/second/target"
)

# Iterate over the associative array
for SYMLINK in "${!SYMLINK_MAP[@]}"; do
    TARGET="${SYMLINK_MAP[$SYMLINK]}"

    # Determine the directory of the current symlink
    SYMLINK_DIR=$(dirname "$SYMLINK")

    # Check if the directory for the symlink exists, create it if not
    if [ ! -d "$SYMLINK_DIR" ]; then
        echo "Directory for $SYMLINK does not exist. Creating it now."
        mkdir -p "$SYMLINK_DIR"
    fi

    # Check if the symlink already exists
    if [ -L "$SYMLINK" ]; then
        echo "Symlink at $SYMLINK already exists. Removing existing symlink."
        rm "$SYMLINK"
    fi

    # Create the symlink
    ln -s "$TARGET" "$SYMLINK"
    echo "Symlink created from $SYMLINK to $TARGET"
    
    # Change the owner of the symlink to nobody
    chown -h nobody:users "$SYMLINK"
    echo "Changed owner of $SYMLINK to nobody"
done

```

**Target Path**: This is the original file or folder that you want to access from another location. You can think of it as the "real" item on your computer that holds the information or content you're interested in.

**Symlink (Symbolic Link) Path:** This is like a shortcut to the target path. It's a special kind of file that points to the target path, allowing you to access the target as if you were accessing it directly from the symlink's location. You can place this symlink in a different location from the target, but when you use it, it's as if you're working with the target itself.

[^1]: More information about `CA User Scripts` can be found here https://forums.unraid.net/topic/48286-plugin-ca-user-scripts/