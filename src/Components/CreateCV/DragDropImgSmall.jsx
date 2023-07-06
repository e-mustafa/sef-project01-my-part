import React from 'react';
import uploadImg from '../../Images/upload-img.png';

function DragDropImgSmall() {
  return (
    <div>
      <label className="fw-bold text-capitalize mb-2">Company Logo</label>
      <div className="cv-upload-img-container p-2 d-flex flex-column gap-1 align-items-center text-center">
        <div>
          <img src={uploadImg} alt="upload Img" width="62px" />
        </div>

        <h5 className="fw-bold fs-13">
          Drag & drop files or{' '}
          <span className="text-decoration-underline text_primary clickable">
            Browse
          </span>
        </h5>
        <p
          className="fs-10 fw-bold text-secondary d-inline-block m-0"
          style={{ maxWidth: '300px' }}
        >
          Supported formats: JPEG, PNG, GIF. MP4. PDF, PSD, Al, Word, PPT
        </p>
      </div>
    </div>
  );
}

export default DragDropImgSmall;
