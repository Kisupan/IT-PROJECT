<template>
    <div class="header">
        <nav class="navbar bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <img src="resources/Logo03.PNG" alt="" width="50" height="50"
                        class="d-inline-block align-text-center">
                    <p class="web-name" style="color:rgb(86, 121, 182); display: inline-block;">VShare</p>
                </a>
                <form class="d-flex" role="search">
                    <input id="search-bar" class="form-control" type="search" placeholder="Search" aria-label="Search">
                    <button id="search-btn" class="btn btn-outline-primary" type="submit">Search</button>
                </form>
                <div class="sign-in-up">
                    <a class="btn btn-outline-primary" href="LogIn.html" role="button">Sign in</a>
                    <a class="btn btn-outline-primary" href="Register.html" role="button">Sign up</a>
                </div>
                <div class="homepage-avatar-container">
                    <a href="profilepage.html" target="_blank"><img class="account-avatar" src="resources/avatar.JPG"
                            style="width:50px; height:50px"></a>
                </div>
            </div>
        </nav>
    </div>
</template>



<script>
    export default {
        name: 'VShareHeader',
    }
</script>

<style>
    #search-bar {
        width: 400px;
    }
    .account-avatar {
    border-radius: 50%;
}
</style>