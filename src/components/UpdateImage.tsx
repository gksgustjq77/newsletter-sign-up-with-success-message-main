interface UpdateImageProps {
  imgUrl: string;
}

const UpdateImage: React.FC = () => {
  return (
    <picture className="flex w-full">
      <source
        media="(max-width: 768px)"
        srcSet="/images/illustration-sign-up-mobile.svg"
      />
      <source
        media="(max-width: 768px)"
        srcSet="/images/illustration-sign-up-tablet.svg"
      />
      <img
        src="/images/illustration-sign-up-desktop.svg"
        alt="sign-up"
        className="h-auto w-full"
      />
    </picture>
  );
};

export default UpdateImage;
