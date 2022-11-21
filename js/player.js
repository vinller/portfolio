new Vue({
    el: "#app",
    data() {
        return {
            audio: null,
            circleLeft: null,
            barWidth: null,
            duration: null,
            currentTime: null,
            isTimerPlaying: false,
            tracks: [{
                    artist: "All Night",
                    name: "COTIS",
                    cover: "https://cdn.vinnyy.me/songs/artwork/ab67616d0000b2738ceee6f76614b2f4de0a7438.png",
                    source: "https://cdn.vinnyy.me/songs/audio/allnight-cotis.mp3",
                    url: "https://open.spotify.com/track/2Ur81w4umgEMiFDWggKBOG",
                    favorited: false
                },
                {
                    artist: "Die For Me (feat. Future & Halsey)",
                    name: "Post Malone, Halsey, Future",
                    cover: "https://cdn.vinnyy.me/songs/artwork/ab67616d0000b2739478c87599550dd73bfa7e02.png",
                    source: "https://cdn.vinnyy.me/songs/audio/dieforme-postmalone.mp3",
                    url: "https://open.spotify.com/track/2C6WXnmZ66tHhHlnvwePiK",
                    favorited: false
                },
                {
                    artist: "Glimpse Of Us",
                    name: "Joji",
                    cover: "https://cdn.vinnyy.me/songs/artwork/ab67616d00001e0208596cc28b9f5b00bfe08ae7.png",
                    source: "https://cdn.vinnyy.me/songs/audio/glimpseofus-joji.mp3",
                    url: "https://open.spotify.com/track/6xGruZOHLs39ZbVccQTuPZ",
                    favorited: false
                },
                {
                    artist: "Lost in the Fire (feat. The Weeknd)",
                    name: "Gesaffelstein, The Weeknd",
                    cover: "https://cdn.vinnyy.me/songs/artwork/ab67616d00001e02011a2f51fe757fafe13a0c2e.png",
                    source: "https://cdn.vinnyy.me/songs/audio/lostinfire.mp3",
                    url: "https://open.spotify.com/track/2vXKRlJBXyOcvZYTdNeckS",
                    favorited: false
                },
                {
                    artist: "Enough",
                    name: "charlieonnafriday",
                    cover: "https://cdn.vinnyy.me/songs/artwork/ab67616d00001e02d3879d79b66e17a91c59aba8.png",
                    source: "https://cdn.vinnyy.me/songs/audio/enough-charlie.mp3",
                    url: "https://open.spotify.com/track/4vuVzf7BIZhDAFm3TB0Tzy",
                    favorited: false
                },
                {
                    artist: "Hit Different",
                    name: "SZA, The Neptunes, Pharrell Williams, Ty Dolla $ign",
                    cover: "https://cdn.vinnyy.me/songs/artwork/ab67616d00001e02a135dd969dce9f38ed32ef98.png",
                    source: "https://cdn.vinnyy.me/songs/audio/hitdifferent-sza.mp3",
                    url: "https://open.spotify.com/track/7Bar1kLTmsRmH6FCKKMEyU",
                    favorited: false
                },
                {
                    artist: "do u even miss me at all?",
                    name: "gianni & kyle",
                    cover: "https://cdn.vinnyy.me/songs/artwork/ab67616d00001e02f79ce85d7072f57f9cbb6013.png",
                    source: "https://cdn.vinnyy.me/songs/audio/doyouevenmissmeatall.mp3",
                    url: "https://open.spotify.com/track/1AHf5FSofKcUw8tyKkccKF",
                    favorited: false
                },
                {
                    artist: "Drinking Problem (feat. 27CLUB)",
                    name: "Arizona Zervas, 27CLUB",
                    cover: "https://cdn.vinnyy.me/songs/artwork/ab67616d00001e02c1b10601d816a5de948db26f.png",
                    source: "https://cdn.vinnyy.me/songs/audio/drinkingproblems.mp3",
                    url: "https://open.spotify.com/track/7piU1yHaKMD9PaOPvEymOr",
                    favorited: false
                },
                {
                    artist: "Better Than the Other Guy",
                    name: "Henrie",
                    cover: "https://cdn.vinnyy.me/songs/artwork/ab67616d00001e02bcb38e774ff4f9474313dc26.png",
                    source: "https://cdn.vinnyy.me/songs/audio/betterthattheotherguy.mp3",
                    url: "https://open.spotify.com/track/2FlQePhuKXvPTpIm967Gda",
                    favorited: false
                },
                {
                    artist: "Focus (feat. 21 Savage)",
                    name: "Bazzi, 21 Savage",
                    cover: "https://cdn.vinnyy.me/songs/artwork/ab67616d00001e023a376bd9b9b1f4b2686807db.png",
                    source: "https://cdn.vinnyy.me/songs/audio/focus-bazzi.mp3",
                    url: "https://open.spotify.com/track/2FqqVHvC4eKrsk97vpMRid",
                    favorited: false
                },
                {
                    artist: "Tearless Souls Of Byakuya",
                    name: "HOYO-MiX",
                    cover: "https://cdn.vinnyy.me/songs/artwork/ab67616d00001e02a4b070883f931f6ef09d8ea6.png",
                    source: "https://cdn.vinnyy.me/songs/audio/enkanomiya.mp3",
                    url: "https://open.spotify.com/track/6UUitFDDZ2QRrdkQ5dSP06",
                    favorited: false
                }
            ],
            currentTrack: null,
            currentTrackIndex: 0,
            transitionName: null
        };
    },
    methods: {
        play() {
            if (this.audio.paused) {
                this.audio.play();
                this.isTimerPlaying = true;
            } else {
                this.audio.pause();
                this.isTimerPlaying = false;
            }
        },
        generateTime() {
            let width = (100 / this.audio.duration) * this.audio.currentTime;
            this.barWidth = width + "%";
            this.circleLeft = width + "%";
            let durmin = Math.floor(this.audio.duration / 60);
            let dursec = Math.floor(this.audio.duration - durmin * 60);
            let curmin = Math.floor(this.audio.currentTime / 60);
            let cursec = Math.floor(this.audio.currentTime - curmin * 60);
            if (durmin < 10) {
                durmin = "0" + durmin;
            }
            if (dursec < 10) {
                dursec = "0" + dursec;
            }
            if (curmin < 10) {
                curmin = "0" + curmin;
            }
            if (cursec < 10) {
                cursec = "0" + cursec;
            }
            this.duration = durmin + ":" + dursec;
            this.currentTime = curmin + ":" + cursec;
        },
        updateBar(x) {
            let progress = this.$refs.progress;
            let maxduration = this.audio.duration;
            let position = x - progress.offsetLeft;
            let percentage = (100 * position) / progress.offsetWidth;
            if (percentage > 100) {
                percentage = 100;
            }
            if (percentage < 0) {
                percentage = 0;
            }
            this.barWidth = percentage + "%";
            this.circleLeft = percentage + "%";
            this.audio.currentTime = (maxduration * percentage) / 100;
            this.audio.play();
        },
        clickProgress(e) {
            this.isTimerPlaying = true;
            this.audio.pause();
            this.updateBar(e.pageX);
        },
        prevTrack() {
            this.transitionName = "scale-in";
            this.isShowCover = false;
            if (this.currentTrackIndex > 0) {
                this.currentTrackIndex--;
            } else {
                this.currentTrackIndex = this.tracks.length - 1;
            }
            this.currentTrack = this.tracks[this.currentTrackIndex];
            this.resetPlayer();
        },
        nextTrack() {
            this.transitionName = "scale-out";
            this.isShowCover = false;
            if (this.currentTrackIndex < this.tracks.length - 1) {
                this.currentTrackIndex++;
            } else {
                this.currentTrackIndex = 0;
            }
            this.currentTrack = this.tracks[this.currentTrackIndex];
            this.resetPlayer();
        },
        resetPlayer() {
            this.barWidth = 0;
            this.circleLeft = 0;
            this.audio.currentTime = 0;
            this.audio.src = this.currentTrack.source;
            setTimeout(() => {
                if (this.isTimerPlaying) {
                    this.audio.play();
                } else {
                    this.audio.pause();
                }
            }, 300);
        },
        favorite() {
            this.tracks[this.currentTrackIndex].favorited = !this.tracks[
                this.currentTrackIndex
            ].favorited;
        }
    },
    created() {
        let vm = this;
        this.currentTrack = this.tracks[0];
        this.audio = new Audio();
        this.audio.src = this.currentTrack.source;
        this.audio.ontimeupdate = function() {
            vm.generateTime();
        };
        this.audio.onloadedmetadata = function() {
            vm.generateTime();
        };
        this.audio.onended = function() {
            vm.nextTrack();
            this.isTimerPlaying = true;
        };

        // this is optional (for preload covers)
        for (let index = 0; index < this.tracks.length; index++) {
            const element = this.tracks[index];
            let link = document.createElement('link');
            link.rel = "prefetch";
            link.href = element.cover;
            link.as = "image"
            document.head.appendChild(link)
        }
    }
});