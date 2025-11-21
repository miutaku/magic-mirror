# magic-mirror

# 動かし方

## CloudRunで動かす

これによってkioskとして動く端末にcredentialな情報の保存もしなくて良いし、マシンリソースも僅かだが削減できる。

serverディレクトリ以下に修正があるとActionsによってデプロイされる。

[![Server deploy](https://github.com/miutaku/magic-mirror/actions/workflows/sv-build.yml/badge.svg)](https://github.com/miutaku/magic-mirror/actions/workflows/sv-build.yml)

## ローカル

ローカルで動かす場合、 `docker compose up -d` する。
アクセスするブラウザを別途用意する。
