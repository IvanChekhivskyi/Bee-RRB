import {Facebook, PhoneVibrate, Skype, Telegram, Twitter} from "react-bootstrap-icons";

export const ButtonsTwitter = ({phoneNumber}) => {
    const CallTwitter = () => console.log("call: " + phoneNumber + "twitter")
    return(
        <>
            <button
                type={"button"}
                style={{width: 35, height: 35, justifyContent: "center", borderRadius: 50}}
                onClick={CallTwitter}
            >
                <Twitter size={25} color={"royalblue"} style={{position: "relative", left: -8}}/>
            </button>
        </>
    );
}

export const ButtonFacebook = ({phoneNumber}) => {
    const CallFacebook = () => console.log("call: " + phoneNumber + "facebook")
    return(
        <>
            <button
                type={"button"}
                style={{width: 35, height: 35, justifyContent: "center", borderRadius: 50}}
                onClick={CallFacebook}
            >
                <Facebook size={25} color={"royalblue"} style={{position: "relative", left: -9, top: -1}}/>
            </button>
        </>
    );
}

export const ButtonTelegram = ({phoneNumber}) => {
    const CallTelegram = () => console.log("call: " + phoneNumber + "telegram")
    return(
        <>
            <button
                type={"button"}
                style={{width: 35, height: 35, justifyContent: "center", borderRadius: 50}}
                onClick={CallTelegram}
            >
                <Telegram size={25} color={"royalblue"} style={{position: "relative", left: -9, top: -1}}/>
            </button>
        </>
    );
}

export const ButtonSkype = ({phoneNumber}) => {
    const CallSkype = () => console.log("call: " + phoneNumber + "skype")
    return(
        <>
            <button
                type={"button"}
                style={{width: 35, height: 35, justifyContent: "center", borderRadius: 50}}
                onClick={CallSkype}
            >
                <Skype size={25} color={"royalblue"} style={{position: "relative", left: -9, top: -1}}/>
            </button>
        </>
    );
}