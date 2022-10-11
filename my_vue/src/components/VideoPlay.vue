<template>
  <div id="VideoPlay">
    <div class="homepage">
      <div id="video_page">
        <div class="video_title">
          <h1 class="xx" :title="title">{{ title }}</h1>
        </div>
        <div class="video">
          <p align="center">
            <video width="700" height="454" :src="path" controls></video>
          </p>
        </div>
        <div class="comment_contatiner1">
          <div class="like_favourite_bar">
            <span>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.77234 30.8573V11.7471H7.54573C5.50932 11.7471 3.85742 13.3931 3.85742 15.425V27.1794C3.85742 29.2112 5.50932 30.8573 7.54573 30.8573H9.77234ZM11.9902 30.8573V11.7054C14.9897 10.627 16.6942 7.8853 17.1055 3.33591C17.2666 1.55463 18.9633 0.814421 20.5803 1.59505C22.1847 2.36964 23.243 4.32583 23.243 6.93947C23.243 8.50265 23.0478 10.1054 22.6582 11.7471H29.7324C31.7739 11.7471 33.4289 13.402 33.4289 15.4435C33.4289 15.7416 33.3928 16.0386 33.3215 16.328L30.9883 25.7957C30.2558 28.7683 27.5894 30.8573 24.528 30.8573H11.9911H11.9902Z"
                ></path>
              </svg>
              <span style="margin-right: 8px">
                {{ like }}
              </span>
            </span>
            <span>
              <svg
                width="36"
                height="36"
                viewBox="0 0 28 28"
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
                style="fill: "
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.8071 9.26152C18.7438 9.09915 17.7624 8.36846 17.3534 7.39421L15.4723 3.4972C14.8998 2.1982 13.1004 2.1982 12.4461 3.4972L10.6468 7.39421C10.1561 8.36846 9.25639 9.09915 8.19315 9.26152L3.94016 9.91102C2.63155 10.0734 2.05904 11.6972 3.04049 12.6714L6.23023 15.9189C6.96632 16.6496 7.29348 17.705 7.1299 18.7605L6.39381 23.307C6.14844 24.6872 7.62063 25.6614 8.84745 25.0119L12.4461 23.0634C13.4276 22.4951 14.6544 22.4951 15.6359 23.0634L19.2345 25.0119C20.4614 25.6614 21.8518 24.6872 21.6882 23.307L20.8703 18.7605C20.7051 17.705 21.0339 16.6496 21.77 15.9189L24.9597 12.6714C25.9412 11.6972 25.3687 10.0734 24.06 9.91102L19.8071 9.26152Z"
                ></path>
              </svg>
              <span>
                {{ favourite }}
              </span>
            </span>
          </div>
        </div>
        <div>
          <h2 style="margin-top: 6px">Description</h2>
        </div>
        <div class="wrapper">
          <input id="exp1" class="exp" type="checkbox" />
          <div class="text">
            <label class="btn-show" for="exp1"></label>
            {{ description }}
          </div>
        </div>
        <div>
          <hr />
        </div>
        <div>
          <h2 style="margin-top: 3px">Comment</h2>
        </div>
        <div>
          <div>
            <img class="user" src="/resources/vshare.png" />
            <textarea
              class="comment_textarea1"
              placeholder="Start make comments"
            ></textarea>
            <button class="post-button">post</button>
          </div>
        </div>
      </div>
      <div class="foot-homepage">
        <div class="foot-container">
          <a class="navbar-brand" href="index.html">
            <img
              src="/resources/vshare.png"
              alt=""
              width="100"
              height="100"
              class="d-inline-block align-text-center"
              style="margin-top: 50px; margin-left: 50px"
            />
          </a>
          <div class="foot-btn">
            <div class="term-btn">
              <a
                class="btn btn-light"
                href="blankpage.html"
                role="button"
                style="margin-left: 200px; margin-top: 55px"
                >Term</a
              >
            </div>
          </div>
          <div class="foot-btn">
            <div class="privacy-btn">
              <a
                class="btn btn-light"
                href="blankpage.html"
                role="button"
                style="margin-left: 130px; margin-top: 55px"
                >Privacy</a
              >
            </div>
          </div>
          <div class="foot-btn">
            <div class="support-btn">
              <a
                class="btn btn-light"
                href="blankpage.html"
                role="button"
                style="margin-left: 130px; margin-top: 55px"
                >Support</a
              >
            </div>
          </div>
          <div class="foot-btn">
            <div class="contact-btn">
              <a
                class="btn btn-light"
                href="blankpage.html"
                role="button"
                style="margin-left: 130px; margin-top: 55px"
                >Contact</a
              >
            </div>
          </div>
          <div class="foot-btn">
            <div class="about-btn">
              <a
                class="btn btn-light"
                href="blankpage.html"
                role="button"
                style="margin-left: 130px; margin-top: 55px"
                >About</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoPlay",
  data() {
    return {
      title: "I am your father",
      description:
        "I like you, kid dsfdafdfafasfsdasdasdsadasdasdsadas dsadasd asd as da sd as dsa d asd as das d sa dasd",
      like: 1234,
      favourite: 5678,
      path: "",
    };
  },
  mounted() {
    this.path = this.$route.query.path;
  },
};
</script>

<style scoped>
#videoPlay {
  background-attachment: fixed;
  background-size: cover;
  background-position: center top;
  background-image: url("../assets/background2.jpg");
}

#video_page {
  width: 700px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  position: relative;
  vertical-align: middle;
}

.video_title > h1 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.comment_container1 {
  width: 800px;
  height: 50px;
}

.video {
  background-color: black;
}

.Comment {
  width: 700px;
}

.wrapper {
  display: flex;
  margin: 5px auto;
  width: 700px;
  overflow: hidden;
  /*   resize: horizontal; */
  border-radius: 8px;
}

.text {
  font-size: 17px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  /* display: flex; */
  /*   display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical; */
  position: relative;
  line-height: 1.5;
  max-height: 4.5em;
  transition: 0.3s max-height;
}

.text::before {
  content: "";
  height: calc(100% - 25px);
  float: right;
}

.text::after {
  content: "";
  width: 999vw;
  height: 999vw;
  position: absolute;
  box-shadow: inset calc(100px - 999vw) calc(30px - 999vw) 0 0 #fff;
  margin-left: -100px;
}

.btn-show {
  position: relative;
  float: right;
  clear: both;
  margin-left: 18px;
  font-size: 15px;
  padding: 0 5px;
  background: #3f51b5;
  line-height: 24px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  /* margin-top: -30px; */
}

.btn-show::after {
  content: "Show";
}

.exp {
  display: none;
}

.exp:checked + .text {
  max-height: none;
}

.exp:checked + .text::after {
  visibility: hidden;
}

.exp:checked + .text .btn::before {
  visibility: hidden;
}

.exp:checked + .text .btn-show::after {
  content: "Hide";
}

.btn-show::before {
  content: "...";
  position: absolute;
  left: -5px;
  color: #333;
  transform: translateX(-100%);
}

.user {
  width: 55px;
  height: 55px;
  margin-right: 15px;
  position: absolute;
}

.post-button {
  float: left;
  width: 55px;
  height: 55px;
  margin-right: 15px;
  position: absolute;
  background-color: skyblue;
}

.comment_textarea1 {
  width: 550px;
  height: 55px;
  background-color: var(--Ga3);
  font-family: inherit;
  line-height: normal;
  color: var(--text1);
  border-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  resize: none;
  outline: none;
  outline-color: initial;
  outline-style: none;
  outline-width: initial;
  padding-left: 6px;
  padding-right: 6px;
  margin-right: 6px;
  margin-left: 70px;
}
</style>