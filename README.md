# oc.eat

お客様の美味しい笑顔のために。

## 概要

このプロジェクトは、飲食店のウェブサイトです。メニュー情報の提供、予約管理、お問い合わせなどの機能を提供します。

## 技術スタック

- Next.js 14
- TypeScript
- Tailwind CSS
- shadcn/ui
- Resend (メール送信)

## 開発環境のセットアップ

```bash
# パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev
```

## 環境変数

`.env`ファイルを作成し、以下の環境変数を設定してください：

```
RESEND_API_KEY=your_api_key
RESEND_FROM_EMAIL=your_verified_email
```

## デプロイ

このプロジェクトは[Vercel](https://vercel.com)でホストされています。mainブランチへのプッシュで自動的にデプロイされます。
