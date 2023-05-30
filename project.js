const title = document.getElementById("title");


fetch('https://dummyjson.com/quotes')
  .then(response => response.json())
  .then( data => {
     const quotes = data['quotes'];
    listQuotes(quotes);
 
    const search = document.getElementById("search");
    search.addEventListener('click', () =>{
      const searchInput = document.getElementById("searchInput").value.toLowerCase();
      let input = searchInput.replace("'", "’");
      const filteredQuotes = quotes.filter(quote => {
      return quote.quote.toLowerCase().includes(input);
      });
      listQuotes(filteredQuotes);
    });
  })
  .catch(error => {
    console.error("Failure to fetch API: " + error);
  });

  

  const listQuotes = (listedQuotes) => {
    const quoteList = document.getElementById("quotes");
    quoteList.innerHTML = "";
    if(listedQuotes.length == 0) {
      return quoteList.innerHTML = `<i>No quotes match your search.</i>`
    }
    listedQuotes.map(quote => {
        quoteList.innerHTML +=`<li>
        "${quote.quote}" 
        <br> - ${quote.author}<br><br>
        </li>`;
    });
 }


 /*function searchQuotes(){
  title.innerHTML += "Working...";
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const test = document.getElementById("test");
  test.innertext +=`<b> Search Input: </b> ${searchInput}`;
  const filteredQuotes = quotes.filter(quote => {
    return quote.quote.toLowerCase().includes(searchInput);
  });

  const quoteList = document.getElementById("quotes");
  quoteList.innerHTML = "";
  filteredQuotes.map(quote => {
      quoteList.innerHTML +=`<li>
      "${quote.quote}" 
      <br> - ${quote.author}<br><br>
      </li>`;
  });
 }*/

