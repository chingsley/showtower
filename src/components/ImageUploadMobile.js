import React from 'react';
import styled from 'styled-components';

const FileArea = styled.div`
  // border: 3px solid yellow;
  @media only screen and (min-width: 600px) {
    display: none;
  }
  width: 100%;
  position: relative;

  & > * {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }

  label {
    // border: 1px solid red;
    display: inline-block;
    margin-bottom: 0.3rem;
    width: 100%;
  }

  label span {
    text-align: center;
    text-transform: none;
    font-weight: 200;
    line-height: 1em;
    font-style: italic;
    opacity: 0.8;
  }

  input[type='file'] {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    cursor: pointer;
  }

  .file-dummy {
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    border: 2px dashed rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    text-align: center;
    transition: background 0.3s ease-in-out;
    cursor: pointer;
    outline: none !important;

    .default,
    .success {
      // border: 1px solid red;
      border-radius: 3px;
      height: 2.5rem;
      line-height: 2.5rem;
      text-align: center;
      text-transform: none;
      // font-weight: 200;
      font-style: italic;
    }

    .default {
      background-color: rgba(235, 47, 6, 1);
      color: white;
    }

    .success {
      border-color: rgba(0, 0, 0, 0.4);
      background-color: rgba(0, 255, 0, 0.3);
      width: 100%;
      height: 100%;
    }
  }

  &:hover .file-dummy {
    background: rgba(255, 255, 255, 0.1);
  }

  input[type='file']:focus + .file-dummy {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline: -webkit-focus-ring-color auto 5px;
  }
`;

class ImageUploadMobile extends React.Component {
  state = {
    file: null,
  };

  handleChange = (e) => {
    if (e.target.files[0]) {
      this.setState({ file: URL.createObjectURL(e.target.files[0]) });
      this.props.handleImageChange(e);
    }
    // setTimeout(() => {
    //   console.log(this.state);
    // }, 3000);
  };
  render() {
    return (
      <FileArea className="form-group file-area">
        <label htmlFor="images">
          <span>select your profile image (optional)</span>
        </label>
        <input
          type="file"
          name="images"
          id="images"
          accept=".png, .jpg, .jpeg"
          onChange={this.handleChange}
        />
        <div className="file-dummy">
          <div className={this.state.file ? 'success' : 'default'}>
            {this.state.file
              ? 'file selected... continue'
              : 'Image must be less than 5MB'}
          </div>
        </div>
      </FileArea>
    );
  }
}

export default ImageUploadMobile;
