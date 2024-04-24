import { FC } from "react"
import discord from '../../../../../../assets/discord_white.svg'
import facebook from '../../../../../../assets/facebook_white.svg'
import instagram from '../../../../../../assets/instagram_white.svg'
import twitter from '../../../../../../assets/twitter_white.svg'
import './social.styles.css'

type SocialProps = {}

const Social: FC<SocialProps> = () => {
    return( 
        <div className="social-media d-flex align-center justify-between">
            <button className="social-btn flex-center flex-center">
                <a href="https://discord.com/" className="flex-center">
                    <img src={discord} alt="discord" />
                </a>
            </button>
            <button className="social-btn flex-center">
                <a href="https://www.instagram.com//" className="flex-center">
                    <img src={instagram} alt="discord" />
                </a>
            </button>
            <button className="social-btn flex-center">
                <a href="https://twitter.com/" className="flex-center">
                    <img src={twitter} alt="discord" />
                </a>
            </button>
            <button className="social-btn">
                <a href="https://www.facebook.com/" className="flex-center">
                    <img src={facebook} alt="discord" />
                </a>
            </button>
        </div>
    )
}

export default Social;