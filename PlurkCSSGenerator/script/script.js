//
//----- 宣告物件陣列
// 所有控制的css列表
let cssList = {
  bgc: {
    css: 'background-color',
    title: '背景顏色',
    alpha: [0, 1, 0.1],
  },
  c: {
    css: 'color',
    title: '文字顏色',
    alpha: [0, 1, 0.1],
  },
  opa: {
    css: 'opacity',
    title: '透明度',
    value: [0, 1, 0.1],
  },
  bdrs: {
    css: 'border-radius',
    title: '圓角',
    value: [0, 50, 1],
    unit: ['px', '%'],
  },
  bd: {
    css: 'border',
    title: '邊框',
    value: [0, 5, 1],
  },
  sha: {
    css: 'box-shadow',
    title: '陰影',
    value: [0, 10, 1],
    blur: [0, 20, 1],
    alpha: [0, 1, 0.1],
  },
  dp: {
    css: 'display',
    title: '隱藏區塊',
  },
  posi: {
    css: 'position',
    title: '位置',
    top: [-300, 1000, 1],
    left: [-1000, 200, 1],
  },
  size: {
    css: 'width, height',
    title: '大小',
  },
  dcbgi: {
    css: 'background-image',
    title: '背景圖',
  },
  tlbgi: {
    css: 'background-image',
    title: '背景圖',
  },
  open: {
    css: '',
    title: '頻道展開',
  },
  ftposi: {
    css: '',
    title: '頻道位置',
  },
  toicon: {
    css: '',
    title: '圖示化',
  },
  countposi: {
    css: '',
    title: '圖示化的未讀位置',
  },
};
// input與label的html內容
let plurkCntList = {
  normal: {
    title: '噗首的普通外觀',
    subtitle: '.timeline-cnt .plurk_cnt',
    name: 'plurkcnt_normal',
    csstype: ['bgc', 'c', 'opa', 'bdrs', 'bd', 'sha'],
    hidden: false,
  },
  hover: {
    title: '噗首被滑鼠移至的外觀',
    subtitle: '.timeline-cnt .link_extend .plurk_cnt',
    name: 'plurkcnt_hover',
    csstype: ['opa'],
    hidden: false,
  },
  extend: {
    title: '噗首被展開後的外觀',
    subtitle: '.timeline-cnt .plurk_box .plurk_cnt',
    name: 'plurkcnt_extend',
    csstype: ['opa'],
    hidden: false,
  },
  pimg: {
    title: '噗首的頭像',
    subtitle: '.timeline-cnt .p_img',
    name: 'plurkcnt_pimg',
    csstype: ['opa', 'bdrs', 'bd', 'sha'],
    hidden: true,
  },
  count: {
    title: '噗的回應數',
    subtitle: '.timeline-cnt .response_count',
    name: 'plurkcnt_count',
    csstype: ['bgc', 'c', 'opa', 'bdrs', 'bd', 'sha'],
    hidden: false,
  },
  newcount: {
    title: '噗的未讀回應數',
    subtitle: '.timeline-cnt .new .response_count',
    name: 'plurkcnt_newcount',
    csstype: ['bgc', 'c', 'opa'],
    hidden: false,
  },
  pic: {
    title: '噗的圖片',
    subtitle: '.timeline-cnt .plurk_cnt a.pictureservices',
    name: 'plurkcnt_pic',
    csstype: ['opa', 'bdrs', 'sha'],
    hidden: false,
  },
  hashtag: {
    title: '噗的Hashtag',
    subtitle: '.timeline-cnt .plurk_cnt a.hashtag',
    name: 'plurkcnt_hashtag',
    csstype: ['bgc', 'c', 'bdrs', 'bd'],
    hidden: false,
  },
  piclink: {
    title: '噗的有圖連結',
    subtitle: '.timeline-cnt .plurk_cnt a.meta',
    name: 'plurkcnt_piclink',
    csstype: ['bgc', 'c', 'opa', 'bdrs', 'bd'],
    hidden: false,
  },
  link: {
    title: '噗的普通連結',
    subtitle: '.timeline-cnt .plurk_cnt a.ex_link',
    name: 'plurkcnt_link',
    csstype: ['c'],
    hidden: false,
  },
};
let plurkBoxList = {
  holder: {
    title: '噗內整體調整',
    subtitle: '#form_holder',
    name: 'plurkbox_holder',
    csstype: ['bgc', 'opa', 'bdrs', 'bd', 'sha'],
    hidden: true,
  },
  resbox: {
    title: '噗內回應區',
    subtitle: '.response_box',
    name: 'plurkbox_resbox',
    csstype: ['bgc'],
    hidden: false,
  },
  reslist: {
    title: '噗內回應內容',
    subtitle: '.response_box .list .plurk_cnt',
    name: 'plurkbox_reslist',
    csstype: ['bgc', 'c', 'bdrs', 'bd'],
    hidden: false,
  },
  form: {
    title: '噗內輸入區',
    subtitle: '.plurk_box .mini_form',
    name: 'plurkbox_form',
    csstype: ['bgc'],
    hidden: false,
  },
};
let timelineList = {
  plurktime: {
    title: '噗的時間顯示',
    subtitle: '.timeline-timeshow',
    name: 'timeline_plurktime',
    csstype: ['bgc', 'c', 'opa', 'bdrs', 'bd', 'sha'],
    hidden: false,
  },
  time: {
    title: '時間軸的時間',
    subtitle: '.bottom_start',
    name: 'timeline_time',
    csstype: ['bgc', 'c', 'opa', 'bdrs', 'bd', 'sha'],
    hidden: false,
  },
  line: {
    title: '時間軸的線',
    subtitle: '#bottom_line',
    name: 'timeline_line',
    csstype: ['bgc', 'opa'],
    hidden: false,
  },
};
let controlList = {
  updatebtn: {
    title: '更新的按鈕',
    subtitle: '#updater .item a',
    name: 'control_updatebtn',
    csstype: ['bgc', 'c', 'opa', 'bdrs', 'bd', 'sha'],
    hidden: false,
  },
  updatecount: {
    title: '更新的未讀數字',
    subtitle: '#updater .unread_generic',
    name: 'control_updatecount',
    csstype: ['bgc', 'c', 'opa', 'bdrs', 'bd', 'sha'],
    hidden: false,
  },
  filterstyle: {
    title: '頻道的型態',
    subtitle: '#filter_tab',
    name: 'control_filterstyle',
    csstype: ['open', 'ftposi', 'toicon', 'countposi'],
    hidden: false,
  },
  filterbtn: {
    title: '頻道的普通按鈕',
    subtitle: '#filter_tab a',
    name: 'control_filterbtn',
    csstype: ['bgc', 'c', 'opa', 'bdrs', 'bd', 'sha'],
    hidden: false,
  },
  filterselect: {
    title: '頻道的選中按鈕',
    subtitle: '#filter_tab a.filter_selected',
    name: 'control_filterselect',
    csstype: ['bgc', 'c', 'opa', 'bdrs', 'bd', 'sha'],
    hidden: false,
  },
  filtercount: {
    title: '頻道的未讀數字',
    subtitle: '#filter_tab a .unread_generic',
    name: 'control_filtercount',
    csstype: ['bgc', 'c', 'opa', 'bdrs', 'bd', 'sha'],
    hidden: false,
  },
};
let dashboardLeftList = {
  board: {
    title: '主控台整體',
    subtitle: '#plurk-dashboard',
    name: 'dashboard_board',
    csstype: ['bgc', 'c', 'opa', 'bdrs', 'bd', 'sha'],
    hidden: false,
  },
  segment: {
    title: '主控台內分區',
    subtitle: '.dash-segment .segment-content',
    name: 'dashboard_segment',
    csstype: ['bgc', 'opa', 'bdrs', 'bd', 'sha'],
    hidden: false,
  },
  profile: {
    title: '個人資料區整體',
    subtitle: '.dash-segment-profile .segment-content',
    name: 'profile_segment',
    csstype: ['bgc', 'c', 'opa', 'bdrs', 'bd', 'sha'],
    hidden: false,
  },
  pic: {
    title: '個人頭像',
    subtitle: '#plurk-dashboard .dash-group-left #dash-profile img.profile-pic',
    name: 'profile_pic',
    csstype: ['opa', 'bdrs', 'sha'],
    hidden: false,
  },
  name: {
    title: '個人暱稱',
    subtitle: '#plurk-dashboard .dash-group-left #dash-profile #full_name .display_name',
    name: 'profile_name',
    csstype: ['bgc', 'c', 'opa', 'bdrs', 'bd'],
    hidden: false,
  },
  private: {
    title: '私噗按鈕',
    subtitle: '.friend_man.private_plurk',
    name: 'profile_private',
    csstype: ['dp'],
    hidden: false,
  },
};
let dashboardRightList = {
  post: {
    title: '發噗區整體',
    subtitle: '.dash-segment-post .segment-content',
    name: 'post_segment',
    csstype: ['bgc', 'opa', 'bdrs', 'bd', 'sha'],
    hidden: false,
  },
  stats: {
    title: '卡碼資訊區整體',
    subtitle: '.dash-segment-stats .segment-content',
    name: 'stats_segment',
    csstype: ['dp', 'bgc', 'c', 'opa', 'bdrs', 'bd', 'sha'],
    hidden: false,
  },
  fzcolor: {
    title: '統計資訊',
    subtitle: '#plurk-dashboard .dash-segment #dash-stats table td',
    name: 'stats_fzcolor',
    csstype: ['c'],
    hidden: false,
  },
  karma: {
    title: '卡碼',
    subtitle: '.dash-stats-karma',
    name: 'stats_karma',
    csstype: ['dp'],
    hidden: false,
  },
  friends: {
    title: '好友區整體',
    subtitle: '.dash-segment-friends .segment-content',
    name: 'friends_segment',
    csstype: ['dp', 'bgc', 'c', 'opa', 'bdrs', 'bd', 'sha'],
    hidden: false,
  },
  fans: {
    title: '紛絲區整體',
    subtitle: '.dash-segment-fans .segment-content',
    name: 'fans_segment',
    csstype: ['dp', 'bgc', 'c', 'opa', 'bdrs', 'bd', 'sha'],
    hidden: false,
  },
  img: {
    title: '好友粉絲頭像整體',
    subtitle: '.friend_holder img',
    name: 'friends_img',
    csstype: ['bgc', 'opa', 'bdrs', 'sha'],
    hidden: false,
  },
  friendbtn: {
    title: '好友按鈕',
    subtitle: '#dash-friends .friend_man',
    name: 'friends_friendbtn',
    csstype: ['dp'],
    hidden: false,
  },
  friendlink: {
    title: '好友連結',
    subtitle: '#dash-friends .show_all_friends, #dash-friends .show_mutual_friends',
    name: 'friends_friendlink',
    csstype: ['dp'],
    hidden: false,
  },
  friendimg: {
    title: '好友頭像',
    subtitle: '#dash-friends .friend_holder',
    name: 'friends_friendimg',
    csstype: ['dp'],
    hidden: false,
  },
  fanbtn: {
    title: '粉絲按鈕',
    subtitle: '#dash-fans .friend_man',
    name: 'fans_fanbtn',
    csstype: ['dp'],
    hidden: false,
  },
  fanlink: {
    title: '粉絲連結',
    subtitle: '#dash-fans .show_all_friends',
    name: 'fans_fanlink',
    csstype: ['dp'],
    hidden: false,
  },
  fanimg: {
    title: '粉絲頭像',
    subtitle: '#dash-fans .friend_holder',
    name: 'fans_fanimg',
    csstype: ['dp'],
    hidden: false,
  },
};
let otherList = {
  dynamic: {
    title: '噗浪生物',
    subtitle: '#dynamic_logo::after',
    name: 'dynamic_ori',
    csstype: ['dcbgi', 'size', 'posi', 'opa'],
    hidden: false,
  },
  creature: {
    title: '官方生物',
    subtitle: '#dynamic_logo #creature',
    name: 'dynamic_creature',
    csstype: ['dp'],
    hidden: false,
  },
  timelinebg: {
    title: '時間軸生物',
    subtitle: '.timeline-bg',
    name: 'timeline_bg',
    csstype: ['tlbgi'],
    hidden: false,
  },
};
// contentList的物件名稱變成陣列
let contentList = [plurkCntList, plurkBoxList, timelineList, controlList, dashboardLeftList, dashboardRightList, otherList];
// menu列表
let menuBlock = ['th', 'fh', 'tt', 'tc', 'dhl', 'dhr', 'other'];

// ===== html生成部分 ============================================================ 
//----- input跟label html生成
// 各種input type的css
function colorHtml(name, csstype, ph = '') {
  return `
  <div class="row m-0">
    <input class="${name}_${csstype} colorBox" type="text" name="${csstype}" placeholder="${ph}" />
    <input class="colorBox" type="color" />
  </div>
  `;
}
function rangeHtml(name, csstype, valueArr, ph = '') {
  return `
  <div class="row m-0">
    <input class="${name}_${csstype} rangeBox" type="text" name="${csstype}" placeholder="${ph}" />
    <input class="rangeBox" type="range" min="${valueArr[0]}" max="${valueArr[1]}" step="${valueArr[2]}" value="0"/>
  </div>
  `;
}
function checkHtml(name, csstype) {
  return `
  <div class="row m-0">
    <input id="${name}_${csstype}" class="inputDisplay" type="checkbox" name="${name}_${csstype}" />
    <label for="${name}_${csstype}" class="inputDisplay">NO</label>
  </div>
  `;
}
//  把判斷是什麼類型的csstype獨立出並依樣式呼叫各種input type的function，最後回傳preHtml
function preHtmlBgc(key, item) {
  let preHtml = '';
  if (item === 'bgc' || item === 'c') {
    preHtml += `
    <div class="input_box ${item}">
      <h6 data-css="${cssList[item].css}">${cssList[item].title}</h6>
      ${colorHtml(key.name, item, '顏色')}
      ${rangeHtml(key.name, item, cssList[item].alpha, '透明')}
    </div>
    `;
  }
  return preHtml;
}
function preHtmlOpa(key, item) {
  let preHtml = '';
  if (item === 'opa') {
    preHtml += `
    <div class="input_box ${item}">
      <h6 data-css="${cssList[item].css}">${cssList[item].title}</h6>
      ${rangeHtml(key.name, item, cssList[item].value)}
    </div>
    `;
  }
  return preHtml;
}
function preHtmlBdrs(key, item) {
  let preHtml = '';
  if (item === 'bdrs') {
    preHtml += `
    <div class="input_box ${item}">
      <h6 data-css="${cssList[item].css}">${cssList[item].title}</h6>
      ${rangeHtml(key.name, item, cssList[item].value)}
      <div class="row m-0">
        <span class="radioBox">單位</span>
        <input id="${key.name}_${item}_1" class="radioBox" type="radio" name="${key.name}_${item}" value="px" checked>
        <label for="${key.name}_${item}_1" class="radioBox">PX</label>
        <input id="${key.name}_${item}_2" class="radioBox" type="radio" name="${key.name}_${item}" value="%">
        <label for="${key.name}_${item}_2" class="radioBox">%</label>
      </div>
    </div>
    `;
  }
  return preHtml;
}
function preHtmlBd(key, item) {
  let preHtml = '';
  if (item === 'bd') {
    preHtml += `
    <div class="input_box ${item}">
      <h6 data-css="${cssList[item].css}">${cssList[item].title}</h6>
      ${colorHtml(key.name, item, '顏色')}
      ${rangeHtml(key.name, item, cssList[item].value, '粗細')}
    </div>
    `;
  }
  return preHtml;
}
function preHtmlSha(key, item) {
  let preHtml = '';
  if (item === 'sha') {
    preHtml += `
    <div class="input_box ${item}">
      <h6 data-css="${cssList[item].css}">${cssList[item].title}</h6>
      ${colorHtml(key.name, item, '顏色')}
      ${rangeHtml(key.name, item, cssList[item].alpha, '透明')}
      ${rangeHtml(key.name, item, cssList[item].value, '距離')}
      ${rangeHtml(key.name, item, cssList[item].blur, '模糊')}
    </div>
    `;
  }
  return preHtml;
}
function preHtmlDp(key, item) {
  let preHtml = '';
  if (item === 'dp') {
    preHtml += `
    <div class="input_box ${item}">
      <h6 data-css="${cssList[item].css}">${cssList[item].title}</h6>
      ${checkHtml(key.name, item)}
    </div>
    `;
  }
  return preHtml;
}
function preHtmlPosi(key, item) {
  let preHtml = '';
  if (item === 'posi') {
    preHtml += `
    <div class="input_box ${item}">
      <h6 data-css="${cssList[item].css}">${cssList[item].title}</h6>
      ${rangeHtml(key.name, item, cssList[item].top, '上方')}
      ${rangeHtml(key.name, item, cssList[item].left, '左方')}
    </div>
    `;
  }
  return preHtml;
}
function preHtmlSize(key, item) {
  let preHtml = '';
  if (item === 'size') {
    preHtml += `
    <div class="input_box ${item}">
      <h6 data-css="${cssList[item].css}">${cssList[item].title}</h6>
      <div class="row m-0">
        <input class="${key.name}_${item}" type="text" name="${item}" placeholder="寬度">
      </div>
      <div class="row m-0">
        <input class="${key.name}_${item}" type="text" name="${item}" placeholder="高度">
      </div>
    </div>
    `;
  }
  return preHtml;
}
function preHtmlBgi(key, item) {
  let preHtml = '';
  if (item === 'dcbgi' || item === 'tlbgi') {
    preHtml += `
    <div class="input_box ${item}">
      <h6 data-css="${cssList[item].css}">${cssList[item].title}</h6>
      <div class="row m-0">
        <input class="${key.name}_${item}" type="text" name="${item}" placeholder="圖片網址">
      </div>
    </div>
    `;
  }
  return preHtml;
}
function preHtmlOpen(key, item) {
  let preHtml = '';
  if (item === 'open') {
    preHtml += `
    <div class="input_box ${item}">
      <h6 data-css="${cssList[item].css}">${cssList[item].title}</h6>
      <div class="row m-0">
        <input id="${key.name}_${item}_1" class="radioBox" type="radio" name="${key.name}_${item}" value="no" checked>
        <label for="${key.name}_${item}_1" class="radioBox">不展開</label>
        <input id="${key.name}_${item}_2" class="radioBox" type="radio" name="${key.name}_${item}" value="top">
        <label for="${key.name}_${item}_2" class="radioBox">向上</label>
        <input id="${key.name}_${item}_3" class="radioBox" type="radio" name="${key.name}_${item}" value="right">
        <label for="${key.name}_${item}_3" class="radioBox">向右</label>
      </div>
    </div>
    `;
  }
  return preHtml;
}
function preHtmlFtposi(key, item) {
  let preHtml = '';
  if (item === 'ftposi') {
    preHtml += `
    <div class="input_box ${item}">
      <h6 data-css="${cssList[item].css}">${cssList[item].title}</h6>
      <div class="row m-0">
        <input id="${key.name}_${item}_1" class="radioBox" type="radio" name="${key.name}_${item}" value="no" checked>
        <label for="${key.name}_${item}_1" class="radioBox">原處</label>
        <input id="${key.name}_${item}_2" class="radioBox" type="radio" name="${key.name}_${item}" value="right">
        <label for="${key.name}_${item}_2" class="radioBox">往右放</label>
      </div>
    </div>
    `;
  }
  return preHtml;
}
function preHtmlToicon(key, item) {
  let preHtml = '';
  if (item === 'toicon') {
    preHtml += `
    <div class="input_box ${item}">
      <h6 data-css="${cssList[item].css}">${cssList[item].title}</h6>
      ${checkHtml(key.name, item)}
    </div>
    `;
  }
  return preHtml;
}
function preHtmlCountposi(key, item) {
  let preHtml = '';
  if (item === 'countposi') {
    preHtml += `
    <div class="input_box ${item}">
      <h6 data-css="${cssList[item].css}">${cssList[item].title}</h6>
      <div class="row m-0">
        <input id="${key.name}_${item}_1" class="radioBox" type="radio" name="${key.name}_${item}" value="right" checked disabled>
        <label for="${key.name}_${item}_1" class="radioBox">右邊</label>
        <input id="${key.name}_${item}_2" class="radioBox" type="radio" name="${key.name}_${item}" value="left" disabled>
        <label for="${key.name}_${item}_2" class="radioBox">左邊</label>
        <input id="${key.name}_${item}_3" class="radioBox" type="radio" name="${key.name}_${item}" value="top" disabled>
        <label for="${key.name}_${item}_3" class="radioBox">上面</label>
      </div>
    </div>
    `;
  }
  return preHtml;
}
// 巡迴各物件後，將preHtml加到resultHtml上
function blockHtmlCreate(obj, blockArr) {
  // 創一個變數裝所有html的內容
  let resultHtml = '';
  for (let key in obj) {
    // 找csstype的部分
    let cssType = obj[key].csstype;
    // 先創一個變數來裝巡迴後的陣列內容跟Html
    let preHtml = '';
    // 巡迴陣列產生html加到preHtml
    cssType.forEach((item) => {
      // 加上各個preHtml
      preHtml += preHtmlBgc(obj[key], item);
      preHtml += preHtmlOpa(obj[key], item);
      preHtml += preHtmlBdrs(obj[key], item);
      preHtml += preHtmlBd(obj[key], item);
      preHtml += preHtmlSha(obj[key], item);
      preHtml += preHtmlDp(obj[key], item);
      preHtml += preHtmlPosi(obj[key], item);
      preHtml += preHtmlSize(obj[key], item);
      preHtml += preHtmlBgi(obj[key], item);
      preHtml += preHtmlOpen(obj[key], item);
      preHtml += preHtmlFtposi(obj[key], item);
      preHtml += preHtmlToicon(obj[key], item);
      preHtml += preHtmlCountposi(obj[key], item);
    });
    // input跟結尾標籤的html
    // 呼叫preHtml
    resultHtml += `
    <div id="${obj[key].name}" class="container">
      <h2 data-selector="${obj[key].subtitle}">${obj[key].title}</h2>
      <div class="row m-0">
        ${preHtml}
      </div>
    </div>
    `;
  }
  // 抓到生產Html的區塊後加上resultHtml
  document.querySelector(blockArr + ' .enter_block').innerHTML = resultHtml;
}

//----- 建立子選單
function subMenuCreate(obj, blockArr, menuArr) {
  let resultMenu = '';
  let preMenu = '';
  for (let key in obj) {
    preMenu += `<li class="item"><a href="#${obj[key].name}">${obj[key].title}</a></li>`;
  }
  if (obj !== otherList) {
    resultMenu += `<ul class="menu_list"><li class="item"><a href="#review_${menuArr}">預覽</a></li>${preMenu}</ul>`;
  } else {
    resultMenu += `<ul class="menu_list">${preMenu}</ul>`;
  }
  document.querySelector(blockArr + ' .menu_sub').innerHTML = resultMenu;
  return resultMenu;
}

//----- 巡迴menuBlock讓blockHtmlCreate跟subMenuCreate的內容加上各自的contentList
contentList.forEach((item, i) => {
  blockHtmlCreate(item, '#' + menuBlock[i] + '_block');
  subMenuCreate(item, '#' + menuBlock[i] + '_block', menuBlock[i]);
});

// ===== 其他功能 ============================================================ 
//----- 如果圖示化yes則讓未讀位置可操作
// 抓到圖示化的checkbox
let toIconCheckBox = document.querySelector('[name="control_filterstyle_toicon"]');
let countPosiBox = document.querySelectorAll('[name="control_filterstyle_countposi"]');
toIconCheckBox.addEventListener('change', function () {
  // 抓到圖示化的未讀位置的radio box
  // 巡迴radio box並判斷什麼時候disabled是false
  countPosiBox.forEach((item) => {
    if (toIconCheckBox.checked) {
      item.disabled = false;
    } else {
      item.disabled = true;
    }
  });
});

//----- input中可以調整的值(色盤、滑桿)互放到對方上
// 把要抓的class設陣列
let valueCatch = [
  ['.colorBox[type="color"]', '.colorBox[type="text"]'],
  ['.colorBox[type="text"]', '.colorBox[type="color"]'],
  ['.rangeBox[type="range"]', '.rangeBox[type="text"]'],
  ['.rangeBox[type="text"]', '.rangeBox[type="range"]'],
];
// 監聽input事件，然後把值傳到相對應的input中
function valueIn(array) {
  let inputBox = document.querySelectorAll(array[0]);
  let valueBox = document.querySelectorAll(array[1]);
  inputBox.forEach((item, i) => {
    inputBox[i].addEventListener('input', function () {
      // 讓值從input傳至value中
      valueBox[i].value = inputBox[i].value;
      // 讓值傳進去input:text裡時也能加上.no-empty
      if (inputBox[i].getAttribute('type') !== 'text') {
        valueBox[i].classList.add('no-empty');
      }
    });
  });
}
valueCatch.forEach((item) => {
  valueIn(item);
});

//----- 判斷隱藏區塊是否是checked來改變label的文字
// 抓到input:checked
let displayChecked = document.querySelectorAll('input.inputDisplay');
// 巡迴displayChecked
displayChecked.forEach((item, i) => {
  // 抓到要改變的label
  let displayLabel = document.querySelectorAll('label.inputDisplay');
  // 當input:checked狀態改變時，改變label
  item.addEventListener('change', () => {
    if (item.checked) {
      displayLabel[i].textContent = 'YES';
    } else {
      displayLabel[i].textContent = 'NO';
    }
  });
});

//----- 判斷輸入框有無值
// 抓到input
let input = document.querySelectorAll('.input_box input[type="text"]');
// 巡所有的input
input.forEach((item) => {
  // 當輸入內容change時做動作
  item.addEventListener('change', function () {
    // 當input的value不為空值時，加上class，否則移除class
    if (item.value !== '') {
      item.classList.add('no-empty');
    } else {
      item.classList.remove('no-empty');
    }
  });
});

//----- 輸入區的選單切換
// 抓到menuToggle裡面的item
let menuToggle = document.querySelector('.menu_toggle').querySelectorAll('.item');
// 巡所有的item，當item被click時做動作
menuToggle.forEach((item, i) => {
  item.addEventListener('click', function () {
    // 先刪除全部的active class，再加上現在需要的active
    let currentActive = document.querySelector('.menu_toggle').querySelector('.active');
    currentActive.className = currentActive.className.replace(' active', '');
    this.className += ' active';
    // 先刪除全部的display class，再加上現在需要的display
    let currentDisplay = document.querySelector('.main').querySelector('.display');
    currentDisplay.className = currentDisplay.className.replace(' display', '');
    let plusDisplayBlock = document.querySelector('.main').querySelectorAll('.control');
    plusDisplayBlock[i].className += ' display';
  });
});

// ===== css生成部分 ============================================================ 
//----- 色碼轉rgba
function colorToRgba(h = '', alpha = '') {
  // .charAt(i) 在字串中第i個字是什麼
  let noHash = h.charAt(0) == '#' ? h.substring(1, 7) : h;
  // 將16進位換成10進位制
  let hexToR = parseInt(noHash.substring(0, 2), 16);
  let hexToG = parseInt(noHash.substring(2, 4), 16);
  let hexToB = parseInt(noHash.substring(4, 6), 16);
  let rgbaColor = `rgba(${hexToR}, ${hexToG}, ${hexToB}, ${alpha})`;
  // 如果h跟alpha都不是空字串，回傳rgbaColor；如果alpha是空字串h不是，回傳h，否則回傳空字串
  return h !== '' && alpha !== '' ? rgbaColor : h !== '' && alpha === '' ? h : '';
}

//----- 各個css的style值
let bgcStyle = (inputBox) => `${colorToRgba(inputBox[0].value, inputBox[1].value)}`;
let opaStyle = (inputBox) => `${inputBox[0].value}`;
let bdrsStyle = (inputBox, bdrsUnit) => `${inputBox[0].value}${bdrsUnit.value}`;
let bdStyle = (inputBox) => `${inputBox[1].value}px solid ${inputBox[0].value}`;
let shaStyle = (inputBox) => `${inputBox[2].value}px ${inputBox[2].value}px ${inputBox[3].value}px ${colorToRgba(inputBox[0].value, inputBox[1].value)}`;

//----- 抓並產生css
// 把判斷是什麼類型的css並加上code的部分搬出來
function preCssBgc(item, inputBox) {
  // 暫時儲存的變數
  let preCss = '';
  if (item === 'bgc' || item === 'c') {
    if (inputBox[0].value !== '') {
      preCss += `  ${cssList[item].css}: ${bgcStyle(inputBox)};
`;
    }
  }
  return preCss;
}
function preCssOpa(item, inputBox) {
  // 暫時儲存的變數
  let preCss = '';
  if (item === 'opa' && inputBox[0].value !== '') {
    preCss += `  ${cssList[item].css}: ${opaStyle(inputBox)};
`;
  }
  return preCss;
}
function preCssBdrs(item, inputBox, radioValue) {
  // 暫時儲存的變數
  let preCss = '';
  if (item === 'bdrs' && inputBox[0].value !== '') {
    preCss += `  ${cssList[item].css}: ${bdrsStyle(inputBox, radioValue)};
`;
  }
  return preCss;
}
function preCssBd(item, inputBox) {
  // 暫時儲存的變數
  let preCss = '';
  let bdDecide = item === 'bd' && inputBox[0].value !== '' && inputBox[1].value !== '';
  if (bdDecide) {
    preCss += `  ${cssList[item].css}: ${bdStyle(inputBox)};
`;
  }
  return preCss;
}
function preCssSha(item, inputBox) {
  // 暫時儲存的變數
  let preCss = '';
  let shaDecide = item === 'sha' && inputBox[0].value !== '' && inputBox[2].value !== '' && inputBox[3].value !== '';
  if (shaDecide) {
    preCss += `  ${cssList[item].css}: ${shaStyle(inputBox)};
`;
  }
  return preCss;
}
function preCssDp(item, displayValue) {
  // 暫時儲存的變數
  let preCss = '';
  if (item === 'dp' && displayValue.checked) {
    preCss += `  ${cssList[item].css}: none;
`;
  }
  return preCss;
}
function preCssPosi(item, inputBox) {
  // 暫時儲存的變數
  let preCss = '';
  if (item === 'posi' && inputBox[0].value !== '') {
    preCss += `  top: ${inputBox[0].value}%;
`;
  }
  if (item === 'posi' && inputBox[1].value !== '') {
    preCss += `  left: ${inputBox[1].value}%;
`;
  }
  return preCss;
}
function preCssSize(item, inputBox) {
  // 暫時儲存的變數
  let preCss = '';
  if (item === 'size' && inputBox[0].value !== '' && inputBox[1].value !== '') {
    preCss += `  width: ${inputBox[0].value}px;
  height: ${inputBox[1].value}px;
`;
  }
  return preCss;
}
function preCssDcbgi(item, inputBox) {
  // 暫時儲存的變數
  let preCss = '';
  if (item === 'dcbgi' && inputBox[0].value !== '') {
    preCss += `  content: '';
  position: absolute;
  display: block;
  background-repeat: no-repeat;
  ${cssList[item].css}: url("${inputBox[0].value}");
`;
  }
  return preCss;
}
function preCssTlbgi(item, inputBox) {
  // 暫時儲存的變數
  let preCss = '';
  if (item === 'tlbgi' && inputBox[0].value !== '') {
    preCss += `  background-repeat: repeat-x;
  background-position:bottom;
  ${cssList[item].css}: url("${inputBox[0].value}");
`;
  }
  return preCss;
}
// 判斷頻道展開的css
function filterOpenResult() {
  let result = '';
  let filterOpenBox = document.querySelector('[name="control_filterstyle_open"]:checked');
  if (filterOpenBox.value === 'top') {
    result = `/* 頻道向上展開 */
#filter_tab a, #filter_tab:hover a.no_unread {
  height: 25px;
  margin-top: 6px;
  margin-right: 6px;
}
`;
  }
  if (filterOpenBox.value === 'right') {
    result = `/* 頻道向右展開 */
#filter_tab a, #filter_tab:hover a.no_unread {
  height: 25px;
  margin-top: 6px;
  margin-right: 6px;
}
#filter_tab li {
  clear: none;
  width: auto;
}
`;
  }
  return result;
}
// 判斷頻道位置的css
function filterPosiResult() {
  let result = '';
  let filterPosiBox = document.querySelector('[name="control_filterstyle_ftposi"]:checked');
  if (filterPosiBox.value === 'right') {
    result = `/* 頻道往右放 */
.timeline_control {margin-left: 0;}
#timeline_control_holder {width: 100%;}
#updater {left: 10px;}
#filter_tab {padding-right: 20px;}
`;
  }
  return result;
}
// 判斷頻道圖示化與未讀位置的css
function filterCountResult() {
  let result = '';
  let filterToIconCss = `/* 頻道圖示化 */
#filter_tab li {position: relative;}
#filter_tab a {
  width: 30px;
  padding: 0;
  overflow: hidden;
}
#filter_tab a i {
  float: left;
  width: 30px;
  line-height: 25px;
}
#filter_tab a i::before {width: 30px;}
`;
  let filterCountBox = document.querySelector('[name="control_filterstyle_countposi"]:checked');
  if (toIconCheckBox.checked) {
    result = `${filterToIconCss}/* 讓頻道未讀數字出現在右邊 */
#updater {margin-left: 30px;}
#filter_tab a .unread_generic {
  position: absolute;
  top: 0;
  left: 30px;
  height: 25px;
  line-height: 25px;
  margin-top: 6px;
  margin-left: 0;
  padding: 0 4px;
  border-radius: 5px;
}
`;
    if (filterCountBox.value === 'top') {
      result = `${filterToIconCss}/* 讓頻道未讀數字出現在上面 */
#filter_tab a .unread_generic {
  position: absolute;
  top: -14px;
  left: 0;
  width: 30px;
  height: 20px;
  line-height: 20px;
  margin: 0;
  padding: 0;
  border-radius: 5px;
}
`;
    }
    if (filterCountBox.value === 'left') {
      result = `${filterToIconCss}/* 讓頻道未讀數字出現在左邊 */
#filter_tab a .unread_generic {
  position: absolute;
  top: 0;
  left: -30px;
  width: 30px;
  height: 25px;
  line-height: 25px;
  margin-top: 6px;
  margin-left: 0;
  padding: 0 4px;
  border-radius: 5px;
}
`;
    }
  }
  return result;
}
// 巡迴各物件後，依類型生成css，並把preCss加到resultCss上
function preCssCreate(obj) {
  // 創一個變數裝最終css
  let resultCss = '';
  for (let key in obj) {
    // 找csstype的部分
    let cssType = obj[key].csstype;
    // 創一個變數裝巡迴css後產出的內容
    let preCss = '';
    cssType.forEach((item) => {
      // 抓住要擷取value的input
      let inputBox = document.querySelectorAll('input.' + obj[key].name + '_' + item);
      // 抓圓角單位
      let radioValue = document.querySelector('[name="' + obj[key].name + '_' + item + '"]:checked');
      // 抓隱藏 checked
      let displayValue = document.querySelector('[name="' + obj[key].name + '_dp"]');
      // 加上各個preCss
      preCss += preCssBgc(item, inputBox);
      preCss += preCssOpa(item, inputBox);
      preCss += preCssBdrs(item, inputBox, radioValue);
      preCss += preCssBd(item, inputBox);
      preCss += preCssSha(item, inputBox);
      preCss += preCssDp(item, displayValue);
      preCss += preCssPosi(item, inputBox);
      preCss += preCssDcbgi(item, inputBox);
      preCss += preCssSize(item, inputBox);
      preCss += preCssTlbgi(item, inputBox);
    });
    // 如果run出來的preCss不等於空字串時，再產生css
    if (preCss !== '') {
      if (obj[key].hidden) {
        preCss += `  overflow: hidden;
`;
      }
      resultCss += `/* ${obj[key].title} */
${obj[key].subtitle} {
${preCss}}
`;
    }
  }
  // 抓到textarea把resultCss放進去
  return resultCss;
}
// 巡迴contentList，讓每個分頁的css加再一起
function cssCreate() {
  let info = '';
  let result = '';
  contentList.forEach((item) => {
    result += preCssCreate(item);
  });
  // 加上頻道型態的css
  let filterAllCss = filterOpenResult() + filterPosiResult() + filterCountResult();
  // 加上作者資訊跟result
  if (result !== '' || filterAllCss !== '') {
    info = `/**======= Create by Plurk CSS Generator =======**/
/*=====作者噗浪 http://www.plurk.com/hoshikata=====*/

${filterAllCss}${result}`;
  }
  return info;
}

//----- export按下按鈕的行動
let exportArea = document.querySelector('#export_area');
let inputBoxBeChange = document.querySelectorAll('.enter_block input');
let clearBtn = document.querySelector('#clear');
let selectBtn = document.querySelector('#select');
let createBtn = document.querySelector('#create');
// 只要有input發生變化，textarea就會被清除
inputBoxBeChange.forEach((item) => {
  item.addEventListener('change', function () {
    exportArea.value = '';
  });
});
// 清除textarea
clearBtn.addEventListener('click', function () {
  exportArea.value = '';
});
// 全選textarea
selectBtn.addEventListener('click', function () {
  exportArea.select();
});
// 產生css
createBtn.addEventListener('click', function () {
  exportArea.value = cssCreate();
});

// ===== 預覽製作部分 ============================================================ 
// 各個cssType對應review的前處理
function preBgcReview(item, inputBox, reviewBox) {
  if (item === 'bgc') {
    inputBox.forEach((item) => {
      // 當input ghange時發生動作
      item.addEventListener('change', function () {
        if (inputBox[0].value !== '') {
          // 巡迴要改變的預覽後並連動css
          reviewBox.forEach((item) => {
            // 改變預覽的背景顏色
            item.style.backgroundColor = colorToRgba(inputBox[0].value, inputBox[2].value);
          })
        }
      })
    })
  }
}
function preCReview(item, inputBox, reviewBox) {
  if (item === 'c') {
    inputBox.forEach((item) => {
      // 當input ghange時發生動作
      item.addEventListener('change', function () {
        if (inputBox[0].value !== '') {
          // 巡迴要改變的預覽後並連動css
          reviewBox.forEach((item) => {
            // 改變預覽的文字顏色
            item.style.color = colorToRgba(inputBox[0].value, inputBox[2].value);
          })
        }
      })
    })
  }
}
function preOpaReview(item, inputBox, reviewBox) {
  if (item === 'opa') {
    inputBox.forEach((item) => {
      // 當input ghange時發生動作
      item.addEventListener('change', function () {
        if (inputBox[0].value !== '') {
          // 巡迴要改變的預覽後並連動css
          reviewBox.forEach((item) => {
            // 改變預覽的透明度
            item.style.opacity = inputBox[0].value;
          })
        }
      })
    })
  }
}
function preBdrsReview(item, inputBox, reviewBox, radioBox) {
  if (item === 'bdrs') {
    inputBox.forEach((item) => {
      // 當input ghange時發生動作
      item.addEventListener('change', function () {
        // 判斷圓角輸入框不為空，並且px被選中的狀態
        if (inputBox[0].value !== '' && radioBox[0].checked) {
          // 巡迴要改變的預覽後並連動css
          reviewBox.forEach((item) => {
            item.style.borderRadius = inputBox[0].value + radioBox[0].value;
          })
        }
        // 判斷圓角輸入框不為空，並且%被選中的狀態
        if (inputBox[0].value !== '' && radioBox[1].checked) {
          // 巡迴要改變的預覽後並連動css
          reviewBox.forEach((item) => {
            item.style.borderRadius = inputBox[0].value + radioBox[1].value;
          })
        }
      })
    })
  }
}
function preBdReview(item, inputBox, reviewBox) {
  if (item === 'bd') {
    inputBox.forEach((item) => {
      // 當input ghange時發生動作
      item.addEventListener('change', function () {
        if (inputBox[0].value !== '' && inputBox[2].value !== '') {
          // 巡迴要改變的預覽後並連動css
          reviewBox.forEach((item) => {
            // 改變預覽的邊框
            item.style.border = inputBox[2].value + 'px solid ' + inputBox[0].value;
          })
        }
      })
    })
  }
}
function preShaReview(item, inputBox, reviewBox) {
  if (item === 'sha') {
    inputBox.forEach((item) => {
      // 當input ghange時發生動作
      item.addEventListener('change', function () {
        if (inputBox[0].value !== '' && inputBox[4].value !== '' && inputBox[6].value !== '') {
          // 巡迴要改變的預覽後並連動css
          reviewBox.forEach((item) => {
            // 改變預覽的陰影
            item.style.boxShadow = `${inputBox[4].value}px ${inputBox[4].value}px ${inputBox[6].value}px ${colorToRgba(inputBox[0].value, inputBox[2].value)}`;
          })
        }
      })
    })
  }
}
function preDpReview(item, inputBox, reviewBox, displayBox) {
  if (item === 'dp') {
    inputBox.forEach((item) => {
      // 當input ghange時發生動作
      item.addEventListener('change', function () {
        // 如果displayBox有被checked，那display: none，否則不用
        if (displayBox.checked) {
          // 巡迴要改變的預覽後並連動css
          reviewBox.forEach((item) => {
            item.style.display = 'none';
          })
        } else {
          // 巡迴要改變的預覽後並連動css
          reviewBox.forEach((item) => {
            item.style.display = '';
          })
        }
      })
    })
  }
}
function preFilterOpenReview(item, inputBox, radioBox) {
  let addListBox = document.querySelector('#review_tc')
  if (item === 'open') {
    inputBox.forEach((item) => {
      item.addEventListener('change', function () {
        if (radioBox[1].checked) {
          addListBox.classList.remove('filter_open_right')
          addListBox.classList.add('filter_open_top')
        } else if (radioBox[2].checked) {
          addListBox.classList.remove('filter_open_top')
          addListBox.classList.add('filter_open_right')
        } else {
          addListBox.classList.remove('filter_open_top', 'filter_open_right')
        }
      })
    })
  }
}
function preFilterPosiReview(item, inputBox, radioBox) {
  let addListBox = document.querySelector('#review_tc')
  if (item === 'ftposi') {
    inputBox.forEach((item) => {
      item.addEventListener('change', function () {
        if (radioBox[1].checked) {
          addListBox.classList.add('filter_posi_right')
        } else {
          addListBox.classList.remove('filter_posi_right')
        }
      })
    })
  }
}
function preFilterCountReview(item, inputBox, radioBox) {
  let addListBox = document.querySelector('#review_tc')
  if (item === 'countposi') {
    inputBox.forEach((item) => {
      toIconCheckBox.addEventListener('change', function () {
        if (toIconCheckBox.checked && radioBox[0].checked) {
          addListBox.classList.remove('filter_count_left', 'filter_count_top')
          addListBox.classList.add('filter_count_right')
        } else if (toIconCheckBox.checked && radioBox[1].checked) {
          addListBox.classList.remove('filter_count_right', 'filter_count_top')
          addListBox.classList.add('filter_count_left')
        } else if (toIconCheckBox.checked && radioBox[2].checked) {
          addListBox.classList.remove('filter_count_right', 'filter_count_left')
          addListBox.classList.add('filter_count_top')
        } else {
          addListBox.classList.remove('filter_count_right', 'filter_count_left', 'filter_count_top')
        }
      })
      item.addEventListener('change', function () {
        if (toIconCheckBox.checked && radioBox[0].checked) {
          addListBox.classList.remove('filter_count_left', 'filter_count_top')
          addListBox.classList.add('filter_count_right')
        } else if (toIconCheckBox.checked && radioBox[1].checked) {
          addListBox.classList.remove('filter_count_right', 'filter_count_top')
          addListBox.classList.add('filter_count_left')
        } else if (toIconCheckBox.checked && radioBox[2].checked) {
          addListBox.classList.remove('filter_count_right', 'filter_count_left')
          addListBox.classList.add('filter_count_top')
        } else {
          addListBox.classList.remove('filter_count_right', 'filter_count_left', 'filter_count_top')
        }
      })
    })
  }
}
// 巡迴各物件並判斷csstype類型後，依類型監聽input，再把產生的值傳進review進行連動
function preCssReview(obj, menuArr) {
  for (let key in obj) {
    // 找csstype的部分
    let cssType = obj[key].csstype;
    // 抓到review
    let reviewBox = document.querySelectorAll('#review_' + menuArr + ' ' + obj[key].subtitle)
    // 巡迴cssType
    cssType.forEach((item ,i) => {
      // 抓到各cssType的inptu
      let inputBox = document.querySelectorAll('#' + obj[key].name + ' .' + item + ' input');
      // 抓圓角單位
      let radioBox = document.querySelectorAll('[name="' + obj[key].name + '_' + item + '"]')
      // 抓隱藏 checked
      let displayBox = document.querySelector('[name="' + obj[key].name + '_' + item + '"]');
      // 加入各個cssType對應review的前處理
      preBgcReview(item, inputBox, reviewBox)
      preCReview(item, inputBox, reviewBox)
      preOpaReview(item, inputBox, reviewBox)
      preBdrsReview(item, inputBox, reviewBox, radioBox)
      preBdReview(item, inputBox, reviewBox)
      preShaReview(item, inputBox, reviewBox)
      preDpReview(item, inputBox, reviewBox, displayBox)
      preFilterOpenReview(item, inputBox, radioBox)
      preFilterPosiReview(item, inputBox, radioBox)
      preFilterCountReview(item, inputBox, radioBox)
    })
  }
}

contentList.forEach((item, i) => {
  preCssReview(item, menuBlock[i])
})
