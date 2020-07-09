import RESTSerializer from '@ember-data/serializer/rest';

export default class MovieSerializer extends RESTSerializer {
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType){
    payload = { movies : payload.results};
    console.log(payload);
    return this.normalizeArrayResponse(store, primaryModelClass, payload, id, requestType);
  }
}
