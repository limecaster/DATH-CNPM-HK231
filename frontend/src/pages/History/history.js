
import './History.css';

function History() {
    return (
        <>
            <div className="boxNoBorder">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb-history">
                        <li className="breadcrumb-item"><a href="https://google.com" style={{textDecorationLine: 'none', color: 'var(--product-normal)'}}><p>Trang chủ</p></a></li>
                        <li className="breadcrumb-item"><a href="https://translate.google.com" style={{textDecorationLine: 'none', color: 'var(--product-normal)'}}><span>Thông tin cá nhân</span></a></li>
                        <li className="breadcrumb-item active" aria-current="page">Lịch sử</li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-3">
                        <div className="row">
                            <div className="col-3">
                                Image
                            </div>
                            <div className="col-9">
                                <small>Tài khoản của</small>
                                <p className='headline'>Lê Hoàng Anh Vũ</p>
                            </div>
                        </div>
                        <div className="list-group-history">
                            <a href="https://google.com" className="list-group-item list-group-item-action">Thông tin tài khoản</a>
                            <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
                                Lịch sử
                            </a>
                            <a href="https://translate.google.com" className="list-group-item list-group-item-action">Danh mục ưa thích</a>
                            <a href="https://youtube.com" className="list-group-item list-group-item-action">Đề xuất của tôi</a>
                        </div>
                    </div>
                    <div className="col-9" style={{border: '1px solid black', borderRadius: '5px', paddingTop: '2%', paddingRight: '8%', paddingBottom: '10%', paddingLeft: '8%'}}>
                        <div className="mb-5"><p class="title2"><strong>Sách của bạn</strong></p></div>
                        <div className="mb-4"><a href="https://google.com" style={{color: 'black'}}><b>Lịch sử mượn, trả sách</b></a></div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-6"><p>Ngày phải trả sách gần nhất:</p></div>
                                <div className="col-3" style={{color: 'var(--red-normal)'}}><p>20/10/2023</p></div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-6"><p>Tổng sách chưa trả:</p></div>
                                <div className="col-3" style={{color: 'var(--green-normal)'}}><p>2</p></div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-6"><p>Tổng sách đã trả:</p></div>
                                <div className="col-3" style={{color: 'var(--green-normal)'}}><p>18</p></div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-6"><p>Tổng sách đã mượn:</p></div>
                                <div className="col-3" style={{color: 'var(--green-normal)'}}><p>20</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default History;
