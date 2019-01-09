import '../assets/styles/footer.styl'

export default {
    data () {
        return {
            author: 'stone'
        }
    },
    render () {
        return (
            <div id="footer">
                <span>这里是脚 by-{this.author}</span>
            </div>
        )
    }
}