class SportCommentItem { 
    constructor(sport) {
        this.id = sport.id;
        this.name = sport.name;
        this.title = sport.title;
        this.thumb = sport.thumb;
        this.thumbAlt = sport.alt;
        this.publishedDate = new Date (sport.publishedDate);
        this.views = sport.views;
    }
    Render() {
        const now = new Date(); 
        const timeDiff = now.getTime() - this.publishedDate.getTime(); 
        const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24)); 
        return  `<article width="200px" id="sportcomment_${this.id}">
                    <img style=""src="${ this.thumb } " alt="zurag" class="sportCom-thumb"/>
                    <div class="sportCom-text">
                        <p class="sportCom-title" contenteditable="true" id="recentnews_title_${this.id}"><span>${ this.title }</span>:  ${ this.title }</p>
                        <div class="sportCom-flex">
                            <div class="sportCom-views">Үзэлт:${ this.views } </div>
                            <div class="sportCom-day">${dayDiff} өдрийн өмнө </div>
                            
                        </div>
                        <a href="#" >More...</a>
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
        fetch(`${this._recentNewsUrl}/latest`)
        .then( result => {
            result.json()
                .then( jsob => {
                    console.log(jsob, "jsob")    
                            const filteredArray = jsob.record.filter ( newsItem =>newsItem.views>10)
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


const gebi = id => document.getElementById(id);
const recentNews = new SportComment("https://api.jsonbin.io/v3/b/643952b5ebd26539d0ab1c14")
recentNews.Download("newsjs");
setInterval(()=> recentNews.Download(), 60000)
setInterval(()=> recentNews.Upload(), 15000)
