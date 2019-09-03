import FirebaseConnect from "./../FirebaseConnect";

const  storageRef = FirebaseConnect.storage();
const imageStorageRef = storageRef.ref('images');

function saveImage (image) {
  return imageStorageRef.child(`${+(new Date())}-${image.name}`).put(image);
}

export const StorageService = {
  saveImage: saveImage
};



