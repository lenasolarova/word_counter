function main(){
  //list of files to be processed
  //uncomment and fill with google doc files links
  
  //let linkList = ["insert", "google", "docs", "links", "here"];

  Logger.log("List item count: %s", linkList.length.toFixed(0));

  let allDocsCount = 0;

  linkList.forEach((link) => { 
    let document = DocumentApp.openByUrl(link);
    Logger.log("File name: %s", document.getName());
    allDocsCount += counter(document);
    Logger.log("---------------------------------------------------");
  })

  Logger.log("All documents combined have %s char", allDocsCount.toFixed(0));
  Logger.log("All documents combined are %s norm pages long", (allDocsCount / 1800).toFixed(2));
}

function counter(document){
  let bodyText = document.getBody().getText();
  let bodyCharCount = bodyText.length;

  let footerText = document.getFootnotes();
  let footerCharCount = 0;

  footerText.forEach((footer) => {
    footerCharCount += footer.getFootnoteContents().getText().length;
  })

  let documentCharCount = bodyCharCount + footerCharCount;
  
  Logger.log("This document has %s char", documentCharCount.toFixed(0));
  Logger.log("This document is %s norm pages long", ((documentCharCount) / 1800).toFixed(2));

  return (documentCharCount);
}

