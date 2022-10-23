<template>
  <div class="upload-body">
    <div class="account-area">
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="profilepage.html">
            <img
              src="resources/ZCC.JPG"
              alt=""
              width="100"
              height="100"
              class="d-inline-block align-text-center"
              style="border-radius: 50%"
            />
            <p
              class="web-name"
              style="color: black; display: inline-block; margin-left: 20px"
            >
              {{ username }}
            </p>
          </a>
        </div>
      </nav>
    </div>

    <div class="upload-area">
      <div class="video-file-container">
        <el-upload
          class="upload-container"
          action="#"
          :auto-upload="false"
          :on-change="handleChange"
          :file-list="fileList"
          :limit="1"
          v-bind:on-progress="uploadVideoProcess"
          v-bind:on-success="handleVideoSuccess"
          v-bind:before-upload="beforeUploadVideo"
        >
          <el-button size="small" type="primary" ref="file"
            >Select file</el-button
          >
          <div slot="tip" class="el-upload__tip">
            Only video file in .mp4 format is accepted
          </div>
        </el-upload>
      </div>
      <div class="video-info-container">
        <div class="video-info">
          <div class="title-container">
            Title
            <div class="video-title">
              <el-input
                placeholder="Please enter your video title"
                size="small"
                v-model="input"
                clearable
              ></el-input>
            </div>
            <br />
          </div>
          <div class="cate-selector">
            Category
            <el-select
              v-model="select"
              slot="prepend"
              size="small"
              placeholder="Please select category"
            >
              <el-option label="Sports" value="Sports"></el-option>
              <el-option label="Music" value="Music"></el-option>
              <el-option label="Games" value="Games"></el-option>
              <el-option label="Fashion" value="Fashion"></el-option>
              <el-option label="Technology" value="Technology"></el-option>
              <el-option label="News" value="News"></el-option>
              <el-option label="Pet" value="Pet"></el-option>
              <el-option label="Travel" value="Travel"></el-option>
              <el-option label="Others" value="Others"></el-option>
            </el-select>
          </div>
          <div class="description-selector">
            Description
            <div class="text-area">
              <el-input
                type="textarea"
                :autosize="{ minRows: 4 }"
                size="small"
                placeholder="Please enter your video description"
                v-model="description"
              >
              </el-input>
            </div>
          </div>
          <br />
        </div>
      </div>
      <div class="submit-container">
        <button
          type="submit"
          class="btn btn-primary"
          @click="uploadVideo()"
          id="upload-button"
        >
          Upload
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadVideo",
  inject: ["reload"],
  data() {
    return {
      username: window.localStorage.getItem("Username"),
      fileList: [],
      files: [],
      file_name: "",
      uploadVideoData: {
        _id: "",
        title: "",
        myfile: "",
      },
      input: "",
      select: "",
      description: "",
      videoFlag: false,
      videoUploadPercent: "",
      isShowUploadVideo: false,
      //显示上传按钮
      videoForm: {
        showVideoPath: "",
      },
      headerObj: {
        "x-auth-token": window.localStorage.getItem("Token"),
        "Content-Type": "multipart/form-data",
      },
      file: null,
    };
  },

  methods: {
    handleChange(file, fileList) {
      this.files = file.raw;
      this.file = file.raw;
      this.filename = file.name;
      this.fileList = fileList.slice(-3);
    },

    beforeUploadVideo(file) {
      var fileSize = file.size / 1024 / 1024 < 50;
      if (
        [
          "video/mp4",
          "video/ogg",
          "video/flv",
          "video/avi",
          "video/wmv",
          "video/rmvb",
          "video/mov",
        ].indexOf(file.type) == -1
      ) {
        alert("请上传正确的视频格式");
        return false;
      }
      if (!fileSize) {
        alert("视频大小不能超过50MB");
        return false;
      }
      this.isShowUploadVideo = false;
    },
    //进度条
    uploadVideoProcess(event, file) {
      this.videoFlag = true;
      this.videoUploadPercent = file.percentage.toFixed(0) * 1;
    },
    //上传成功回调
    handleVideoSuccess(res) {
      this.isShowUploadVideo = true;
      this.videoFlag = false;
      this.videoUploadPercent = 0;

      //前台上传地址
      //if (file.status == 'success' ) {
      //    this.videoForm.showVideoPath = file.url;
      //} else {
      //     layer.msg("上传失败，请重新上传");
      //}

      //后台上传地址
      if (res.Code == 0) {
        this.videoForm.showVideoPath = res.Data;
      } else {
        // layer.msg(res.Message);
        alert("sb");
      }
    },
    getProfileInfoServer: function () {
      var that = this;
      this.axios
        .get("http://localhost:3000/api/findall", {
          params: {
            email: "",
          },
        })
        .then(function (response) {
          // handle success
          var result = response.data;
          console.log(result);
          if (result.status == 200) {
            that.uploadVideoData._id = result._id;
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },

    uploadVideo: function () {
      var that = this;
      var formData = new FormData();
      if (
        this.select != "" &&
        this.input != "" &&
        this.input == this.input.toLowerCase() &&
        this.file != null &&
        this.description != ""
      ) {
        formData.append("username", window.localStorage.getItem("Username"));
        formData.append("category", this.select);
        formData.append("name", this.input);
        formData.append("video", this.file);
        formData.append("description", this.description);
        this.axios({
          url: "http://localhost:3000/api/video",
          method: "post",
          data: formData,
          headers: this.headerObj,
        })
          .then(function (request) {
            if (request.status == 201) {
              that.reload();
              setTimeout(() => {
                alert("Upload successful!");
              }, 1500);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        alert(
          "Please fill out the correct form data or check if you have selected a file."
        );
      }
    },
  },
};
</script>

<style scoped>
.account-area {
  padding-top: 30px;
  margin-left: 70px;
  margin-right: 70px;
}

#upload-button {
  margin-bottom: 30px;
}

.upload-area {
  margin-top: 40px;
  margin-left: 450px;
}

.video-file-container {
  margin-left: 80px;
  width: 400px;
}

.video-info-container {
  margin-top: 50px;
  margin-left: 80px;
}

.submit-container {
  margin-top: 30px;
  margin-left: 190px;
}

.video-cover-image {
  margin-top: 30px;
  margin-left: 150px;
}

.video-file {
  margin-top: 180px;
  margin-left: 150px;
}

.upload-body {
  background-image: url(../assets/7171662534038_.pic_hd.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  background-attachment: fixed;
}

.video-title {
  display: inline-block;
  margin-left: 37px;
}
.text-area {
  width: 300px;
}

.cate-selector {
  margin-top: 20px;
}

.description-selector {
  margin-top: 20px;
}

.el-upload__tip {
  margin-left: 10px;
}
</style>