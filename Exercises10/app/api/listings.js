import apiClient from './client';
const endpoint = '/listings';
const getListings = () => apiClient.get(endpoint);
//listing as object
const addListing = (listing, onUploadProgress) => {

    const data = new FormData();
    data.append('title', listing.title);
    data.append('price', listing.price);
    data.append('categoryId', listing.category.value);
    data.append('description', listing.description);

    listing.images.forEach((image, index) =>
        data.append('images', {
            name: 'image' + index,
            type: 'image/jpeg',
            uri: image

        }));
    if (listing.location)
        data.append('location', JSON.stringify(listing.location));

    return apiClient.post(endpoint, data, {
        //access configuration object 
        onUploadProgress: (progress) =>
            onUploadProgress(progress.loaded / progress.total),
    });
};
export default {
    addListing,
    getListings,
};
//content type -> tell server what kind of data send to server
// for example we have send json type data to server so content type is set //application/json
//when uploading file or images use special content type -> //multipart/form-data 
// in apisauce using new FormData to dynamic create content type 

//we using multiple image for loop ot forEach()