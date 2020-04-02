const INITIAL_STATE = {
  sections: [
    // {
    //   title: 'wineCorks',
    //   imageUrl: 'https://i.ibb.co/sQRbSxr/wineCork.jpg',
    //   id: 1,
    //   linkUrl: 'shop/hats'
    // },
    {
      title: 'jiggers',
      imageUrl: 'https://i.ibb.co/6H0MYKm/jigger.jpg',
      id: 2,
      linkUrl: 'shop/jiggers'
    },
    // {
    //   title: 'shakers',
    //   imageUrl: 'https://i.ibb.co/kG3XcQS/shaker.jpg',
    //   id: 3,
    //   linkUrl: 'shop/hats'
    // },
    {
      title: 'shakersBostonsky',
      imageUrl: 'https://i.ibb.co/xfYQ5bb/shaker-Bostonsky.jpg',
      id: 4,
      linkUrl: 'shop/shakersbostonsky'
    },
    {
      title: 'strainers',
      imageUrl: 'https://i.ibb.co/605XVJ7/strainer.jpg',
      id: 5,
      linkUrl: 'shop/strainers'
    },
    {
      title: 'barSpoons',
      imageUrl: 'https://i.ibb.co/fdfh9nP/baeSpoon.jpg',
      size: 'large',
      id: 6,
      linkUrl: 'shop/barspoons'
    },
    {
      title: 'geysers',
      imageUrl: 'https://i.ibb.co/wzFcVV5/geyser.jpg',
      size: 'large',
      id: 7,
      linkUrl: 'shop/geysers'
    },
    {
      title: 'madlers',
      imageUrl: 'https://i.ibb.co/3pXHmqq/madler.jpg',
      size: 'large',
      id: 8,
      linkUrl: 'shop/madlers'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
