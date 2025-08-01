interface Props {
  classname: string;
}

export const NoteIcon = ({ classname }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classname}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-labelledby="title-ac11 desc-ac11"
  >
    <title id="title-ac11">Leading icon</title>
    <desc id="desc-ac11">Icon that describes the summary</desc>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
    />
  </svg>
);
