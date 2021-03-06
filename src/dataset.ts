const lineUrl = 'http://lin.ee/tfKv3EW'
const formUrl =
  'https://docs.google.com/forms/d/1NLJ6fz6qcTNmc5fAA2hCNFHdA1tQbsqaMwRZ3NKX-aM/viewform?edit_requested=true'
const twitterUrl = 'https://twitter.com/prok_shinkan'

export const defaultDataset = {
  init: {
    answers: [
      { content: 'Pro-Kのチームについて知りたい！', nextId: 'teams' },
      { content: 'Pro-Kに入部したい！', nextId: 'join' },
      {
        content: 'Pro-Kがやってるイベントについて知りたい！',
        nextId: 'event',
      },
      {
        content: '一橋の履修に関して教えてほしい！',
        nextId: 'course_consultation',
      },
    ],
    question: 'こんにちは！Pro-K新歓担当へのご質問はなんでしょうか？',
  },

  //ここからチーム紹介
  teams: {
    answers: [
      { content: '商店街協同', nextId: 'shokyo' },
      { content: 'まちかど', nextId: 'machikado' },
      {
        content: 'ここたの',
        nextId: 'kokotano',
      },
      {
        content: 'とれたの',
        nextId: 'toretano',
      },
      {
        content: 'ゆーから',
        nextId: 'yukara',
      },
    ],
    question: 'どのチームについて知りたいですか？',
  },
  shokyo: {
    answers: [
      {
        content: '活動について詳しく！',
        nextId: 'https://note.com/yahhoh_digital/n/nbc03e708d8e3',
      },
      {
        content: '商協noteを漁りたい！',
        nextId: 'https://note.com/yahhoh_digital/m/m1f8ad06e086d',
      },
      { content: '前の質問に戻る', nextId: 'teams' },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: 'どんなことが知りたいですか？',
  },
  machikado: {
    answers: [
      {
        content: '活動について詳しく！',
        nextId: 'https://note.com/yahhoh_digital/n/n2c34f6027f2c',
      },
      {
        content: 'まちかどnoteを漁りたい！',
        nextId: 'https://note.com/yahhoh_digital/m/mbebd2fee0e2c',
      },
      { content: '前の質問に戻る', nextId: 'teams' },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: 'どんなことが知りたいですか？',
  },
  kokotano: {
    answers: [
      {
        content: '活動について詳しく！',
        nextId: 'https://note.com/yahhoh_digital/n/na16c6c73d87a',
      },
      {
        content: 'ここたのnoteを漁りたい！',
        nextId: 'https://note.com/yahhoh_digital/m/md01a21fb733e',
      },
      { content: '前の質問に戻る', nextId: 'teams' },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: 'どんなことが知りたいですか？',
  },
  toretano: {
    answers: [
      {
        content: '活動について詳しく！',
        nextId: 'https://note.com/yahhoh_digital/n/n6afeeceb5d99',
      },
      {
        content: 'とれたのnoteを漁りたい！',
        nextId: 'https://note.com/yahhoh_digital/m/m4a4b583760ce',
      },
      { content: '前の質問に戻る', nextId: 'teams' },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: 'どんなことが知りたいですか？',
  },
  yukara: {
    answers: [
      {
        content: '活動について詳しく！',
        nextId: 'https://note.com/yahhoh_digital/n/n776fc44e4b1e',
      },
      {
        content: 'ゆーからnoteを漁りたい！',
        nextId: 'https://note.com/yahhoh_digital/m/m12f6006880b9',
      },
      { content: '前の質問に戻る', nextId: 'teams' },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: 'どんなことが知りたいですか？',
  },
  //ここまでチーム紹介

  //ここから履修相談
  course_consultation: {
    answers: [
      { content: '経済学部', nextId: 'economics' },
      { content: '商学部', nextId: 'commerce' },
      { content: '法学部', nextId: 'law' },
      { content: '社会学部', nextId: 'sociology' },
    ],
    question: '学部はどこですか？',
  },

  economics: {
    answers: [
      {
        content: '履修に関するnoteを読む',
        nextId: 'https://note.com/yahhoh_digital/n/nff6f18f7c534',
      },
      {
        content: '経済学部のPro-Kerと連絡を取りたい！',
        nextId: 'https://forms.gle/9K4bkrf9BTiuKueH9',
      },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: '経済学部ですね。どうされますか？',
  },
  commerce: {
    answers: [
      {
        content: '履修に関するnoteを読む',
        nextId: 'https://note.com/yahhoh_digital/n/n5e4b1d415d0e',
      },
      {
        content: '商学部のPro-Kerと連絡を取りたい!',
        nextId: 'https://forms.gle/9K4bkrf9BTiuKueH9',
      },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: '商学部ですね。どうされますか？',
  },
  law: {
    answers: [
      {
        content: '履修に関するnoteを読む',
        nextId: 'https://note.com/yahhoh_digital/n/na43d5937c7e0',
      },
      {
        content: '法学部のPro-Kerと連絡を取りたい！',
        nextId: 'https://forms.gle/9K4bkrf9BTiuKueH9',
      },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: '法学部ですね。どうされますか？',
  },
  sociology: {
    answers: [
      {
        content: '履修に関するnoteを読む',
        nextId: 'https://note.com/yahhoh_digital/n/n2981c675d1ce',
      },
      {
        content: '社会学部のPro-Kerと連絡を取りたい！',
        nextId: 'https://forms.gle/9K4bkrf9BTiuKueH9',
      },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: '社会学部ですね。どうされますか？',
  },
  // ここまで履修相談

  // ここからイベント説明
  event: {
    answers: [
      {
        content: 'ハロウィン',
        nextId: 'https://note.com/yahhoh_digital/n/nd09459a7e6be',
      },
      {
        content: '天下市',
        nextId: 'https://note.com/yahhoh_digital/n/n94948c50f360',
      },
      { content: '最新の新歓イベント', nextId: 'welcome' },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: 'どのイベントに興味ありですか？',
  },
  welcome: {
    answers: [
      {
        content: 'このページから問い合わせる',
        nextId: 'https://forms.gle/9K4bkrf9BTiuKueH9',
      },
      { content: '公式LINEへ', nextId: `${lineUrl}` },
      { content: '公式Twitterへ', nextId: `${twitterUrl}` },

      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: '公式LINEやTwitterでご確認ください！！',
  },
  // ここまでイベント説明

  //ここから入部説明
  join: {
    answers: [
      { content: '参加した！', nextId: 'meeting' },
      { content: 'まだ！', nextId: 'official_line' },
    ],
    question: '本当ですか！嬉しい！ちなみに、説明会には参加してくれました？？',
  },
  meeting: {
    answers: [
      { content: '2チーム以上参加した！', nextId: 'form' },
      { content: 'まだ！ or 1チームだけ！', nextId: 'official_line' },
    ],
    question: `え！本当に！！♡♡\nチームミーティングの方はどうですか？？`,
  },
  form: {
    answers: [
      { content: 'Formへ進む', nextId: `${formUrl}` },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: `素晴らしい！！ぜひ専用Formから入部申請をお願いします！`,
  },
  official_line: {
    answers: [
      { content: '公式LINEへ', nextId: `${lineUrl}` },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: `わかりました！ありがとう！公式LINEの方で説明会/ミーテ参加のお問い合わせをお願いします！`,
  },
  //ここまで入部申請
}
