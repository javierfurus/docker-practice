FROM mysql:latest
WORKDIR /usr/src/app
COPY . .
RUN apt update && apt install -y nano && apt install -y wget
RUN sh -c "$(wget -O- https://raw.githubusercontent.com/deluan/zsh-in-docker/master/zsh-in-docker.sh)" -- \
    -t robbyrussell \
    -p https://github.com/zsh-users/zsh-autosuggestions \
    -p https://github.com/zsh-users/zsh-completions \
    -p history-substring-search
