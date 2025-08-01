interface Props {
  classname: string;
}

export const PCIcon = ({ classname }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classname}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-labelledby="title-ac09 desc-ac09"
  >
    <title id="title-ac09">Leading icon</title>
    <desc id="desc-ac09">Icon that describes the summary</desc>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
    />
  </svg>
);
