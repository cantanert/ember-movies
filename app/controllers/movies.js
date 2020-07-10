import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import {tracked} from "@glimmer/tracking";
import moviesStaticData from '../statics/movies/movies-static-data'

export default class MoviesController extends Controller {
  @service('search-movie')
  searchMovieService;

  @tracked
  searcResults = null;

  @tracked
  searchInputValue = null;

  @action
  async getMovies(){
    let results = await this.searchMovieService.searchMovieByKeyword(this.searchInputValue);
    this.editImageAndSetState(results);
  }

  editImageAndSetState = (results) => {
    for (let result of results){
      if(!result.poster_path && !result.backdrop_path){
        result.image = moviesStaticData.placeholderImage
      }else if(result.poster_path){
        result.image = moviesStaticData.movieApiImageUrl + result.poster_path
      }else {
        result.image = moviesStaticData.movieApiImageUrl + result.backdrop_path
      }
    }
    this.searcResults = results;
  };
}
