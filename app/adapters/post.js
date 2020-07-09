import RESTAdapter from '@ember-data/adapter/rest';


export default class PostAdapter extends RESTAdapter {
  host = 'https://jsonplaceholder.typicode.com';
  pathForType(){
    return 'posts'
  }
}
