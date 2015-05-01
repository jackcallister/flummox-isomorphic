import { Store } from 'flummox';

function findById(array, id) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      return array[i];
    };
  };
};

class PhotoStore extends Store {

  constructor(flux) {
    super();

    const photoActionConstants = flux.getConstants('photo');

    this.register(photoActionConstants.likePhoto, this.handleLikePhoto);

    this.state = {
      photos: [{ id: 1, liked: false }]
    };
  };

  handleLikePhoto(id) {
    // Gross
    var photos = this.state.photos;
    var photo = findById(photos, id);

    photo.liked = true;

    this.replaceState({
      photos: photos
    });
  };
}

PhotoStore.serialize = function(state) {
  return JSON.stringify(state);
};

PhotoStore.deserialize = function(stateString) {
  return JSON.parse(stateString);
};

export default PhotoStore;
