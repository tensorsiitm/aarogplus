import img1 from '/src/assets/images/trending.png'


function Trending() {
    return ( <div className="trending">
        <div className="content">
            <h1>{"What's Trending"}</h1>
            <div className='num'>#1</div>
            <div className='head'>Fresh vs. dried vs. frozen fruits: Which one is better and why?</div>
            <p className='text'>Under the MoU, the CSP 2023-27 addresses four strategic outcomes including more effective and efficient national food-based social protection systems; increasing consumption of diverse, nutritious, and fortified foods; enhancing the social and financial mobility of women; and ...</p>
            

        </div>
        <img src={img1} />

    </div> );
}

export default Trending;