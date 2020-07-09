import RESTSerializer from '@ember-data/serializer/rest';

export default class PostSerializer extends RESTSerializer {
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType){
    payload = { posts : payload};
    console.log(payload);
    return this.normalizeArrayResponse(store, primaryModelClass, payload, id, requestType);
  }
}
