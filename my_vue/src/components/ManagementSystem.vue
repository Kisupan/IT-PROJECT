<template>
  <div id="AccountSystem">
    <div class="homepage">
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <div class="navbar-brand">
            <img
              src="/resources/vshare.png"
              width="50"
              height="50"
              class="d-inline-block align-text-center"
            />
            <span
              class="web-name"
              style="color: rgb(86, 121, 182); display: inline-block"
            >
              VShare
            </span>
          </div>
          <div class="d-flex" role="search">
            <input
              id="search-bar"
              class="form-control"
              type="text"
              v-model="search_username"
              placeholder="Search Email/Username"
              aria-label="Search"
            />
            <button
              @click="search_user"
              id="search-btn"
              class="btn btn-outline-primary"
              type="button"
            >
              Search
            </button>
          </div>
          <div class="sign-in-up">
            <a
              class="btn btn-outline-primary"
              href="http://localhost:8080/"
              role="button"
              @click="Signout"
              >Sign out</a
            >
          </div>
          <div class="homepage-avatar-container">
            <img
              class="account-avatar"
              src="/resources/vshare.png"
              style="width: 50px; height: 50px"
            />
          </div>
        </div>
      </nav>

      <div v-show="load_search_accounts">
        <div class="Back">
          <br />
          <button
            id="search-btn"
            class="btn btn-outline-primary"
            type="button"
            @click="back"
          >
            Back
          </button>
        </div>
        <br />
        <table v-if="not_empty_table">
          <thead>
            <tr>
              <th>Email Address</th>
              <th>User Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in matching_user" :key="item._id">
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
                  data-bs-target="#DeleteModal"
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
                  data-bs-target="#EditModal"
                >
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else>
          <h1>User is not found!</h1>
        </div>

        <div
          class="modal fade"
          id="EditModal"
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
                    :placeholder="editObj.username"
                    v-model="editObj.username"
                  />
                  <br />
                  <label for="Password">Password</label>
                  <input
                    aria-label="Search"
                    class="form-control"
                    type="password"
                    placeholder="Leave blank if not want to change"
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

        <div
          class="modal fade"
          id="DeleteModal"
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
      </div>
    </div>
    <ManageAccount v-show="load_all_accounts"></ManageAccount>
  </div>
</template>

<script>
import ManageAccount from "./ManageAccount";

export default {
  inject: ["reload", "admin_system_close"],
  name: "ManagementSystem",
  components: {
    ManageAccount,
  },
  data() {
    return {
      old_username: "",
      not_empty_table: true,
      video_list: [],
      del_videopath_list: [],
      continues: false,
      matching_user: null,
      search_username: "",
      load_all_accounts: true,
      load_search_accounts: false,
      del_account: "",
      editObj: { username: "", email: "", password: "", age: "", gender: "" },
    };
  },
  methods: {
    back() {
      this.load_all_accounts = true;
      this.load_search_accounts = false;
    },
    search_user() {
      this.not_empty_table = true;
      this.load_all_accounts = false;
      this.load_search_accounts = true;
      var that = this;
      this.axios
        .get("http://localhost:3000/api/user-search/", {
          params: { username: this.search_username, isadmin: true },
        })
        .then(function (response) {
          if (response.data.length == 0) {
            that.not_empty_table = false;
          }
          that.matching_user = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
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
    Signout() {
      localStorage.clear();
      setTimeout(() => {
        this.admin_system_close();
        alert("Sign out!");
      }, 900);
    },
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
h1 {
  text-align: center;
}
.Back {
  padding-left: 20px;
}
</style>