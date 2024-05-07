import dd from "../../IMG/dd.png";
import "./proyectos.css";
import js from '../../componenets/Skills/svg/js';
import Nextjs from "../Skills/svg/Nextjs";
import J from "../Skills/svg/j";
import React from "../Skills/svg/React";
import Nodejs from "../Skills/svg/Nodejs";
import Git from "../Skills/svg/Git";
import Github from "../Skills/svg/Github";
import CSS3 from "../Skills/svg/css";
import Redux from "../Skills/svg/Redux";
import JSLogo from "../Skills/svg/js";
import HTML from "../Skills/svg/Html";
import Typescript from "../Skills/svg/Typescript";
 
export const Proyectos = () => {
  return (
    <div>
      <div className="band">
        <div className="item-1">
          <a href="https://goldshop-ue.com/" className="card">
            <div
              className="thumb"
              style={{
                backgroundImage:
                  "url(https://maxicacciamano.vercel.app/static/media/Goldshop.2704473165b41fb07e5f.png)",
                // backgroundSize: 'cover'
              }}
              // style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg);"
            ></div>
            <article>
              <h1>GoldShopue</h1>
              <span>Ecoomerce</span>
              <svg
                style={{ display: "grid" }}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>WordPress</title>
                <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" />
              </svg>
            </article>
          </a>
        </div>
        <div className="item-2">
          <a href="https://tateti-xi-eight.vercel.app" className="card">
            <div
              className="thumb"
              style={{
                backgroundImage:
                  "url(https://github.com/MaxiCacciamano/tateti/blob/main/src/assets/tateti.png?raw=true)",
              }}
              // style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png);"
            ></div>
            <article>
              <h1>TATETI</h1>
              {/* <span>Single page aplication</span> */}
              <div className="share">
              <a>
                  <JSLogo/>
                </a>
                <a>
                  <HTML/>
                </a>
                <a>
                  <React/>
                </a>
                <a>
                  <Nodejs/>
                </a>
                <a>
                  <Git/>
                </a>
                <a>
                  <Github/>
                </a>
                <a>
                  <CSS3/>
                </a>
                <a>
                  <Redux/>
                </a>
              </div>
            </article>
          </a>
        </div>
        <div className="item-3">
          <a href="https://maaxflix.netlify.app/" className="card">
            <div
              className="thumb"
              // style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-5.jpg);"
              style={{
                backgroundImage:
                  "url(https://github.com/MaxiCacciamano/Portfolio-3.0/blob/main/src/IMG/maxFlix.png?raw=true)",
              }}
            ></div>
            <article>
              <h1>MaxFlix</h1>
              {/* <p>
                                Clone Netflix!{" "}
                            </p> */}
              <span>Clone Netflix! </span>
              <div className="share">
                <a href="">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>JavaScript</title>
                    <path
                      fill="#b9ccb4"
                      d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
                    />
                  </svg>
                </a>
                <a href="">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>HTML5</title>
                    <path
                      fill="#b9ccb4"
                      d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
                    />
                  </svg>
                </a>
                <a href="">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Sequelize</title>
                    <path
                      fill="#b9ccb4"
                      d="M12.0264 0 1.5947 5.9922v12.0156L12.0264 24l10.3789-5.9922V5.9922L12.0264 0zm-.0274 3.4844 7.4297 4.2266v8.5781l-7.4297 4.2266-7.3476-4.1817-.0801-8.623 7.4277-4.2266zm.0489.5898c-.9765.5627-1.9519 1.1274-2.9277 1.6914v.2539l2.6074 1.5234v.4824c.1355-.0781.2616-.1511.4023-.2324l.2559.1504v-.3359c.8844-.5068 1.8073-1.0412 2.5684-1.4805.0035-.1232.0027-.2534.0039-.373-.9703-.5596-1.9403-1.1197-2.9102-1.6797zM8.335 6.1387c-.9705.553-1.9312 1.1228-2.8926 1.6914v3.4023c.965.5553 1.9287 1.1127 2.8926 1.6699l.4023-.2324v-2.916c.8561-.4945 1.7522-1.0126 2.4902-1.4395v-.4843L8.335 6.1387zm7.4433.0879-2.8926 1.6699v.3379l2.6367 1.541v3.0664c.0854.0494.1705.0991.2559.1484l2.8926-1.6699V7.918l-2.8926-1.6914zm-3.6484 2.1445c-.9636.5584-1.9281 1.1151-2.8926 1.6719v3.4238c.965.5553 1.9287 1.1127 2.8926 1.6699l2.8926-1.6719v-3.4023l-2.8926-1.6914zm-6.1973 3.7227c-.1627.0962-.3275.1889-.4902.2852v3.4023c.9643.5571 1.9284 1.1145 2.8926 1.6719l.4023-.2324v-2.918c.1625-.0939.3086-.1787.4727-.2734-.1629-.0945-.3047-.1763-.4727-.2734v-.508l-.4023.2325c-.8251-.4771-1.6902-.976-2.4024-1.3867zm12.2481.0859-2.4023 1.3887c-.088-.0509-.1672-.0972-.2559-.1484v.334l-.4922.2852.4922.2871v3.0664c.0854.0494.1705.0991.2559.1484l2.8926-1.6719v-3.4023l-.4903-.2872zm-8.4688 2.1387c-.1581.0913-.3165.1821-.4746.2734v3.4238c.9637.5575 1.9282 1.1136 2.8926 1.6699l2.8926-1.6699v-3.4023l-.4902-.2871-2.4023 1.3887c-.8307-.4804-1.7013-.9829-2.4181-1.3965z"
                    />
                  </svg>
                </a>
                <a href="">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>React</title>
                    <path
                      fill="#b9ccb4"
                      d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
                    />
                  </svg>
                </a>
                <a>
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Node.js</title>
                    <path
                      fill="#b9ccb4"
                      d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"
                    />
                  </svg>
                </a>
                <a>
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Git</title>
                    <path
                      fill="#b9ccb4"
                      d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"
                    />
                  </svg>
                </a>
                <a>
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path
                      fill="#b9ccb4"
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                    />
                  </svg>
                </a>
                <a>
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>CSS3</title>
                    <path
                      fill="#b9ccb4"
                      d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
                    />
                  </svg>
                </a>
                <a>
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Redux</title>
                    <path
                      fill="#b9ccb4"
                      d="M16.634 16.504c.87-.075 1.543-.84 1.5-1.754-.047-.914-.796-1.648-1.709-1.648h-.061a1.71 1.71 0 00-1.648 1.769c.03.479.226.869.494 1.153-1.048 2.038-2.621 3.536-5.005 4.795-1.603.838-3.296 1.154-4.944.93-1.378-.195-2.456-.81-3.116-1.799-.988-1.499-1.078-3.116-.255-4.734.6-1.17 1.499-2.023 2.099-2.443a9.96 9.96 0 01-.42-1.543C-.868 14.408-.416 18.752.932 20.805c1.004 1.498 3.057 2.456 5.304 2.456.6 0 1.23-.044 1.843-.194 3.897-.749 6.848-3.086 8.541-6.532zm5.348-3.746c-2.32-2.728-5.738-4.226-9.634-4.226h-.51c-.253-.554-.837-.899-1.498-.899h-.045c-.943 0-1.678.81-1.647 1.753.03.898.794 1.648 1.708 1.648h.074a1.69 1.69 0 001.499-1.049h.555c2.309 0 4.495.674 6.488 1.992 1.527 1.005 2.622 2.323 3.237 3.897.538 1.288.509 2.547-.045 3.597-.855 1.647-2.294 2.517-4.196 2.517-1.199 0-2.367-.375-2.967-.644-.36.298-.96.793-1.394 1.093 1.318.598 2.652.943 3.94.943 2.922 0 5.094-1.647 5.919-3.236.898-1.798.824-4.824-1.47-7.416zM6.49 17.042c.03.899.793 1.648 1.708 1.648h.06a1.688 1.688 0 001.648-1.768c0-.9-.779-1.647-1.693-1.647h-.06c-.06 0-.15 0-.226.029-1.243-2.098-1.768-4.347-1.572-6.772.12-1.828.72-3.417 1.797-4.735.9-1.124 2.593-1.68 3.747-1.708 3.236-.061 4.585 3.971 4.689 5.574l1.498.45C17.741 3.197 14.686.62 11.764.62 9.02.62 6.49 2.613 5.47 5.535 4.077 9.43 4.991 13.177 6.7 16.174c-.15.195-.24.539-.21.868z"
                    />
                  </svg>
                </a>
              </div>
            </article>
          </a>
        </div>
        <div className="item-4">
          <a href="https://e-comerce-max-pay.vercel.app/" className="card">
            <div
              className="thumb fost"
              style={{
                backgroundImage:"url(https://github.com/MaxiCacciamano/Portfolio-3.0/blob/main/src/IMG/ecomm.png?raw=true)",
              }}
            ></div>
            <article>
              <h1>Ecoomerce</h1>
              <div className="share">
              <a>
                  <JSLogo/>
                </a>
                <a>
                  <HTML/>
                </a>
                <a>
                  <React/>
                </a>
                <a>
                  <Nodejs/>
                </a>
                <a>
                  <Git/>
                </a>
                <a>
                  <Github/>
                </a>
                <a>
                  <CSS3/>
                </a>
                <a>
                  <Redux/>
                </a>
              </div>
            </article>
          </a>
        </div>
        <div className="item-1">
          <a href="https://age-calculator-app-theta-puce.vercel.app" className="card">
            <div
              className="thumb"
              style={{
                backgroundImage:
                  "url(https://github.com/MaxiCacciamano/AgeCalculatorApp/blob/main/src/assets/img/2024-03-23_19h58_41.png?raw=true)",
              }}
            ></div>
            <article>
              <h1>Age calculator - Challege</h1>
              <span>App</span>
              <div className="share">
              <a>
                  <JSLogo/>
                </a>
                <a>
                  <HTML/>
                </a>
                <a>
                  <React/>
                </a>
                <a>
                  <Nodejs/>
                </a>
                <a>
                  <Git/>
                </a>
                <a>
                  <Github/>
                </a>
                <a>
                  <CSS3/>
                </a>
                <a>
                  <Redux/>
                </a>
              </div>
            </article>
          </a>
        </div>
        <div className="item-6">
          <a
            href="https://calcdolar.vercel.app"
            className="card"
          >
            <div
              className="thumb"
              // style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flor.jpg);"
              style={{
                backgroundImage:
                  "url(https://github.com/MaxiCacciamano/calcdolar/blob/Maxi/src/assets/IMG/2024-03-23_20h10_10.png?raw=true)",
                backgroundSize:"500px"
              }}
            ></div>
            <article>
              <h1>Calculator Dolar</h1>
              {/* <p>App desarrollada con lenguaje React native</p> */}
              <span>App</span>
              <div className="share">
                <a>
                  <JSLogo/>
                </a>
                <a>
                  <HTML/>
                </a>
                <a href="#">
                <Nextjs/>
                </a>
                <a>
                  <React/>
                </a>
                <a>
                  <Nodejs/>
                </a>
                <a>
                  <Git/>
                </a>
                <a>
                  <Github/>
                </a>
                <a>
                  <CSS3/>
                </a>
                <a>
                  <Redux/>
                </a>
                <a>
                  <J/>
                </a>
                <a>
                  <Typescript/>
                </a>
              </div>
              <div className="app"></div>
            </article>
          </a>
        </div>
        <div className="item-7">
          <a href="https://advice-pied-mu.vercel.app" className="card">
            <div
              className="thumb"
              style={{ backgroundImage: "url(https://github.com/MaxiCacciamano/advice/blob/main/src/assets/IMG/2024-03-23_21h56_52.png?raw=true)" }}
            ></div>
            <article>
              <h1>Advice - Challege</h1>
              <div className="share">
              <a>
                  <JSLogo/>
                </a>
                <a>
                  <HTML/>
                </a>
                <a>
                  <React/>
                </a>
                <a>
                  <Nodejs/>
                </a>
                <a>
                  <Git/>
                </a>
                <a>
                  <Github/>
                </a>
                <a>
                  <CSS3/>
                </a>
                <a>
                  <Redux/>
                </a>
              </div>

              <div className="app"></div>
            </article>
          </a>
        </div>
        <div className="item-8">
          <a
            href="https://fast-burguer.vercel.app"
            className="card"
          >
            <div
              className="thumb fast"
              style={{
                backgroundImage:"url(https://github.com/MaxiCacciamano/Cracken-dev/blob/main/src/IMG/fast.png?raw=true)",
                backgroundSize:"cover"
                
              }}
            ></div>
            <article>
              <h1>Fast Burger</h1>
              <div className="share">
              <a>
                  <JSLogo/>
                </a>
                <a>
                  <HTML/>
                </a>
                <a>
                  <React/>
                </a>
                <a>
                  <Nodejs/>
                </a>
                <a>
                  <Git/>
                </a>
                <a>
                  <Github/>
                </a>
                <a>
                  <CSS3/>
                </a>
                <a>
                  <Redux/>
                </a>
                <a>
                  <J/>
                </a>
              </div>
            </article>
          </a>
        </div>
        <div className="item-1">
          <a
            href="https://proyect-colors.vercel.app"
            className="card"
          >
            <div
              className="thumb"
              // style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/china.png);"
              style={{
                backgroundImage:"url(https://github.com/MaxiCacciamano/Cracken-dev/blob/main/src/IMG/reto.png?raw=true)",
              }}
            ></div>
            <article>
              <h1>Juego mental - Reto colores</h1>
              {/* <span>Kendra Schaefer</span> */}
              <article>
              <div className="share">
              <a>
                  <JSLogo/>
                </a>
                <a>
                  <HTML/>
                </a>
                <a>
                  <React/>
                </a>
                <a>
                  <Nodejs/>
                </a>
                <a>
                  <Git/>
                </a>
                <a>
                  <Github/>
                </a>
                <a>
                  <CSS3/>
                </a>
                <a>
                  <Redux/>
                </a>
                <a>
                  <J/>
                </a>
              </div>
            </article>
            </article>
          </a>
        </div>
        <div className="item-9">
          <a
            href="https://social-media-nine-flame.vercel.app"
            className="card"
          >
            <div
              className="thumb fast"
              style={{
                backgroundImage:"url(https://github.com/MaxiCacciamano/Social-Media/blob/main/src/assets/2024-03-24_06h16_32.png?raw=true)",
                backgroundSize:"cover"
              }}
            ></div>
            <article>
              <h1>Social media - Challenge</h1>
              <div className="share">
              <a>
                  <JSLogo/>
                </a>
                <a>
                  <HTML/>
                </a>
                <a>
                  <React/>
                </a>
                <a>
                  <Nodejs/>
                </a>
                <a>
                  <Git/>
                </a>
                <a>
                  <Github/>
                </a>
                <a>
                  <CSS3/>
                </a>
                <a>
                  <Redux/>
                </a>
                <a>
                  <J/>
                </a>
                <a>
                  <Typescript/>
                </a>
              </div>
            </article>
          </a>
        </div>
        <div className="item-1">
          <a
            href="https://clima-six-ivory.vercel.app"
            className="card"
          >
            <div
              className="thumb"
              // style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/china.png);"
              style={{
                backgroundImage:"url(https://github.com/MaxiCacciamano/Clima/blob/main/src/assets/2024-03-24_09h32_52.png?raw=true)",
              }}
            ></div>
            <article>
              <h1>WhaterApp</h1>
              {/* <span>Kendra Schaefer</span> */}
              <article>
              <div className="share">
              <a>
                  <JSLogo/>
                </a>
                <a>
                  <HTML/>
                </a>
                <a>
                  <React/>
                </a>
                <a>
                  <Nodejs/>
                </a>
                <a>
                  <Git/>
                </a>
                <a>
                  <Github/>
                </a>
                <a>
                  <CSS3/>
                </a>
                <a>
                  <Redux/>
                </a>
                <a>
                  <J/>
                </a>
              </div>
            </article>
            </article>
          </a>
        </div>
        <div className="item-10">
          <a
            href="https://nft-card-orpin.vercel.app"
            className="card"
          >
            <div
              className="thumb fast"
              style={{
                backgroundImage:"url(https://github.com/MaxiCacciamano/NFTCard/blob/main/src/assets/IMG/2024-03-24_06h23_15%20-%20copia.png?raw=true)",
                backgroundSize:"cover"
                
              }}
            ></div>
            <article>
              <h1>NFT Card - Challenge</h1>
              <div className="share">
              <a>
                  <JSLogo/>
                </a>
                <a>
                  <HTML/>
                </a>
                <a>
                  <React/>
                </a>
                <a>
                  <Nodejs/>
                </a>
                <a>
                  <Git/>
                </a>
                <a>
                  <Github/>
                </a>
                <a>
                  <CSS3/>
                </a>
                <a>
                  <Redux/>
                </a>
                <a>
                  <J/>
                </a>
              </div>
            </article>
          </a>
        </div>
        <div className="item-1">
          <a
            href="https://challenge-landing-page-five.vercel.app"
            className="card"
          >
            <div
              className="thumb fast"
              style={{
                backgroundSize:"cover"
                
              }}
            ></div>
            <article>
              <h1>Landing page challenge - Challenge</h1>
              <div className="share">
              <a>
                  <JSLogo/>
                </a>
                <a>
                  <HTML/>
                </a>
                <a>
                  <React/>
                </a>
                <a>
                  <Nodejs/>
                </a>
                <a>
                  <Git/>
                </a>
                <a>
                  <Github/>
                </a>
                <a>
                  <CSS3/>
                </a>
                <a>
                  <Redux/>
                </a>
              </div>
            </article>
          </a>
        </div>
      </div>
    </div>
  );
};
