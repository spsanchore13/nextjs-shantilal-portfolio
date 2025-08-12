#!/bin/bash

# Ensure we're using Node.js v20
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Use Node.js v20
nvm use 20.18.1

# Run the MCP server
npx @heilgar/shadcn-ui-mcp-server 