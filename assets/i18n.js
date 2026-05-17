(function () {
    'use strict';

    const STORAGE_KEY = 'ope-site-lang';
    const DEFAULT_LANG = 'ja';

    const T = {
        ja: {
            'meta.index.title': 'OmniPane Explorer - 次世代のマルチペイン・ファイルマネージャー',
            'meta.editions.title': 'エディション - OmniPane Explorer',
            'meta.editions.description': 'OmniPane Explorer の Community / Standard / Professional エディション比較',
            'meta.privacy.title': 'プライバシーポリシー - OmniPane Explorer',
            'meta.support.title': 'サポート - OmniPane Explorer',
            'meta.support.description': 'OmniPane Explorer の不具合報告・お問い合わせ（GitHub Issues）',
            'nav.features': '特徴',
            'nav.editions': 'エディション',
            'nav.support': 'サポート',
            'nav.get': '無料で入手',
            'footer.tagline': 'Created with Passion for Productivity.',
            'footer.editions': 'エディション',
            'footer.privacy': 'プライバシーポリシー',
            'footer.issues': '不具合報告 (GitHub)',
            'footer.support': 'サポート',
            'footer.home': 'トップページ',
            'privacy.back': '← トップページへ戻る',
            'privacy.title': 'プライバシーポリシー',
            'privacy.updated': '最終更新日：2026年5月14日',
            'privacy.intro': 'OmniPane Explorer Project（以下「当プロジェクト」）は、提供するアプリケーション「OmniPane Explorer」（以下「本アプリ」）における、ユーザー情報の取扱いについて、以下の通り定めます。',
            'privacy.s1.title': '1. 取得する情報および利用目的',
            'privacy.s1.lead': '本アプリは、ユーザーのプライバシーを最優先に設計されています。',
            'privacy.s1.li1': '<strong>個人情報の非収集:</strong> 氏名、住所、メールアドレスなどの個人情報を直接取得することはありません。',
            'privacy.s1.li2': '<strong>ローカル処理の原則:</strong> タグや設定などのデータは、すべてローカルデバイス上に保存されます。サーバー送信は行われません。',
            'privacy.s1.li3': '<strong>統計情報の利用:</strong> Microsoft Store経由の匿名統計（ダウンロード数等）を品質向上目的でのみ確認する場合があります。',
            'privacy.s2.title': '2. 第三者提供',
            'privacy.s2.body': '個人情報を保有していないため、第三者への提供を行うことはありません。',
            'privacy.s3.title': '3. お問い合わせ',
            'privacy.s3.body': '不具合報告やお問い合わせは、GitHubのIssueにて受け付けております。',
            'privacy.s3.link': 'サポートページ',
            'support.kicker': 'Support',
            'support.hero.title': 'サポート',
            'support.hero.sub': '不具合の報告、機能のご要望、製品サイトに関するお問い合わせは GitHub Issues で受け付けています。',
            'support.cta.lead': '公開中の Issue 一覧を確認するか、新しい Issue を作成してください。GitHub アカウントが必要です。',
            'support.cta.button': 'GitHub Issues を開く',
            'support.cta.repo': 'リポジトリ: OmniPaneExplorerProject / OmniPane-Web',
            'support.report.title': '報告の際にお書き添えいただきたい情報',
            'support.report.li1': 'OmniPane Explorer のバージョン（アプリ内のバージョン情報）',
            'support.report.li2': 'Windows のバージョン（例: Windows 11 24H2）',
            'support.report.li3': '問題が起きる操作の手順（再現手順）',
            'support.report.li4': '期待した動作と、実際に起きた動作',
            'support.report.li5': '可能であればスクリーンショットやエラーメッセージの全文',
            'support.note.title': 'その他',
            'support.note.body': '個人情報の取扱いについては <a href="privacy.html" class="text-blue-600 hover:underline">プライバシーポリシー</a> をご確認ください。ライセンスやエディションの違いは <a href="editions.html" class="text-blue-600 hover:underline">エディション</a> ページをご覧ください。',
            'index.hero.title': 'ファイル操作を、<br>もっとスマートに。',
            'index.hero.sub': 'OmniPane Explorerは、最大4分割のマルチペインと強力なメタデータ管理を備えた、プロフェッショナルのためのWindowsファイルマネージャーです。',
            'index.store.line1': 'Microsoft Store で',
            'index.store.line2': 'ダウンロード',
            'index.features.title': 'なぜ OmniPane Explorer なのか？',
            'index.features.sub': '標準のエクスプローラーでは満足できないあなたのための、特別な機能。',
            'index.f1.title': '最大4分割のマルチペイン',
            'index.f1.body': 'フォルダ間のファイル移動や比較が劇的に効率化。タブ機能も完備し、作業空間を自由自在にレイアウト可能。',
            'index.f2.title': '強力なメタデータ管理',
            'index.f2.body': 'ファイル名に頼らない管理を。独自のタグ、5段階評価、進捗管理など、SQLiteベースの高速検索を提供。',
            'index.f3.title': 'セーフティ・ロック',
            'index.f3.body': '重要なファイルの「削除禁止」設定。整理作業中のうっかりミスを物理的に防ぎ、安心感を提供します。',
            'index.screenshot.alt': 'OmniPane Explorer の4ペイン画面',
            'editions.kicker': 'Editions',
            'editions.hero.title': '用途に合わせて選べる<br class="hidden sm:inline">3つのエディション',
            'editions.hero.sub': '無料の Community から始め、作業規模が大きくなるほど Standard・Professional でマルチペインとメタデータ管理をフル活用できます。',
            'editions.draft': '<strong>ドラフト:</strong> 機能の有無・価格・販売形態はローンチ前の検討内容です。Microsoft Store の購入ページに掲載される内容が最終版となります。',
            'editions.community.tag': 'Community',
            'editions.community.price': '無料',
            'editions.community.desc': '大規模フォルダも軽快に扱える、高機能ファイラーの入口。',
            'editions.community.c1': '高速一覧（仮想リスト・非同期スキャン）',
            'editions.community.c2': '基本ファイル操作・D&D・UNC 対応',
            'editions.community.c3': '名前・ワイルドカード・正規表現フィルタ',
            'editions.community.c4': '.ope による基本状態の保存',
            'editions.community.c5': 'レイアウトは最大 2 ペイン相当',
            'editions.community.cta': '無料で入手',
            'editions.standard.badge': 'おすすめ',
            'editions.standard.tag': 'Standard',
            'editions.standard.price': 'サブスクリプション',
            'editions.standard.rate': '月額 980 円 / 年額 9,800 円（税別・目安）',
            'editions.standard.desc': '4 ペインと統合タブで、開く・探す・並べるを 1 画面に。',
            'editions.standard.c1': 'Community のすべて',
            'editions.standard.c2': '<strong>最大 4 分割</strong>・12 種レイアウト',
            'editions.standard.c3': '複数プロファイル・配下検索',
            'editions.standard.c4': 'ランチャー・保存済みペイン',
            'editions.standard.c5': 'ターミナル / Web / エディタタブ',
            'editions.standard.c6': 'タグ・評価・ワークフロー・PathFollow',
            'editions.standard.c7': '一括置換（通常）・プロファイル複製',
            'editions.standard.cta': 'Store で確認',
            'editions.pro.tag': 'Professional',
            'editions.pro.price': 'サブスクリプション',
            'editions.pro.rate': '月額 1,980 円 / 年額 19,800 円（税別・目安）',
            'editions.pro.desc': '作業環境を資産として残す、業務・上級者向け。',
            'editions.pro.c1': 'Standard のすべて',
            'editions.pro.c2': '一括置換（<strong>正規表現</strong>）',
            'editions.pro.c3': 'SharePoint 連携（予定）',
            'editions.pro.c4': '削除禁止・表示除外など高度な保護',
            'editions.pro.cta': 'Store で確認',
            'editions.table.title': '機能比較（抜粋）',
            'editions.table.sub': '主要な差分のみ掲載しています。詳細はアプリ内ヘルプおよび今後の正式ドキュメントをご参照ください。',
            'editions.table.feature': '機能',
            'editions.table.r1': 'マルチペイン（最大 4 分割・全レイアウト）',
            'editions.table.r1c': '2 ペイン相当',
            'editions.table.r2': '複数プロファイル・自動保存',
            'editions.table.r3': '配下検索（再帰）',
            'editions.table.r4': 'タグ・評価・ワークフロー・メモ',
            'editions.table.r5': '統合タブ（cmd / PS / WebView2 / エディタ）',
            'editions.table.r6': 'ランチャー・保存済みペイン',
            'editions.table.r7': 'PathFollow（リネーム・移動の参照追従）',
            'editions.table.r8': '一括置換（通常文字列）',
            'editions.table.r9': '一括置換（正規表現）',
            'editions.table.r10': 'プロファイル複製ウィザード',
            'editions.table.r11': 'SharePoint 連携',
            'editions.faq.title': 'よくある質問',
            'editions.faq.q1': 'Community から有料版へはどうやって移行しますか？',
            'editions.faq.a1': 'Microsoft Store から Standard または Professional のサブスクリプションを購入すると、アプリ内のライセンスが有効化されます（実装・販売開始時点の手順に準拠）。既存の .ope やローカルデータは端末に残ります。',
            'editions.faq.q2': 'データはクラウドに送信されますか？',
            'editions.faq.a2': 'タグ・メモ・設定などは端末内（およびご指定の .ope）に保存されます。個人情報の収集方針は <a href="privacy.html" class="text-blue-600 hover:underline">プライバシーポリシー</a> をご確認ください。',
            'editions.faq.q3': '価格はいつ確定しますか？',
            'editions.faq.a3': '本ページの価格帯は社内検討用のレンジです。地域・税制・Store のポリシーに合わせて、販売開始時に Microsoft Store 上の表示が正式価格となります。',
            'links.store': 'https://www.microsoft.com/ja-jp/p/omnipane-explorer/9pfdz0fn43vx',
            'links.issues': 'https://github.com/OmniPaneExplorerProject/OmniPane-Web/issues'
        },
        en: {
            'meta.index.title': 'OmniPane Explorer - Multi-Pane File Manager for Windows',
            'meta.editions.title': 'Editions - OmniPane Explorer',
            'meta.editions.description': 'Compare Community, Standard, and Professional editions of OmniPane Explorer',
            'meta.privacy.title': 'Privacy Policy - OmniPane Explorer',
            'meta.support.title': 'Support - OmniPane Explorer',
            'meta.support.description': 'Report bugs and contact us for OmniPane Explorer (GitHub Issues)',
            'nav.features': 'Features',
            'nav.editions': 'Editions',
            'nav.support': 'Support',
            'nav.get': 'Get it free',
            'footer.tagline': 'Created with Passion for Productivity.',
            'footer.editions': 'Editions',
            'footer.privacy': 'Privacy Policy',
            'footer.issues': 'Report an issue (GitHub)',
            'footer.support': 'Support',
            'footer.home': 'Home',
            'privacy.back': '← Back to Home',
            'privacy.title': 'Privacy Policy',
            'privacy.updated': 'Last updated: May 14, 2026',
            'privacy.intro': 'OmniPane Explorer Project ("we," "us," or "our") provides the OmniPane Explorer application ("the App"). This Privacy Policy describes how we handle user information.',
            'privacy.s1.title': '1. Information We Collect and Why',
            'privacy.s1.lead': 'The App is designed with a privacy-first approach:',
            'privacy.s1.li1': '<strong>No personal data collection:</strong> We do not collect names, addresses, email addresses, or similar personal information.',
            'privacy.s1.li2': '<strong>Local processing:</strong> Tags, notes, settings, and other data stay on your device. We do not send this data to our servers.',
            'privacy.s1.li3': '<strong>Store statistics:</strong> We may review anonymous telemetry from the Microsoft Store (for example download counts or crash reports) only to improve quality.',
            'privacy.s2.title': '2. Sharing With Third Parties',
            'privacy.s2.body': 'We do not share information with third parties because we do not hold personal data.',
            'privacy.s3.title': '3. Contact',
            'privacy.s3.body': 'For bug reports and inquiries, please use our GitHub Issues page.',
            'privacy.s3.link': 'Support page',
            'support.kicker': 'Support',
            'support.hero.title': 'Support',
            'support.hero.sub': 'Report bugs, request features, or ask about this product site via GitHub Issues.',
            'support.cta.lead': 'Browse open issues or create a new one. A GitHub account is required.',
            'support.cta.button': 'Open GitHub Issues',
            'support.cta.repo': 'Repository: OmniPaneExplorerProject / OmniPane-Web',
            'support.report.title': 'What to include in your report',
            'support.report.li1': 'OmniPane Explorer version (from in-app version info)',
            'support.report.li2': 'Windows version (e.g. Windows 11 24H2)',
            'support.report.li3': 'Steps to reproduce the problem',
            'support.report.li4': 'Expected behavior vs. what actually happened',
            'support.report.li5': 'Screenshots or full error messages, if possible',
            'support.note.title': 'More information',
            'support.note.body': 'See our <a href="privacy.html" class="text-blue-600 hover:underline">Privacy Policy</a> for data handling. Edition differences are on the <a href="editions.html" class="text-blue-600 hover:underline">Editions</a> page.',
            'index.hero.title': 'Smarter file operations,<br>in one workspace.',
            'index.hero.sub': 'OmniPane Explorer is a professional Windows file manager with up to four panes and powerful metadata tools built in.',
            'index.store.line1': 'Get it on',
            'index.store.line2': 'Microsoft Store',
            'index.features.title': 'Why OmniPane Explorer?',
            'index.features.sub': 'Built for people who have outgrown the default File Explorer.',
            'index.f1.title': 'Up to four panes',
            'index.f1.body': 'Move and compare files across folders without window juggling. Tabs and flexible layouts keep your workspace organized.',
            'index.f2.title': 'Rich metadata',
            'index.f2.body': 'Go beyond file names with tags, star ratings, workflow flags, and fast SQLite-backed search.',
            'index.f3.title': 'Safety lock',
            'index.f3.body': 'Mark important items as delete-protected so accidental cleanup during organization is much harder.',
            'index.screenshot.alt': 'OmniPane Explorer four-pane layout',
            'editions.kicker': 'Editions',
            'editions.hero.title': 'Three editions for<br class="hidden sm:inline">different workflows',
            'editions.hero.sub': 'Start free with Community, then scale up to Standard or Professional as your projects grow.',
            'editions.draft': '<strong>Draft:</strong> Features, pricing, and purchase options are pre-launch estimates. The Microsoft Store listing is the source of truth at release.',
            'editions.community.tag': 'Community',
            'editions.community.price': 'Free',
            'editions.community.desc': 'A capable, fast file manager to get started.',
            'editions.community.c1': 'Fast virtual list and async scanning',
            'editions.community.c2': 'Core file ops, drag-and-drop, UNC paths',
            'editions.community.c3': 'Name, wildcard, and regex filters',
            'editions.community.c4': 'Basic .ope state save/restore',
            'editions.community.c5': 'Up to two panes (layout limited)',
            'editions.community.cta': 'Get it free',
            'editions.standard.badge': 'Recommended',
            'editions.standard.tag': 'Standard',
            'editions.standard.price': 'Subscription',
            'editions.standard.rate': 'From about ¥980/month or ¥9,800/year (tax excluded, draft)',
            'editions.standard.desc': 'Four panes and integrated tabs in one screen.',
            'editions.standard.c1': 'Everything in Community',
            'editions.standard.c2': '<strong>Four panes</strong> and 12 layout presets',
            'editions.standard.c3': 'Multiple profiles and recursive search',
            'editions.standard.c4': 'Launcher and saved pane layouts',
            'editions.standard.c5': 'Terminal / Web / editor tabs',
            'editions.standard.c6': 'Tags, ratings, workflow, PathFollow',
            'editions.standard.c7': 'Batch replace (plain text) and profile clone',
            'editions.standard.cta': 'View on Store',
            'editions.pro.tag': 'Professional',
            'editions.pro.price': 'Subscription',
            'editions.pro.rate': 'From about ¥1,980/month or ¥19,800/year (tax excluded, draft)',
            'editions.pro.desc': 'For power users who treat their layout as an asset.',
            'editions.pro.c1': 'Everything in Standard',
            'editions.pro.c2': 'Batch replace with <strong>regular expressions</strong>',
            'editions.pro.c3': 'SharePoint integration (planned)',
            'editions.pro.c4': 'Delete protection and advanced exclude rules',
            'editions.pro.cta': 'View on Store',
            'editions.table.title': 'Feature comparison (excerpt)',
            'editions.table.sub': 'Key differences only. See in-app help and future docs for full details.',
            'editions.table.feature': 'Feature',
            'editions.table.r1': 'Multi-pane (4-way, all layouts)',
            'editions.table.r1c': '2 panes',
            'editions.table.r2': 'Multiple profiles and auto-save',
            'editions.table.r3': 'Recursive search in subtree',
            'editions.table.r4': 'Tags, ratings, workflow, memos',
            'editions.table.r5': 'Integrated tabs (cmd / PS / WebView2 / editor)',
            'editions.table.r6': 'Launcher and saved panes',
            'editions.table.r7': 'PathFollow (rename/move reference sync)',
            'editions.table.r8': 'Batch replace (plain text)',
            'editions.table.r9': 'Batch replace (regex)',
            'editions.table.r10': 'Profile duplication wizard',
            'editions.table.r11': 'SharePoint integration',
            'editions.faq.title': 'FAQ',
            'editions.faq.q1': 'How do I upgrade from Community?',
            'editions.faq.a1': 'Purchase a Standard or Professional subscription in the Microsoft Store to unlock the license in-app (per release documentation). Your local .ope data remains on the device.',
            'editions.faq.q2': 'Is my data sent to the cloud?',
            'editions.faq.a2': 'Tags, memos, and settings are stored locally (and in your .ope files). See our <a href="privacy.html" class="text-blue-600 hover:underline">Privacy Policy</a>.',
            'editions.faq.q3': 'When will pricing be final?',
            'editions.faq.a3': 'Prices on this page are draft ranges. Official pricing will appear on the Microsoft Store at launch.',
            'links.store': 'https://apps.microsoft.com/detail/9pfdz0fn43vx',
            'links.issues': 'https://github.com/OmniPaneExplorerProject/OmniPane-Web/issues'
        }
    };

    function resolveLang(requested) {
        if (requested === 'ja' || requested === 'en') return requested;
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'ja' || stored === 'en') return stored;
        const nav = (navigator.language || '').toLowerCase();
        return nav.startsWith('ja') ? 'ja' : 'en';
    }

    function t(lang, key) {
        return T[lang][key] ?? T[DEFAULT_LANG][key] ?? key;
    }

    function applyLang(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            el.textContent = t(lang, el.getAttribute('data-i18n'));
        });
        document.querySelectorAll('[data-i18n-html]').forEach((el) => {
            el.innerHTML = t(lang, el.getAttribute('data-i18n-html'));
        });
        document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
            el.setAttribute('alt', t(lang, el.getAttribute('data-i18n-alt')));
        });
        document.querySelectorAll('[data-i18n-href]').forEach((el) => {
            el.setAttribute('href', t(lang, el.getAttribute('data-i18n-href')));
        });
        document.querySelectorAll('[data-set-lang]').forEach((btn) => {
            const active = btn.getAttribute('data-set-lang') === lang;
            btn.classList.toggle('is-active', active);
            btn.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        localStorage.setItem(STORAGE_KEY, lang);
    }

    function init(options) {
        const params = new URLSearchParams(window.location.search);
        const lang = resolveLang(params.get('lang'));
        if (options && options.page) {
            const titleKey = 'meta.' + options.page + '.title';
            const descKey = 'meta.' + options.page + '.description';
            document.title = t(lang, titleKey);
            const meta = document.querySelector('meta[name="description"]');
            if (meta && T[lang][descKey]) meta.setAttribute('content', t(lang, descKey));
        }
        applyLang(lang);
        document.querySelectorAll('[data-set-lang]').forEach((btn) => {
            btn.addEventListener('click', () => applyLang(btn.getAttribute('data-set-lang')));
        });
    }

    window.SiteI18n = { init, applyLang, t };
})();
