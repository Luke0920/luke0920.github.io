import React from "react";
import LukePhoto from "../../luke.jpeg";
import "../styles/Home.css";

const HomePage = () => {
  return (
    <div>
      <h1 className="Luke">Luke Cheng Biography</h1>

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
      <br />

      <img className="photo" src={LukePhoto} height="250" width="200" alt="Luke" />
      <hr />

      {/* 自我介紹 */}
      <span>About Me</span>
      <ul>
        <li>活潑</li>
        <li>外向</li>
      </ul>

      {/* 表格 */}
      <table>
        <thead>
          <tr>
            <th colSpan="3">2022 Western Conference Finals</th>
          </tr>
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

      <button>click me</button>

      <footer>
        <address>
          聯絡人：
          <a href="https://www.instagram.com/10357lukie/" target="_blank" rel="noopener noreferrer">
            Luke
          </a>
          <br />
          Email: luke91082396@gmail.com
        </address>
      </footer>
    </div>
  );
};

export default HomePage;
