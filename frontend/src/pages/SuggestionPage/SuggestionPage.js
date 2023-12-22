
import './SuggestionPage.css';

function SuggestionPage() {
  return (
    <>
      <button type="button" className="btn-close" aria-label="Close"></button>

      <div className='boxNoBorder'>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-suggestion-page">
            <li className="breadcrumb-item"><a href="https://google.com" style={{ textDecorationLine: 'none', color: 'var(--product-normal)' }}><p>Trang chủ</p></a></li>
            <li className="breadcrumb-item active" aria-current="page">Đề xuất</li>
          </ol>
        </nav>
      </div>

      <div className="boxSolidBorder">
        <div className="mb-5" style={{ textAlign: 'center' }}>
          <p className="title1"><strong>Gửi đề xuất nhập sách của bạn</strong></p>
        </div>
        <div className="mb-5">
          <label for="tieude" className="form-label"><b>Tiêu đề</b></label>
          <input type="text" className="form-control" id="tieude" placeholder="Nhập tiêu đề..." />
        </div>
        <div className="mb-5">
          <label for="tacgia" className="form-label"><b>Tác giả</b></label>
          <input type="text" className="form-control" id="tacgia" placeholder="Nhập tác giả..." />
          <a href="https://translate.google.com">Thêm tác giả</a>
        </div>
        <div className="mb-5">
          <label for="nhaxuatban" className="form-label"><b>Nhà xuất bản</b></label>
          <input type="text" className="form-control" id="nhaxuatban" placeholder="Nhập nhà xuất bản" />
        </div>
        <div className="mb-5">
          <label for="namxuatban" className="form-label"><b>Năm xuất bản</b></label>
          <input type="text" className="form-control" id="namxuatban" placeholder="Nhập năm xuất bản" />
        </div>
        <div className="mb-5">
          <label for="isbn" className="form-label"><b>Số ID - như ISBN</b></label>
          <input type="text" className="form-control" id="isbn" placeholder="Nhập mã" />
        </div>
        <div className="row justify-content-evenly" style={{ textAlign: 'center' }}>
          <div className="col-4">
            <button type="button" className="btn btn-outline-danger"><b>Hủy bỏ</b></button>
          </div>
          <div className="col-4">
            <button type="button" className="btn btn-outline-primary"><b>Gửi đề xuất</b></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuggestionPage;
