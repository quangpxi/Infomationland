
import React, { useState } from 'react';
import AppHeader from './AppHeader.js'; // Đường dẫn có thể cần điều chỉnh tùy vào cấu trúc thư mục của bạn

import './App.css'; // Make sure this is your main CSS file

function App() {
  const [activeSection, setActiveSection] = useState(1);

  const navigationItems = [
    { id: 1, label: 'Chủ sở hữu' },
    { id: 2, label: 'Thửa đất' },
    { id: 3, label: 'Nhà ở' },
    { id: 4, label: 'Công trình xây dựng khác' },
     { id: 5, label: 'Rừng sản xuất là rừng trồng' },
     { id: 6, label: 'Cây lâu năm' },
     { id: 7, label: 'Ghi chú' },
     { id: 8, label: 'Sơ đồ thửa đất' },
    // Add other sections as necessary
  ];

  const handleNavigationClick = (id) => {
    setActiveSection(id);
  };

  return (
    <div className="App">
     {/* <Header /> */}
     < AppHeader/> {/* Updated Header Component */}
      <NavigationMenu items={navigationItems} activeSection={activeSection} onNavigate={handleNavigationClick} />
      <ContentArea activeSection={activeSection} />
      <Footer activeSection={activeSection} onNavigate={handleNavigationClick} />
    </div>
  );
}
// phần header copy


  // All the previously detailed logic for handling login, logout, and menu interaction

  // Header layout with Ant Design components and custom styling
  // Make sure to replace 'CustomSearch' with a valid component or remove it if not applicable
  // The detailed code as provided in the previous instruction

// phần header copy
// function Header() {
   
//   return (
//     <header className="App-header">
//          <img src="/path-to-your-logo.png" alt="Logo" className="App-logo"/>
//          <nav className="Block-left">
//            <a href="/">Trang Chủ</a>
//            <a href="/buy-sell">Mua Bán</a>
//            <a href="/lookup">Tra cứu</a>
//            <a href="/digitalize-assets">Số Hóa Tài Sản</a>
//            <a href="/user-management">Quản Lý Người Dùng</a>
//            <a href="/asset-list">Danh Sách Tài Sản</a>
//            <img src="/path-to-notary-logo.png" alt="Notary Logo" className="Notary-logo"/>
//            <a href="/notary">Công chứng viên </a>
//            {/* Add your notification and personal logos here */}
//          </nav>
//     </header>
//   );
// }

function NavigationMenu({ items, activeSection, onNavigate }) {
  return (
    <nav className="Navigation-menu">
      {items.map((item) => (
        <div key={item.id} className={`Navigation-item ${activeSection === item.id ? 'active' : ''}`} onClick={() => onNavigate(item.id)}>
          <span className="circle">{activeSection === item.id ? '✓' : item.id}</span> - {item.label}
        </div>
      ))}
    </nav>
  );
}

function ContentArea({ activeSection }) {
  switch (activeSection) {
    case 1:
      return <OwnerContent />;
    case 2:
      return <LandPlotContent />;
    case 3:
      return <Housing />;
    
    default:
      return <div>Select a section</div>;
  }
}

function OwnerContent() {
  // Owner content from the original question
  return( 
  <main className="Owner-info">
         <div className="Owner-information">
          <div> <label>Địa chỉ chủ sở hữu 1</label></div>
           <select >{}
        <option value="">--Tên chủ sở hữu--</option>
        <option value="name1">Vũ Văn quang</option>
        <option value="name2">đức</option>
        <option value="name3">tín</option>
        <option value="name4">chinh </option>
        <option value="name5">hoàng</option>
        <option value="name6">name</option>
           
    </select>
           <div className="Buttons">
             <button className="Add-owner">+ Thêm người sở hữu</button>
             <button className="Remove-owner">- Xóa</button>
           </div>
         </div>
       </main>
  );
}

function LandPlotContent() {
  return (
    <main className="Content">
      <div>
        <label>Thửa đất số</label>
        <input type="text" />
        <label>Tờ bản đồ số</label>
        <input type="text" />
      </div>
      <div>
        <label>Địa chỉ</label>
        <input type="text" />
      </div>
      <div>
        <label>Diện tích sử dụng chung</label>
        <input type="text" />
        <label>Diện tích sử dụng riêng</label>
        <input type="text" />
        <label>Thời gian sử dụng</label>
        <input type="text" />
      </div>
      <div>
        <label>Mục đích sử dụng</label>
        <input type="text" />
        </div>
        <div>
          <label>Nguồn gốc sử dụng</label>
          <input type="text" />
        </div>
    
    </main>
  );
}

function Housing() {
  return (
    <main className="Content-info">
      <div>
        <label>Loại nhà ở</label>
        <input type="text" />
      </div>
      <div>
        <label>Địa chỉ</label>
        <input type="text" />
      </div>
      <div>
        <label>Diện tích xây dựng</label>
        <input type="text" />
        <label>Diện tích sàn</label>
        <input type="text" />
        
      </div>
      <div>
        <label>Cấp (Hạng)</label>
        <input type="text" />
        <label>Số tầng</label>
        <input type="text" />
        </div>
        <div>
        <label>Hình thức sở hữu</label>
        <input type="text" />
        <label>Thời gian sở hữu</label>
        <input type="text" />
        </div>
    </main>
  );
}


function Footer({ activeSection, onNavigate }) {
  const navigatePrevious = () => {
    if (activeSection > 1) {
      onNavigate(activeSection - 1);
    }
  };

  const navigateNext = () => {
    if (activeSection < 8) { // Assuming you have 8 sections
      onNavigate(activeSection + 1);
    }
  };

  return (
    <footer className="App-footer">
      <button className="Previous Button" onClick={navigatePrevious}>Quay lại</button>
      <button className="Next Button" onClick={navigateNext}>Tiếp theo</button>
    </footer>
  );
}

export default App;
