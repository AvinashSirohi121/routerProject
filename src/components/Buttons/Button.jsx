/* eslint-disable react/prop-types */

const Button = ({
  text,
  textColor,
  bgColor,
  borderColor,
 }) => {
  console.log(text, textColor, bgColor, borderColor);
  return (
    <div
      className={`xl:w-[7rem] xl:h-[3rem] sm:w-[6rem] sm:h-[3rem] rounded-md border-2 flex justify-center items-center 
      ${textColor} ${bgColor} ${borderColor} cursor-pointer`}>
      {text}
    </div>
  );
};

export default Button;
