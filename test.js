//var giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=VsCimMLxyvCNn3HEMQfys7kwMQPf190F&q=${randDisp}&limit=25&offset=0&rating=g&lang=en`;
var randUrl = `https://random-word-api.herokuapp.com/word?number=1`;
document.body.style.backgroundColor='#ccffe6';
let container = bootstrap('div','container');
let row = bootstrap('div','row');
let col = bootstrap('div','col-4');

let card = bootstrap('div','card mt-4');
//card.style.margin = '250px 300px';
async function calRand(){
    try{
        var randCall = await fetch(randUrl);
        var randDisp = await randCall.json();
        var giphyCall = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=VsCimMLxyvCNn3HEMQfys7kwMQPf190F&q=${randDisp}&limit=25&offset=0&rating=g&lang=en`);
        var giphyDisp = await giphyCall.json();
        var timedone = giphyDisp.data[0].images.original.url;
        
       
    
    let img = bootstrap('img','card-img-top');
    img.setAttribute('src',`${timedone}`);
    img.style.width= '343px';
    img.style.height= '180px';
    let cardBody = bootstrap('div','card-body');
    let h5 = bootstrap('h5','card-title text-uppercase text-center');
    h5.innerHTML=`${randDisp}`;
    let button = bootstrap('button','btn btn-success');
    //button.style.backgroundColor  = 'green';
    button.innerHTML = 'Refresh';
    button.addEventListener('click',function(){
        location.reload();
    });
    
    cardBody.append(h5,button);
    card.append(img,cardBody);
    col.append(card);
    row.append(col);
    container.append(row);
    document.body.append(container);
    
    
    }catch(err){
        location.reload();
    }
    
}
    calRand();



function bootstrap(elem,elemClass=''){
    let element = document.createElement(elem);
    element.setAttribute('class',elemClass);

    return element;
}

