<template>
    <div class="nav-area">
        <nav class="navbar bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.html">
                    <img src="resources/Logo03.PNG" alt="" width="50" height="50"
                        class="d-inline-block align-text-center">
                    <p class="web-name" style="color:rgb(86, 121, 182); display: inline-block;">VShare</p>
                </a>
                <form class="d-flex" role="search">
                    <input id="search-bar" class="form-control" type="search" placeholder="Search"
                        aria-label="Search">
                    <button id="search-btn" class="btn btn-outline-primary" type="submit">Search</button>
                </form>
                <div class="sign-out">
                    <a class="btn btn-outline-primary" href="blankpage.html" role="button">Sign out</a>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "ProfileHeader"
}
</script>

<style>
    
</style>