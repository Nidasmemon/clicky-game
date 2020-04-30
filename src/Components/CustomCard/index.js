import React from "react"
import "./index.css"


export default function CustomCard() {
    return(
        <div className="fresh-ui-wrap">
        <div className="fresh-ui">
            <div className="header">
                <div className="photo">
                    <img src="https://raw.githubusercontent.com/khadkamhn/fresh-ui-hover-effect/master/img/profile.png" />
                </div>
                <div className="social">
                    <div className="list">
                        <a href="#" data-title="Facebook"><i className="fa fa-facebook"></i></a>
                        <a href="#" data-title="Twitter"><i className="fa fa-twitter"></i></a>
                        <a href="#" data-title="Dribbble"><i className="fa fa-dribbble"></i></a>
                        <a href="#" data-title="Pinterest"><i className="fa fa-pinterest"></i></a>
                        <a href="#" data-title="Codepen"><i className="fa fa-codepen"></i></a>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="name">Jane Doe</div>
                <div className="job-title">UI/UX Designer </div>
                <p className="text">Cras rutrum non eros eu maximus. Nunc sit amet ex ultrices, placerat augue id.</p>
                <div className="list clearfix">
                    <a href="#"><i className="fa fa-phone-square"></i> +123456789</a>
                    <a href="#"><i className="fa fa-envelope-square"></i> jane@youremail.com</a>
                    <a href="#"><i className="fa fa-globe"></i> www.yoursite.com</a>
                </div>
            </div>
        </div>
        </div>
    )

}