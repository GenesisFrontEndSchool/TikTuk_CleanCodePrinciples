import Comment from "./Comment/Comment"

export const Comments = ({
    comments
}) => comments.map(({id, name, email, time, formattedTime, content}) => {
        return(
                <div>
                    <Comment 
                    key={id}
                    name={name}
                    email={email}
                    time={time}
                    formattedTime={formattedTime}
                    content={content}
                />
        </div>
    )
})