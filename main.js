async function getNews(){
    await fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?ENTER API KEY HERE')
    .then(d => d.json())
    .then(response => {
        console.log(response.results);
        for(var i = 0; i < response.results.length; i++){
            const output = document.getElementById('output');
            
            try{
                output.innerHTML += `
                <div class="row">
    <div class="col-md-4 col-sm-6 col-s-12">
                
                    <div class="card">
                    <img class="card-img-top" src="${response.results[i]['media'][0]['media-metadata'][2].url}" class="card-img-top" alt="${response.results[i]['media'][0].caption}" title="${response.results[i]['media'][0].caption}"><br>
                    
                    
                    </div>
                    </div>
                    <div class="col-md-8 col-sm-6">
                    <div class="card-body">
                    <h4 class="card-title">${response.results[i].title}</h4>
                    <div class="card-text">
                        <p>${response.results[i].abstract}</p>
                        <center><button class="btn btn-danger text-white" onclick="window.open('${response.results[i].url}','_self');">Read more</button></center>
                    </div>
                    
                    </div>
                    </div>
                
                    `
                console.log(response.results[i]['media'][0].caption);
            }
            catch(err){
                console.log(err);
            }
            // console.log(response.results[i].title);
            // console.log(i);
        }
        document.getElementById('copyright').innerHTML = response.copyright;
    })
}
getNews();