export const userQuery = userId => {
  return `*[_type == "user" && _id == "${userId}"]`;
};

export const searchQuery = searchTerm => {
  return `*[_type == "pins" && title match "${searchTerm}*" || category match "${searchTerm}*" ||about match "${searchTerm}*"]{
  image {
    asset-> {
      url,
    }
  },
  _id,
  destination,
  postedBy-> {
    userName,
    _id,
    image 
  },
  save[] {
    _key,
    postedBy-> {
      userName,
      _id,
      image 
    }
  }
}
`;
};

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc){
  image {
    asset-> {
      url,
    }
  },
  _id,
  destination,
  postedBy-> {
    userName,
    _id,
    image 
  },
  save[] {
    _key,
    postedBy-> {
      userName,
      _id,
      image 
    }
  }
}
`;
