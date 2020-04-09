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

                <v-col  cols="6" class="ma-0 pa-0">
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
                            <a href="/" style="text-decoration: none;color: #5e507c;">About me</a>
                        </v-tab>
                        <v-tab style="font-size: 0.675rem;color: #5e507c;font-weight: bold">
                            <a href="/portfolio" style="text-decoration: none;color: #5e507c;">Portfolios </a>
                        </v-tab>
                        <v-tab style="font-size: 0.675rem;color: #5e507c;font-weight: bold">
                            <a href="/skills" style="text-decoration: none;color: white;">Skills </a>
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
                <hr style="width: 300px;height: 0.5px;border: 0.5px solid #5e507c" class="mt-2">

                <v-avatar style="border: 5px solid #1a2947;display: inline" color="#5e507c" size="22" class="ma-0 ml-5">
                </v-avatar>
                <v-divider class="mt-2 ml-4" style="border: 0.5px solid #5e507c"></v-divider>


            </v-row>

            <v-row
                    class="mt-10 pl-6 pr-6"
                    no-gutters
                    style="margin-left: 2%;margin-right: 2%"

            >
                <v-btn min-width="1" max-width="45" height="45" style="border-radius: 10px">
                    <v-icon style="color: #2f3458">fas fa-code</v-icon>
                </v-btn>

                <v-card
                        class="mx-auto pa-5 ml-3"
                        max-width="441"
                        min-width="441"

                        style="border-radius: 15px"

                >
                    <v-card-text>
                        <v-btn style="text-transform: none" depressed color="#e6e2e9" small><span style="color: #5e507c">Progamming</span></v-btn>
                        <br>
                        <br>
                        <h3 class="mb-2" style="color: #2f3458">C/C++ </h3>
                        <v-progress-linear
                                value="90"
                                height="10"
                                reactive
                                rounded
                                color="#5e507c"
                                class="mb-4"

                        >

                            <strong style="color: #dedede">{{ Math.ceil(90) }}%</strong>
                        </v-progress-linear>


                        <h3 class="mb-2" style="color: #2f3458">java </h3>
                        <v-progress-linear
                                value="80"
                                height="10"
                                reactive
                                rounded
                                color="#5e507c"
                                class="mb-4"

                        >

                            <strong style="color: #dedede">{{ Math.ceil(80) }}%</strong>
                        </v-progress-linear>


                        <h3 class="mb-2" style="color: #2f3458">php </h3>
                        <v-progress-linear
                                value="85"
                                height="10"
                                reactive
                                rounded
                                color="#5e507c"
                                class="mb-4"

                        >

                            <strong style="color: #dedede">{{ Math.ceil(85) }}%</strong>
                        </v-progress-linear>


                        <h3 class="mb-2" style="color: #2f3458">Python </h3>
                        <v-progress-linear
                                value="75"
                                height="10"
                                reactive
                                rounded
                                color="#5e507c"


                        >

                            <strong style="color: #dedede">{{ Math.ceil(75) }}%</strong>
                        </v-progress-linear>
                        <br>

                    </v-card-text>

                </v-card>


                <v-btn min-width="1" max-width="45" height="45" style="border-radius: 10px">
                    <v-icon style="color: #2f3458">fas fa-laptop</v-icon>
                </v-btn>

                <v-card
                        class="mx-auto pa-5 ml-3"
                        max-width="441"
                        min-width="441"
                        style="border-radius: 15px"
                >
                    <v-card-text>
                        <v-btn style="text-transform: none" depressed color="#e6e2e9" small><span style="color: #5e507c">Software skills</span>
                        </v-btn>
                        <br>
                        <br>
                        <h3 class="mb-2" style="color: #2f3458">Photoshop </h3>
                        <v-progress-linear
                                value="90"
                                height="10"
                                reactive
                                rounded
                                color="#5e507c"
                                class="mb-4"

                        >

                            <strong style="color: #dedede">{{ Math.ceil(90) }}%</strong>
                        </v-progress-linear>


                        <h3 class="mb-2" style="color: #2f3458">illustrator </h3>
                        <v-progress-linear
                                value="80"
                                height="10"
                                reactive
                                rounded
                                color="#5e507c"
                                class="mb-4"

                        >

                            <strong style="color: #dedede">{{ Math.ceil(80) }}%</strong>
                        </v-progress-linear>


                        <h3 class="mb-2" style="color: #2f3458">Adobe xd </h3>
                        <v-progress-linear
                                value="85"
                                height="10"
                                reactive
                                rounded
                                color="#5e507c"
                                class="mb-4"

                        >

                            <strong style="color: #dedede">{{ Math.ceil(85) }}%</strong>
                        </v-progress-linear>


                        <h3 class="mb-2" style="color: #2f3458">Figma </h3>
                        <v-progress-linear
                                value="75"
                                height="10"
                                reactive
                                rounded
                                color="#5e507c"


                        >

                            <strong style="color: #dedede">{{ Math.ceil(75) }}%</strong>
                        </v-progress-linear>
                        <br>

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
