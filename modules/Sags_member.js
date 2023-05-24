class SportCommentItem { 
    constructor(sport) {
        this.id = sport.id;
        this.name = sport.name;
        this.number = sport.number;
        this.age = sport.age;
        this.ht = sport.ht;
        this.wt = sport.wt;
        this.gp = sport.gp;
        this.ppg = sport.ppg;
        this.rpg = sport.rpg;
        this.apg = sport.apg;
        this.desc = sport.desc;
        this.thumb = sport.thumb;
        this.thumbAlt = sport.alt;
        this.Date = new Date (sport.Date);
    }
    Render() {
        // const now = new Date(); 
        // const timeDiff = now.getTime() - this.publishedDate.getTime(); 
        // const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24)); 
        return  `<article width="200px" id="sportcomment_${this.id}">
                    <div class="bnew ">
                        <div class="divt1">
                            <span >${ this.number }</span>
                            <img  src="${ this.thumb } " alt="1">

                        </div>
                        <div class="divt2" >
                            <a href="team1_member.html?id=${this.id}" style="text-decoration: none; "><h3 class="mt-20" >${ this.name }</h3></a>
                            <ul class="">
                                <li>Age: ${ this.age }</li>
                                <li>HT:${ this.ht } </li>
                                <li>WT:${ this.wt } </li>
                            </ul>
                            <table >

                                <tr>
                                    <th>GP</th>
                                    <th>PPG</th>
                                    <th>RPG</th>
                                    <th>APG</th>
                                </tr>
                                <tr>
                                    <td>${ this.gp }</td>
                                    <td>${ this.ppg } </td>
                                    <td>${ this.rpg }</td>
                                    <td>${ this.apg }</td>
                                </tr>
                            </table>
                        </div>
                    </div>
              
                    </article>`
                
    }
}


export default class SportComment {
    constructor(recentNewsUrl) {
        this._recentNewsList = [];
        this._recentNewsUrl = recentNewsUrl;
        this._lastUpdated = Date.now();
        this._hasChanged = false;
    }
    Upload() { 
        if (this._hasChanged) { 
            fetch(this._recentNewsUrl,
                {
                    method: 'PUT',
                    headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'versioning' : false
                },
                body: JSON.stringify(this._recentNewsList)
            })
                .then(response => { console.log(response.status); })
                .catch(err => { console.log(err) });

            this._hasChanged = false;
        }
    }
    Download(targetElement) {
        console.log("article")
        fetch(`${this._recentNewsUrl}`) 
  
        .then(result => {
            console.log(result, "ressssssu")
            result.json()
                .then( jsob => {
                    console.log(jsob, "jsob")    
                            const filteredArray = jsob.filter ( newsItem =>newsItem.id>0)
                            if (filteredArray.length > 0) { 
                               console.log("urtaa zuv avsaan")
                                gebi(targetElement).insertAdjacentHTML("afterbegin",
                                    
                                    filteredArray
                                        .map(newNews => {
                                            const _newNews = new SportCommentItem(newNews);
                                            this._recentNewsList.push(_newNews);
                                            return _newNews.Render();
                                        })
                                        .reduce((prevVal, curVal) => prevVal + curVal, "")
                                );
                        }
                        
                    
                
                        
                })    
            })
        .catch(err => { console.log(err) });
        
    }
}
// http://localhost:2000/category
// https://api.jsonbin.io/v3/b/646125bfb89b1e22999d9e07
const gebi = id => document.getElementById(id);
const recentNews = new SportComment("http://localhost:2000/category")
console.log(recentNews, "aaaaaaaaaaa")
recentNews.Download("newsjs");
setInterval(()=> recentNews.Download(), 60000)
setInterval(()=> recentNews.Upload(), 15000)
