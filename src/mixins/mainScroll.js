
export default function (refValue) {
    return {
        mounted() {
            this.$refs[refValue].addEventListener("scroll", this.handlMainscroll);
            this.$Bus.$on("setMainScroll", this.handlSetMainScroll);
        },
        beforeDestroy() {
            this.$Bus.$emit("mainScroll");

            this.$Bus.$off("setMainScroll", this.handlSetMainScroll);
            this.$refs[refValue].removeEventListener("scroll", this.handlMainscroll);

        },
        methods: {
            handlSetMainScroll(scrollTop) {
                this.$refs[refValue].scrollTop = scrollTop;
            },
            handlMainscroll() {
                this.$Bus.$emit("mainScroll", this.$refs[refValue]);
            },
        },
    };
};