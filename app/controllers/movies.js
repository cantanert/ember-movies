import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import {tracked} from "@glimmer/tracking";

export default class MoviesController extends Controller {
  @service('search-movie')
  searchMovieService;

  @tracked
  searcResults = null;

  @tracked
  searchInputValue = null;

  @action
  async sendRequest(){
    this.searcResults = await this.searchMovieService.searchMovieByKeyword(this.searchInputValue);
  }

}
