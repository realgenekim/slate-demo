# Use the universal base image
FROM mcr.microsoft.com/devcontainers/universal

# Install additional packages
RUN apt-get update && apt-get install -y \
    curl \
    git \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# Install global npm packages if needed
RUN npm install -g typescript
