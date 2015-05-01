import React from 'react';

class Photos extends React.Component {

  _handleLikePhoto(e) {
    this.props.flux.getActions('photo').likePhoto(1);
  };

  render() {
    var photos = this.props.photos.map(function(photo) {
      if (photo.liked) {
        return <li key={photo.id}>I am truthy!</li>;
      } else {
        return <li key={photo.id}>I am falsey!</li>;
      }
    });

    return (
      <div>
        <ul>
          {photos}
        </ul>

        <button onClick={e => this._handleLikePhoto(e)}> Click me </button>
      </div>
    );
  };
}

export default Photos;
