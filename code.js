function doGet() {
    return HtmlService.createHtmlOutputFromFile('main')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
  }
  