<template>
    <v-row dense justify="center" no-gutters>
        <v-avatar size="135" class="avatarBorder ">
            <v-avatar size="110" class="avatar">

                <img
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John"
                >

            </v-avatar>
        </v-avatar>
        <div class="name">
            <h1 style="font-size: 160%">Timothy Brewer</h1>
            <h3 style="font-size: 92%">User interface designer</h3>
        </div>
        <div class="description">
            <h4 style="font-size: 110%">I can Work for</h4>
            <h3 style="font-size: 140%">35 Hours/week</h3>
        </div>
        <div class="description1">
            <h4 style="font-size: 110%">I Work for</h4>
            <h3 style="font-size: 140%">17 USD/Hour</h3>
        </div>
        <v-btn style="text-transform: none" class="hire  white--text" depressed large color="#5e507c">Hire me now</v-btn>
        <v-btn style="text-transform: none" class="hire1  white--text" large depressed color="#383a60">
            <v-icon left>call</v-icon>
            Audio call
        </v-btn>

        <v-btn large min-width="1" max-width="15" outlined class="video" depressed color="#5e507c">
            <v-icon color="#ffffff">
                videocam
            </v-icon>
        </v-btn>

    </v-row>

    <v-divider class="divide mt-2 mb-0" light></v-divider>
    <v-toolbar style="padding-bottom: 0px" color="#001935" flat dense class="pl-8 pr-8 mt-3 pt-2 mb-0">
        <v-tabs

                background-color="#001935"
                dark
                hide-slider
                flat
                center-active
                class="tabs mb-0"
                height="34"

        >
            <v-tab style="font-size: 0.675rem;color: #5e507c;font-weight: bold">
                About me
            </v-tab>
            <v-tab style="font-size: 0.675rem;font-weight: bold">
                Portfolios
            </v-tab>
            <v-tab style="font-size: 0.675rem;color: #5e507c;font-weight: bold">
                Skills
            </v-tab>
            <v-tab style="font-size: 0.675rem;color: #5e507c;font-weight: bold">
                Education
            </v-tab>
            <v-tab style="font-size: 0.675rem;color: #5e507c;font-weight: bold">
                Activities
            </v-tab>
        </v-tabs>

        <v-spacer></v-spacer>


        <span style="color: #9b87ac" class="mr-2 mt-0 pt-0 mb-5">Follow</span>
        <span style="color: #9b87ac" class="mr-4 mb-5"> me </span>


        <v-icon class="mr-4 mb-5"
                style="border: 1px solid #2f3458;border-radius: 20px;color:#ffffff;background-color: #2f3458">
            fab fa-facebook
        </v-icon>
        <v-icon class="mr-4 mb-5"
                style="border: 3px solid #2f3458;border-radius: 20px;color:#ffffff;background-color: #2f3458">
            fab fa-twitter
        </v-icon>
        <v-icon class="mr-4 mb-5"
                style="border: 4px solid #2f3458;border-radius: 30px;color:#ffffff;background-color: #2f3458">
            fab fa-linkedin-in
        </v-icon>
        <v-icon class="mr-4 mb-5"
                style="border: 3px solid #2f3458;border-radius: 20px;color:#ffffff;background-color: #2f3458">
            fab fa-instagram
        </v-icon>

    </v-toolbar>
</template>
<style scoped>

    .avatar {
        border: 2px solid #9472a0;

    }

    .avatarBorder {
        border: 2px solid #1f1c44;



    }

    .name {
        margin-top: 3%;
        margin-left: 1%;
    }

    .name h1 {
        color: #dedede;
        font-size: 120%;

    }

    .name h3 {
        color: #b1a9b9;
        font-weight: normal;
        font-size: 80%;



    }

    .description {
        font-size: 70%;
        margin-top: 4%;
        margin-left: 7%;
    }

    .description h4 {
        color: #b1a9b9;


        font-weight: normal;
    }

    .description h3 {

        color: #dedede;
        font-weight: unset;



    }

    .description1 {
        font-size: 70%;
        margin-top: 4%;
        margin-left: 3%;
    }

    .description1 h4 {
        color: #b1a9b9;
        font-weight: normal;
    }

    .description1 h3 {
        color: #dedede;
        font-weight: unset;

    }


    .hire {
        margin-top: 4%;
        margin-left: 8%;

    }

    .hire1 {
        margin-top: 4%;
        margin-left: 2%;


    }

    .v-btn:not(.v-btn--round).v-size--x-large {
        height: 52px;
        min-width: 92px;
        padding: 0 23.1111111111px;

        border-radius: 10px;
    }

    .video {
        margin-top: 4%;
        margin-left: 1%;
        border: 1px solid #5e507c;
        padding: 1px;

    }

    .divide {
        background-color: #5e507c;
    }

</style>