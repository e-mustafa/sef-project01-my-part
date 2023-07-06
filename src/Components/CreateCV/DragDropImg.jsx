import React from 'react';
import uploadImg from '../../Images/upload-img.png';

function DragDropImg() {
  return (
    <div>
      <h6 className="fw-bold text-capitalize my-4">Personal Photo</h6>
      <div className="cv-upload-img-container p-4 d-flex flex-column gap-3 align-items-center text-center">
        <img src={uploadImg} alt="upload Img" />
        <h5 className="fw-bold">
          Drag & drop files or{' '}
          <span className="text-decoration-underline text_primary clickable">
            Browse
          </span>
        </h5>
        <p
          className="fs-12 fw-bold text-secondary d-inline-block"
          style={{ maxWidth: '300px' }}
        >
          Supported formats: JPEG, PNG, GIF. MP4. PDF, PSD, Al, Word, PPT
        </p>
      </div>
    </div>
  );
}

export default DragDropImg;
