export default function ApplicationLogo(props) {
    return (
        <img 
            {...props} 
            src="/images/rlogo.png"
            alt="Icon"
            className={`w-auto h-20 object-contain ${props.className}`} 
        />
    );
}