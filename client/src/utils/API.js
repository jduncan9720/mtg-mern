import axios from "axios";

export default {
  // Gets all Artistss
  getArtists: function() {
    return axios.get("/api/Artists");
  },
  // Gets the Artists with the given id
  getArtist: function(id) {
    return axios.get("/api/Artists/" + id);
  },
  // Deletes the Artists with the given id
  deleteArtists: function(id) {
    return axios.delete("/api/Artists/" + id);
  },
  // Saves a Artists to the database
  saveArtists: function(ArtistsData) {
    return axios.post("/api/artists", ArtistsData);
  },
  //Saves painting info to artist by artist id
  saveArt: function(artData){
    return axios.post("/api/artists/art", artData)
  }
};
