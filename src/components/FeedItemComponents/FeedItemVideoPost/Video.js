export default function FeedItemVideo({
    videoUrl
}) {
    return (
        <div>
            <video controls width="250" style={{display: "block", margin: "0px auto"}}>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}