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
      <section>
        <a href="https://openai.com/zh-Hant/chatgpt/overview/" target="_blank" rel="noopener noreferrer">
          ChatGPT
        </a>
        <br />
        <a href="https://www.instagram.com/10357lukie/" target="_blank" rel="noopener noreferrer">
          Luke (My Instagram account)
        </a>
        <br />
        <a
          href="https://kvongcmehsanalibrary.wordpress.com/wp-content/uploads/2021/07/harrypotter.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Harry Potter novel
        </a>
      </section>

      {/* 大頭照 */}
      <div className="photo-wrapper">
        <img className="photo" src={LukePhoto} height="250" width="200" alt="Luke" />
      </div>

      <hr />

      {/* 👤 基本資料 */}
      <section>
        <h2>基本資料</h2>
        <ul>
          <li>姓名：鄭宇謙（Luke Cheng）</li>
          <li>年齡：23 歲（2025 年）</li>
          <li>手機：0983-575-758</li>
          <li>Email：luke91082396@gmail.com</li>
          <li>居住地：台北市大同區</li>
          <li>駕照：普通重型機車駕照</li>
        </ul>
      </section>

      {/* 🎓 學歷 */}
      <section>
        <h2>學歷</h2>
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
            2024/6 ~ 2024/12：擔任桐X科技公司附設科見實習計畫的實習助理,從
          </li>
        </ul>
      </section>

      {/* 🛠 技能 */}
      <section>
        <h2>技能與專長</h2>
        <ul>
          <li>HTML5, CSS3, JavaScript</li>
          <li>React 基本使用</li>
          <li>能獨立完成互動式網頁排版與功能</li>
          <li>熟悉 VS Code 與 Chrome DevTools</li>
        </ul>
      </section>

      {/* ✍️ 自傳簡介 */}
      <section>
        <h2>自我介紹</h2>
        <p>
          我是一位對前端開發充滿熱情的新手學習者，從接觸 HTML 和 CSS 開始，就喜歡上畫面設計與結構排版。
          為了讓功能與視覺更完整，我學習了 JavaScript 和 React，並能獨立完成基礎互動網頁。儘管尚未接觸 Figma
          與 RWD，但我學習積極、能主動補強不足，希望在未來的職場中，持續精進成為能獨當一面的工程師。
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
