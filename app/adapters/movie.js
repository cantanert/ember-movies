import RESTAdapter from '@ember-data/adapter/rest';

export default class MovieAdapter extends RESTAdapter {
  host = 'https://api.themoviedb.org/3'
  pathForType(){
    return 'movie/popular?api_key=70535229d2cd7b8e7129bbdd05eac118'
  }
}
