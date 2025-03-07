import '../style/Card.css'

function Card({User}){
    return(
        <>
            <div className="card">
                <div className="card-top">
                    <div className="card-img">
                        <img src={User.user.ImgSrc} alt="" />
                    </div>
                </div>
                <div className="card-bottom">
                    <p className="user-name">
                        {User.user.userName}
                    </p>
                    <div className="card-description">
                        <p className="title">{User.user.Title}</p>
                        {User.user.Description}
                    </div>
                    <div className="social-links">
                        <ul>
                            {Object.values(User.user.SocialLinks).map((link, index) => 
                                (
                                    <li key={index}>
                                            <a href={link.SocialLinks} target="_blank">
                                                <span dangerouslySetInnerHTML={{ __html: link.SocialIcon}}></span>
                                            </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
                <div className="contact-link">
                        <a href={User.user.Contact}>Contact</a>
                </div>
            </div>
        </>
    )
}


export default Card