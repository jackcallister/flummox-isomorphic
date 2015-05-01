import React from 'react';
import FluxComponent from 'flummox/component';
import Flux from './flux';
import Photos from './components/photos';

const flux = new Flux();

document.addEventListener('DOMContentLoaded', function() {
  flux.deserialize(document.getElementById('flux-state').value);

  React.render(
    <FluxComponent flux={flux} connectToStores={['photo']}>
      <Photos />
    </FluxComponent>,
    document.getElementById('app')
  );
});
