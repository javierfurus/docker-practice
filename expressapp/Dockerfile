FROM node:10.16.0-alpine
WORKDIR /usr/src/app
COPY . .
RUN apk update && apk add nano
RUN sh -c "$(wget -O- https://raw.githubusercontent.com/deluan/zsh-in-docker/master/zsh-in-docker.sh)" -- \
    -t robbyrussell \
    -p https://github.com/zsh-users/zsh-autosuggestions \
    -p https://github.com/zsh-users/zsh-completions \
    -p history-substring-search
ENTRYPOINT npm install && npm run start