<template>
  <div id="table">
    <div class="add">
      <br />
      <button
        id="search-btn"
        class="btn btn-outline-primary"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#AddingModal"
      >
        Add Account
      </button>
    </div>
    <br />
    <table>
      <thead>
        <tr>
          <th>Email Address</th>
          <th>User Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item._id">
          <td>{{ item.email }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.gender }}</td>
          <td>
            <button
              @click="del_click(item)"
              id="search-btn"
              class="btn btn-outline-primary"
              style="color: red"
              data-bs-toggle="modal"
              type="button"
              data-bs-target="#DeletingModal"
            >
              Delete
            </button>
            &nbsp;
            <button
              @click="edit(item)"
              id="search-btn"
              class="btn btn-outline-primary"
              style="color: orange"
              data-bs-toggle="modal"
              type="button"
              data-bs-target="#EditingModal"
            >
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div
      class="modal fade"
      id="AddingModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Account</h5>
          </div>
          <div class="modal-body">
            <div class="content">
              <label for="Email">Email</label>
              <input
                aria-label="Search"
                class="form-control"
                type="text"
                placeholder="example@example"
                v-model="obj.email"
              />
              <br />
              <label for="User name">User name</label>
              <input
                aria-label="Search"
                class="form-control"
                type="text"
                placeholder="User name"
                v-model="obj.username"
              />
              <br />
              <label for="Password">Password</label>
              <input
                aria-label="Search"
                class="form-control"
                type="password"
                placeholder="Password length need to be 6-20 range"
                v-model="obj.password"
              />
              <br />
              <label for="Gender">Gender</label>
              <select
                aria-label="Search"
                class="form-control"
                name="gender"
                v-model="obj.gender"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              <br />
              <label for="Age">Age</label>
              <input
                aria-label="Search"
                class="form-control"
                type="text"
                placeholder="age between 0 ~ 150"
                v-model="obj.age"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              @click="add"
              data-bs-dismiss="modal"
            >
              Add Account
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="DeletingModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
          </div>
          <div class="modal-body">
            <div class="content">
              <p>Do you want to delete this account?</p>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              @click="delete_account"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="EditingModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
          </div>
          <div class="modal-body">
            <div class="content">
              <label for="Email">Email</label>
              <input
                aria-label="Search"
                class="form-control"
                type="text"
                :placeholder="editObj.email"
                readonly="readonly"
              />
              <br />
              <label for="User name">User name</label>
              <input
                aria-label="Search"
                class="form-control"
                type="text"
                placeholder="User name"
                v-model="editObj.username"
              />
              <br />
              <label for="Password">Password</label>
              <input
                aria-label="Search"
                class="form-control"
                type="password"
                placeholder="Leave blank if not want to change (Length 6-20 range)"
                v-model="editObj.password"
              />
              <br />
              <label for="Gender">Gender</label>
              <select
                aria-label="Search"
                class="form-control"
                name="gender"
                v-model="editObj.gender"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              <br />
              <label for="Age">Age</label>
              <input
                aria-label="Search"
                class="form-control"
                type="text"
                placeholder="age between 0 ~ 150"
                v-model="editObj.age"
              />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              @click="edit_Items"
              data-bs-dismiss="modal"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ManageAccount",
  inject: ["reload"],
  data() {
    return {
      old_username: "",
      video_list: [],
      del_videopath_list: [],
      continues: false,
      del_account: "",
      del_username: "",
      items: null,
      editObj: { username: "", email: "", password: "", age: "", gender: "" },
      obj: {
        username: "",
        email: "",
        password: "",
        age: "",
        gender: "",
      },
    };
  },
  methods: {
    add() {
      var that = this;
      if (
        !this.obj.email ||
        !this.obj.username ||
        !this.obj.password ||
        !this.obj.age ||
        !this.obj.gender
      ) {
        this.reload();
        setTimeout(() => {
          alert("Please fill in data to create an account!");
        }, 600);
        return;
      }
      var params = {
        email: this.obj.email,
        username: this.obj.username,
        password: this.obj.password,
        age: this.obj.age,
        gender: this.obj.gender,
      };
      this.axios
        .post("http://localhost:3000/api/signup", params)
        .then(function (request) {
          if (request.status == 201) {
            that.reload();
            setTimeout(() => {
              alert(request.data.msg);
            }, 900);
          }
        })
        .catch(function (error) {
          if (error.request.status == 503) {
            that.reload();
            setTimeout(() => {
              alert(error.response.data.msg);
            }, 900);
          }
          if (error.request.status == 502) {
            that.reload();
            setTimeout(() => {
              alert(error.response.data.msg);
            }, 900);
          }
          if (error.request.status == 501) {
            that.reload();
            setTimeout(() => {
              alert(error.response.data.msg);
            }, 900);
          }
          if (error.request.status == 500) {
            that.reload();
            setTimeout(() => {
              alert(error.response.data.msg);
            }, 900);
          }
        });
      this.obj = {};
    },

    del_click(item) {
      var that = this;
      this.del_account = item.email;
      this.del_username = item.username;
      this.axios
        .get("http://localhost:3000/api/user-video-search/", {
          params: {
            key: this.del_username,
          },
        })
        .then(function (response) {
          var result = response.data;
          if (result.status != 700) {
            that.video_list = result;
            for (var i = 0; i < that.video_list.length; i++) {
              var path = that.video_list[i].videopath;
              that.del_videopath_list.push(path);
            }
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },

    delete_account() {
      var that = this;
      if (this.del_account != "admin@gmail.com") {
        var params = {
          email: this.del_account,
        };
        this.axios
          .post("http://localhost:3000/api/delete", params)
          .then(function (request) {
            if (request.status == 200) {
              that.axios
                .delete("http://localhost:3000/api/user-video-delete/", {
                  params: {
                    username: that.del_username,
                    video_list: that.del_videopath_list,
                  },
                })
                .then()
                .catch(function (error) {
                  if (error.request.status == 500) {
                    that.reload();
                    setTimeout(() => {
                      alert(error.response.data.msg);
                    }, 900);
                  }
                });
              that.reload();
              setTimeout(() => {
                alert(request.data.msg);
              }, 1000);
            }
          })
          .catch(function (error) {
            if (error.request.status == 500) {
              that.reload();
              setTimeout(() => {
                alert(error.response.data.msg);
              }, 900);
            }
          });
        this.del_account = "";
      } else {
        setTimeout(() => {
          alert("Administrator Account cannot be deleted");
        }, 1000);
      }
    },

    edit(item) {
      this.editObj.email = item.email;
      this.editObj.username = item.username;
      this.editObj.age = item.age;
      this.editObj.gender = item.gender;
      this.editObj.password = "";
      this.old_username = this.editObj.username;
    },

    edit_Items() {
      var that = this;
      var params = {
        email: this.editObj.email,
        username: this.editObj.username,
        age: this.editObj.age,
        gender: this.editObj.gender,
        old_username: this.old_username,
      };
      if (this.editObj.username != "admin") {
        if (!this.editObj.password) {
          this.axios
            .post("http://localhost:3000/api/update", params)
            .then(function (request) {
              if (request.status == 200) {
                that.reload();
                setTimeout(() => {
                  alert(request.data.msg);
                }, 1000);
              }
            })
            .catch(function (error) {
              if (error.request.status == 500) {
                that.reload();
                setTimeout(() => {
                  alert(error.response.data.msg);
                }, 900);
              }
            });
        }
        if (this.editObj.password) {
          var param = {
            email: this.editObj.email,
            password: this.editObj.password,
          };
          this.axios
            .post("http://localhost:3000/api/password-reset", param)
            .then(function (request) {
              if (request.status == 200) {
                that.continues = true;
                if (that.continues == true) {
                  that.axios
                    .post("http://localhost:3000/api/update", params)
                    .then(function (request) {
                      if (request.status == 200) {
                        that.reload();
                        setTimeout(() => {
                          alert(request.data.msg);
                        }, 1000);
                      }
                    })
                    .catch(function (error) {
                      if (error.request.status == 500) {
                        that.reload();
                        setTimeout(() => {
                          alert(error.response.data.msg);
                        }, 900);
                      }
                    });
                  that.continues = false;
                }
              }
            })
            .catch(function (error) {
              if (error.request.status == 500) {
                that.continues = false;
                that.reload();
                setTimeout(() => {
                  alert(error.response.data.msg);
                }, 900);
              }
            });
        }
      } else {
        that.reload();
        setTimeout(() => {
          alert("Administrator Account cannot be Edited");
        }, 1000);
      }
    },
  },
  mounted() {
    var that = this;
    this.axios
      .get("http://localhost:3000/api/findall")
      .then(function (response) {
        that.items = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
<style scoped>
td {
  text-align: center;
  padding: 25px;
}
th {
  text-align: center;
}
.add {
  padding-left: 20px;
}
</style>