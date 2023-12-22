
import './Profile.css'

function Profile() {
  return (
    <>
      <div className="boxNoBorder">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb-profile">
            <li className="breadcrumb-item"><a href="https://google.com" style={{ textDecorationLine: 'none', color: 'var(--product-normal)' }}><p>Trang chủ</p></a></li>
            <li className="breadcrumb-item"><a href="https://translate.google.com" style={{ textDecorationLine: 'none', color: 'var(--product-normal)' }}><span>Thông tin cá nhân</span></a></li>
            <li className="breadcrumb-item active" aria-current="page">Thông tin tài khoản</li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-3">
            <div className="row">
              <div className="col-4">
                Image
              </div>
              <div className="col-8">
                <small>Tài khoản của</small>
                <p>Lê Hoàng Anh Vũ</p>
              </div>
            </div>
            <div className="list-group-profile">
              <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                Thông tin tài khoản
              </a>
              <a href="https://google.com" className="list-group-item list-group-item-action">Lịch sử</a>
              <a href="https://translate.google.com" className="list-group-item list-group-item-action">Danh mục ưa thích</a>
              <a href="https://youtube.com" className="list-group-item list-group-item-action">Đề xuất của tôi</a>
            </div>
          </div>
          <div className="col-9" style={{ backgroundColor: 'var(--white)', borderRadius: '5px' }}>
            <p className="title2"><strong>Thông tin tài khoản</strong></p>

            <hr style={{ borderTop: '2px solid' }} />

            <p>THÔNG TIN CÁ NHÂN</p>
            <h1>Image</h1>
            <div className="row">
              <div className="col-6">
                <div className="mb-3">
                  <label for="hovatendem" className="form-label">Họ & tên đệm</label>
                  <input type="text" className="form-control" id="hovatendem" placeholder="Họ & tên đệm" aria-label="Họ & tên đệm" />
                </div>
                <div className="mb-3">
                  <label for="ngaysinh" className="form-label">Ngày sinh</label>
                  <input type="date" className="form-control" id="ngaysinh" />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label for="ten" className="form-label">Tên</label>
                  <input type="text" className="form-control" id="ten" placeholder="Tên" aria-label="Tên" />
                </div>
                <div className="mb-3">
                  <p>Giới tính</p>
                  <input className="form-check-input" type="radio" name="gioitinh" id="nam" />
                  <label className="form-check-label" for="nam">
                    Nam
                  </label>
                  <input className="form-check-input" type="radio" name="gioitinh" id="nu" />
                  <label className="form-check-label" for="nu">
                    Nữ
                  </label>
                  <input className="form-check-input" type="radio" name="gioitinh" id="khac" />
                  <label className="form-check-label" for="khac">
                    Khác
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label for="diachi" className="form-label">Địa chỉ</label>
              <input type="text" className="form-control" id="diachi" placeholder="Địa chỉ" />
            </div>

            <hr />

            <p>SỐ ĐIỆN THOẠI & EMAIL</p>
            <div className="mb-3">
              <label for="sdt" className="form-label">Số điện thoại</label>
              <div className="row">
                <div className="col-6">
                  <input type="tel" className="form-control" style={{ backgroundColor: 'var(--primary-background)' }} id="sdt" placeholder="Số điện thoại" />
                </div>
                <div className="col-2">
                  <button type="button" className="btn btn-outline-primary">Cập nhật</button>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">Email</label>
              <div className="row">
                <div className="col-6">
                  <input type="email" className="form-control" style={{ backgroundColor: 'var(--primary-background)' }} id="email" placeholder="email@gmail.com" />
                </div>
                <div className="col-2">
                  <button type="button" className="btn btn-outline-primary">Cập nhật</button>
                </div>
              </div>
            </div>

            <hr />

            <p>PASSWORD</p>
            <div className="mb-3">
              <button type="button" className="btn btn-outline-primary">Đổi mật khẩu</button>
            </div>

            <hr style={{ borderTop: '2px solid' }} />

            <div className="mb-3" style={{ textAlign: 'center' }}>
              <button type="button" className="btn btn-primary"><b>Lưu thay đổi</b></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
