# Microsoft Clarity（OmniPane-Web）

公式サイトの閲覧分析に [Microsoft Clarity](https://clarity.microsoft.com/) を使います。

## セットアップ（初回）

1. https://clarity.microsoft.com/ にサインイン（Microsoft アカウント）
2. **新しいプロジェクト** → サイト URL: `https://omnipaneexplorerproject.github.io/OmniPane-Web/`
3. 発行された **Project ID**（英数字）をコピー
4. `assets/clarity.js` の `var projectId` に貼り付け（現在: `xk08syw62q`）
5. `OmniPane-Web` を commit & push → GitHub Pages 反映後、Clarity ダッシュボードにデータが入る（数時間以内）

## 計測対象ページ

- `index.html`
- `editions.html`
- `support.html`
- `privacy.html`

`projectId` が空のときはスクリプトは読み込まれません（ローカル `file://` プレビュー用）。

## プライバシー

`privacy.html` に Clarity の利用を記載済み。Project ID を有効化して push する前に内容を確認してください。

## 参考

- [Clarity セットアップ](https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-setup)
- [Microsoft プライバシー声明](https://privacy.microsoft.com/privacystatement)
