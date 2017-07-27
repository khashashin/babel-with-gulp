import Post from "./post";
import ui from "./ui.js";

Post.findAll()
  .then(ui.renderPosts)
  .catch( (error) => {
    return console.log(error);
  });
