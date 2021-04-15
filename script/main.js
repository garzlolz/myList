var data = 
    {
        api:[
                {
                    name:'全台口罩剩餘數量',
                    desciption:'利用政府的開放資訊做成的全台口罩剩餘數量資訊網，可以查詢市區、行政區',
                    link:'https://garzlolz.github.io/mask_api/'
                },
                {
                    name:'高雄旅遊資訊網',
                    desciption:'以高雄市政府開放資訊的json檔作為來源，以地址、開放時間、地點、圖片等方式呈現',
                    link:'https://garzlolz.github.io/KaohsiungTravel/'
                },
            ],
        personal:[
                {
                     name:'施宏勳的blog',
                     desciption:'施宏勳的個人blog，記錄生活、以及工作還有學習',
                     link:'https://garzlolz.github.io/blog/'
                },
                {
                     name:'施宏勳的自我介紹卡',
                     desciption:'小字介卡，以英文的方式呈現',
                     link:'https://garzlolz.github.io/'
                }
                ],
        counter:[
                {
                    name:'BMI計算機',
                    desciption:'以JS和CSS為練習的BMI計算機，以localstorage的方式儲存',
                    link:'https://garzlolz.github.io/bmi-calculator/index.html'
                },
                {
                    name:'Vue練習＿匯率計算機',
                    desciption:'以v-model作為練習的匯率轉換',
                    link:'https://garzlolz.github.io/Vue-exchange-rate/'
                },
                {
                    name:'Google App Script實作 [google sheet] 多國翻譯',
                    desciption:'以google表單與app script連結能同時翻譯多國語言以及點擊後有語音',
                    link:'https://docs.google.com/spreadsheets/d/1np0ja9l5TQ9bniatg5YOppqVcEZRDK-AWyyfNPBvVTU/edit?usp=sharing'
                }
                ]
    }



var mySelf = document.querySelector('.personal');
var apiPrac = document.querySelector('.api');
var count =document.querySelector('.count');


var list1='';
var list2='';
var list3='';

for(let i=0;i<data.personal.length;i++){
    list1+=`
        <li><a href="${data.personal[i].link}">${data.personal[i].name}</a></li>
        <div><em>${data.personal[i].desciption}</em></div>
    `
    mySelf.innerHTML = list1;
};
for(let i=0;i<data.api.length;i++){
    list2+=`<li><a href="${data.api[i].link}">${data.api[i].name}</a></li>
        <div><em>${data.api[i].desciption}</a></em></div>`;
    apiPrac.innerHTML = list2;
};

for(let i=0;i<data.counter.length;i++){
    list3+= `
    <li><a href="${data.counter[i].link}">${data.counter[i].name}</a></li>
    <div><em>${data.counter[i].desciption}</em></div>
    `
    count.innerHTML = list3;
}

