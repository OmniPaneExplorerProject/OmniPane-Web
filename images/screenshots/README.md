# スクリーンショット

| ファイル | 用途 |
|----------|------|
| `hero-main.webp` | `index.html` ヒーロー直下の製品画面（1024×560） |

## 再生成

1. `D:\OmniPaneWorkspace` で `Marketing-Capture.ope`（プロファイル: 紹介用）を開きキャプチャ
2. PNG を WebP に変換して本ファイルを上書き

```powershell
python -c "from PIL import Image; Image.open('capture.png').save('hero-main.webp', 'WEBP', quality=88)"
```

再生成コマンド（デモデータ）: リポジトリルートで  
`dotnet run --project tools/DemoWorkspaceSetup -- "D:\OmniPaneWorkspace"`
