
const SelectTitle = ["総合評価", "導入脱毛機", "痛みの少なさ", "予約の取りやすさ", "月々のお支払額", "総額"];
const OptionList1 = ["～★4.0", "★4.1～★4.4", "★4.5～"];
const OptionList2 = ["蓄熱式", "熱破壊式"];
const OptionList3 = ["～★4.0", "★4.1～★4.4", "★4.5～"];
const OptionList4 = ["～★4.0", "★4.1～★4.4", "★4.5～"];
const OptionList5 = ["～2,500円～★4.0", "2,501～5,000円", "5,001円～"];
const OptionList6 = ["～200,000円", "200,001円～300,000円", "200,001円～300,000円"];
const OptionArr = [OptionList1, OptionList2, OptionList3, OptionList4, OptionList5, OptionList6];

const Filter1 = ["02", "01", "00", "00", "00"];
const Filter2 = ["11", "11", "11", "11", "10"];
const Filter3 = ["21", "21", "21", "21", "22"];
const Filter4 = ["32", "30", "30", "30", "30"];
const Filter5 = ["41", "40", "42", "42", "40"];
const Filter6 = ["51", "50", "52", "52", "50"];

const simpleData = [
  {
    title: '総合評価',
    filter: [
      {
        label: '～★4.0',
        value: '02',
        checked: false
      },
      {
        label: '★4.1～★4.4',
        value: '01',
        checked: false
      },
      {
        label: '★4.5～',
        value: '00',
        checked: false
      },
    ]
  },
  {
    title: '導入脱毛機',
    filter: [
      {
        label: '～200,000円',
        value: '12',
        checked: false
      },
      {
        label: '200,001円～300,000円',
        value: '11',
        checked: false
      },
      {
        label: '200,001円～300,000円',
        value: '10',
        checked: false
      },
    ]
  },
  {
    title: '痛みの少なさ',
    filter: [
      {
        label: '～★4.0',
        value: '22',
        checked: false
      },
      {
        label: '★4.1～★4.4',
        value: '21',
        checked: false
      },
      {
        label: '★4.5～',
        value: '20',
        checked: false
      },
    ]
  },
  {
    title: '予約の取りやすさ',
    filter: [
      {
        label: '～★4.0',
        value: '32',
        checked: false
      },
      {
        label: '★4.1～★4.4',
        value: '31',
        checked: false
      },
      {
        label: '★4.5～',
        value: '30',
        checked: false
      },
    ]
  },
  {
    title: '月々のお支払額',
    filter: [
      {
        label: '～★4.0',
        value: '42',
        checked: false
      },
      {
        label: '★4.1～★4.4',
        value: '41',
        checked: false
      },
      {
        label: '★4.5～',
        value: '40',
        checked: false
      },
    ]
  },
  {
    title: '総額',
    filter: [
      {
        label: '～★4.0',
        value: '52',
        checked: false
      },
      {
        label: '★4.1～★4.4',
        value: '51',
        checked: false
      },
      {
        label: '★4.5～',
        value: '50',
        checked: false
      },
    ]
  },
];

const simpleImgs = [
  {
    src: 'images/top1.png',
    categies: ['01', '11', '50']
  },
  {
    src: 'images/top2.png',
    categies: ['01', '11', '50']
  },
  {
    src: 'images/top3.png',
    categies: ['01', '11', '50']
  },
  {
    src: 'images/top4.png',
    categies: ['01', '11', '50']
  },
  {
    src: 'images/top5.png',
    categies: ['01', '11', '50']
  },
]


export {
  SelectTitle,
  OptionList1,
  OptionList2,
  OptionList3,
  OptionList4,
  OptionList5,
  OptionList6,
  OptionArr,
  Filter1,
  Filter2,
  Filter3,
  Filter4,
  Filter5,
  Filter6,
  simpleData
}