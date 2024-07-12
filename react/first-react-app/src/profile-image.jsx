function ProfileImage(){

    const imageSrc = './src/assets/images/profile.jpg';
    const imageAlt = 'Profile image';

    return (
        <img className="profileImage" src={imageSrc} alt={imageAlt} />
    )

}

export default ProfileImage;