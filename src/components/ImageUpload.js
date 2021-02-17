import React from 'react';

import '../styles/imageUpload.css';

class ImageUpload extends React.Component {
  state = { file: null };

  handleChange = (e) => {
    if (e.target.files[0]) {
      this.setState({
        file: URL.createObjectURL(e.target.files[0]),
      });
      this.props.handleImageChange(e);
    }
  };
  render() {
    return (
      <div className="img-upload-container">
        <div className="avatar-upload">
          <div className="avatar-edit">
            <input
              className="image-upload"
              type="file"
              id="imageUpload"
              accept=".png, .jpg, .jpeg"
              onChange={this.handleChange}
            />
            <label className="img-label" htmlFor="imageUpload"></label>
          </div>
          <div className="avatar-preview">
            <div
              id="imagePreview"
              className="img-preview-container"
              style={{
                backgroundImage:
                  !this.state.file && 'url(http://i.pravatar.cc/500?img=7)',
              }}
            >
              {this.state.file && (
                <img
                  className="img-input-image-preview"
                  src={this.state.file}
                  alt="preview"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageUpload;
