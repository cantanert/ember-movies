import Model, {attr} from '@ember-data/model';

export default class MovieModel extends Model {
  @attr title;
  @attr overview;
  @attr vote_average;
  @attr backdrop_path;
}
