FROM docker.io/karsten13/magicmirror:latest@sha256:75b9251e29ff6b0eaab82b9cb048c3bc29c363bbe2644dca1fb24e9d2955d776 AS original-mm
WORKDIR /opt/magic_mirror
ENV MM_SCENARIO=server
COPY --chown=node:node ./config config
# Use the maintained built-in modules shipped with MagicMirror.
COPY --chown=node:node ./custom.css css/custom.css
RUN node --version | grep -Fx v24.22.1
