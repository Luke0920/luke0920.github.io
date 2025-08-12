import React from "react";
import LukePhoto from "../../luke.jpeg";
import "../styles/Home.css";

const HomePage = () => {
  const handleClick = () => {
    alert("Hello! This is Luke's page.");
  };

  return (
    <div className="homepage">
      <h1 className="Luke">Luke Cheng Biography</h1>

      {/* 連結區塊 */}
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="https://github.com/Luke0920" target="_blank" rel="noopener noreferrer">
              Luke's Github
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.instagram.com/10357lukie/" target="_blank" rel="noopener noreferrer">
              Luke's Ig Account
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://kvongcmehsanalibrary.wordpress.com/wp-content/uploads/2021/07/harrypotter.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Harry Potter novel
            </a>
          </li>
        </ul>
        </nav>

      {/* 大頭照 */}
      <div className="photo-wrapper">
        <img className="photo" src={LukePhoto} height="250" width="200" alt="Luke" />
        {/* 👤 基本資料 */}
        <section>
        <h2>Basic Information</h2>
        <ul>
          <li>姓名：鄭宇謙（Luke Cheng）</li>
          <li>年齡：23 歲（2025 年）</li>
          <li>手機：0983-575-758</li>
          <li>Email：luke91082396@gmail.com</li>
          <li>居住地：台北市大同區</li>
          <li>駕照：普通重型機車駕照</li>
        </ul>
      </section>
      </div>

      {/* 🎓 學歷 */}
      <section>
        <h2>Experience</h2>
        <ul>
          <li>淡江大學 資訊工程學系（2021/9 ~ 2024/5）</li>
          <li>Indiana University of Pennsylvania, U.S.A. — Computer Science（2023/9 ~ 2024/5）</li>
        </ul>
      </section>

      {/* 🧑‍💼 工作經歷 */}
      <section>
        <h2>工作經歷</h2>
        <ul>
          <li>
            2024/6 ~ 2024/12：擔任桐X科技公司附設科見實習計畫的實習助理,從事英文教學相關工作，在美語補習班使用全英文幫助孩子打造堅實的英文基礎
          </li>
        </ul>
      </section>

      {/* 🛠 技能 */}
      <section>
        <h2>Skills</h2>
        <ul>
          <li>HTML5, CSS3, JavaScript</li>
          <li>React 基本使用</li>
          <li>能獨立完成互動式網頁排版與功能</li>
          <li>熟悉 VS Code 與 Chrome DevTools</li>
        </ul>
      </section>

      {/* ✍️ 自傳簡介 */}
      <section>
        <h2>Introduction</h2>
        <p>
        我是一位對網頁開發充滿興趣的新手學習者，從接觸 HTML 和 CSS 開始，便對前端的結構與畫面呈現感到非常著迷。
        透過網路資源與不斷練習，我目前已具備基本的 HTML、CSS 和 JavaScript 操作能力，能夠獨立完成簡單的網頁排版
        與互動效果。
        在學習的過程中，我特別喜歡「看到成果」的感覺，從一行行程式碼變成實際的畫面，讓我更有動力去深入理解語法與
        原理。為了讓自己能寫出更乾淨、有效率的程式，我也開始嘗試把 JavaScript 中的變數、函式、事件等概念融會貫
        通，並了解基本的開發流程與除錯方式。
        雖然目前還沒接觸進階工具如 Figma 設計稿或 RWD 響應式設計，但我對學習保持高度主動，也已經準備好在未來的
        實務中一步步累積經驗、提升能力。我相信自己的態度與耐心可以彌補經驗上的不足，只要有機會參與實際開發，就能
        快速成長並為團隊帶來貢獻。
        我期盼能在前端領域扎根，從基礎打起，穩定精進，在團隊中持續學習、協作，未來也希望能成為能獨立處理專案的專
        業前端工程師。
        </p>
      </section>

      {/* 📊 表格 */}
      <section>
        <h2>2022 Western Conference Finals</h2>
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>Wins</th>
              <th>Losses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Warriors</td>
              <td>73</td>
              <td>9</td>
            </tr>
            <tr>
              <td>Rockets</td>
              <td>64</td>
              <td>18</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 🔘 互動按鈕 */}
      <section>
        <button onClick={handleClick}>Click me</button>
      </section>

      {/* 📫 聯絡資訊 */}
      <footer>
        <address>
          聯絡人：
          <a href="https://www.instagram.com/10357lukie/" target="_blank" rel="noopener noreferrer">
            Luke
          </a>
          <br />
          Email: <a href="mailto:luke91082396@gmail.com">luke91082396@gmail.com</a>
        </address>
      </footer>
    </div>
  );
};

export default HomePage;
