import React from "react";

const AddPost = () => {
  return (
    <div className="center-wrapper">
      <div className="small-title">Your new post! Simply text, add photo and publish.</div>
      <div className="border-bottom"></div>
      <form className="form-post">
        <label className="label-post">Title:</label>
        <input className="input-post" type="text" placeholder="The quick, brown fox jumps" />

        <label className="label-post">Text:</label>
        <div className="under-label">up to 1500 char</div>
        <textarea rows="20" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." />
        
        <label className="label-post">Photo:</label>
        <input className="input-post" type="text" placeholder="photo url" />

        <div className="bottom-post">
          <div className="user-group">
            <img src="/assets/images/3b0045c9cc47b640ddcb43d6d06d1379.png" />
            <div className="user-name-green">John Goodboy</div>
          </div>
          <button className="btn btn-green" type="submit">Publish</button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
