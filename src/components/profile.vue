<template>
    <v-content style="background-color: #001935">
        <v-container fluid>

            <v-row style="margin-left:85px;margin-right: 85px"  dense align="center" no-gutters>
                <v-avatar size="135" class="avatarBorder ">
                    <v-avatar size="110" class="avatar">

                        <img
                                src="https://cdn.vuetifyjs.com/images/john.jpg"
                                alt="John"
                        >

                    </v-avatar>
                </v-avatar>
                <div class="name" style="margin-left: 20px">
                    <h1 style="font-size: 160%">Timothy Brewer</h1>
                    <h3 style="font-size: 92%">User interface designer</h3>
                </div>
                <div class="description" style="margin-left:75px">
                    <h4 style="font-size: 110%">I can Work for</h4>
                    <h3 style="font-size: 140%">35 Hours/week</h3>
                </div>
                <div class="description1" style="margin-left:40px">
                    <h4 style="font-size: 110%">I Work for</h4>
                    <h3 style="font-size: 140%">17 USD/Hour</h3>
                </div>
                <v-btn style="text-transform: none" class="hire  white--text" depressed large color="#5e507c">Hire me
                    now
                </v-btn>
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
            <v-row class="ml-10 pr-12 pl-12" no-gutters color="#001935" flat dense align="center">

                <v-col cols="6" class="ma-0 pa-0">
                    <v-tabs

                            background-color="#001935"
                            dark
                            hide-slider
                            flat
                            centered
                            class="tabs mb-0 pb-0"
                            height="34"
                            width="55"

                    >
                        <v-tab class="ma-0 pa-0" style="font-size: 0.675rem;font-weight: bold">
                            <a href="/" style="text-decoration: none;color: white;">About me</a>
                        </v-tab>
                        <v-tab style="font-size: 0.675rem;color: #5e507c;font-weight: bold">
                            <a href="/portfolio" style="text-decoration: none;color: #5e507c;">Portfolios </a>
                        </v-tab>
                        <v-tab style="font-size: 0.675rem;color: #5e507c;font-weight: bold">
                            <a href="/skills" style="text-decoration: none;color: #5e507c;">Skills </a>
                        </v-tab>
                        <v-tab style="font-size: 0.675rem;color: #5e507c;font-weight: bold">
                            <a href="/education" style="text-decoration: none;color: #5e507c;">Education </a>
                        </v-tab>
                        <v-tab style="font-size: 0.675rem;font-weight: bold">
                            <a href="/activities" style="text-decoration: none;color: #5e507c;">Activities </a>
                        </v-tab>
                    </v-tabs>
                </v-col>
                <v-col cols="2">

                </v-col>

                <v-col cols="4" align-self="end" class="pb-0 pt-0 pa-0">
                    <span class="mr-6" style="color: #9b87ac">Follow me</span>
                    <v-icon class="mr-4 "
                            style="border: 1px solid #2f3458;border-radius: 20px;color:#ffffff;background-color: #2f3458">
                        fab fa-facebook
                    </v-icon>
                    <v-icon class="mr-4"
                            style="border: 3px solid #2f3458;border-radius: 20px;color:#ffffff;background-color: #2f3458">
                        fab fa-twitter
                    </v-icon>
                    <v-icon class="mr-4"
                            style="border: 4px solid #2f3458;border-radius: 30px;color:#ffffff;background-color: #2f3458">
                        fab fa-linkedin-in
                    </v-icon>
                    <v-icon class="mr-4"
                            style="border: 3px solid #2f3458;border-radius: 20px;color:#ffffff;background-color: #2f3458">
                        fab fa-instagram
                    </v-icon>
                </v-col>
            </v-row>
            <v-row dense>
                <hr style="width: 107px;height: 0.5px;border: 0.5px solid #5e507c" class="mt-2">

                <v-avatar style="border: 5px solid #1a2947;display: inline" color="#5e507c" size="22" class="ma-0 ml-5">
                </v-avatar>

                <v-divider class="mt-2 ml-4" style="border: 0.5px solid #5e507c"></v-divider>


            </v-row>

            <v-row
                    class="mt-10 ml-12 mr-12 pl-6 pl-6"
                    no-gutters
                    dense
                    align-content="center"


            >
                <v-btn min-width="1" max-width="45" height="45" style="border-radius: 10px">
                    <v-icon style="color: #2f3458">fas fa-user-tie</v-icon>
                </v-btn>

                <v-card
                        class="mx-auto pa-5 ml-3"
                        max-width="441"

                        style="border-radius: 15px"

                >
                    <v-card-text>
                        <h3 class=" text--primary text-justify">
                            Hi!
                        </h3>
                        <div style="color: #7c8084;font-size: 90%" class=" text-justify">
                            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click
                            “Edit Text” or double click me to add your own content and make changes to the font.
                            Feel free to drag and drop me anywhere you like on your page. I’m a great place for you
                            to tell a story and let your users know a little more about you.
                        </div>
                        <br>
                        <div style="color: #7c8084;font-size: 90%" class=" text-justify">

                            This is a great space to write a long text about your company and your services. You can
                            use this space to go into a little more detail about your company. Talk about your team
                            and what services you provide. Tell your visitors the story of how you came up with the
                            idea for your business and what makes you different from your competitors. Make your
                            company stand out and show your visitors who you are.
                        </div>
                    </v-card-text>

                </v-card>


                <v-btn min-width="1" max-width="45" height="45" style="border-radius: 10px">
                    <v-icon style="color: #2f3458">fas fa-address-card</v-icon>
                </v-btn>

                <v-card
                        class="mx-auto pa-5 ml-3"
                        max-width="434"
                        width="434"
                        style="border-radius: 15px"
                >
                    <v-card-text>
                        <div>
                            <h4 class="text--primary text-justify mb-1">
                                Phone Number
                            </h4>
                            <v-divider class="mb-1" style="width: 35%; border: 0.6px solid #282828"></v-divider>
                            <div style="color: #7c8084;font-size: 90%;font-weight: bold" class=" text-justify">
                                +004 123 8896 222
                            </div>
                            <div style="color: #7c8084;font-size: 90%;font-weight: bold" class=" text-justify">
                                +004 123 8896 222
                            </div>
                        </div>
                        <br>
                        <br>
                        <div>
                            <h4 class="text--primary text-justify mb-1">
                                Email
                            </h4>
                            <v-divider class="mb-1" style="width: 35%; border: 0.6px solid #282828"></v-divider>
                            <div style="color: #7c8084;font-size: 90%;font-weight: bold" class=" text-justify">
                                timothi.brewer@gmail.com
                            </div>
                            <div style="color: #7c8084;font-size: 90%;font-weight: bold" class=" text-justify">
                                timothi.brower123@gmail.com
                            </div>
                        </div>
                        <br>
                        <br>
                        <div>
                            <h4 class="text--primary text-justify mb-1">
                                Social Ntwork
                            </h4>
                            <v-divider class="mb-1" style="width: 35%; border: 0.6px solid #282828"></v-divider>
                            <div style="color: #7c8084;font-size: 90%;font-weight: bold" class=" text-justify">
                                wwww.facebook.com/timothibrwer
                            </div>
                            <div style="color: #7c8084;font-size: 90%;font-weight: bold" class=" text-justify">
                                www.twitter.com/timothibrewer
                            </div>
                        </div>

                    </v-card-text>

                </v-card>


            </v-row>



        </v-container>
    </v-content>
</template>


<style scoped>

    .avatar {
        border: 2px solid #9472a0;

    }

    .avatarBorder {
        border: 2px solid #1f1c44;


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
        margin-top: 1%;

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
        margin-top: 1%;

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
        margin-top: 1%;
        margin-left: 75px;


    }

    .hire1 {
        margin-top: 1%;
        margin-left: 30px;


    }

    .v-btn:not(.v-btn--round).v-size--x-large {
        height: 52px;
        min-width: 92px;
        padding: 0 23.1111111111px;

        border-radius: 10px;
    }

    .video {
        margin-top: 1%;
        margin-left: 1%;
        border: 1px solid #5e507c;
        padding: 1px;

    }

    .divide {
        background-color: #5e507c;
    }


</style>
