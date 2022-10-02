<template>
    <div class="foot-page">
        <div class="foot-container">
            <a class="navbar-brand" href="index.html">
                <img src="resources/Logo03.PNG" alt="" width="100" height="100"
                    class="d-inline-block align-text-center" style="margin-top:50px; margin-left: 50px;">
            </a>
            <div class="foot-btn">
                <div class="term-btn">
                    <a class="btn btn-light" href="blankpage.html" role="button" target="_blank"
                        style="margin-left:200px; margin-top: 55px">Term</a>
                </div>
            </div>
            <div class="foot-btn">
                <div class="privacy-btn">
                    <a class="btn btn-light" href="blankpage.html" role="button" target="_blank"
                        style="margin-left:130px; margin-top: 55px">Privacy</a>
                </div>
            </div>
            <div class="foot-btn">
                <div class="support-btn">
                    <a class="btn btn-light" href="blankpage.html" role="button" target="_blank"
                        style="margin-left:130px; margin-top: 55px">Support</a>
                </div>
            </div>
            <div class="foot-btn">
                <div class="contact-btn">
                    <a class="btn btn-light" href="blankpage.html" role="button" target="_blank"
                        style="margin-left:130px; margin-top: 55px">Contact</a>
                </div>
            </div>
            <div class="foot-btn">
                <div class="about-btn">
                    <a class="btn btn-light" href="blankpage.html" role="button" target="_blank"
                        style="margin-left:130px; margin-top: 55px">About us</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"VShareFooter"
}
</script>

<style>
    .foot-page {
    background-color: rgb(247, 248, 249);
    height: 200px;
    }

    .foot-logo {
        padding-top: 60px;
    }

    .foot-btn {
        display: inline-block;
    }

    .btn-light {
        color: black;
        background-color: rgb(247, 248, 249);
    }

    .btn-light:hover {
        background-color: white;
        color: black;
        border-color: black;
        transition: background-color .3s, color .3s;
    }
</style>