FROM mcr.microsoft.com/devcontainers/base:alpine

ENV MISE_DATA_DIR=/usr/local/share/mise
ENV PATH="${MISE_DATA_DIR}/shims:${PATH}"

RUN apk add --no-cache xdg-utils mise 
COPY .tool-versions ${MISE_DATA_DIR}/.tool-versions
RUN cd "${MISE_DATA_DIR}" && mise install --yes
