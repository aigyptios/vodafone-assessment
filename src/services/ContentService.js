class ContentService {

  constructor() {
    this.cache = {};
  }

  getPageContent( resourceURL ) {
    if ( !this.cache[ resourceURL ] ) {
      this.cache[ resourceURL ] = fetch( resourceURL ).then( res => res.json() )
    }
    return this.cache[ resourceURL ];
  }

}

export default new ContentService();